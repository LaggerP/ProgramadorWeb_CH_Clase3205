var camion = [];

var nuevosAutos = [];

function generar_listado_autos(){
    var i = 0;
    if (i <=10){
        var _peso = document.getElementById("idPeso").value;
        var _patente = document.getElementById("idPatente").value;
        var listadoNuevo = new listaAuto(_peso, _patente); //constructor listaAuto
        i++;
        nuevosAutos.push(listadoNuevo); //pushear info de listadoNuevos a var nuevosAutos
    }
    else{
        cargarCamion();
        mostrarCamion();
    }

}

function listaAuto (_peso, _patente){ 
    this.pesoAuto = _peso;
    this.patente = _patente; 
}

function cargarCamion(){
    var pesoCamion = prompt("Ingrese peso del camion:");
    parseInt(pesoCamion);
    var listado= new listado_Camion(pesoCamion); //constructor listado_Camion
    camion.push(listado); //pusheo de listado en var camion
}

//verificar este constructor

//modificar condicion... Se tienen que cargar todos los autos mientras la sumatoria de estos no sean mayor al peso maximo del camion
function listado_Camion(pesoCamion){
    this.peso = pesoCamion;
    this.autos_a_cargar = function () {
        for (var i = 0; this.peso>=(this.peso - nuevosAutos[i].pesoAuto); i++) {
            return nuevosAutos[i];
        }
    }
}

//Retornar la cantidad de autos ingresados en el camion y las patentes.
function mostrarCamion(){
    for (var i = 0; i<camion.length;i++){
        console.log(camion[i], camion.patente);
    }
}
