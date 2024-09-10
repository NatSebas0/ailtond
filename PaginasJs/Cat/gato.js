// Imágenes de los globos de pensamiento
const imagenes = [
  "../srcs/iconos/Texto 1.svg",
  "../srcs/iconos/Texto 2.svg",
  "../srcs/iconos/Texto 3.gif",
];

let ultimoIndice = -1; // Variable para almacenar el índice de la última imagen

// Función para cambiar la imagen del globo de pensamiento al azar
function cambiarImagen() {
  let indice;
  do {
    indice = Math.floor(Math.random() * imagenes.length); // Selección aleatoria
  } while (indice === ultimoIndice); // Asegura que no se repita la imagen anterior
  ultimoIndice = indice; // Actualiza el índice de la última imagen
  document.getElementById("imagenGlobo").src = imagenes[indice];
}

document.getElementById("gifAnimado").addEventListener("click", function () {
  const burbujaTexto = document.getElementById("burbujaTexto");
  const sonidoClick = document.getElementById("sonidoClick");

  // Reproduce el sonido
  sonidoClick.play();

  // Muestra el globo de pensamiento
  burbujaTexto.style.display = "block";

  cambiarImagen(); // Cambia la imagen en cada clic
});
