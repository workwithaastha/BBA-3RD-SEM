// List questions where the correct option is much longer than the distractors. Usage: node tools/lenbias.js <subject> [ratio]
const fs = require('fs'), path = require('path');
global.window = {};
const dir = path.join(__dirname, '..', 'site', 'data');
const html = fs.readFileSync(path.join(dir, '..', 'index.html'), 'utf8');
for (const m of html.matchAll(/<script src="(data\/[^"]+)"/g)) if (!m[1].includes('expected')) require(path.join(dir, '..', m[1]));
const [id, ratio = 1.6] = process.argv.slice(2);
const list = [];
for (const m of window.SUBJECTS[id].mcqs) {
  const wr = m.o.filter((_, k) => k !== m.a).map((o) => o.length);
  const avg = wr.reduce((a, b) => a + b) / 3;
  const c = m.o[m.a].length;
  if (c > Math.max(...wr) && c / Math.max(avg, 1) >= ratio) list.push({ n: m.n, q: m.q, u: m.u, r: +(c / avg).toFixed(2), c: m.o[m.a], w: m.o.filter((_, k) => k !== m.a) });
}
console.log(id, 'flagged', list.length, 'of', window.SUBJECTS[id].mcqs.length);
if (process.argv[4] === 'show') list.forEach((x) => console.log(x.n, '|', x.q, '=>', x.c));
