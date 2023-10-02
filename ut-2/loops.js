const persons = [
  { name: "Juan", age: 25 },
  { name: "María", age: 30 },
  { name: "Carlos", age: 22 },
  { name: "Luisa", age: 28 },
  { name: "Ana", age: 35 },
];

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle FOR
 **/
export const getNameWithFor = () => {
  const arrayName = []; // Crear un array vacío para almacenar los nombres

  for (let index = 0; index < persons.length; index++) {
    const indice = persons[index];
    const nombresAlmacenados = indice.name; // Obtener el nombre de la persona en la posición actual
    arrayName.push(nombresAlmacenados); // Agregar el nombre al array 'names'
  }

  return arrayName; // Devolver el array con los nombres
  
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle DO WHILE
 **/
export const getNameWithDoWhile = () => {
  const arrayName = [];
  let index = 0;
  
  do {
    if (persons[index] && persons[index].name) {
      arrayName.push(persons[index].name);
    }
    index++;
  } while (index < persons.length);

  return arrayName;
  
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle WHILE
 **/
export const getNameWithWhile = () => {
  const arrayName = [];
  let index = 0;
  while (index < persons.length) {
    if (persons[index] && persons[index].name) {
      arrayName.push(persons[index].name);
    }
    index++;
  }
  return arrayName;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle FOR
 **/
export const getAgeWithFor = () => {
  const arrayAge = []; // Crear un array vacío para almacenar las edades

  for (let index = 0; index < persons.length; index++) {
    const indice = persons[index];
    const edadesAlmacenados = indice.age; // Obtener la edad de la persona en la posición actual
    arrayAge.push(edadesAlmacenados); // Agregar la edad al array 
  }

  return arrayAge; // Devolver el array con las edades
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle DO WHILE
 **/
export const getAgeWithDoWhile = () => {
  const arrayAge = [];
  let index = 0;
  
  do {
    if (persons[index] && persons[index].age) {
      arrayAge.push(persons[index].age);
    }
    index++;
  } while (index < persons.length);

  return arrayAge;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle WHILE
 **/
export const getAgeWithWhile = () => {
  const arrayAge = [];
  let index = 0;
  while (index < persons.length) {
    if (persons[index] && persons[index].age) {
      arrayAge.push(persons[index].age);
    }
    index++;
  }
  return arrayAge;
};
