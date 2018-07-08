$(document).ready(function () {
    $('#idBotonAgregar').click(function () {
        agregarTarea();
    })

    $('.classBotonCompletado').click(function () {
        completarTarea(this);
    })
});

var tareas = [];

function agregarTarea(){
    var _id = $('#idTareaNuevo').val();
    var _titulo = $('#idTituloNuevo').val();
    var _descripcion = $('#idDescripcionNuevo').val();
    var nuevaTarea = new constructorTarea(_id, _titulo, _descripcion);
    tareas.push(nuevaTarea);
    //usando localStorage para almacenar en el navegador info cargada en el objeto
    var tareasJSON = JSON.stringify(tareas);
    localStorage.setItem("Nuevas tareas", tareasJSON);
    mostrarTodasLasTareas(_id, _titulo, _descripcion);
}

function constructorTarea(_id, _titulo, _descripcion) {
    this.id = _id;
    this.titulo = _titulo;
    this.descripcion = _descripcion;
}

function mostrarTodasLasTareas(_id, _titulo, _descripcion) {
    var ul = document.createElement("ul");
    var li = crear_li_tag(_id, _titulo, _descripcion);
    $('#root').append(ul.appendChild(li));

    $('.classBotonModificar').click(function () {
        modificarTarea(this);
    })
    $('.classBotonEliminar').click(function () {
        eliminarTarea(this);
    })
    $('.classBotonCompletado').click(function () {
        completarTarea(this);
    })
}

function crear_li_tag(_id, _titulo, _descripcion) {
    var contenidoLi = "<h3>ID: " + _id + "</h3><h5>Título tarea : " + _titulo + " " + "</h5>" + "<p> Descripción: " + _descripcion + "</p> <button type='submit' data-target='#modalModificar' data-toggle='modal' class='btn btn-success classBotonModificar'>Modificar</button> <button type='submit' class='btn btn-danger classBotonEliminar'>Eliminar</button> <button type='submit' class='btn btn-warning classBotonCompletado'>Completado</button><hr/>";
    var li = document.createElement("li");
    $(li).html(contenidoLi);
    return li;
}

function completarTarea(obj){
    debugger;
    $(obj).parent().children().css("text-decoration","line-through");
    $(obj).parent().children().prop('disabled', true);
}   

function eliminarTarea(obj) {
    $(obj).parent().remove();
}

function modificarTarea(obj){
    $('#idButtonModal').click(function(){
        var _nuevoTitulo = $('#idTituloModificado').val();
        var _nuevoDescripcion = $('#idDescripcionModificado').val();
        //busco en el array de LI el primer y segundo hijo [en este caso el segundo hijo es el titulo de la tarea y la descripción]
        $(obj).parent().children().eq(1).empty(); 
        $(obj).parent().children().eq(2).empty();
        $(obj).parent().children()[1].append("Título tarea:  "   + _nuevoTitulo );
        $(obj).parent().children()[2].append("Descripción:  "  + _nuevoDescripcion );
    })
}