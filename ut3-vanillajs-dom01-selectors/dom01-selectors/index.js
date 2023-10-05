const elementId = " - > get via getElementById";
const elementClassName = " - > get via getElementsByClassName";
const elementByName = " - > get via getElementsByName";
const elementByTagName = " - > get via getElementsByTagName";
const elementQuery = " - > get via querySelector";
const elementQueryAll = " - > get via querySelectorAll";

const titulo = document.getElementById("titulo");
console.log(titulo.innerText + elementId);

const parrafo = document.getElementsByClassName("parrafo");
// Recorrer la lista de elementos y obtener el texto de cada uno
for (let i = 0; i < parrafo.length; i++) {
    let textoParrafo = parrafo[i].textContent;
    console.log(textoParrafo + elementClassName);
  }

let nombreInputs = document.getElementsByName("nombre");
let apellidoInputs = document.getElementsByName("apellido");
console.log(nombreInputs[0].getAttribute("placeholder") + elementByName);
console.log(apellidoInputs[0].getAttribute("placeholder") + elementByName);

// Obtener todos los elementos <li>
let elementosLi = document.getElementsByTagName("li");

// Iterar a través de la lista de elementos <li> y mostrar su texto en la consola
for (let i = 0; i < elementosLi.length; i++) {
    let textoLi = elementosLi[i].textContent;
  console.log(textoLi + elementByTagName);
}

// Obtener el elemento <h1> por su id
let tituloElement = document.querySelector("#titulo");

// Obtener el texto dentro del elemento <h1> y mostrarlo en la consola
let textoTitulo = tituloElement.textContent;
console.log(textoTitulo +  elementQuery);

// Obtener todos los elementos <p> con la clase "parrafo" dentro del elemento con la clase "contenedor"
var parrafos = document.querySelectorAll(".contenedor .parrafo");

// Iterar a través de la lista de elementos <p> y mostrar su texto en la consola
for (let parrafo of parrafos) {
  console.log(parrafo.textContent + elementQueryAll);
}
