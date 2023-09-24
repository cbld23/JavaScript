let welcome = "Welcome to the application";
let information = "This is an information message."
let warming = "This is a warming. Be careful.";
let error = "Error! Something went wrong.";

const datosTabla = [
    { Nombre: "John", Edad: 30, Ciudad: "New York" },
    { Nombre: "Jane", Edad: 25, Ciudad: "San Francisco" },
    { Nombre: "Bob", Edad: 40, Ciudad: "Chicago" }
  ];

console.log('%c' + welcome, 'font-weight: bold, font-size: 18px; color: blue');
console.log('%c' + information, ' font-size: 16px, color: green;');
console.warn('%c' + warming, ' font-size: 16px;');
console.error('%c' + error, ' font-size: 16px;');
console.table(datosTabla);

