//- Pedir al usuario mediante `prompt` que ingrese un día de la semana y mostrar en consola un mensaje si el día es fin de semana, hábil o no es un día valido.
var dia = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

var diaSemana = prompt("Ingrese el dia de la semana de hoy:");
diaSemana = diaSemana.toLowerCase();

switch (dia.indexOf(diaSemana)) {      
    case 0:
        alert("Dia semana - Lunes");
        console.log("Dia de semana");
        break;
    case 1:
        alert("Dia semana - Martes");
        console.log("Dia de semana");
        break;
    case 2:
        alert("Dia semana - Miercoles");
        console.log("Dia de semana");
        break;
    case 3:
        alert("Dia semana - Jueves");
        console.log("Dia de semana");
        break;
    case 4:
        alert("Dia semana - Viernes");
        console.log("Dia de semana");
        break;
    case 5:
        alert("Dia semana - Sabado");
        console.log("Dia de fin semana");
        break;
    case 6:
        alert("Dia semana - Domingo");
        console.log("Dia de fin semana");
        break;
}