#!/usr/bin/env node
/* Route Nette — contrôle automatique avant chaque commit.
   Usage : node check.js          (tout : contrôles du code + navigateur)
           node check.js --vite   (seulement les contrôles du code, sans navigateur)
   Le navigateur utilise Playwright (Chromium). Sort avec le code 1 s'il y a une erreur. */
const fs = require('fs'), path = require('path'), http = require('http');
const ROOT = __dirname, SRC = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const errors = [], warns = [];
const err = m => { errors.push(m); console.log('  ❌ ' + m) }, warn = m => { warns.push(m); console.log('  ⚠️  ' + m) }, ok = m => console.log('  ✅ ' + m);

/* ---------- 1. Contrôles du code (sans navigateur) ---------- */
// lit le littéral { … } qui suit "NOM=" et rend les clés de premier niveau (les doublons sont écrasés en silence par JavaScript)
function topKeys(name) {
  const m = new RegExp('(?:const|let|var)\\s+' + name + '\\s*=\\s*\\{').exec(SRC) || new RegExp('[,;\\s]' + name + '\\s*=\\s*\\{').exec(SRC);
  if (!m) return null;
  let i = m.index + m[0].length, depth = 1, keys = [], expectKey = true;
  const stack = []; // pile des templates `…${…}…`
  while (i < SRC.length && depth > 0) {
    const c = SRC[i];
    if (c === '"' || c === "'") { // chaîne simple
      let j = i + 1, s = '';
      while (j < SRC.length && SRC[j] !== c) { if (SRC[j] === '\\') { s += SRC[j + 1]; j += 2; continue } s += SRC[j]; j++ }
      if (depth === 1 && expectKey && /^\s*:/.test(SRC.slice(j + 1, j + 4))) { keys.push(s); expectKey = false }
      i = j + 1; continue;
    }
    if (c === '`') { // template : on saute jusqu'à la fin en gérant ${ }
      let j = i + 1, d = 0;
      while (j < SRC.length) {
        if (SRC[j] === '\\') { j += 2; continue }
        if (d === 0 && SRC[j] === '`') break;
        if (SRC[j] === '$' && SRC[j + 1] === '{') { d++; j += 2; continue }
        if (d > 0 && SRC[j] === '{') d++;
        else if (d > 0 && SRC[j] === '}') d--;
        j++;
      }
      i = j + 1; continue;
    }
    if (c === '/' && SRC[i + 1] === '/') { i = SRC.indexOf('\n', i); continue }
    if (c === '/' && SRC[i + 1] === '*') { i = SRC.indexOf('*/', i) + 2; continue }
    if (c === '{' || c === '[' || c === '(') { depth++; i++; continue }
    if (c === '}' || c === ']' || c === ')') { depth--; i++; continue }
    if (depth === 1 && c === ',') { expectKey = true; i++; continue }
    if (depth === 1 && expectKey && /[A-Za-z_$0-9]/.test(c)) {
      const mm = /^[A-Za-z_$0-9]+/.exec(SRC.slice(i, i + 80))[0];
      if (/^\s*:/.test(SRC.slice(i + mm.length, i + mm.length + 3))) keys.push(mm);
      expectKey = false; i += mm.length; continue;
    }
    if (depth === 1 && !/\s/.test(c)) expectKey = false;
    i++;
  }
  return keys;
}
console.log('\n🔎 Contrôles du code');
const MUST = ['PRIV', 'EQ', 'JOBS', 'ROLES', 'BIGEV'];
const OTHER = (SRC.match(/(?:^|[;}\s])const ([A-Z][A-Z0-9_]{1,})\s*=\s*\{/gm) || []).map(x => x.replace(/.*const /, '').replace(/\s*=.*/, ''));
for (const n of [...new Set([...MUST, ...OTHER])]) {
  const k = topKeys(n);
  if (!k) { if (MUST.includes(n)) err(`${n} introuvable`); continue }
  const seen = new Set(), dup = new Set();
  for (const x of k) { if (seen.has(x)) dup.add(x); seen.add(x) }
  if (dup.size) err(`Clé en double dans ${n} : ${[...dup].join(', ')}`);
  else if (MUST.includes(n)) ok(`${n} : ${k.length} clés, aucun doublon`);
}
// produits des magasins : 1re colonne des lignes « clé|rayon|nom|prix|… » (SHPD + produits des services)
{
  const ks = [...SRC.matchAll(/^([a-z][a-z0-9]*)\|[a-z]{2}\|[^|\n]+\|[\d.]+\|/gm)].map(m => m[1]), seen = new Set(), dup = [];
  for (const k of ks) { if (seen.has(k)) dup.push(k); seen.add(k) }
  if (!ks.length) err('Produits des magasins introuvables');
  else dup.length ? err('Produit en double dans SHP : ' + dup.join(', ')) : ok(`SHP : ${ks.length} produits, aucun doublon`);
}
// evOn('…') → doit exister dans BIGEV
{
  const big = new Set(topKeys('BIGEV') || []), used = [...SRC.matchAll(/evOn\(\s*['"]([^'"]+)['"]\s*\)/g)].map(m => m[1]);
  const bad = [...new Set(used.filter(k => !big.has(k)))];
  bad.length ? err('evOn() avec une clé absente de BIGEV : ' + bad.join(', ')) : ok(`evOn() : ${used.length} appels, toutes les clés existent`);
}
// onclick="…click()…" : dans un attribut HTML, click() = la méthode du bouton (il se relance lui-même)
{
  const bad = [...SRC.matchAll(/on(?:click|change|input|touchstart|pointerdown)\s*=\s*(["'])((?:(?!\1).)*?)\1/g)].filter(m => /(^|[^\w.$])click\s*\(/.test(m[2]));
  bad.length ? err(`${bad.length} attribut(s) on…="…click()…" (utiliser clk()) : ` + bad.slice(0, 5).map(m => m[0].slice(0, 70)).join(' | ')) : ok('Aucun click() dans un attribut HTML');
}
// fonctions déclarées 2 fois (la 2e écrase la 1re sans prévenir)
{
  const c = {};
  for (const m of SRC.matchAll(/(?:^|[;}\s])function\s+([A-Za-z_$][\w$]*)\s*\(/g)) c[m[1]] = (c[m[1]] || 0) + 1;
  const d = Object.keys(c).filter(k => c[k] > 1);
  d.length ? warn('Fonction déclarée plusieurs fois : ' + d.join(', ')) : ok('Aucune fonction déclarée 2 fois');
}
// APPV = version.json
{
  const a = (/APPV\s*=\s*["']([^"']+)/.exec(SRC) || [])[1], v = JSON.parse(fs.readFileSync(path.join(ROOT, 'version.json'), 'utf8')).v;
  a === v ? ok(`Version ${a} (index.html = version.json)`) : err(`APPV (${a}) différent de version.json (${v})`);
}

/* ---------- 2. Contrôles dans le navigateur ---------- */
async function browser() {
  let chromium;
  try { ({ chromium } = require('playwright')) } catch (e) { warn('Playwright absent : contrôles du navigateur sautés'); return }
  const srv = http.createServer((q, r) => {
    let f = decodeURIComponent(q.url.split('?')[0].split('#')[0]); if (f === '/') f = '/index.html';
    const p = path.join(ROOT, f);
    if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { r.writeHead(404); return r.end() }
    const ext = path.extname(p), T = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.webmanifest': 'application/manifest+json' };
    r.writeHead(200, { 'Content-Type': T[ext] || 'application/octet-stream' }); fs.createReadStream(p).pipe(r);
  }).listen(0);
  const URL0 = `http://127.0.0.1:${srv.address().port}/`;
  const b = await chromium.launch();
  try {
    const ctx = await b.newContext({ viewport: { width: 360, height: 760 }, serviceWorkers: 'block' });
    await ctx.route(/wikipedia|googleapis|gstatic/, r => r.abort());
    const pg = await ctx.newPage(), pe = [];
    pg.on('pageerror', e => pe.push(e.message));
    await pg.addInitScript(() => { try { sessionStorage.setItem('rn-auto', '1'); localStorage.setItem('rn-intro-off', '1') } catch (e) { } });
    const open = async () => { await pg.goto(URL0, { waitUntil: 'load' }); await pg.waitForTimeout(400) };
    const flush = (label) => { if (pe.length) { err(`${label} : ${pe.length} erreur(s) JS — ${[...new Set(pe)].slice(0, 4).join(' | ')}`); pe.length = 0; return false } return true };

    console.log('\n🌐 Navigateur');
    await pg.goto(URL0); await pg.evaluate(() => localStorage.clear()); await open();
    flush('Ouverture') && ok('Le jeu s’ouvre sans erreur');
    // données : matériel des métiers, location, rôles
    const dat = await pg.evaluate(() => {
      const r = [];
      for (const k in JOBS) for (const e of JOBS[k].need || []) if (!EQ[e]) r.push(`JOBS.${k}.need → « ${e} » absent de EQ`);
      for (const k in RENT) if (!EQ[k]) r.push(`RENT.${k} absent de EQ`);
      for (const k in PRIV) if (!PRIV[k].n || !(PRIV[k].p >= 0)) r.push(`PRIV.${k} sans nom ou prix`);
      return r;
    });
    dat.length ? dat.forEach(err) : ok('JOBS.need, RENT et PRIV cohérents');

    // robot : 5 ans de jeu
    const t0 = Date.now();
    const bot = await pg.evaluate(() => {
      const E = [];
      document.querySelector('#play').click(); closeM && closeM();
      st.name = 'Robot SRL'; buyAdm('bce');
      const tabs = ['ch', 'pb', 'ao', 'eq', 'mt', 'bi', 'pv'];
      const roles = ['offre', 'plan', 'cond', 'gest', 'aide', 'achat', 'terr'];
      for (let d = 0; d < 365 * 5; d++) {
        try { tick() } catch (e) { E.push('tick j' + st.day + ' : ' + e.message); if (E.length > 5) break }
        try { for (const o of [...st.jobs].sort((a, b) => b.price - a.price)) { for (const e of JOBS[o.j].need) if (!(st.eq[e] > 0) && st.cash > EQ[e].p + 1500) buy(e); if (!jobMiss(o).length && freeCount() >= JOBS[o.j].minW) acceptJob(o.id) } } catch (e) { E.push('robot j' + st.day + ' : ' + e.message) }
        if (d % 7 === 0) try {
          for (const k of ['rc', 'vca']) if (!st.adm[k] && st.cash > 12000) buyAdm(k);
          const wait = st.contracts.filter(c => c.st === 'wait' || !c.crew.length).length;
          if ((st.jobs.length > 1 || wait) && st.cand && st.cand.length && st.cash > 12000 && ownW() < 60) { const i = st.cand.findIndex(w => w.r !== 'etu'); if (i >= 0) hire(i) }
          for (const r of roles) if (!has(r) && st.cash > 50000 && ownW() >= Math.max(4, ROLES[r].need || 0)) hireRole(r);
          if (st.cls < 4 && clsOk(CLS[st.cls + 1]) && st.cash > CLS[st.cls + 1].c * 3) upCls();
          (st.dec || []).slice(0).forEach(x => decAct(x.id, 0));
        } catch (e) { E.push('robot j' + st.day + ' : ' + e.message) }
        if (d % 90 === 0) for (const t of tabs) { try { tab(t); render() } catch (e) { E.push('onglet ' + t + ' : ' + e.message) } }
        if (typeof closeM === 'function') closeM();
        if (st.over) { E.push('faillite du robot au jour ' + st.day); break }
      }
      try { tab('ch'); save(1) } catch (e) { E.push('save : ' + e.message) }
      return { E, day: st.day, cash: Math.round(st.cash), w: ownW(), ca: Math.round(st.stats.ca), cls: st.cls };
    });
    bot.E.forEach(e => /faillite/.test(e) ? warn(e) : err('Robot : ' + e));
    flush('Robot 5 ans') && ok(`Robot 5 ans (${((Date.now() - t0) / 1000).toFixed(1)} s) : ${bot.w} personnes, classe ${bot.cls}, CA ${bot.ca.toLocaleString('fr-BE')} €, compte ${bot.cash.toLocaleString('fr-BE')} €`);
    // la partie du robot se recharge
    await open();
    const re = await pg.evaluate(() => ({ day: st.day, w: ownW() }));
    flush('Rechargement') && (re.day >= bot.day - 1 ? ok('Sauvegarde du robot rechargée (jour ' + re.day + ')') : err(`Sauvegarde non rechargée (jour ${re.day} au lieu de ${bot.day})`));

    // vieilles sauvegardes : schéma 1 à 6
    const cur = await pg.evaluate(() => defaults().schema);
    for (let sc = 1; sc <= cur; sc++) {
      await pg.evaluate(sc => {
        NOSAVE = 1;
        const w = sc < 2 ? [{ id: 1, n: 'Toi', boss: 1, sk: 1, ty: 'Patron', sal: 0 }, { id: 2, n: 'Jean Dupont', ty: 'Ouvrier expérimenté', sal: 150, sk: 1 }]
          : [{ id: 1, n: 'Toi', r: 'boss', boss: 1, sk: 1, day: 0 }, { id: 2, n: 'Jean Dupont', r: 'man', sk: 1, day: 220, base: .9, mot: .8 }];
        const s = { schema: sc, name: 'Vieille partie ' + sc, cash: 12000, rep: 20, day: 400, adm: { bce: 1 }, cls: 0, loan: 0, nid: 10, workers: w, eq: { taillehaie: 1, tondeuse: 1 }, contracts: [], jobs: [], tenders: [], cand: [], log: [], stats: { ca: 40000, done: 12, won: 0 }, started: true };
        localStorage.setItem('routenette-save', JSON.stringify(s)); localStorage.removeItem('routenette-bak'); localStorage.removeItem('routenette-prev');
      }, sc);
      await open();
      const r = await pg.evaluate(() => {
        const E = [];
        document.querySelector('#play').click(); if (typeof closeM === 'function') closeM();
        for (let d = 0; d < 60; d++) try { tick() } catch (e) { E.push(e.message); break }
        for (const t of ['ch', 'pb', 'ao', 'eq', 'mt', 'bi', 'pv']) try { tab(t); render() } catch (e) { E.push('onglet ' + t + ' : ' + e.message) }
        return { E, name: st.name, schema: st.schema, cash: st.cash, prev: !!localStorage.getItem('routenette-prev') };
      });
      r.E.forEach(e => err(`Sauvegarde schéma ${sc} : ${e}`));
      if (flush('Sauvegarde schéma ' + sc) && !r.E.length) {
        if (r.name !== 'Vieille partie ' + sc) err(`Sauvegarde schéma ${sc} non chargée (nom « ${r.name} »)`);
        else if (r.schema !== cur) err(`Sauvegarde schéma ${sc} : schéma ${r.schema} au lieu de ${cur}`);
        else if (!r.prev) err(`Sauvegarde schéma ${sc} : pas de copie routenette-prev`);
        else ok(`Vieille sauvegarde (schéma ${sc}) chargée, convertie et jouée 60 jours`);
      }
    }
    // largeur 360 px : pas de défilement horizontal
    const wide = await pg.evaluate(() => { const r = []; for (const t of ['ch', 'pb', 'ao', 'eq', 'mt', 'bi']) { tab(t); render(); if (document.documentElement.scrollWidth > innerWidth + 1) r.push(t) } return r });
    wide.length ? warn('Défilement horizontal à 360 px dans : ' + wide.join(', ')) : ok('Affichage 360 px sans défilement horizontal');
    flush('Affichage 360 px');
  } finally { await b.close(); srv.close() }
}

(async () => {
  if (!process.argv.includes('--vite')) await browser().catch(e => err('Contrôle navigateur : ' + e.message));
  console.log(`\n${errors.length ? '❌ ' + errors.length + ' erreur(s)' : '✅ Tout est bon'}${warns.length ? ' · ' + warns.length + ' avertissement(s)' : ''}\n`);
  process.exit(errors.length ? 1 : 0);
})();
