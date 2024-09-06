// Imágenes de los globos de pensamiento
const imagenes = [
    "../srcs/iconos/Texto 1.svg",
    "../srcs/iconos/Texto 2.svg",
    "../srcs/iconos/Texto 3.gif",
  ];

  let lastIndex = -1; // Variable para almacenar el índice de la última imagen

  // Función para cambiar la imagen del globo de pensamiento al azar
  function cambiarImagen() {
    let index;
    do {
      index = Math.floor(Math.random() * imagenes.length); // Selección aleatoria
    } while (index === lastIndex); // Asegura que no se repita la imagen anterior
    lastIndex = index; // Actualiza el índice de la última imagen
    document.getElementById("thoughtImage").src = imagenes[index];
  }

  document.getElementById("gifImage").addEventListener("click", function () {
      const textBubble = document.getElementById("textBubble");
      const clickSound = document.getElementById("clickSound");

      // Reproduce el sonido
      clickSound.play();

      // Muestra el globo de pensamiento
      textBubble.style.display = "block";

      cambiarImagen(); // Cambia la imagen en cada clic
    });