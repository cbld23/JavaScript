const body = document.querySelector('body');
body.classList.add('p-3', 'm-0', 'border-0', 'bd-example');

const div = document.createElement("div");
div.classList.add('list-group');


const link1 = document.createElement('link');
link1.rel = 'stylesheet'; // Establecer la relación como "stylesheet"
link1.type = 'text/css';
link1.href = '/JavaScript/ut3-vanillajs-dom01-selectors/dom04/node_modules/bootstrap/dist/css/bootstrap.min.css'; // Especificar la ruta al archivo CSS
document.head.appendChild(link1);
const link2 = document.createElement('link');
link2.rel = 'stylesheet'; // Establecer la relación como "stylesheet"
link2.type = 'text/css';
link2.href = 'https://getbootstrap.com/docs/5.2/assets/css/docs.css'; // Especificar la ruta al archivo CSS
document.head.appendChild(link2);





// Array de objetos con propiedades de los elementos <a>
const elementosA = [
    {
      text: 'A simple default group item ',
      href: '#',
      classes: ['list-group-item', 'list-group-item-action']
    },
    {
      text: 'A simple primary list group item ',
      href: '#',
      classes: ['list-group-item', 'list-group-item-action', 'list-group-item-primary']
    },
    {
       text: 'A simple secondary list group item',
       href: '#',
       classes: ['list-group-item', 'list-group-item-action', 'list-group-item-secondary']  
    },
    {
      text: 'A simple success group item ',
      href: '#',
      classes: ['list-group-item', 'list-group-item-action', 'list-group-item-success']
    },
    {
      text: 'A simple danger list group item ',
      href: '#',
      classes: ['list-group-item', 'list-group-item-action', 'list-group-item-danger']
    },
    {
       text: 'A simple warming group item ',
       href: '#',
       classes: ['list-group-item', 'list-group-item-action', 'list-group-item-warming']  
    },
    {
      text: 'A simple info group item ',
      href: '#',
      classes: ['list-group-item', 'list-group-item-action', 'list-group-item-info']
    },
    {
      text: 'A simple light list group item ',
      href: '#',
      classes: ['list-group-item', 'list-group-item-action', 'list-group-item-light']
    },
    {
       text: 'A simple dark group item ',
       href: '#',
       classes: ['list-group-item', 'list-group-item-action', 'list-group-item-dark']  
    }
    
  ];
  
  // Bucle para crear y agregar los elementos <a>
  elementosA.forEach((elemento) => {
    const a = document.createElement('a');
    a.classList.add(...elemento.classes);
    a.href = elemento.href;
    a.textContent = elemento.text;
    div.appendChild(a);
  });
  
  // Agregar el div al cuerpo del documento
  body.appendChild(div);

  
  
  
  
  
  


