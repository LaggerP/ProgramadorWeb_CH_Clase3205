function promedioArray(examResults){
    var largoArray = examResults.length;
    var suma = 0;
    for (var i = 0; i<largoArray; i++){
        suma = suma + examResults[i];
    }
    return suma/largoArray;
}

function mostrarAlumno(student){
    console.log(student);
    console.log("Nombre: " + student.firstName);
    console.log("Apellido: " + student.lastName);
    console.log("DNI: " + student.dni);
    var promedio = promedioArray(student.examResults);
    console.log("Promedio: " + promedio);
}

function buscarAlumno(studentList){
    var alumno = prompt("Ingrese nombre del alumno a buscar: ");
    for (var i = 0; i<studentList.length; i++){
        if (alumno === studentList[i].firstName){
            var resultado = mostrarAlumno(studentList[i]);
            console.log(resultado);
        } else{
            console.log("El alumno no existe");
        }
    }
}

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        //Crear una función que calcule el promedio de un Array
        var examResults = [7, 5, 6, 4, 3, 2, 8];
        //Crear una función que muestre en consola un alumno
        var student = {
            firstName: 'Juan',
            lastName: 'Pérez',
            dni: 45678987,
            examResults: [7, 5, 6, 4, 3, 2, 8]
        }
        //Crear una función que permita buscar un alumno
        var studentsList = [
            {
                firstName: 'Juan',
                lastName: 'Pérez',
                dni: 45678987,
                examResults: [7, 5, 6, 4, 3, 2, 8]
            },
            {
                firstName: 'Ana',
                lastName: 'Fernandez',
                dni: 45678989,
                examResults: [3, 4, 5, 6, 7, 3, 4, 5]
            },
            {
                firstName: 'Pedro',
                lastName: 'Mármol',
                dni: 45678956,
                examResults: [3, 8, 7, 5, 6, 4, 5, 4, 3]
            },
            {
                firstName: 'Daniela',
                lastName: 'Hernandez',
                dni: 45678983,
                examResults: [10, 8, 9, 7, 8, 7, 10]
            }
        ]
        var opcion = prompt("1- Mostrar Alumno | 2- Buscar Alumno:");
        opcion = parseInt(opcion, 10);
        if (opcion === 1){
            mostrarAlumno(student);
        } else if (opcion === 2){
            buscarAlumno(studentsList);
        }
    }
}

