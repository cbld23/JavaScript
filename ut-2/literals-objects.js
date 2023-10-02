/**************************************************/
/***************Person literal object***************/
/**************************************************/
let person = {
  name: "John",
  surname: "Doe",
  country: "USA",
  age: 32,
  getAge: function () {
    return this.age;
  },
  address: {
    street: "C/ Larios",
    number: 25,
    "c.p": 29785,
  },
};

/**
 * Gets the country of person object
 * @returns the country of person object
 */
export const getCountry = () => {
  let country = person.country;
  return country;
};

/**
 * Gets the street of person object
 * @returns the street of person object
 */
export const getStreet = () => {
  let street = person.address.street;
  return street;
};

/**
 * Gets the age of person object via {@link person.getAge()} fuction
 * @returns the age of person object via {@link person.getAge()} fuction
 */
export const getAgeViaFuction = () => {
  let age = person.getAge();
  return age;
};

/**
 * Gets the address number of person object
 * @returns the address number of person object
 */
export const getNumbreAddress = () => {
  let address = person.address.number;
  return address;
};

/**
 * Removes the address number of person object
 */
export const removeNumbreAddressProperty = () => {
  if (person.address.hasOwnProperty("number")) {
    delete person.address.number;
  }
  return person.address.number;
};

/**
 * Adds the Spanish nacionality to person object as a new property
 */
export const addSpanishNacionalityAsNewProperty = () => {
  person.nacionality = "Spanish";
};

/**
 * Gets the nacionality of person object
 * @returns the nacionality of person object
 */
export const getNacionalty = () => {
  let nationality = person.nacionality;
  return nationality;
};

/**
 * Gets every person properties as array
 * @returns every person properties as array
 */
export const getPersonArray = () => {
  let personArray = Object.keys(person).map((key) => [key, person[key]]);
  return personArray;
   //return Object.entries(), devuelve un array, solucion profesor
};

/**************************************************/
/***************Movie literal object***************/
/**************************************************/
let movie = {
  title: "El Señor de los Anillos: La Comunidad del Anillo",
  director: {
    name: "Peter Jackson",
    nationality: "Neozelandés",
    birth: {
      date: "31 de octubre de 1961",
      place: "Pukerua Bay, Nueva Zelanda",
    },
    notableFilmography: ["El Señor de los Anillos", "El Hobbit", "King Kong"],
  },
  year: 2001,
  genre: "Fantasía",
  duration: 178,
  rating: 9.2,
  characters: [
    {
      name: "Frodo Baggins",
      actor: "Elijah Wood",
      description:
        "El portador del Anillo Único, encargado de destruirlo en el Monte del Destino.",
    },
    {
      name: "Gandalf",
      actor: "Ian McKellen",
      description:
        "Un poderoso mago y consejero que guía a Frodo en su misión.",
    },
    {
      name: "Aragorn",
      actor: "Viggo Mortensen",
      description:
        "Un guerrero y futuro rey que se une a la Comunidad para proteger a Frodo.",
    },
  ],
  synopsis:
    "Un hobbit llamado Frodo Baggins emprende un viaje épico para destruir un anillo malévolo y evitar que caiga en manos del Señor Oscuro Sauron.",
};

/**
 * Gets title of movie object
 * @returns birthday of diretor
 */
export const getTitle = () => {
  let movieTitle = movie.title;
  return movieTitle;
};

/**
 * Gets birthday of diretor
 * @returns birthday of diretor
 */
export const getBirthdayOfDirector = () => {
  let birthday = movie.director.birth.date;
  return birthday;
};

/**
 * Gets the last principal film of director
 * @returns the last principal films of director
 */
export const getLastPrincipalOfDirector = () => {
  const director = movie.director;
  const notableFilmography = director.notableFilmography;
  
  if (notableFilmography.length > 0) {
    return notableFilmography[notableFilmography.length - 1];
  } else {
    return null; // Retorna null si no hay películas en la filmografía 
  }
};

/**
 * Gets description of Gandalf
 * @returns the description of Gandalf
 */
export const getDescriptionOfGandalf = () => {
  const characters = movie.characters;
  
  for (const character of characters) {
    if (character.name === "Gandalf") {
      return character.description;
    }
  }
  
  return null; 
  //return movie.characters[1].description, solucion profesor
};

/**
 * Gets the numbers of characters
 * @returns the numbers of characters
 */
export const getNumbersOfCharacters = () => {
  let numberCharacters = movie.characters.length;
  return numberCharacters;
};

/**
 * Gets real name of Aragorn
 * @returns real name of Aragorn
 */
export const getRealOfAragorn = () => {
  const characters = movie.characters;
  
  for (const character of characters) {
    if (character.name === "Aragorn") {
      return character.actor;
    }
  }
  
  return null; 
  
};

/**
 * Gets all keys of movie object
 * @returns all keys of movie objec
 */
export const getMovieKeys = () => {
  let keys = Object.keys(movie);
  return keys;
};

/**
 * Gets the infex of Fantasia value
 * @returns the infex of Fantasia value
 */
export const getIndexOfFantasaiValue = () => {
  //obtengo todos los valores de movie
  let valuesmovie = Object.values(movie);
  //los recorro
  for (let index = 0; index < valuesmovie.length; index++) {
    const element = valuesmovie[index];
    //si algun indice es igual a fantasía
    if (element === "Fantasía") {
      //devuelvo el indice
      return valuesmovie.indexOf("Fantasía");
    }
    
  }
  
 //return Object.values(movie).indexOf("Fantasía"), solucion profesor 
};
