let tareas = [];

function mostrarTareas() {
    const listadoDiv = document.querySelector('.listado');
    listadoDiv.innerHTML = '';

    tareas.forEach((tarea, index) => {
        const tareaElemento = document.createElement('div');
        tareaElemento.classList.add('tarea');

        tareaElemento.innerHTML = `
            <input type="checkbox" class="tarea" name="check" id="check"><strong>${tarea.texto}</strong> [${tarea.categoria}]</input>
            <button class="boton" >Eliminar</button>
            <button class="boton" >Finalizar</button>
            <button class="boton" >Destacar</button>
        `;
        listadoDiv.appendChild(tareaElemento);
        const check = tareaElemento.querySelector('.tarea');
        const botones = tareaElemento.querySelectorAll('.boton');

        check.addEventListener('change', () => {
            botones.forEach(boton => {
                boton.style.display = check.checked ? 'inline-block' : 'none';
            });
        });

    });
}

function agregarTarea() {
  let texto = document.getElementById("tarea").value;
  let categoria = document.getElementById("categoria").value;
  if (texto.trim() === "") {
  alert("La tarea no puede estar vacía");
  return;
}
  const nuevaTarea = {
    texto,
    categoria,
    finalizada: false,
    destacada: false,
  };
  tareas.push(nuevaTarea);
  console.log(nuevaTarea);
  mostrarTareas();
};

