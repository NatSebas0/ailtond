


document.addEventListener('show.bs.modal', event => {
    // Obtén el botón que abrió el modal
    const button = event.relatedTarget;
    // Obtén el nombre del archivo del atributo data-file del botón
    const file = button.getAttribute('data-file');
    
    // Carga el contenido del archivo JS seleccionado
    fetch(file)
        .then(response => response.text())
        .then(code => {
            const codeDisplay = document.getElementById('codeDisplay');
            codeDisplay.textContent = code;

            hljs.highlightElement(codeDisplay);
        })
        .catch(error => console.error('Error al cargar el archivo:', error));
});