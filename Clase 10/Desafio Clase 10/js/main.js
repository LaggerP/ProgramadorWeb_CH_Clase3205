var tareas = [];

function agregarTarea(){
    var _id = document.getElementById("idTareaNuevo").value;
    var _titulo = document.getElementById("idTituloNuevo").value;
    var _descripcion = document.getElementById("idDescripcionNuevo").value;
    var nuevaTarea = new constructorTarea(_id, _titulo, _descripcion);
    tareas.push(nuevaTarea);
    //usando localStorage para almacenar en el navegador info cargada en el objeto
    var tareasJSON = JSON.stringify(tareas);
    localStorage.setItem("Nuevas tareas", tareasJSON);
    mostrarTodasLasTareas(_id, _titulo, _descripcion);
}

function constructorTarea(_id, _titulo, _descripcion){
    this.id = _id;
    this.titulo = _titulo;
    this.descripcion = _descripcion;  
}

function mostrarTodasLasTareas(_id, _titulo, _descripcion) {
    var ul = document.createElement("ul");
    var li = crear_li_tag(_id, _titulo, _descripcion);
    ul.appendChild(li);
    document.getElementById("root").appendChild(ul);
}

function crear_li_tag(_id, _titulo, _descripcion) {
    var contenidoLi = "<h5>ID: " + _id + "</h5><span>Título tarea : " + _titulo + " " + "</span>" + "<p> Descripción: " + _descripcion + "</p><button type='submit' class='btn btn-success' id='idBotonModificar'>Modificar</button> <button type='submit' class='btn btn-danger' id='idBotonEliminar'>Eliminar</button> <button type='submit' class='btn btn-warning' id='idBotonCompleatdo'>Completado</button>";
    var li = document.createElement("li");
    li.innerHTML = contenidoLi;

    return li;
}



function modificarTarea(){
    debugger;
    var input = document.createElement("input");
    var div = crear_input();
    input.appendChild(div);
    document.getElementById("inputModificar").appendChild(input);
}

function crear_input(){
    var contenidoInput = "<input type='text' class='form-control' id='idTituloNuevo' placeholder='Titulo tarea'>";
    var div = document.createElement("div");
    div.innerHTML = contenidoInput;
    return div;
}

function main(){
    document.getElementById("idBotonAgregar").addEventListener('click',function(){
        agregarTarea();
    });
    document.getElementById("idBotonModificar").addEventListener('click', function(){
        modificarTarea();
    });
    // document.getElementById("idBotonEliminar").addEventListener('click', function(){
    //     eliminarTarea();
    // })
}