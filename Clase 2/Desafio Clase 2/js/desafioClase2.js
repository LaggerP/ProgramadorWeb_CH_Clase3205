/*
        Usando el Array de ejemplo como dato inicial crear un programa que lo recorra e identifique si el día es fin de semana, día hábil o no es un día valido. El programa tiene que poder reconocer los días con y sin tilde.
 */

var daysOfTheWeek = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Sabado',
    'Domingo',
    'Pato'
]
 
//Esta funcion retorna numero de posición en donde se encuentra el elemento buscado
function buscarDia(element) {
    return element === dia;
}

var dia = prompt("Ingrese dia a buscar:");

//posicionResultado posee la posición del elemento buscado
var posicionResultado = daysOfTheWeek.findIndex(buscarDia);

for (var i = 0; i < daysOfTheWeek.length; i++) {

    if (posicionResultado <= 5){
        alert("Dia semana");
        console.log("Dia de semana");
        console.log(posicionResultado);
        break;
    }
    if (posicionResultado >= 6 && posicionResultado <=8) {
        alert("Dia fin de semana");
        console.log("Dia fin de semana"); 
        console.log(posicionResultado);
        break;
    }
    if (posicionResultado >8){
        alert("Dia no valido");
        console.log("Dia no valido");
        console.log(posicionResultado);
        break;
    }
}



