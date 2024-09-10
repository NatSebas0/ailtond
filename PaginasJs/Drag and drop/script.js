const elementosArrastrables = document.querySelectorAll(".tarea");
const zonasDestino = document.querySelectorAll(".zona-de-trabajo");

elementosArrastrables.forEach((tarea) => {
  tarea.addEventListener("dragstart", () => {
    tarea.classList.add("si-arrastrando");
  });
  tarea.addEventListener("dragend", () => {
    tarea.classList.remove("si-arrastrando");
  });
});

zonasDestino.forEach((zona) => {
  zona.addEventListener("dragover", (e) => {
    e.preventDefault();

    const tareaInferior = insertarAntesDeTarea(zona, e.clientY);
    const tareaActual = document.querySelector(".si-arrastrando");

    if (!tareaInferior) {
      zona.appendChild(tareaActual);
    } else {
      zona.insertBefore(tareaActual, tareaInferior);
    }
  });
});

const insertarAntesDeTarea = (zona, mouseY) => {
  const tareas = zona.querySelectorAll(".tarea:not(.si-arrastrando)");

  let tareaMasCercana = null;
  let offsetMasCercano = Number.NEGATIVE_INFINITY;

  tareas.forEach((tarea) => {
    const { top } = tarea.getBoundingClientRect();

    const offset = mouseY - top;

    if (offset < 0 && offset > offsetMasCercano) {
      offsetMasCercano = offset;
      tareaMasCercana = tarea;
    }
  });

  return tareaMasCercana;
};
