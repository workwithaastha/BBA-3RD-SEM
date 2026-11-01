// Source files viewer: lists the PDFs / slides / documents of each subject folder; view inline, open in a new tab or download.
(function () {
  const { S, esc, $, setTheme } = window.App;
  const KIND = {
    pdf: ['📕', 'PDF'], ppt: ['📊', 'Slides'], pptx: ['📊', 'Slides'], doc: ['📘', 'Document'], docx: ['📘', 'Document'],
    xls: ['📗', 'Sheet'], xlsx: ['📗', 'Sheet'], txt: ['📄', 'Text'], png: ['🖼️', 'Image'], jpg: ['🖼️', 'Image'], jpeg: ['🖼️', 'Image'],
  };
  const ext = (f) => f.split('.').pop().toLowerCase();
  const nice = (f) => f.replace(/\.[^.]+$/, '').replace(/[_]+/g, ' ').replace(/\s+/g, ' ').trim();
  const url = (dir, f) => '../' + encodeURIComponent(dir) + '/' + encodeURIComponent(f);
  const size = (kb) => (kb >= 1024 ? (kb / 1024).toFixed(1) + ' MB' : kb + ' KB');

  function viewer(dir, list, i) {
    const old = document.getElementById('srcview');
    if (old) old.remove();
    const f = list[i];
    const e = ext(f.f);
    const u = url(dir, f.f);
    const abs = new URL(u, location.href).href;
    const office = ['ppt', 'pptx', 'doc', 'docx', 'xls', 'xlsx'].includes(e);
    const src = office ? 'https://view.officeapps.live.com/op/embed.aspx?src=' + encodeURIComponent(abs) : u;
    const el = document.createElement('div');
    el.id = 'srcview';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.innerHTML = `<div class="svbar"><b class="svt">${esc(nice(f.f))}</b>
      <span class="svbtns">
        <button id="svprev" ${i === 0 ? 'disabled' : ''}>‹ Prev</button><button id="svnext" ${i === list.length - 1 ? 'disabled' : ''}>Next ›</button>
        <a href="${u}" target="_blank" rel="noopener">↗ Open in new tab</a><a href="${u}" download>⬇ Download</a>
        <button id="svx" aria-label="Close">✕</button></span></div>
      ${e === 'png' || e === 'jpg' || e === 'jpeg' ? `<div class="svimg"><img src="${u}" alt="${esc(nice(f.f))}"></div>` : `<iframe src="${src}" title="${esc(nice(f.f))}" loading="lazy"></iframe>`}
      <p class="svhint">If the file does not show (some phones cannot preview PDFs inside a page), use <b>Open in new tab</b> or <b>Download</b>.</p>`;
    document.body.appendChild(el);
    document.body.classList.add('noscroll');
    const close = () => { el.remove(); document.body.classList.remove('noscroll'); document.removeEventListener('keydown', key); };
    const key = (ev) => { if (ev.key === 'Escape') close(); else if (ev.key === 'ArrowRight' && i < list.length - 1) { close(); viewer(dir, list, i + 1); } else if (ev.key === 'ArrowLeft' && i > 0) { close(); viewer(dir, list, i - 1); } };
    document.addEventListener('keydown', key);
    el.querySelector('#svx').onclick = close;
    el.querySelector('#svprev').onclick = () => { close(); viewer(dir, list, i - 1); };
    el.querySelector('#svnext').onclick = () => { close(); viewer(dir, list, i + 1); };
    el.querySelector('#svx').focus();
  }

  function page(id) {
    const sub = S[id];
    const src = window.SOURCES && window.SOURCES[id];
    if (!sub || !src) return;
    setTheme(id);
    const files = src.files;
    const kinds = [...new Set(files.map((f) => (KIND[ext(f.f)] || ['📄', ext(f.f).toUpperCase()])[1]))];
    $(`<div class="crumb"><a href="#/">Home</a> / <a href="#/${id}">${esc(sub.title)}</a> / Source files</div>
       <section class="banner"><span class="bico">📂</span><div><h1>${esc(sub.title)} · Source files</h1>
       <p>${files.length} original files from the <b>${esc(src.dir)}</b> folder - view them here, open in a new tab or download.</p></div></section>
       <div class="ftools"><input id="srcsearch" type="search" placeholder="Search files…" aria-label="Search files">
         <div class="fchips" id="srckinds"><button class="on" data-k="">All (${files.length})</button>${kinds.map((k) => `<button data-k="${k}">${k}</button>`).join('')}
           <button data-k="__dup">Duplicates</button></div></div>
       <div class="srcgrid" id="srcgrid">${files.map((f, i) => {
    const k = KIND[ext(f.f)] || ['📄', ext(f.f).toUpperCase()];
    return `<article class="src" data-i="${i}" data-k="${k[1]}" data-d="${f.dup ? 1 : 0}" data-s="${esc((f.f).toLowerCase())}">
        <span class="sico">${k[0]}</span>
        <div class="sbody"><h3>${esc(nice(f.f))}</h3>
          <div class="smeta">${k[1]} · ${size(f.kb)}${f.p ? ' · ' + f.p + ' pages' : ''}</div>
          ${f.dup ? `<div class="sdup">Same content as “${esc(nice(f.dup))}”</div>` : ''}
          <div class="sact"><button class="btn solid sview" data-i="${i}">👁 View</button>
            <a class="btn" href="${url(src.dir, f.f)}" target="_blank" rel="noopener">↗ New tab</a>
            <a class="btn" href="${url(src.dir, f.f)}" download>⬇</a></div></div></article>`;
  }).join('')}</div><p class="expl" id="srcnone" hidden>No file matches.</p>`);
    let kind = '', term = '';
    const apply = () => {
      let n = 0;
      document.querySelectorAll('#srcgrid .src').forEach((el) => {
        const okK = !kind || (kind === '__dup' ? el.dataset.d === '1' : el.dataset.k === kind);
        const show = okK && (!term || el.dataset.s.includes(term));
        el.hidden = !show;
        if (show) n++;
      });
      document.getElementById('srcnone').hidden = n > 0;
    };
    document.getElementById('srckinds').onclick = (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      kind = b.dataset.k;
      document.querySelectorAll('#srckinds button').forEach((x) => x.classList.toggle('on', x === b));
      apply();
    };
    document.getElementById('srcsearch').oninput = (e) => { term = e.target.value.trim().toLowerCase(); apply(); };
    document.getElementById('srcgrid').onclick = (e) => {
      const b = e.target.closest('.sview');
      if (b) viewer(src.dir, files, +b.dataset.i);
    };
  }
  window.Sources = { page, viewer };
})();
