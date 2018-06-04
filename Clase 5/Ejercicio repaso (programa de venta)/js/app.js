//vector que va a incluir a todos los clientes
var clientes = []; 

function getClientes() {
    var arrayClientes = [
        {
            dni: 83847438958,
            nombre: "Alejandra",
            apellido: "Castro",
            edad: 19,
        }, {
            dni: 33444243,
            nombre: "Mariano",
            apellido: "Delgado",
            edad: 38,
        }, {
            dni: 23344343,
            nombre: "Carlos",
            apellido: "Rodriguez",
            edad: 12,
        }, {
            dni: 343244343,
            nombre: "Jaun Diego",
            apellido: "Quintero",
            edad: 8,
        }, {
            dni: 7878686,
            nombre: "Christian",
            apellido: "Prats",
            edad: 27,
        },
    ]
    return arrayClientes.concat(clientes);
}

function crearCliente(){
    var nombre = document.getElementById("idNameObjeto").value;
    var apellido = document.getElementById("idApellidoObjeto").value;
    var edad = document.getElementById("idEdadObjeto").value;
    var dni = document.getElementById("idDniObjeto").value;
    var clienteNuevo = new constructorClientes(dni,nombre,apellido,edad);
    clientes.push(clienteNuevo);
}

function constructorClientes(dni, nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dni = dni;
}

function buscarCliente(dniCliente) {
    /*
     * Busca un cliente en el vector
     * con el DNI indicado
     */
    var clientes = getClientes();
    var clienteSeleccionado = clientes.filter(function (cli) {
        if (cli.dni == dniCliente)
            return cli;
    });

    //return un objeto cliente
    return clienteSeleccionado[0];
}

function mostrarCliente(cliente) {
    ///Muestra el cliente en los objetosHtml
    /////idName idApellido idEdad idDniCliente
    ///// Recibe un cliente y los muestra en los objectos html
    document.getElementById("idName").innerText = cliente.nombre;
    document.getElementById("idApellido").innerText = cliente.apellido;
    document.getElementById("idEdad").innerText = cliente.edad;
    document.getElementById("idDniCliente").innerText = cliente.dni;
}

//Funcion que se dispara con el onclick del Boton "Buscar Cliente"
function establecerCliente() {
    debugger;
    //1. busca el id del cliente seleccionado.
    var dniClienteSeteado = document.getElementById("idDni").value;
    //2. ejecuta buscarCliente(dniCliente) y recibe un objeto cliente
    var clientObj = buscarCliente(dniClienteSeteado);

    //3. ejecuta  mostrarCliente(cliente), pasando el cliente recibido en el paso "2".
    mostrarCliente(clientObj);
}



//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

////////// *FUNCIONES PARA MOSTRAR PRODUCTO* /////////

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

var arrayProductos = [];

function getProducto() {
    var productos = [
        {
            nombreProducto: 'Agua',
            codigo: '1111',
            precioU: 100,
            edadMinima: 10,
        },
        {
            nombreProducto: 'Gaseosa',
            codigo: '2222',
            precioU: 200,
            edadMinima: 20,
        },
        {
            nombreProducto: 'Papas Fritas',
            codigo: '3333',
            precioU: 300,
            edadMinima: 30,
        },
        {
            nombreProducto: 'Maní',
            codigo: '4444',
            precioU: 400,
            edadMinima: 25,
        }
    ]
    return productos.concat(arrayProductos);
}

function crearProducto() {
    var nombreProductos = document.getElementById("idProductoObjeto").value;
    var codigoProductos = document.getElementById("idCodigoObjeto").value;
    var precioUnitario = document.getElementById("idPUObjeto").value;
    var edadMinimaCompra = document.getElementById("idEdadMinObjeto").value;
    var nuevoProducto = new constructorProducto(nombreProductos, codigoProductos, precioUnitario, edadMinimaCompra);
    arrayProductos.push(nuevoProducto);
}

function constructorProducto(nombreProductos, codigoProductos, precioUnitario, edadMinimaCompra) {
    this.nombreProducto = nombreProductos;
    this.codigo = codigoProductos;
    this.precioU = precioUnitario;
    this.edadMinima = edadMinimaCompra;
}

function buscarProducto(codigoProducto) {
    var productos = getProducto();
    var productoSeleccionado = productos.filter(function (producto) {
        if (producto.codigo == codigoProducto){
            return producto;
        }
    });
    return productoSeleccionado[0];
}

function mostrarProducto(producto) {
    document.getElementById("idProducto").innerText = producto.nombreProducto;
    var cantidadProducto = document.getElementById("idCantidad").value;
    document.getElementById("idPU").innerText = producto.precioU;
    document.getElementById("idTotal").innerText = calcularTotal(cantidadProducto, producto);
}

function calcularTotal(cantidadProducto, producto) {
    var total = cantidadProducto * producto.precioU;
    return total;
}

//Funcion que se dispara con el onclick del Boton "Buscar producto"
function establecerProducto() {
    var codigoProductoSeteado = document.getElementById("idCodigo").value;
    var productoObj = buscarProducto(codigoProductoSeteado);
    mostrarProducto(productoObj);
}


