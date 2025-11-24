import { juegos } from "../../public/data/info.js";

export function getJuegoPorPlataforma(plataforma) {
  let promesa = new Promise((resolve, _reject) => {
    setTimeout(() => {
      let games = juegos.filter(juego => juego.plataforma.toLowerCase() === plataforma.toLowerCase());
      resolve(games);
    }, 1000);
  });
  return promesa;
}