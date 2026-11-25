// Easy Hinglish layer: (1) a "Samjhao (Hinglish)" button on every written answer (Q&A bank and Mock Exam Box), (2) an Easy page #/easy/<subject>,
// (3) voice reading with the browser's own speech engine (no server, no key). Data: window.HINGLISH[subject] from data/hinglish-<subject>.js.
(function () {
  const A = window.App, H = window.HINGLISH;
  if (!A || !H) return;
  const { S, store, esc, setTheme } = A;
  const synth = window.speechSynthesis || null;
  let active = null;   // the button that is currently reading
  let token = 0;

  // ---------------------------------------------------------------- voice
  const voices = () => (synth ? synth.getVoices().filter((v) => /^(en-IN|hi-IN|en[-_]IN|hi[-_]IN)/i.test(v.lang)).concat(synth.getVoices().filter((v) => /^en/i.test(v.lang) && !/IN/i.test(v.lang))) : []);
  function chosenVoice() {
    const all = voices(), name = store.get('hvoice', '');
    return all.find((v) => v.name === name) || all.find((v) => /en.IN/i.test(v.lang)) || all.find((v) => /hi.IN/i.test(v.lang)) || all[0] || null;
  }
  function stop() {
    token++;
    if (synth) synth.cancel();
    if (active) { active.textContent = active.dataset.label; active.classList.remove('on'); active = null; }
  }
  function speak(text, btn) {
    if (!synth) return;
    if (active === btn) { stop(); return; }
    stop();
    active = btn; btn.textContent = '⏹ Roko'; btn.classList.add('on');
    const mine = ++token;
    // short pieces: some browsers cut off long utterances
    const parts = text.replace(/→/g, ', phir ').replace(/%/g, ' percent ').split(/(?<=[.!?:;])\s+/).filter((x) => x.trim());
    let i = 0;
    const next = () => {
      if (mine !== token) return;
      if (i >= parts.length) { stop(); return; }
      const u = new SpeechSynthesisUtterance(parts[i++]);
      const v = chosenVoice();
      if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-IN';
      u.rate = +store.get('hrate', 0.95);
      u.onend = next;
      u.onerror = () => { if (mine === token) stop(); };
      synth.speak(u);
    };
    next();
  }
  const sayText = (c) => `${c.title}. Seedha matlab: ${c.matlab} Main points. ${c.points.join(' ')} Desi example: ${c.example} Yaad rakhne ki trick: ${c.trick}`;

  // ---------------------------------------------------------------- one concept card
  function cardHtml(c, i, sid) {
    return `<article class="hg-card" data-s="${sid}" data-i="${i}"><div class="hg-head"><h4>${esc(c.title)}</h4><button type="button" class="hg-say" data-label="🔊 Sunao">🔊 Sunao</button></div>
      <p class="hg-matlab"><b>Seedha matlab:</b> ${esc(c.matlab)}</p><ul>${c.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
      <p class="hg-eg"><b>🇮🇳 Desi example:</b> ${esc(c.example)}</p><p class="hg-trick"><b>🧠 Yaad rakho:</b> ${esc(c.trick)}</p><p class="hg-exam"><b>✍️ Exam mein English mein likho:</b> ${esc(c.exam)}</p></article>`;
  }
  const voiceBar = () => {
    if (!synth) return '<p class="hg-note">Is browser mein voice support nahi hai.</p>';
    const v = chosenVoice();
    return `<span class="hg-voice"><label>Awaaz <select class="hg-vsel">${voices().map((x) => `<option value="${esc(x.name)}"${v && x.name === v.name ? ' selected' : ''}>${esc(x.name.replace(/Microsoft |Google /, ''))} (${esc(x.lang)})</option>`).join('') || '<option value="">Default</option>'}</select></label>
      <label>Speed <select class="hg-rate">${[0.8, 0.95, 1.1, 1.25].map((r) => `<option value="${r}"${+store.get('hrate', 0.95) === r ? ' selected' : ''}>${r}x</option>`).join('')}</select></label></span>`;
  };

  // ---------------------------------------------------------------- button on answers
  function matches(sid, text) {
    const list = H[sid] || [], out = [];
    for (let i = 0; i < list.length && out.length < 2; i++) if (list[i].match.test(text)) out.push(i);
    return out;
  }
  function subjectNow() { const h = decodeURIComponent(location.hash); const m = /^#\/(?:mocks\/)?([a-z-]+)/.exec(h); return m ? m[1] : ''; }
  function decorate() {
    const sid = subjectNow();
    if (!H[sid]) return;
    document.querySelectorAll('details.qa > .ans, .mbq > .mbans').forEach((ans) => {
      if (ans.dataset.hg) return;
      ans.dataset.hg = '1';
      const wrap = ans.closest('details.qa, .mbq');
      const qEl = wrap.querySelector('.qt, .mbqt');
      const q = qEl ? qEl.textContent : '';
      let found = matches(sid, q);
      if (!found.length) { const t = wrap.querySelector('.qtopic, .mbsrc'); if (t) found = matches(sid, t.textContent); }
      if (!found.length) return;
      const box = document.createElement('div');
      box.className = 'hg';
      box.innerHTML = `<button type="button" class="hg-open" aria-expanded="false">🗣️ Samjhao (easy Hinglish)</button><div class="hg-body" hidden></div>`;
      box.dataset.s = sid;
      box.dataset.f = found.join(',');
      ans.prepend(box);
    });
  }

  document.addEventListener('click', (e) => {
    const open = e.target.closest('.hg-open');
    if (open) {
      const box = open.closest('.hg'), body = box.querySelector('.hg-body'), sid = box.dataset.s;
      if (!body.innerHTML) body.innerHTML = voiceBar() + box.dataset.f.split(',').map((i) => cardHtml(H[sid][+i], +i, sid)).join('');
      body.hidden = !body.hidden;
      open.setAttribute('aria-expanded', String(!body.hidden));
      open.textContent = body.hidden ? '🗣️ Samjhao (easy Hinglish)' : '▴ Hinglish band karo';
      if (body.hidden) stop();
      return;
    }
    const say = e.target.closest('.hg-say');
    if (say) { const c = say.closest('.hg-card'); speak(sayText(H[c.dataset.s][+c.dataset.i]), say); return; }
    const all = e.target.closest('.hg-all');
    if (all) { const sid = all.dataset.s, u = all.dataset.u; speak(H[sid].filter((c) => !u || c.unit === u).map(sayText).join(' Agla topic. '), all); }
  });
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('hg-vsel')) { store.set('hvoice', e.target.value); stop(); }
    if (e.target.classList.contains('hg-rate')) { store.set('hrate', +e.target.value); stop(); }
  });

  // ---------------------------------------------------------------- Easy page
  function page(sid) {
    const app = document.getElementById('app');
    const id = H[sid] ? sid : Object.keys(H)[0];
    setTheme(id);
    let unit = '';
    const draw = (term) => {
      const list = H[id];
      const t = (term || '').toLowerCase();
      document.getElementById('hg-list').innerHTML = list.map((c, i) => [c, i]).filter(([c]) => (!unit || c.unit === unit) && (!t || (c.title + ' ' + c.matlab + ' ' + c.points.join(' ')).toLowerCase().includes(t))).map(([c, i]) => `<div class="hg-wrap"><span class="hg-unit">${c.unit}</span>${cardHtml(c, i, id)}</div>`).join('') || '<p>Kuch nahi mila. Doosra shabd likho.</p>';
    };
    const units = [...new Set(H[id].map((c) => c.unit))];
    app.innerHTML = `<section class="hg-hero"><h1>🗣️ Easy Hinglish - ${S[id].title}</h1><p>${H[id].length} concepts, seedhi bhasha mein, desi example ke saath. Pehle samjho, phir exam mein English mein likho.</p>
      <div class="hg-tools">${voiceBar()}<button type="button" class="hg-all" data-s="${id}" data-u="" data-label="▶ Sab sunao">▶ Sab sunao</button></div>
      <div class="hg-tools"><input type="search" id="hg-q" placeholder="Topic dhundho (jaise STP, price, MIS)" aria-label="Search concepts">${['', ...units].map((u) => `<button type="button" class="hg-u${u ? '' : ' on'}" data-u="${u}">${u || 'All units'}</button>`).join('')}</div></section><div id="hg-list"></div>`;
    draw('');
    document.getElementById('hg-q').oninput = (e) => draw(e.target.value.trim());
    app.querySelectorAll('.hg-u').forEach((b) => { b.onclick = () => { stop(); unit = b.dataset.u; app.querySelectorAll('.hg-u').forEach((x) => x.classList.toggle('on', x === b)); const all = app.querySelector('.hg-all'); all.dataset.u = unit; all.dataset.label = unit ? '▶ ' + unit + ' sunao' : '▶ Sab sunao'; all.textContent = all.dataset.label; draw(document.getElementById('hg-q').value.trim()); }; });
  }

  // links to the Easy page: subject page and the Mock Exam Box tab of that subject
  function links() {
    const m = /^#\/([a-z-]+)(?:\/qa)?$/.exec(location.hash);
    const app = document.getElementById('app');
    if (m && H[m[1]] && !app.querySelector('.hg-link')) {
      const a = document.createElement('a');
      a.className = 'hg-link';
      a.href = '#/easy/' + m[1];
      a.innerHTML = '🗣️ <b>Easy Hinglish</b> - concept seedhi bhasha mein, awaaz ke saath →';
      app.prepend(a);
    }
  }

  window.Hinglish = { page, stop };
  let pending = null;
  new MutationObserver(() => { if (pending) return; pending = setTimeout(() => { pending = null; decorate(); links(); }, 60); }).observe(document.getElementById('app'), { childList: true, subtree: true });
  addEventListener('hashchange', stop);
  addEventListener('pagehide', stop);
  if (synth) synth.onvoiceschanged = () => document.querySelectorAll('.hg-voice').forEach((el) => { const t = document.createElement('div'); t.innerHTML = voiceBar(); el.replaceWith(t.firstChild); });
})();
