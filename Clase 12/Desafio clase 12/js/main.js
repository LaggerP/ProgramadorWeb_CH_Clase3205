/*
    Hay que hacer una pagina en donde nos permita agregar un artículo(un text area) y nos permita seleccionar una categoría antes de subirla. Según la categoría que nosotros seleccionemos cuando lo agreguemos, este articulo se muestra por pantalla con ciertos estilos ya predeterminados.

    Una vez ya subido y mostrado por pantalla tenemos que codificar la funcionalidad de permitir al usuario poder generar un comentario de dicho artículo y después una vez que este comentario fue realizado mostrarlo
*/

$(document).ready(function(){

    //form code
    $('#btnIdAgregar').click(function(){
        debugger;
        var _titulo = $("#tituloId").val();
        var _autor = $("#autorId").val();
        var _articulo = $("#articuloId").val();
        var _categoria = $("#categoriaId").val();
        var _linkImg = $("#imgId").val();
        var nuevaCard = '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 articulo style="background:black;"><div class="card mb-3"><img class="card-img-top" src="' + _linkImg + '" alt="Card image cap"><div class = "card-body"><h5 class="card-title">' + _titulo + ' </h5><p class="card-text">' + _articulo + '</p><p class ="card-text"><small class="text-muted">Autor:' + _autor + '</small></br><button id="idbtnComentario" type="button" class="btn btn-link btn-sm">Dejar un comentario</button></p><div><h6>Comentarios:</h6><div id="TODOScomentarios"></div><div id="formComentarios" style="display:none"><div class="form-group"><label>Escriba comentario:</label><textarea class="form-control" id="comentarioId" rows="2"></textarea><br/><button type="button" id="btnAgregarComentario" class="btn btn-md btn-success btn-block">Agregar comentario</button></div></div></div></div></div></div>';
        $('#seccionCard').append(nuevaCard);
        $('#idbtnComentario').click(function(){
            $('#formComentarios').toggle(800);
            $('#btnAgregarComentario').click(function () {
                var _comentario = $('#comentarioId').val();
                $('#TODOScomentarios').append('<br/>',_comentario);
            });
        });
    });
   
    //animation toggle form
    $('#btnNuevoArticulo').click(function(){
        debugger;
        $('#formNuevoArticulo').toggle(800);
    });
});
