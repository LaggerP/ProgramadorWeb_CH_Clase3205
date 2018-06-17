var students = [
    {
        firstName: 'Laura',
        lastName: 'Lopez',
        dni: 45678987,
        address: {
            street: 'Cucha cucha',
            number: 1234
        },
        examResults: [7, 5, 6, 4, 3, 2, 8]
    },
    {
        firstName: 'Cooper',
        lastName: 'Marshall',
        dni: 45678989,
        address: {
            street: 'La Pampa',
            number: 6754
        },
        examResults: [3, 4, 5, 6, 7, 3, 4, 5]
    },
    {
        firstName: 'Ines',
        lastName: 'Sotomayor',
        dni: 45678956,
        address: {
            street: 'La vía',
            number: 3737
        },
        examResults: [3, 8, 7, 5, 6, 4, 5, 4, 3]
    },
    {
        firstName: 'Matias',
        lastName: 'Trunzo',
        dni: 45678943,
        address: {
            street: 'Zapiol',
            number: 1819
        },
        examResults: [4, 3, 4, 5, 5, 3]
    },
    {
        firstName: 'Pablo',
        lastName: 'Callegari',
        dni: 45678963,
        address: {
            street: 'Juan b. Justo',
            number: 7654
        },
        examResults: [1, 2, 1, 3, 2, 4, 2, 4, 5]
    },
    {
        firstName: 'Daniela',
        lastName: 'Picciotto',
        dni: 45678983,
        examResults: [10, 8, 9, 7, 8, 7, 10]
    }
] 

function main(){
    debugger;
    var ul = document.createElement("ul");
    for (var i =0; i<students.length;i++){
        var _nombre = students[i].firstName; 
        var _apellido = students[i].lastName;
        var _dni = students[i].dni;
        var _notas = students[i].examResults;  
        var _promedio = calcularPromedio(_notas);
        var li = crear_li_tag(_nombre, _apellido, _dni, _promedio);  
        ul.appendChild(li);
    }
    document.getElementById("root").appendChild(ul);
}

function calcularPromedio (_notas){
    var totalNotas =0;
    //recorro el array notas y las sumo todas.
    _notas.forEach(function(element){
        totalNotas += element;
    });
    //obtengo el promedio
    return totalNotas/_notas.length;
}

function crear_li_tag(_nombre,_apellido,_dni,_promedio){
    //insertar H1 con nombre y apellido
    var nombreApellidoTag = document.createElement("h1");
    var nombreApellidoTexto = document.createTextNode(_nombre + " " + _apellido);
    nombreApellidoTag.appendChild(nombreApellidoTexto);
    //insertar p con dni
    var dniTag = document.createElement("p");
    var dniText = document.createTextNode("DNI: " + _dni);
    dniTag.appendChild(dniText);
    //insertar p con promedio
    var promedioTag = document.createElement("p");
    var promedioText = document.createTextNode("Promedio: " + _promedio);
    promedioTag.appendChild(promedioText);

    var li = document.createElement("li");
    li.appendChild(nombreApellidoTag);
    li.appendChild(dniTag);
    li.appendChild(promedioTag);
    //agregar numero dni como atributo id
    li.setAttribute("id", _dni);
    li.setAttribute("data-nombre", _nombre);
    li.setAttribute("data-apellido", _apellido);

    return li;
}

function crear_li_tag2(_nombre, _apellido, _dni, _promedio){
    var contenidoLi = "<h1>"+ _nombre +""+ _apellido +"</h1><p>DNI: " + _dni + "</p></p>Promedio: " + _promedio + "</p>";

    var li = document.createElement("li");
    li.innerHTML = contenidoLi;
    return li;
}