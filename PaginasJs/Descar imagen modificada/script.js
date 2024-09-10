function updateDNI() {
    // Obtener los valores ingresados
    const nameInput = document.getElementById('name').value;
    const dniInput = document.getElementById('dni').value;

    // Actualizar en tiempo real la vista previa del DNI
    document.getElementById('dni-name').textContent = `Nombre: ${nameInput ? nameInput : '[nombre]'}`;
    document.getElementById('dni-number').textContent = `DNI: ${dniInput ? dniInput : '[numero]'}`;
}

function downloadImage() {
    html2canvas(document.querySelector(".dni-image")).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'dni.png';
        link.click();
    });
}