// Click any formula (anywhere) -> pop-up with meaning, symbols, worked example, when / where to use, common mistake, live calculator.
(function () {
  const lib = window.FormulaLib;
  if (!lib) return;

  const clean = (t) => t.toLowerCase().replace(/\([a-z]\)\s*/g, ' ').replace(/[×·]/g, '*').replace(/÷/g, '/').replace(/[−–]/g, '-').replace(/'/g, '');
  const idents = (t) => new Set(clean(t).match(/[a-zα-ωβχ]+/g) || []);
  const ALIAS = {
    ol: 'dol', fl: 'dfl', cl: 'dcl', 'interest coverage': 'icr', 'interest coverage ratio': 'icr',
    'total return': 'ke', return: 'ke', '% rise in ebit': 'dol', '% change in ebit': 'dol',
    'equal inflows': 'payback', 'unequal inflows': 'payback', 'ke': 'ke',
  };
  const label = (t) => {
    const m = clean(t).replace(/^[^a-z%]+/, '').split(/[=:]/)[0].replace(/[^a-z0-9% ]/g, '').trim();
    return ALIAS[m] || m;
  };

  const index = lib.cards.map((c) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = c.f;
    const txt = tmp.textContent;
    return { c, ids: idents(txt), lab: label(txt) };
  });
  // refresh when other scripts add cards later
  const reindex = () => { while (index.length < lib.cards.length) { const c = lib.cards[index.length]; const t = document.createElement('div'); t.innerHTML = c.f; index.push({ c, ids: idents(t.textContent), lab: label(t.textContent) }); } };

  function findOne(text) {
    const t = text.replace(/\s+/g, ' ').trim();
    if (t.length < 4) return null;
    const ids = idents(t);
    const lab = label(t);
    let best = null, bestScore = 0;
    index.forEach((x) => {
      let inter = 0;
      ids.forEach((w) => { if (x.ids.has(w)) inter++; });
      const uni = ids.size + x.ids.size - inter;
      let score = uni ? inter / uni : 0;
      if (lab && lab === x.lab) score += 1;
      else if (lab && x.lab && lab.length > 2 && (x.lab.startsWith(lab) || lab.startsWith(x.lab))) score += 0.6;
      if (score > bestScore) { bestScore = score; best = x; }
    });
    return bestScore >= 0.6 ? best.c : null;
  }
  // one .formula element may hold several lines separated by <br> - return every distinct card found
  function findAll(el) {
    reindex();
    const lines = el.innerHTML.split(/<br\s*\/?>|<\/div>|;/i).map((h) => { const d = document.createElement('div'); d.innerHTML = h; return d.textContent; });
    const out = [];
    [el.textContent].concat(lines).forEach((l) => { const c = findOne(l); if (c && !out.includes(c)) out.push(c); });
    return out;
  }
  lib.find = (text) => { reindex(); return findOne(text); };
  lib.findAll = findAll;

  function close() {
    const p = document.getElementById('fpop');
    if (p) { p.classList.add('out'); setTimeout(() => p.remove(), 220); }
    document.removeEventListener('keydown', onKey);
  }
  function onKey(e) { if (e.key === 'Escape') close(); }

  function open(cards, start) {
    close();
    const p = document.createElement('div');
    p.id = 'fpop';
    p.setAttribute('role', 'dialog');
    p.setAttribute('aria-modal', 'true');
    p.innerHTML = '<div class="fpbox"><button class="fpx" aria-label="Close">×</button><div class="fphead">💡 Formula explained</div><div class="fptabs"></div><div class="fpbody"></div><div class="fpfoot"></div></div>';
    document.body.appendChild(p);
    const show = (k) => {
      const card = cards[k];
      p.querySelector('.fptabs').innerHTML = cards.length > 1 ? cards.map((c, j) => `<button data-j="${j}" class="${j === k ? 'on' : ''}">${c.n}</button>`).join('') : '';
      p.querySelector('.fpbody').innerHTML = lib.cardHtml(card, lib.cards.indexOf(card));
      const art = p.querySelector('.fcard');
      if (art) { art.removeAttribute('id'); art.style.animation = 'none'; }
      lib.bindCalc(p);
      p.querySelector('.fpfoot').innerHTML = (card.s ? '' : '<a class="btn solid" href="#/finance/formulas">📚 All formulas</a>') + '<span>Tip: use the calculator to try your own numbers.</span>';
      p.querySelectorAll('.fptabs button').forEach((b) => { b.onclick = () => show(+b.dataset.j); });
    };
    show(start || 0);
    p.querySelector('.fpx').onclick = close;
    p.addEventListener('click', (e) => { if (e.target === p || (e.target.closest('a') && !e.target.closest('.fptabs'))) close(); });
    document.addEventListener('keydown', onKey);
    p.querySelector('.fpx').focus();
  }

  function bubble(el, msg) {
    const old = document.getElementById('fbub');
    if (old) old.remove();
    const b = document.createElement('div');
    b.id = 'fbub';
    b.textContent = msg;
    const r = el.getBoundingClientRect();
    b.style.top = Math.max(8, r.top + window.scrollY - 44) + 'px';
    b.style.left = Math.min(window.innerWidth - 300, Math.max(8, r.left + window.scrollX)) + 'px';
    document.body.appendChild(b);
    setTimeout(() => b.remove(), 2600);
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('#fpop, #wel')) return;
    const el = e.target.closest('.formula, .fformula, .kidea');
    if (!el || el.closest('.fcard')) return;
    const cards = findAll(el);
    if (cards.length) { e.preventDefault(); open(cards, 0); return; }
    if (el.classList.contains('formula')) {
      const isCalc = /\d/.test(el.textContent);
      bubble(el, isCalc ? 'ℹ️ This is a worked calculation. Click the general formula above it (or open the Formula Sheet) for its meaning.' : 'ℹ️ No separate explanation card for this line.');
    }
  });

  document.addEventListener('mouseover', (e) => {
    const el = e.target.closest && e.target.closest('.formula');
    if (el && !el.dataset.hint && !el.closest('.fcard')) {
      el.dataset.hint = '1';
      el.title = 'Click for meaning, example and when to use';
    }
  }, { passive: true });
})();
