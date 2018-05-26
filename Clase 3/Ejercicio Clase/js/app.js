/**
 * La función debe pedirle al usuario el nombre y el apellido y mostrar ambos en    
 * consola, junto con un saludo. Ej: `Hola Juan Perez`, llamar a la función para 
 * probarla.
 **/

function pedir_mostrar_nombre (nombre,apellido){
    console.log("Hola "+ nombre + " " + apellido);
}

var nombre = prompt("Ingrese su nombre: ");
var apellido = prompt ("Ingrese su apellido: ");

pedir_mostrar_nombre(nombre,apellido);


/**
 * La función tiene que recibir como parámetro un día de la semana y mostrar en 
 * consola `Es día hábil`, `Es día de fin de semana` u `No es un día valido` 
 * según corresponda. Pedirle al usuario que ingrese un día tres veces y llamar a 
 * la función cada vez para mostrar el resultado en consola. La función tiene que 
 * poder reconocer los días con y sin tilde.
 **/

 function comprobarDia (dia){
     if (dia == "Lunes" || dia == "Martes" || dia == "Miercoles" || dia == "Miércoles" || dia == "Jueves" || dia == "Viernes"){
         console.log("Es dia habil");
     } else if (dia == "Sabado" || dia == "Sábado" || dia == "Domingo"){
         console.log("Es dia de fin de semana");
     }else{
         console.log("No es un dia valido");
     }
 }

 for (var i =0; i<=3; i++){
     var dia = prompt("Ingrese el nombre del dia de hoy: ");
     comprobarDia(dia);
 }

