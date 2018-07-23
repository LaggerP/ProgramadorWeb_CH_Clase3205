/*
    Hay que hacer una pagina en donde nos permita agregar un artículo(un text area) y nos permita seleccionar una categoría antes de subirla. Según la categoría que nosotros seleccionemos cuando lo agreguemos, este articulo se muestra por pantalla con ciertos estilos ya predeterminados.

    Una vez ya subido y mostrado por pantalla tenemos que codificar la funcionalidad de permitir al usuario poder generar un comentario de dicho artículo y después una vez que este comentario fue realizado mostrarlo
*/

$(document).ready(function(){

    //form code
    $('#btnIdAgregar').click(function(){
        var _titulo = $("#tituloId").val();
        var _autor = $("#autorId").val();
        var _articulo = $("#articuloId").val();
        var _categoria = $("#categoriaId").val();
        var _linkImg = $("#imgId").val();
        agregarNuevaCard(_titulo,_autor, _articulo, _categoria, _linkImg);
        var nuevaCard ='<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 articulo"><div class="card mb-3"><img class="card-img-top" src="'+_linkImg+'" alt="Card image cap"><div class = "card-body"><h5 class="card-title">'+_titulo+' </h5><p class="card-text">'+_articulo+'</p><p class ="card-text"><small class="text-muted">Autor:'+_autor+'</small><p class="text">Deja tu comentario</p></p></div></div></div>';
        $('#seccionCard').append(nuevaCard);
    });
    agregarNuevaCard(_titulo, _autor, _articulo, _categoria, _linkImg){

    }

    //create card with the information from form


    //animation toggle form
    $('#btnNuevoArticulo').click(function(){
        debugger;
        $('#formNuevoArticulo').toggle(800);
    });
});


/**
 * 
    <div class = "card mb-3" >
        <img class="card-img-top" src="https://images.unsplash.com/photo-1485841890310-6a055c88698a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4c9c2def3becce37f2ff57b7c7454a11&auto=format&fit=crop&w=800&q=60" alt="Card image cap">
        <div class ="card-body">
        <h5 class="card-title"> Card title </h5> <p class="card-text"> This is a wider card with supporting text below as a natural lead - in to additional content.This content is a little bit longer. </p> <p class="card-text">
        <small class = "text-muted" > Last updated 3 mins ago < /small> <small class = "text"> Deja tu comentario </small> </p> 
        </div> 
    </div>
 */