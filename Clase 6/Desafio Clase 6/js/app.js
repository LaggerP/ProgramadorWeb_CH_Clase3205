/**
 *  Array de películas:
 * 
        Crear un array de peliculas

        Crear una funcion que agrege una pelicula al array de peliculas
        La pelicula debera tener un ID y un Titulo
        Crear una funcion que evalue antes de agregar que la pelicula no fue ingresada previamente
        Crear una funcion que ordene las peliculas por Titulo y por ID
        Crear una funcion que elimine una pelicula por su ID.
*/

var peliculas = [];

function generarPeliculas() {
    var _id = document.getElementById("idPelicula").value;
    var _pelicula = document.getElementById("idTituloPelicula").value;
    var listadoNuevo = new listaPelicula(_pelicula, _id); 
    peliculas.push(listadoNuevo); //pushear info de listadoNuevos a var pelicuals
    ordenarPeliculas();
}

function listaPelicula(_pelicula, _id) {
    for (var i = 0; i < peliculas.length; i++) {
        if (_pelicula == peliculas[i].nombrePelicula) {
            console.log("Pelicula agregada anteriormente");
        } 
        else {
            console.log("Pelicula no agregada anteriormente");
            this.nombrePelicula = _pelicula;
            this.peliculaId = _id;
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


