import { getJuego } from "./services/getJuegoService.js";

// Elements
const btnId = document.getElementById('btn-id');
const btnPlat = document.getElementById('btn-plataforma');
const btnVal = document.getElementById('btn-id-valoracion');
const output = document.getElementById('salida');


// Listeners
btnId.addEventListener('click', () => {
  let id = Number(prompt("Ingresa el ID del juego entre 1-12"))
  console.log("Id: " + id)
  if (isNaN(id)) {
    console.log("\tId no valido")
    alert("Id invalido, debe ser numerico")
  }
  console.log("\tId Valido")
  let title = document.createElement('h2');
  let plataforma = document.createElement('span');
  console.log("\tLimpiando salida")
  while(salida.firstChild) salida.removeChild(salida.firstChild)
  console.log("\tSalida limpia")
  console.log("\tLlamando a getJuego()")
  getJuego(id)
  .then(juego => {
      console.log("\t\tPromesa resuelta")
      title.textContent = juego.titulo;
      plataforma.textContent = juego.plataforma;
    })
    .catch(error => {
      console.log("\t\tPromesa no resuelta")
      title.textContent = error.message;
      console.error(error);
    }).finally(() => {
      console.log("\t\tAgregando datos a salida")
      output.appendChild(title);
      output.appendChild(plataforma);
    });
});

