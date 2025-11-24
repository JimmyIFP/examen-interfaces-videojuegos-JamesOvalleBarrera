import { juegos } from "../../public/data/info.js";

export function getJuego(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let juego = juegos.find(juego => juego.id === id);
      if (juego) {
        resolve(juego);
      } else {
        reject(new Error("Juego con Id " + id + " no encontrado"));
      }
    }, 800);
  });
}