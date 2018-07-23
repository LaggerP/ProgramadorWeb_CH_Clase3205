$(document).ready(function(){
    var productos = {};
    getProductos();

    function getProductos(){
        $.ajax({
            url: "http://18.188.5.236:3000/pruebas/",
            type: "GET",
            success: function (result) {
                productos = result.data;
                console.log(productos);
                $.each(productos, function (key, value) {
                    $('#ulData').append("<li>"+value.nombre+"</li>");
                });
            }
        });
        
    }
    
    $('#btnAgregar').click(function(){

        var productoNuevo = {
            nombre: $('#inNombre').val(),
            price: $('#inNum').val(),
            description: $('#inDesc').val(),
        };
        $.ajax({
            url: "http://18.188.5.236:3000/pruebas/",
            type: 'POST',
            data: productoNuevo,
            success: function(res){
                productos.push(res.data);
                $('#ulData').append("<li>" + res.data.nombre + "</li>");
            }

        })
    })
    
});