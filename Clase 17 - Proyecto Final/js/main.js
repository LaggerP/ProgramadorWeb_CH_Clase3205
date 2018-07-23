$(document).ready(function () {
    var canciones;
    getTodosCancion(canciones);

    function getTodosCancion(canciones) {
        $.ajax({
            url: "http://localhost:8080/obtenerTodos/",
            type: "GET",
            dataType: "json",
            success: function (result) {
                canciones = JSON.parse(result);
                console.log(canciones);
                canciones.forEach(function (value) {
                    var img = value.Img;
                    $('#imgId').attr('src', img);
                    //asignacion valores a la tabla
                    //Canción Año Album Score
                    var nuevaSongTable = '<tr data-id="'+value.Id+'"><th scope="row" id="keyId">' + value.Id + '</th><td id="yearId">'+value.Year+'</td><td id="albumId">'+value.Albun + '</td><td id="scoreId"></td></tr>'
                    $('#tablaId').append(nuevaSongTable);
                });
            }
        });
    }

    function obtenerCancionPorID() {
        
    }

    $('#btnNoGusta').click(function () {
        //programar asignacion de score -1 
        var valorScore = $('#scoreId').val();
        if (valorScore == -1 && valorScore != 1) {
            return false;
        } else {
            $('#scoreId').append(-1);
        }
        obtenerCancionPorID();
    });

    $('#btnGusta').click(function () {
        //programar asignacion de score 1 
        var valorScore = $('#scoreId').val();
        if (valorScore == 1 && valorScore != -1) {
            return false;
        } else {
            $('#scoreId').append(1);
        }
        obtenerCancionPorID();
    });
});