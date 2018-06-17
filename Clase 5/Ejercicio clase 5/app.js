var vector = [];
//Leer un vecto vector[INDICE]

//          Cinturon, aire, vidrio electrico

function ConstructorAuto(_marca, _detalle) {
    this.marca = _marca;
    //1
    this.detalles = {
        cinturo: _detalle[0],
        aire: _detalle[1],
        vElectrico: _detalle[2],
    };
    //2
    this.detalles = _detalle; //0 = Cinturones. 1= Aire, 2 = Vidrio electrico
    //3
    this.tieneCintures = _detalle[0];
    this.tieneAire = _detalle[1];
    this.titneVidriosElectricos = _detalle[2];
    var codigoLlaveElectronica = "jshydd67k02jndkdhdyst5293973";

    this.velocidad = function (distancia, tiempo) {
        //Calcular la velocidad
        return distancia / tiempo;
    }

    this.enceder = function (llave) {
        if (llave == codigoLlaveElectronica) {
            //inicia el arrance
            iniciarTrasmicion(2, 2.5);
        } else {
            console.log("Alerta, llave incorrecta");
        }
    }
    var iniciarTrasmicion = function (p01, p02) {
    }
}

function main() {
    var _detalle = [true, false, true];
    var miAuto = new ConstructorAuto("renault", _detalle);
    //1 estilo
    miAuto.detalles.aire;
    //2 Estilo
    miAuto.detalles[1]
    //3 estilo
    miAuto.tieneAire
    var vAuto = miAuto.velocidad(200, 4);
    miAuto.codig
}