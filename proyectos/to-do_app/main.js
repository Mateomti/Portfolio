let tareas = [];

function mostrarTareas() {
    const listadoDiv = document.querySelector('.listado');
    listadoDiv.innerHTML = '';

    tareas.forEach((tarea, index) => {
        const tareaElemento = document.createElement('div');
        tareaElemento.classList.add('tarea');

        tareaElemento.innerHTML = `
            <input type="checkbox" class="check-tarea">
            <strong>${tarea.texto}</strong> [${tarea.categoria}]
            <button class="boton-eliminar">Eliminar</button>
            <button class="boton-finalizar">Finalizar</button>
            <button class="boton-destacar">Destacar</button>
        `;

        if (tarea.finalizada) {
            tareaElemento.classList.add('finalizada');
            tareaElemento.querySelector('.boton-finalizar').innerText = "Quitar finalizado";
        }
        if (tarea.destacada) {
            tareaElemento.classList.add('destacada');
            tareaElemento.querySelector('.boton-destacar').innerText = "Quitar destacado";
        }

        const check = tareaElemento.querySelector('.check-tarea');
        const botonEliminar = tareaElemento.querySelector('.boton-eliminar');
        const botonFinalizar = tareaElemento.querySelector('.boton-finalizar');
        const botonDestacar = tareaElemento.querySelector('.boton-destacar');

        check.addEventListener('change', () => {
            const visible = check.checked ? 'inline-block' : 'none';
            botonEliminar.style.display = visible;
            botonFinalizar.style.display = visible;
            botonDestacar.style.display = visible;
        });

        botonEliminar.addEventListener('click', () => {
            tareas.splice(index, 1);
            mostrarTareas();
        });

        botonFinalizar.addEventListener('click', () => {
            tarea.finalizada = !tarea.finalizada;
            tareaElemento.classList.toggle('finalizada');
            botonFinalizar.innerText = tarea.finalizada ? "Quitar finalizado" : "Finalizar";
        });

        botonDestacar.addEventListener('click', () => {
            tarea.destacada = !tarea.destacada;
            tareaElemento.classList.toggle('destacada');
            botonDestacar.innerText = tarea.destacada ? "Quitar destacado" : "Destacar";
        });

        listadoDiv.appendChild(tareaElemento);
    });

document.querySelector('.filtro-destacadas').addEventListener('click', () => {
    const tareasDOM = document.querySelectorAll('.tarea');
    tareasDOM.forEach((tareaDOM, index) => {
        if (!tareas[index].destacada){
            tareaDOM.style.display = 'none';
        }
        else{
            tareaDOM.style.display = 'block';
        }
    });
});

document.querySelector('.filtro-finalizadas').addEventListener('click', () => {
    const tareasDOM = document.querySelectorAll('.tarea');
    tareasDOM.forEach((tareaDOM, index) => {
        if (!tareas[index].finalizada){
            tareaDOM.style.display = 'none';
        }
        else{
            tareaDOM.style.display = 'block';
        }
    });
});
document.querySelector('.filtro-todas').addEventListener('click', () => {
    const tareasDOM = document.querySelectorAll('.tarea');
    tareasDOM.forEach((tareaDOM) => {
        tareaDOM.style.display = 'block';
    });
});

const selectFiltro = document.getElementById('filtro-categoria');
selectFiltro.addEventListener('change', () => {
    const tareasDOM = document.querySelectorAll('.tarea');
    tareasDOM.forEach((tareaDOM, index) => {
        if (tareas[index].categoria == selectFiltro.value){
            tareaDOM.style.display = 'block';
        }
        else{
            tareaDOM.style.display = 'none';
        }
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
