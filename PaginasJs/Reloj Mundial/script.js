document.getElementById('repeatButton').addEventListener('click', function() {
    // Obtener el texto y la cantidad de repeticiones
    const text = document.getElementById('text').value;
    const repeatCount = parseInt(document.getElementById('repeatCount').value);

    // Obtener el formato seleccionado
    const format = document.querySelector('input[name="format"]:checked').value;

    // Validar que la cantidad sea un número positivo
    if (isNaN(repeatCount) || repeatCount < 0) {
        alert('Por favor, ingresa una cantidad válida.');
        return;
    }
    let rst= text + " ";

    let result;
    if (format === 'multiLine') {
        // Repetir la cadena con un salto de línea entre cada repetición
        result = Array(repeatCount).fill(rst).join('<br>');
    } else {
        // Repetir la cadena en una sola línea
        result = rst.repeat(repeatCount);
    }

    // Mostrar el resultado en el elemento <div> con ID result
    document.getElementById('result').innerHTML = result;
});


document.getElementById('copyButton').addEventListener('click', function() {
    // Crear un elemento temporal para copiar el contenido
    const tempElement = document.createElement('textarea');
    tempElement.value = document.getElementById('result').innerText;
    document.body.appendChild(tempElement);

    // Seleccionar y copiar el contenido
    tempElement.select();
    document.execCommand('copy');

    // Eliminar el elemento temporal
    document.body.removeChild(tempElement);

    // Mostrar un mensaje de confirmación
    alert('Texto copiado al portapapeles.');
});