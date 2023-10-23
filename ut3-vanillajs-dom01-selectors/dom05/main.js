// Obtener una referencia al primer botón por su ID
let primerBoton = document.getElementById('primerBoton');
let segundoBoton = document.getElementById('segundoBoton');
let tercerBoton = document.getElementById('tercerBoton');
let cuartoBoton = document.getElementById('cuartoBoton');
let quintoBoton = document.getElementById('quintoBoton');
let sextoBoton = document.getElementById('sextoBoton');
let septimoBoton = document.getElementById('septimo');
let ultimoBoton = document.getElementById('ultimo');
// Obtener una lista de todos los botones (excluyendo el último botón)
let botones = document.querySelectorAll('.btn:not(#ultimoBoton)');
// Agregar un evento click al primer botón
primerBoton.addEventListener('click', function() {
    alert('Click event');
});
segundoBoton.addEventListener('mouseenter', function() {
    alert('mouse enter event');
});
tercerBoton.addEventListener('mouseup', function() {
    alert('mouse up event');
});
cuartoBoton.addEventListener('mouseleave', function() {
    alert('mouse leave event');
});
// Agregar el evento mouseenter para mostrar el estilo "danger" al pasar el ratón
quintoBoton.addEventListener('mouseenter', function() {
    quintoBoton.classList.remove('btn-warning'); // Asegurarse de que no haya clases "warning"
    quintoBoton.classList.add('btn-danger'); // Agregar la clase "danger"
});

// Agregar el evento mouseleave para mostrar el estilo "warning" al salir del botón
quintoBoton.addEventListener('mouseleave', function() {
    quintoBoton.classList.remove('btn-danger'); // Asegurarse de que no haya clases "danger"
    quintoBoton.classList.add('btn-warning'); // Agregar la clase "warning"
});
sextoBoton.addEventListener('click', function() {
    document.body.style = 'background-color: red'
});
septimo.addEventListener('click', function() {
    document.body.style = 'background-color: white'
});

// Agregar un evento click al último botón para cambiar los estilos de los otros botones
ultimoBoton.addEventListener('click', function() {
    // Iterar sobre los botones y cambiar sus estilos a negro
    botones.forEach(function(boton) {
        boton.style.backgroundColor = 'black';
        boton.style.color = 'white';
    });
});