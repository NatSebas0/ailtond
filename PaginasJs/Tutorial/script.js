function startTour() {
    introJs().setOptions({
        steps: [
            {
                title: 'Bienvenido a UTASK',
                intro: 'Esta guía te ayudará a saber cómo utilizar la plataforma de UTASK para gestionar mejor tus proyectos académicos en equipo.'
            },
            {
                element: '#home',
                intro: 'Página principal donde puedes crear, unirte y ver tus proyectos.'
            },
            {
                element: '#calendario',
                intro: 'Calendario para ver las fechas de tus tareas pendientes en el proyecto.'
            },
            {
                element: '#tarea',
                intro: 'Aquí puedes ver las tareas realizadas y las que siguen en curso dentro del proyecto.'
            },
            {
                element: '#notif',
                intro: 'Notificaciones sobre fechas límite de tareas o proyectos.'
            },
            {
                element: '#info',
                intro: 'Si deseas volver a ver este tutorial.'
            },
            {
                element: '#email',
                intro: 'Aquí puedes buscar los proyectos en los que estás trabajando.'
            },
            {
                element: '#btnCrearProyecto',
                intro: 'El botón "Crear Proyecto" te permite registrar un nuevo proyecto. Debes ingresar el nombre del proyecto, curso, fecha de inicio y fecha límite.'
            },
            {
                element: '#btnUnirseProyecto',
                intro: 'El botón "Unirte a Proyecto" te permite unirte a un proyecto existente a través de un código.'
            },
            {
                element: '#projectCard',
                intro: 'Aquí puedes ver información importante de tus proyectos como el nombre del curso, tareas pendientes, integrantes, y fecha de finalización.'
            },
            {
                element: '#trabajoFechaCard',
                intro: 'Aquí puedes ver las fechas límite más cercanas para las tareas asignadas en distintos proyectos.'
            }
        ]
    }).start();
}

// Verificar si el tutorial ya se ha visto
function checkFirstVisit() {
    if (!localStorage.getItem('introShown')) {
        // Si no se ha mostrado antes, iniciar el tour y marcar como visto
        startTour();
        localStorage.setItem('introShown', 'true');
    }
}

// Ejecutar el tour la primera vez que se carga la página
window.onload = function() {
    checkFirstVisit(); // Verificar si es la primera visita
};

// Asignar evento click al botón para reiniciar el tour
document.getElementById('startTourBtn').addEventListener('click', startTour);