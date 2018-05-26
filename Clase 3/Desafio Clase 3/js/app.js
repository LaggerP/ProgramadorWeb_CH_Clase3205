function sumaNumeros(numero, numero2){
    var suma = numero + numero2;
    console.log("La suma entre " + numero + " y " + numero2 + " es igual a " +suma);
}

function restaNumeros(numero, numero2){
    var resta = numero + numero2;
    console.log("La resta entre " + numero + " y " + numero2 + " es igual a " + resta);
}

function multiplicacionNumeros(numero, numero2){
    while (numero === 0 || numero2 === 0){
        if (numero === 0) {
            var numero = prompt("Ingrese primer numero: ");
            numero = parseInt(numero, 10);
        } else if (numero2 === 0) {
            var numero2 = prompt("Ingrese segundo numero: ");
            numero2 = parseInt(numero2, 10);
        }
    }
    var multiplicacion = numero * numero2;
    console.log("La multiplicacion entre " + numero + " y " + numero2 + " es igual a " + multiplicacion);
}

function dividirNumeros(numero, numero2){
    while (numero === 0 || numero2 === 0) {
        if (numero === 0) {
            var numero = prompt("Ingrese primer numero: ");
            numero = parseInt(numero, 10);
        } else if (numero2 === 0) {
            var numero2 = prompt("Ingrese segundo numero: ");
            numero2 = parseInt(numero2, 10);
        }
    }
    var division = numero / numero2;
    console.log("La division entre " + numero + " y " + numero2 + " es igual a " + division);
}

function calculadora() {
    var numero = prompt("Ingrese primer numero: ");
    var numero2 = prompt("Ingrese segundo numero: ");
    numero = parseInt(numero, 10);
    numero2 = parseInt(numero2, 10);
    var opcion = prompt("1- Suma | 2- Resta | 3- Multiplicacion | 4- Division ");
    opcion = parseInt(opcion, 10);
    if (opcion === 1) {
        sumaNumeros(numero, numero2);
    } else if (opcion === 2) {
        restaNumeros(numero, numero2);
    } else if (opcion === 3) {
        multiplicacionNumeros(numero, numero2);
    } else if (opcion === 4) {
        dividirNumeros(numero, numero2);
    }
}

// [Violation] 'readystatechange' handler took xxx ms
// VIOLACION GENERADA POR SOBRECARGA DE FUNCIONES
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        calculadora();
    }
}