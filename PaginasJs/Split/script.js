document.getElementById('dividir').addEventListener('click', function() {
    // Obtener la cadena ingresada por el usuario
    const cadenaOriginal = document.getElementById('cadena').value;

    // Delimitador fijo: espacio
    const delimitador = ' ';

    // Dividir la cadena en un array usando el delimitador
    const arrayDeElementos = cadenaOriginal.split(delimitador).filter(elemento => elemento.trim() !== '');

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<strong>Array de elementos:</strong><br>${arrayDeElementos.join(', ')}`;

    // Mostrar opciones para copiar partes específicas
    const opciones = document.getElementById('opciones');
    opciones.innerHTML = '';

    arrayDeElementos.forEach((elemento, index) => {
        const botonCopiar = document.createElement('button');
        botonCopiar.textContent = `Copiar elemento ${index + 1}`;
        botonCopiar.className = 'btn btn-secondary mb-2'; // Estilo de botón secundario con margen inferior
        botonCopiar.addEventListener('click', () => {
            navigator.clipboard.writeText(elemento).then(() => {
                alert(`Elemento ${index + 1} copiado: ${elemento}`);
            });
        });
        opciones.appendChild(botonCopiar);
    });
});
