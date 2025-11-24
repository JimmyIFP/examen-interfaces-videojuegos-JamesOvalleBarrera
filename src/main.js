import { getJuegoPorPlataforma } from "./services/getJuegoPorPlataformaService.js";

// Elements
const btnId = document.getElementById('btn-id');
const btnPlat = document.getElementById('btn-plataforma');
const btnVal = document.getElementById('btn-id-valoracion');
const output = document.getElementById('salida');

btnPlat.addEventListener('click', async () => {
  let plat = prompt("Ingresa una plataforma");
  console.log("Plataforma: " + plat)
  console.log("\tLimpiando salida")
  while(salida.firstChild) salida.removeChild(salida.firstChild)
  console.log("\tSalida limpia")
  let titulo = document.createElement('h2');
  try {
    console.log("\tLlamando a await getJuegoPorPlataforma()")
    let juegos = await getJuegoPorPlataforma(plat);
    if (juegos.length === 0) {
      console.log("\t\tLista de juegos vacia")
      titulo.textContent = "No hay juegos en esa plataforma";
      output.appendChild(titulo);
      console.log("\t\tSaliendo")
      return;
    }
    titulo.textContent = "Juegos de la plataforma " + plat;
    output.appendChild(titulo);
    console.log("\t\tJuegos en camino...")
    for (const juego of juegos) {
      console.log("\t\tJuego: " + juego.titulo)
      let p = document.createElement('p');
      p.textContent = `[${juego.id}] ${juego.titulo} (${juego.plataforma})`;
      output.appendChild(p);
    }
    console.log("\t\tNo hay más juegos")
  } catch (error) {
    console.log("\t\tError inesperado")
    titulo.textContent = error;
    output.appendChild(titulo);
  }

});