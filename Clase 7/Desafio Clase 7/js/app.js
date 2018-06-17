/**
    Mejorar el módulo tipo IMDB

    El modulo Debera, de forma privada o publica, mostrar/renderizar las peliculas en el DOM
    El objeto pelicula ahora Debera tener la propiedad descripcion e imagen
    El titulo Debera ser un H1, la descipcion un P y la imagen un img
*/

var peliculas = [];

function generarPeliculas() {
    var _id = document.getElementById("idPelicula").value;
    var _pelicula = document.getElementById("idTituloPelicula").value;
    var _descripcion = document.getElementById("idDescripcionPelicula").value;
    var _imgPelicula = document.getElementById("idImagenPelicula").value;
    var listadoNuevo = new listaPelicula(_pelicula, _id, _descripcion, _imgPelicula); 
    peliculas.push(listadoNuevo); //pushear info de listadoNuevos a var pelicuals
    ordenarPeliculas();
    mostrarPeliculas(_pelicula, _id, _descripcion, _imgPelicula);
}

function listaPelicula(_pelicula, _id, _descripcion, _imgPelicula) {
    for (var i = 0; i < peliculas.length; i++) {
        if (_pelicula == peliculas[i].nombrePelicula) {
            console.log("Pelicula agregada anteriormente");
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

function mostrarPeliculas(_pelicula, _id, _descripcion, _imgPelicula){
    var ul = document.createElement("ul");
    var li = crear_li_tag(_pelicula, _id, _descripcion, _imgPelicula);
    ul.appendChild(li);
    document.getElementById("root").appendChild(ul);
}

function crear_li_tag(_pelicula, _id, _descripcion, _imgPelicula) {
    var contenidoLi = "<h1>" + _pelicula + " " + "</h1><p>Descripción: " + _descripcion + " " + _imgPelicula + "</p>";
    var li = document.createElement("li");
    li.innerHTML = contenidoLi;
    return li;
}