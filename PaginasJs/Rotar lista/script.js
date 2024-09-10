document.getElementById('invertir-historial').addEventListener('click', function() {
    // Obtener el elemento <ul> del historial y convertir sus hijos en un array
    const historial = Array.from(document.getElementById('historial').children);
    
    // Invertir el array usando reverse()
    historial.reverse();
    
    // Limpiar el contenido de la lista invertida
    const historialInvertido = document.getElementById('historial-invertido');
    historialInvertido.innerHTML = '';

    // Añadir los elementos invertidos a la lista en la página
    historial.forEach(item => historialInvertido.appendChild(item.cloneNode(true)));
});
