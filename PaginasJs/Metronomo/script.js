document.addEventListener('DOMContentLoaded', () => {
    const tempoInput = document.getElementById('tempo');
    const startStopButton = document.getElementById('start-stop');
    const clickSound = document.getElementById('click-sound');

    let intervalId;
    let isPlaying = false;

    function playClick() {
        clickSound.currentTime = 0;
        clickSound.play();
    }

    function startMetronome() {
        const tempo = parseInt(tempoInput.value);
        const interval = 60000 / tempo; // Intervalo en milisegundos

        intervalId = setInterval(playClick, interval);
        startStopButton.textContent = 'Detener';
        isPlaying = true;
    }

    function stopMetronome() {
        clearInterval(intervalId);
        startStopButton.textContent = 'Iniciar';
        isPlaying = false;
    }

    startStopButton.addEventListener('click', () => {
        if (isPlaying) {
            stopMetronome();
        } else {
            startMetronome();
        }
    });
});
