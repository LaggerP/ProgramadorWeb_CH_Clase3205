function calculoCantidadTotal() {
    var productosObj = JSON.parse(localStorage.productos);
    for (var i = 0; i < productosObj.length; i++) {
        var totalEntradas = 0;
        var totalSalidas = 0;
        var entradaP = JSON.parse(localStorage["productos entrada"]).filter(function (item) {
            return item.codigoEntrada = productosObj[i].codigoProducto
        })
        entradaP.forEach(function (item) { totalEntradas += item.cantidadEntrada })
        var salidaP = JSON.parse(localStorage["productos salida"]).filter(function (item) {
            return item.codigoSalida = productosObj[i].codigoProducto
        })
        salidaP.forEach(function (item) { totalSalidas += item.cantidadSalida })
        var total = productosObj[i].cantidad = totalEntradas - totalSalidas;
        mostrarTotal(total);
    }
}

function mostrarTotal(total) {
    var ul = document.createElement("ul");
    var li = crear_li_tagTotal(total,);
    ul.appendChild(li);
    document.getElementById("rootMostrar").appendChild(ul);
}

function crear_li_tagTotal(total) {
    var contenidoLi = "<h5>" + total + "</h5>";
    var li = document.createElement("li");
    li.innerHTML = contenidoLi;
    return li;
}


/*********************************SALIDA PRODUCTOS****************************************/

var salidaProducto = [];

function agregarSalidaProducto() {
    debugger;
    var _codigoSalida = document.getElementById("idCodigoSalida").value;
    var _cantidadSalida = document.getElementById("idCantidadSalida").value;
    var _loteSalida = document.getElementById("idLoteSalida").value;
    var nuevoProductoS = new constructorProductoSalida(_codigoSalida, _cantidadSalida, _loteSalida);
    salidaProducto.push(nuevoProductoS);
    var salidaProductoJson = JSON.stringify(salidaProducto);
    localStorage.setItem("productos salida", salidaProductoJson);
    mostrarSalida(_codigoSalida, _cantidadSalida, _loteSalida);
    calculoCantidadTotal();
}


function constructorProductoSalida(_codigoSalida, _cantidadSalida, _loteSalida) {
    this.codigoSalida = _codigoSalida;
    this.cantidadSalida = _cantidadSalida;
    this.loteSalida = _loteSalida;
}

function mostrarSalida(_codigoSalida, _cantidadSalida, _loteSalida) {
    var ul = document.createElement("ul");
    var li = crear_li_tagSalida(_codigoSalida, _cantidadSalida, _loteSalida);
    ul.appendChild(li);
    document.getElementById("rootSalida").appendChild(ul);
}

function crear_li_tagSalida(_codigoSalida, _cantidadSalida, _loteSalida) {
    var contenidoLi = "<div class='jumbotron'><h5>" + _codigoSalida + " " + "</h5><p>Cantidad: " + _cantidadSalida + " Lote: " + _loteSalida + "</p></div>";
    var li = document.createElement("li");
    li.innerHTML = contenidoLi;
    return li;
}

/********************************ENTRADA PRODUCTOS****************************************/

var entradaProducto = [];

function agregarEntradaProducto() {
    var _codigoEntrada = document.getElementById("idCodigoEntrada").value;
    var _cantidadEntrada = document.getElementById("idCantidadProducto").value;
    var _loteEntrada = document.getElementById("idLoteProducto").value;
    var nuevoProductoE = new constructorProductoEntrada(_codigoEntrada, _cantidadEntrada, _loteEntrada);
    entradaProducto.push(nuevoProductoE);
    var entradaProductoJson = JSON.stringify(entradaProducto);
    localStorage.setItem("productos entrada", entradaProductoJson);
    mostrarEntrada(_codigoEntrada, _cantidadEntrada, _loteEntrada);
}


function constructorProductoEntrada(_codigoEntrada, _cantidadEntrada, _loteEntrada) {
    this.codigoEntrada = _codigoEntrada;
    this.cantidadEntrada = _cantidadEntrada;
    this.loteEntrada = _loteEntrada;
}


function mostrarEntrada(_codigoEntrada, _cantidadEntrada, _loteEntrada) {
    var ul = document.createElement("ul");
    var li = crear_li_tagEntrada(_codigoEntrada, _cantidadEntrada, _loteEntrada);
    ul.appendChild(li);
    document.getElementById("rootEntrada").appendChild(ul);
}

function crear_li_tagEntrada(_codigoEntrada, _cantidadEntrada, _loteEntrada) {
    var contenidoLi = "<div class='jumbotron'><h5>" + _codigoEntrada + " " + "</h5><p>Cantidad: " + _cantidadEntrada + " Lote: " + _loteEntrada + "</p></div>";
    var li = document.createElement("li");
    li.innerHTML = contenidoLi;
    return li;
}


/****************************INGRESO PRODUCTOS MASTER*************************************/

var productos = [];

function agregarProducto() {
    var _codigoProducto = document.getElementById("idCodigoProducto").value;
    var _nombreProducto = document.getElementById("idNombreProducto").value;
    var _precioProducto = document.getElementById("idPrecioProducto").value;
    var nuevoProducto = new constructorProducto(_codigoProducto, _nombreProducto, _precioProducto);
    productos.push(nuevoProducto);
    var productoJson = JSON.stringify(productos);
    localStorage.setItem("productos", productoJson);
}


function constructorProducto(_codigoProducto, _nombreProducto, _precioProducto) {
    this.codigoProducto = _codigoProducto;
    this.nombreProducto = _nombreProducto;
    this.precioProducto = _precioProducto;
}