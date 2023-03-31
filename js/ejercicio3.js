//3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 


const btnAgregar = document.getElementById('agregar');
btnAgregar.addEventListener('click',agregarTarea)


function agregarTarea(e)
{   
    const padre = document.querySelector('form')
    e.preventDefault()
    let input = document.querySelector('input')
    let dato = input.value;
    if(dato){
    let lugar = document.createElement('li')
    lugar.innerHTML += `${dato} <button type="button" class="btn btn-danger borrar">Eliminar Tarea</button>`
    padre.appendChild(lugar);
    console.log(padre);
    borrarTarea()
    }
    else{
        alert("Usted no ingreso una tarea")
    }
}

function borrarTarea(){
    const tarea = document.querySelectorAll('.borrar')
    tarea.forEach(borrar => borrar.addEventListener('click', tar =>
    tar.target.parentElement.remove()))
}


