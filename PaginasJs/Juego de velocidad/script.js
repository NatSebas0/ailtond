document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('reaction-btn');
    const temporizador = document.getElementById('timer');
    
    let tiempoInicio, tiempoFin;
    let idTimeout;
    
    // Función para iniciar el juego
    const iniciarJuego = () => {
        temporizador.textContent = '¡Prepárate!';
        boton.disabled = true; // Desactiva el botón inicialmente
        
        // Retraso aleatorio antes de cambiar el color
        const retraso = Math.floor(Math.random() * 3000) + 2000; // Entre 2 y 5 segundos
        
        idTimeout = setTimeout(() => {
            boton.style.backgroundColor = 'green'; // Establece el color verde
            tiempoInicio = new Date().getTime();
            temporizador.textContent = '¡Haz clic!';
            boton.disabled = false; // Activa el botón
        }, retraso);
    };

    // Función para manejar el clic en el botón
    const manejarClick = () => {
        if (temporizador.textContent === '¡Haz clic!') {
            tiempoFin = new Date().getTime();
            const tiempoReaccion = tiempoFin - tiempoInicio;
            temporizador.textContent = `¡Tiempo de reacción: ${tiempoReaccion} ms!`;
            boton.style.backgroundColor = ''; // Restablece el color por defecto
            boton.disabled = true; // Desactiva el botón nuevamente
            clearTimeout(idTimeout);
            setTimeout(iniciarJuego, 2000); // Reinicia el juego después de 2 segundos
        } else {
            temporizador.textContent = '¡Aún no es el momento!';
        }
    };

    // Agrega un listener para el clic en el botón
    boton.addEventListener('click', manejarClick);

    // Inicia el juego cuando se carga la página
    iniciarJuego();
});
