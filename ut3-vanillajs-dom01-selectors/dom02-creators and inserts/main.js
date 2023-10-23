// crea un elemento img
let imagen = document.createElement("img");
// establece los atributos src y alt
imagen.src = "img_la.jpg";
imagen.alt = "LA";
// agrega la imagen a un elemento existente en la página
document.body.append(imagen);
// Crear un encabezado h1
let h1 = document.createElement('h1');
h1.textContent = 'This is a Heading';
// Crear un párrafo
let p1 = document.createElement('p');
p1.textContent = 'This is a paragraph';
let p2 = document.createElement('p');
p2.textContent = 'This is a another paragraph';
// Agregar los elementos al cuerpo del documento
document.body.append(imagen, h1, p1, p2);
//document.body.append(h1);
//ocument.body.append(p1);
//document.body.append(p2);