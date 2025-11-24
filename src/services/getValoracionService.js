import { valoraciones } from "../../public/data/info.js";

export function getValoracion(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let valoracion = valoraciones.find(valoracion => valoracion.id === id);
      if (valoracion) {
        resolve(valoracion);
      } else {
        reject(new Error("Valoracion con Id " + id + " no existe"));
      }
    }, 900);
  });
}