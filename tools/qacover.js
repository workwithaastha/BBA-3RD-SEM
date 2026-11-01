// Coverage of the written Q&A bank per unit / topic / marks. Usage: node tools/qacover.js
const fs = require('fs'), path = require('path');
global.window = {};
const dir = path.join(__dirname, '..', 'site');
const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
for (const m of html.matchAll(/<script src="((?:data|js)\/[^"]+)"/g)) { if (!(m[1].startsWith('data/') || m[1] === 'js/examqa.js')) continue; require(path.join(dir, m[1])); }
for (const [id, list] of Object.entries(window.ExamQA.data)) {
  console.log('\n== ' + id + ' (' + list.length + ')');
  const g = {};
  list.forEach((q) => { const k = q.u + ' | ' + q.t; (g[k] = g[k] || {})[q.m] = ((g[k] || {})[q.m] || 0) + 1; });
  const units = {};
  list.forEach((q) => { units[q.u] = (units[q.u] || 0) + 1; });
  console.log('per unit:', JSON.stringify(units));
  Object.entries(g).sort().forEach(([k, v]) => console.log(' ', k.padEnd(48), JSON.stringify(v)));
}
