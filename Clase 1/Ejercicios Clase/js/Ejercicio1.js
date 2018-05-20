//- Pedir nombre mediante`prompt` y mostrarlo en consola junto con algún texto de saludo.Ej: `Hola Juan!`
var nombre = prompt("Ingrese nombre:");
alert("Hola " + nombre);
console.log("Hola " + nombre);

//- Pedir un numero mediante`prompt`, parsearlo, sumarlo a otro que este en una variable y luego mostrar el resultado en consola.
var numeroSuma1 = 10;
var numeroSuma2 = prompt("Ingrese un numero a sumar:");
numeroSuma2 = parseInt(numeroSuma2, 10);
var resultadoSuma = numeroSuma1 + numeroSuma2;
alert("Resultado " + resultadoSuma);
console.log("Resultado " + resultadoSuma);

//- Pedir un numero mediante`prompt`, parsearlo, restarlo a otro que este en una variable y luego mostrar el resultado en consola.
var numeroResta1 = 20;
var numeroResta2 = prompt("Ingrese numero a restar:");
numeroResta2 = parseInt(numeroResta2, 10);
var resultadoResta = numeroResta1 - numeroResta2;
alert("Resultado " + resultadoResta);
console.log("Resultado " + resultadoResta);

//- Pedir un numero mediante`prompt`, luego otro, parsearlos y sumarlos, luego mostrar el resultado en consola.
var numeroSumaParse = prompt("Ingrese numero 1: ");
var numeroSumaParse2 = prompt("Ingrese numero 2: ");
numeroSumaParse = parseInt(numeroSumaParse, 10);
numeroSumaParse2 = parseInt(numeroSumaParse2, 10);
var resultadoParse = numeroSumaParse + numeroSumaParse2;
alert("Resultado " + resultadoParse);
console.log("Resultado " + resultadoParse);