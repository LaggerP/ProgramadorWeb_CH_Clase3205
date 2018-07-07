function ConstructorAlumnos(_dni,_nombre, _notas) {
    this.Dni = _dni;
    this.Nombre = _nombre;
    this.Notas = _notas;
}

function agregarNombre(alumno) {

    var alumnos = [];
    try {
        if (alumno == undefined)
            throw("El alumno es requerido");
        //nombre = nombre.toString().toUpperCase();
        if (localStorage.alumnos != undefined) {
            //obtenemos la variable del localstorage
            var miVector = localStorage.getItem("alumnos");
            alumnos = JSON.parse(miVector);
            //agregamos el nuevo alumno
            alumnos.push(alumno);
            //guardamos en el localstorage

        } else
            //Creamos el localstorage con el primer valor
            alumnos.push(alumno);

        var alumnoJson = JSON.stringify(alumnos);
        localStorage.setItem("alumnos", alumnoJson);

    } catch (e) {
        console.log("Error en funcion 'agregarNombre'. " + e);
    }
    mostrarAlumnos();
}

function mostrarAlumnos() {
    console.log(JSON.parse(localStorage.getItem("alumnos")));
}

function iniciar(_dni, _nombre, _notas) {
    var alumno = new ConstructorAlumnos(_dni, _nombre, _notas);
    agregarNombre(alumno);
}


function validarCampo(obj_a_validar){
    if (obj_a_validar.value == ""){
        alert("Valor invalido")
    } else{
        validarTodosCampos();
    }
}

function validarTodosCampos(){
    var nombre = document.getElementById("inputIdNombre").value;
    var apellido = document.getElementById("inputIdApellido").value;
    var mail = document.getElementById("inputIdEmail").value;
    if (nombre != "" && apellido != "" && mail != ""){
        var boton = document.getElementById("botonValidador");
        boton.disabled = false;
    }
}

function main(){
    document.getElementById("inputIdNombre").addEventListener('blur', function(){
        validarCampo(this);
    })
    document.getElementById("inputIdApellido").addEventListener('blur', function () {
        validarCampo(this);
    })
    document.getElementById("inputIdEmail").addEventListener('blur', function () {
        validarCampo(this);
    })
}




