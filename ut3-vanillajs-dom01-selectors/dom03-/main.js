const body = document.querySelector('body');
const div = document.createElement("div");
const h1 = document.createElement('h1');
const br1 = document.createElement("br");
const br2 = document.createElement("br");
const br3 = document.createElement("br");
const br4 = document.createElement("br");
const p1 = document.createElement('p');
const form = document.createElement("form");
const label1 = document.createElement("label");
const input1 = document.createElement("input");
const label2 = document.createElement("label");
const input2 = document.createElement("input");
const label3 = document.createElement("label");
const input3 = document.createElement("input");
const input4 = document.createElement("input");
const link = document.createElement('link');
link.rel = 'stylesheet'; // Establecer la relación como "stylesheet"
link.type = 'text/css'; // Establecer el tipo de archivo CSS
link.href = 'style.css'; // Especificar la ruta al archivo CSS
document.head.appendChild(link);

input3.type = 'text';
h1.textContent = 'The input min and max attributes';
p1.textContent = 'The min and max attributes specify the minimum and maximum values for an input element';
form.setAttribute("action", "/action_page.php");
label1.textContent = "Enter a day before 1980-01-01";
input1.setAttribute("type", "id", "name", "max");
input1.type = 'date';
input1.id = 'datemax'; 
input1.name = 'datemax'; 
input1.max = '1979-12-31'; 
label2.textContent = "Enter a day after 2000-01-01";
input2.setAttribute("type", "id", "name", "min");
input2.type = 'date';
input2.id = 'datemin'; 
input2.name = 'datemin'; 
input2.min = '2000-01-01'; 
label3.textContent = "Quantity ( between 1 and 5)";
input3.setAttribute("number", "id", "name","min", "max");
input3.type = 'number';
input3.id = 'quantity'; 
input3.name = 'quantity'; 
input3.min = '1';
input3.max = '5'; 
input4.setAttribute("type", "value");
input4.type = "submit";
input4.value = 'Submit'; 





// Agregar elementos al formulario con espacios entre ellos
form.appendChild(label1);
form.appendChild(input1);
form.appendChild(br1);
br1.cloneNode(); // Salto de línea
form.appendChild(label2);
form.appendChild(input2);
//br1.cloneNode();
br2.cloneNode();
//form.appendChild(br2);
form.appendChild(br2); // Salto de línea
form.appendChild(label3);
form.appendChild(input3);
//br1.cloneNode();
br3.cloneNode();
//form.appendChild(br3);
form.appendChild(br3);
form.appendChild(input4);
//br1.cloneNode();

// Agregar el formulario al div contenedor
div.append(h1, p1, form , br1.cloneNode(), br2.cloneNode());

// Agregar el div contenedor al cuerpo del documento
body.appendChild(div);