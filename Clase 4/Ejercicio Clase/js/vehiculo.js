function main() {
    //Carga de vehiculo
    var vehiculos = cargarDatosObj();
    for (var i = 0; i < vehiculos.length; i++) {
        var obj = document.getElementById("Modelo" + i);
        if (obj) {
            obj.getElementsByTagName("div")[0].innerText = vehiculos[i].Auto;
            obj.getElementsByTagName("div")[1].innerText = vehiculos[i].Marca;
            obj.getElementsByTagName("div")[2].innerText = vehiculos[i].Estilo;
            obj.getElementsByTagName("div")[3].innerText = vehiculos[i].Motor;
            obj.getElementsByTagName("div")[4].innerText = vehiculos[i].Puertas;
            obj.getElementsByTagName("div")[5].innerText = vehiculos[i].Rodado;
            obj.getElementsByTagName("div")[6].innerText = vehiculos[i].Descapotable;
        }
    }
}

function cargarDatos() {
    var vechiculos = [];
    //.push inyecta un elemento al vector.
    vechiculos.push(["Clio", "Renault", "hatchback", 1.8, 4, 21, true]);
    vechiculos.push(["Cruze", "GM", "sedan", 1.8, 4,19, false]);
    vechiculos.push(["Cruze", "GM", "hatchback", 2.2, 4, 15, false]);
    vechiculos.push(["Aventador", "Lamborghini", "deportivo", 6.5, 2, 13, true]);

    return vechiculos;
}

function cargarDatosObj() {
    var vechiculos = [];
    var auto1 = {
        Auto: "Clio",
        Marca: "Renault",
        Estilo: "hatchback",
        Motor: 1.8,
        Puertas: 4,
        Rodado: 21,
        Descapotable: true,
    }
    var auto2 = {
        Auto: "Cruze",
        Marca: "GM",
        Estilo: "sedan",
        Motor: 1.8,
        Puertas: 4,
        Rodado: 19,
        Descapotable: false,
    }
    var auto3 = {
        Auto: "Cruze",
        Marca: "GM",
        Estilo: "sedan",
        Motor: 2.2,
        Puertas: 4,
        Rodado: 15,
        Descapotable: false,
    }
    var auto4 = {
        Auto: "Aventator",
        Marca: "Lamborghini",
        Estilo: "deportivo",
        Motor: 6.5,
        Puertas: 2,
        Rodado: 13,
        Descapotable: true,
    }
    //.push inyecta un elemento al vector.
    vechiculos.push(auto1);
    vechiculos.push(auto2);
    vechiculos.push(auto3);
    vechiculos.push(auto4);

    return vechiculos;
}
