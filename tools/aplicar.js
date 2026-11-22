const fs = require('fs');
const dir = 'C:/Users/Marcos/.kiro/crew/workspace/practica4/';
const rep = [
  ['MiTienda', 'PokéShop'],
  ['6f42c1', 'd90429'], ['20c997', '343a40'], ['1d1b2f', '0d0d0d'],
  ['Descubre lo nuevo', 'Atrápalos todos'],
  ['Promociones y productos que acaban de llegar.', 'Videojuegos, cartas y peluches Pokémon recién llegados.'],
  ['Producto+1', 'Pikachu+Peluche'], ['Producto+2', 'Cartas+Pokemon'], ['Producto+3', 'Juego+Pokemon'],
  ['Promo+1', 'Nueva+Edicion'], ['Promo+2', 'Cartas+-20%'], ['Promo+3', 'Envio+Gratis'],
  ['Producto 1', 'Peluche Pikachu'], ['Producto 2', 'Sobre de cartas Pokémon'], ['Producto 3', 'Juego Pokémon Escarlata'],
  ['Promoción 1', 'Nueva edición'], ['Promoción 2', 'Cartas con 20% de descuento'], ['Promoción 3', 'Envío gratis'],
  ['Descripción del producto nuevo. Sustituye este texto por el tuyo.', 'Peluche oficial de Pikachu, suave y de 30 cm. Perfecto para coleccionistas.'],
  ['Característica 1, característica 2, característica 3.', 'Tamaño 30 cm, tela suave, producto oficial.'],
  ['29,99 €', '24,99 €'], ['19,99 €', '4,99 €'], ['49,99 €', '59,99 €'], ['32,99 €', '27,99 €'],
  ['Nuevos productos', 'Novedades Pokémon'],
];
for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.html'))) {
  let t = fs.readFileSync(dir + f, 'utf8');
  for (const [a, b] of rep) t = t.split(a).join(b);
  fs.writeFileSync(dir + f, t);
}
const vp = dir + 'scss/abstracts/_variables.scss';
let v = fs.readFileSync(vp, 'utf8');
v = v.replace(/\$primary:.*;/, '$primary:   #d90429;')
     .replace(/\$secondary:.*;/, '$secondary: #ffb703;')
     .replace(/\$danger:.*;/, '$danger:    #8d0801;')
     .replace(/\$dark:.*;/, '$dark:      #0d0d0d;')
     .replace(/\$light:.*;/, '$light:     #f5f2f2;')
     .replace(/\$body-color:.*;/, '$body-color: #1a1a1a;');
fs.writeFileSync(vp, v);
