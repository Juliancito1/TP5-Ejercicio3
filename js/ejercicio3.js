//3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 


const btnAgregar = document.getElementById('agregar');
btnAgregar.addEventListener('click',agregarTarea) 
let count = 0;
let listadetareas = [];

function agregarTarea(e)
{   
    const padre = document.querySelector('form')
    e.preventDefault()
    let input = document.querySelector('input')
    let dato = input.value;
    listadetareas.push(dato);
    let lugar = document.createElement('li')
    lugar.innerHTML += `${dato} <button type="button" class="btn btn-danger borrar mt-3" onclick="borrarTarea()">Eliminar Tarea</button>`
    lugar.setAttribute("id","tarea")
    padre.appendChild(lugar);
    console.log(padre);
    count++;
}

function borrarTarea(){
     const tar = document.querySelector('li')
    tar.parentElement.removeChild(tar)
}






    // document.write("<ul>")
    // for(let i=0; i<listatareas.length;i++)
    // {
    //     document.write(`<li>${listatareas[i]}</li>`)
    // }
    // document.write("</ul>")