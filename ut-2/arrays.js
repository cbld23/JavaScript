export const games = ["Zelda", "Mario Bros", "Metroid", "Chrono"];

/**
 * Removes the first element from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified.
 */
export const deleteFirtPosition = () => {
  // TODO: implement
  if (games.length === -1) {
    console.log("undefined");
  } else {
    let primerEliminado = games.shift();
    return primerEliminado;
  }
};

/**
 * Removes the last element from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified.
 */
export const deleteLastPosition = () => {
  // TODO: implement
  if (games.length === 0) {
    console.log("undefined");
  } else {
    let ultimoEliminado = games.pop();
    return ultimoEliminado;
  }
};

/**
 * Inserts new element at the start of an array, and returns the new length of the array.
 * @param item Element to insert at the start of the array.
 */
export const addFirstPosition = (item) => {
  // TODO: implement
  let anadir = games.unshift("Fornite");
  return anadir;
};

/**
 * Appends new element to the end of an array, and returns the new length of the array.
 * @param item New element to add to the array.
 */
export const addLastPosition = (item) => {
  // TODO: implement
  let ultimaPosicion = (games.push("Pokemon"));
  return ultimaPosicion;
};

/******************************************************/
export const got = [
  "Lannister",
  "Targaryen",
  "Stark",
  "Baratheon",
  "Greyjoy",
  "Arryn",
  "Martell",
];

/**
 * Removes Baratheon and Greyjoy houses
 * @returns array with items removes
 */
export const removeBaratheonAndGreyjoy = () => {
  // TODO: implement
  let eliminarDosElemtos = got.splice(3, 2);
  return eliminarDosElemtos;
};

/**
 * Removes Arryn house
 * @returns array with items removes
 */
export const removeArryn = () => {
  // TODO: implement
  const index = got.indexOf("Arryn");
  if (index !== -1) {
    const elementoEliminado = got.splice(index, 1);
    return elementoEliminado;
  }
};

/******************************************************/
export const narutoCharacters = [
  "Naruto",
  "Sasuke",
  "Sakura",
  "Hinata",
  "Kakashi",
  "Jiraiya",
  "Itachi",
  "Gaara",
];

/**
 * Gets the index of Naruto
 * @returns the index found.
 */
export const getNaruto = () => {
  // TODO: implement
  let indice = narutoCharacters.indexOf("Naruto");
  return indice;
};

/**
 * Gets the index of Gaara
 * @returns the index found.
 */
export const getGaara = () => {
  // TODO: implement
  let indice = narutoCharacters.indexOf("Gaara");
  return indice;
};

/**
 * Gets the index of Rock Lee
 * @returns the index found.
 */
export const getRockLee = () => {
  // TODO: implement
  let indice = narutoCharacters.indexOf("Rock Lee");
  return indice;
};

/**
 * Reverses the elements in Naruto Characters array
 * @returns the reversed given array
 */
export const reverseNarutoCharacters = () => {
  // TODO: implement
  let reverse = narutoCharacters.reverse();
  return reverse;
};
