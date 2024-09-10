document.addEventListener('DOMContentLoaded', () => {
    const inputTempo = document.getElementById('tempo');
    const botonIniciarDetener = document.getElementById('start-stop');
    const sonidoClic = document.getElementById('click-sound');

    let idIntervalo;
    let estaReproduciendo = false;

    function reproducirClic() {
        sonidoClic.currentTime = 0;
        sonidoClic.play();
    }

    function iniciarMetrónomo() {
        const tempo = parseInt(inputTempo.value);
        const intervalo = 60000 / tempo; // Intervalo en milisegundos

        idIntervalo = setInterval(reproducirClic, intervalo);
        botonIniciarDetener.textContent = 'Detener';
        estaReproduciendo = true;
    }

    function detenerMetrónomo() {
        clearInterval(idIntervalo);
        botonIniciarDetener.textContent = 'Iniciar';
        estaReproduciendo = false;
    }

    botonIniciarDetener.addEventListener('click', () => {
        if (estaReproduciendo) {
            detenerMetrónomo();
        } else {
            iniciarMetrónomo();
        }
    });
});
