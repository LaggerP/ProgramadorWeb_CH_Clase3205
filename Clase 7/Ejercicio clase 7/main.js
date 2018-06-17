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
