const fs = require('fs');
const https = require('https');
const root = 'C:/Users/Marcos/.kiro/crew/workspace/practica4/';
const ids = { pikachu: 25, charizard: 6, mewtwo: 150, eevee: 133 };
const get = (url) => new Promise((res, rej) => {
  https.get(url, { headers: { 'User-Agent': 'practica4' } }, r => {
    if (r.statusCode !== 200) return rej(new Error(url + ' ' + r.statusCode));
    const c = []; r.on('data', d => c.push(d)); r.on('end', () => res(Buffer.concat(c)));
  }).on('error', rej);
});
(async () => {
  for (const [n, id] of Object.entries(ids)) {
    const b = await get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`);
    fs.writeFileSync(root + 'img/' + n + '.png', b);
  }
  const rep = [
    [/https:\/\/placehold\.co\/\d+x\d+\/\w+\/\w+\?text=Pikachu\+Peluche/g, 'img/pikachu.png'],
    [/https:\/\/placehold\.co\/\d+x\d+\/\w+\/\w+\?text=Cartas\+Pokemon/g, 'img/charizard.png'],
    [/https:\/\/placehold\.co\/\d+x\d+\/\w+\/\w+\?text=Juego\+Pokemon/g, 'img/mewtwo.png'],
    [/https:\/\/placehold\.co\/\d+x\d+\/\w+\/\w+\?text=Nueva\+Edicion/g, 'img/mewtwo.png'],
    [/https:\/\/placehold\.co\/\d+x\d+\/\w+\/\w+\?text=Cartas\+-20%/g, 'img/charizard.png'],
    [/https:\/\/placehold\.co\/\d+x\d+\/\w+\/\w+\?text=Envio\+Gratis/g, 'img/eevee.png'],
  ];
  for (const f of fs.readdirSync(root).filter(x => x.endsWith('.html'))) {
    let t = fs.readFileSync(root + f, 'utf8');
    for (const [a, b] of rep) t = t.replace(a, b);
    fs.writeFileSync(root + f, t);
  }
  fs.writeFileSync(root + 'scss/pages/_home.scss', `.hero {
  background: linear-gradient(135deg, $primary, shade-color($primary, 55%));
  color: $white;
  padding: 5rem 0;
}
.carousel-item { background: linear-gradient(135deg, $dark, shade-color($primary, 60%)); }
.carousel-item img { height: 420px; object-fit: contain; padding: 1rem; }
`);
  fs.writeFileSync(root + 'scss/components/_cards.scss', `.product-card {
  border: 0;
  transition: transform .2s, box-shadow .2s;
  &:hover { transform: translateY(-6px); box-shadow: 0 1rem 2rem rgba($primary, .2); }
  .card-img-top { height: 200px; object-fit: contain; padding: 1rem; background: $light; }
  .price { color: $primary; font-weight: 700; }
}
`);
  console.log('ok');
})().catch(e => { console.log('ERR ' + e.message); process.exit(1); });
