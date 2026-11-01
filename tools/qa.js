// Automated QA over all site data. Usage: node tools/qa.js
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '..', 'site');
const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
global.window = {};
for (const m of html.matchAll(/<script src="((?:data|js)\/[^"]+)"/g)) { if (!(m[1].startsWith('data/') || m[1] === 'js/examqa.js')) continue; require(path.join(dir, m[1])); }
const S = window.SUBJECTS;
const issues = [];
const bad = (msg) => issues.push(msg);

for (const [id, s] of Object.entries(S)) {
  const seenQ = new Map();
  let longest = 0;
  const pos = [0, 0, 0, 0];
  for (const m of s.mcqs) {
    const tag = `${id} ${m.u} #${m.n}`;
    if (!Array.isArray(m.o) || m.o.length !== 4) bad(`${tag}: options != 4`);
    if (!(m.a >= 0 && m.a < 4)) bad(`${tag}: bad answer index`);
    if (new Set(m.o.map((o) => o.toLowerCase())).size !== m.o.length) bad(`${tag}: duplicate options`);
    if (m.o.some((o) => !o || o.length < 1)) bad(`${tag}: empty option`);
    if (!m.q || m.q.length < 8) bad(`${tag}: short question`);
    if (/[�]|â€|Ã/.test(m.q + m.o.join(''))) bad(`${tag}: encoding problem`);
    if (/\s{2,}/.test(m.q + m.o.join(''))) bad(`${tag}: double spaces`);
    const k = m.u + '|' + m.q.trim().toLowerCase() + '|' + (m.c || '').slice(0, 30);
    if (seenQ.has(k)) bad(`${tag}: duplicate of #${seenQ.get(k)}`); else seenQ.set(k, m.n);
    const lens = m.o.map((o) => o.length);
    if (lens[m.a] === Math.max(...lens) && Math.max(...lens) > 1.6 * (lens.reduce((a, b) => a + b) - Math.max(...lens)) / 3) longest++;
    pos[m.a]++;
    if (/\b(all of the above|none of the above)\b/i.test(m.o.join(' '))) bad(`${tag}: all/none of the above`);
  }
  const n = s.mcqs.length;
  if (n) console.log(`${id}: ${n} MCQs | answer positions ${pos.join('/')} | correct is clearly longest in ${longest} (${Math.round(100 * longest / n)}%)`);
  const ids = new Set();
  for (const u of s.units) {
    if (ids.has(u.id)) bad(`${id}: duplicate unit id ${u.id}`);
    ids.add(u.id);
    const d = u.html;
    const open = (d.match(/<(div|table|ul|ol|p|h2|h3|tr|td|th|span|b|i|sup|sub)\b/g) || []).length;
    const close = (d.match(/<\/(div|table|ul|ol|p|h2|h3|tr|td|th|span|b|i|sup|sub)>/g) || []).length;
    if (open !== close) bad(`${id}/${u.id}: unbalanced tags open=${open} close=${close}`);
    if (/undefined|NaN|\[object/.test(d)) bad(`${id}/${u.id}: contains undefined/NaN`);
    if (/[�]/.test(d)) bad(`${id}/${u.id}: replacement char`);
  }
}
// exam Q&A answers: tag balance + required fields
for (const [id, list] of Object.entries((window.ExamQA && window.ExamQA.data) || {})) {
  list.forEach((q, i) => {
    const t = `${id} QA#${i + 1} (${q.m}m)`;
    if (![2, 3, 5, 6, 10].includes(q.m)) bad(`${t}: odd marks`);
    if (!q.q || !q.a || !q.u || !q.t) bad(`${t}: missing field`);
    const o = (q.a.match(/<(div|table|ul|ol|p|h4|tr|td|th|b|i|sup|sub)/g) || []).length;
    const c = (q.a.match(/<\/(div|table|ul|ol|p|h4|tr|td|th|b|i|sup|sub)>/g) || []).length;
    if (o !== c) bad(`${t}: unbalanced tags ${o}/${c}`);
    if (/undefined|\[object/.test(q.a)) bad(`${t}: undefined in answer`);
  });
  console.log(id + ' exam Q&A: ' + list.length + ' answers checked');
}
console.log(issues.length ? issues.join('\n') : 'QA: no issues');
console.log('issues:', issues.length);
