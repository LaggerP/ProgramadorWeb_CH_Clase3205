/**
    Mejorar el modulo IMDB

    Crear un formulario que tenga los campos titulo, descripcion y uno donde poder ingresar un link a la imagen.
    Este formulario tendra que tener un boton ("agregar"), el cual Debera permitir al modulo IMDB agregar una pelicula
    Este formulario Debera tener tambien un boton ("mostrar todos"), el cual Debera permitir al modulo IMDB mostrar todas las peliculas
    Incluir otros botones para poder ordenar por AZ ZA e ID y mostrarlos
    En caso de encontrarse peliculas persistidas tendran que volver a renderizarse
*/

var peliculas = [];

function generarPeliculas() {
    var _id = document.getElementById("idPelicula").value;
    var _pelicula = document.getElementById("idTituloPelicula").value;
    var _descripcion = document.getElementById("idDescripcionPelicula").value;
    var _imgPelicula = document.getElementById("idImagenPelicula").value;
    var listadoNuevo = new listaPelicula(_pelicula, _id, _descripcion, _imgPelicula); 
    peliculas.push(listadoNuevo); //pushear info de listadoNuevos a var pelicuals
}

function listaPelicula(_pelicula, _id, _descripcion, _imgPelicula) {
    for (var i = 0; i < peliculas.length; i++) {
        if (_pelicula == peliculas[i].nombrePelicula) {
            console.log("Pelicula agregada anteriormente");
            var _peliculaRepetida = prompt("Pelicula ya existe. Ingrese una nueva:");
            var _idRepetido = prompt("ID: ");
            var _descripcionPeliculaRepetida = prompt("Descripción: ");
            var _urlImagenRepetida = prompt("Link Imagen: ");

            this.nombrePelicula = _peliculaRepetida;
            this.peliculaId = _idRepetido;
            this.descripcionPelicula = _descripcionPeliculaRepetida;
            this.imagenPelicula = _urlImagenRepetida;
        } 
        else {
            console.log("Pelicula no agregada anteriormente");
            this.nombrePelicula = _pelicula;
            this.peliculaId = _id;
            this.descripcionPelicula = _descripcion;
            this.imagenPelicula = _imgPelicula;
        }
    }
}

function ordenarPeliculas(){
    peliculas.sort(function (a,b){
        if(a.nombrePelicula > b.nombrePelicula){
            return 1;
        }
        if (a.nombrePelicula<b.nombrePelicula){
            return -1;
        }
        return 0; //if 'a' and 'b' are equal return 0
    });
}

function eliminarPelicula(){
    var _nombrePelicula = document.getElementById("idTituloPeliculaEliminar").value;
    for (var i = 0; i<=peliculas.length; i++){
        if (_nombrePelicula == peliculas[i].nombrePelicula){
            delete peliculas[i];
        }
    }
}

function mostrarTodasLasPeliculas(){
    var ul = document.createElement("ul");
    for (var i=0; i<peliculas.length; i++){
        var _nombre = peliculas[i].nombrePelicula;
        var _descripcionMovie = peliculas[i].descripcionPelicula;
        var _imgMovie = peliculas[i].imagenPelicula;
        var li = crear_li_tag(_nombre, _descripcionMovie, _imgMovie);
        ul.appendChild(li);
    }
    document.getElementById("rootAllMovies").appendChild(ul);
}

function crear_li_tag(_nombre, _descripcionMovie, _imgMovie) {
    var contenidoLi = "<h1>" + _nombre + " " + "</h1><p>Descripción: " + _descripcionMovie + " " + "</p>" + "<span><img src=" + _imgMovie + "></span>";
    var li = document.createElement("li");
    li.innerHTML = contenidoLi;
    return li;
}

/**
 * 
 * FUNCIONES PARA MOSTRAR DE 'A' a 'Z'
 * 
 */

function mostrarAZ(){
    var ul = document.createElement("ul");
    for (var i = 0; i < peliculas.length; i++) {
        var _nombre = peliculas[i].nombrePelicula;
        var _descripcionMovie = peliculas[i].descripcionPelicula;
        var _imgMovie = peliculas[i].imagenPelicula;
        ordenarPeliculasAZ();
        var li = crear_li_tagAZ(_nombre, _descripcionMovie, _imgMovie);
        ul.appendChild(li);
    }
    document.getElementById("rootAZMovies").appendChild(ul);
}

function crear_li_tagAZ(_nombre, _descripcionMovie, _imgMovie) {
    var contenidoLi = "<h1>" + _nombre + " " + "</h1><p>Descripción: " + _descripcionMovie + " " + "</p>" + "<span><img src=" + _imgMovie + "></span>";
    var li = document.createElement("li");
    li.innerHTML = contenidoLi;
    return li;
}


function ordenarPeliculasAZ() {
    peliculas.sort(function (a, b) {
        if (a.nombrePelicula > b.nombrePelicula) {
            return 1;
        }
        if (a.nombrePelicula < b.nombrePelicula) {
            return -1;
        }
        return 0; //if 'a' and 'b' are equal return 0
    });
}

/**
 * 
 * FUNCIONES PARA MOSTRAR DE 'Z' a 'A'
 * 
 */
function mostrarZA() {
    var ul = document.createElement("ul");
    for (var i = 0; i < peliculas.length; i++) {
        ordenarPeliculasZA();
        var _nombre = peliculas[i].nombrePelicula;
        var _descripcionMovie = peliculas[i].descripcionPelicula;
        var _imgMovie = peliculas[i].imagenPelicula;
        var li = crear_li_tagZA(_nombre, _descripcionMovie, _imgMovie);
        ul.appendChild(li);
    }
    document.getElementById("rootZAMovies").appendChild(ul);
}

function crear_li_tagZA(_nombre, _descripcionMovie, _imgMovie) {
    var contenidoLi = "<h1>" + _nombre + " " + "</h1><p>Descripción: " + _descripcionMovie + " " + "</p>" + "<span><img src=" + _imgMovie + "></span>";
    var li = document.createElement("li");
    li.innerHTML = contenidoLi;
    return li;
}


function ordenarPeliculasZA() {
    peliculas.sort(function (a, b) {
        if (a.nombrePelicula < b.nombrePelicula) {
            return 1;
        }
        if (a.nombrePelicula > b.nombrePelicula) {
            return -1;
        }
        return 0; //if 'a' and 'b' are equal return 0
    });
}