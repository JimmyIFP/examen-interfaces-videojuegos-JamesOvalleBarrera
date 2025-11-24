import { getJuego } from "./services/getJuegoService.js";
import { getValoracion } from "./services/getValoracionService.js";
// Elements
const btnId = document.getElementById('btn-id');
const btnPlat = document.getElementById('btn-plataforma');
const btnVal = document.getElementById('btn-id-valoracion');
const output = document.getElementById('salida');

btnVal.addEventListener('click', () => {
  let id = Number(prompt('Introduce el ID del juego para ver su valoración:'))
  console.log("Id: " + id)
  if (isNaN(id)) {
    console.log("\tId no valido")
    alert("Id invalido, debe ser numerico")
    return;
  }
  console.log("\tId Valido")
  let presentacion = document.createElement('h2');
  let title = document.createElement('h3');
  let puntuacion = document.createElement('span');
  console.log("\tLimpiando salida")
  while(salida.firstChild) salida.removeChild(salida.firstChild)
  console.log("\tSalida limpia")

  console.log("\tLlamando a Promise.all de getJuego y getValoracion")
  Promise.all([getJuego(id), getValoracion(id)])
    .then(([juego, valoracion]) => {
      console.log("\t\tPromesas resueltas")
      presentacion.textContent = 'Juego y Valoración:s'
      title.textContent = `- ${juego.titulo} (${juego.plataforma})`
      puntuacion.textContent = `- ${valoracion.puntuacion}/10`
    })
    .catch(error => {
      console.log("\t\tPromesas no resueltas")
      presentacion.textContent = error
      console.error(error)
    })
    .finally(() => {
      console.log("\t\tAgregando datos a salida")
      salida.appendChild(presentacion)
      salida.appendChild(title)
      salida.appendChild(puntuacion)
    })
});