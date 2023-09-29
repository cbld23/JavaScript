const DEFAULT_DAY = "Número de día inválido";
const LUNES = "Lunes";
const MARTES = "Martes";
const MIERCOLES = "Miércoles";
const JUEVES = "Jueves";
const VIERNES = "Viernes";
const SABADO = "Sábado";
const DOMINGO = "Domingo";
/** Crear una función que devuelva los días de la semana en función de un número dado, haciendo uso de switch case
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 * Cualquier otra opción -> DEFAULT_DAY
 */
export const getDayOfWeekSC = (day) => {
    let resultado;
    switch (day) {
        case 1:
            resultado = LUNES;
            break;
        case 2:
            resultado =  MARTES;
            break;
        case 3:
            resultado = MIERCOLES; 
            break;
        case 4:
            resultado = JUEVES;
            break;
        case 5:
            resultado = VIERNES;
            break;
        case 6:
            resultado = SABADO; 
            break;
        case 7:
            resultado = DOMINGO;
            break;
    
        default:
            resultado = DEFAULT_DAY;
            break;
    }
    return resultado;
};

/** Crear una objeto que devuelva los días de la semana en función de un número dado, haciendo uso de un objeto literal
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 */
let dayOfWeek = {
    1: LUNES,
    2: MARTES,
    3: MIERCOLES,
    4: JUEVES,
    5: VIERNES,
    6: SABADO,
    7: DOMINGO,
};

/** Crear una función que haciendo uso del objeto literal definido arriba
 * devuelva los días de la semana en función de un número dado
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 * Cualquier otra opción -> DEFAULT_DAY
 */
export const getDayOfWeekObject = (day) => {
    // Verificar si el número existe en el objeto dayOfWeek
    if (dayOfWeek.hasOwnProperty(day)) {
        return dayOfWeek[day];
    } else {
        return DEFAULT_DAY;
    }
};

/************************************************ */

const DEFAULT_OPERARTOR_ERROR = "Operator invalid";

/**
 * Crea un calculadora básica que sume, reste, multiplique y divide. Usando switch case
 * Operadores validos ("+", "-", "*", "/")
 * En cualquier otro caso debe devolver DEFAULT_OPERARTOR_ERROR
 */
export const simpleCalculatorSC = (operartor, num_1, num_2) => {
    let resultado;
    switch (operartor) {
        case "+":
            resultado = num_1 + num_2;
            break;
        case "-":
            resultado =  num_1 - num_2;
            break;
        case "*":
            resultado = num_1 * num_2; 
            break;
        case "/":
            resultado = num_1 / num_2;
            break;
    
        default:
            resultado = DEFAULT_OPERARTOR_ERROR;
            break;
    }
    return resultado;
};

/**
 * Crea un objeto con los operadores básicos +, -, *, ,/
 * Cada propieda del objeto debe realizar la operación correspodiente
 */
let calculatorObject = {
    "+": (num_1, num_2) => num_1 + num_2,
    "-": (num_1, num_2) => num_1 - num_2,
    "*": (num_1, num_2) => num_1 * num_2,
    "/": (num_1, num_2) => {
        if (num_2 !== 0) {
            return num_1 / num_2;
        } else {
            return "División por cero no permitida";
        }
    },
};

/**
 * Crea una función que haga uso de objeto que has creado arriba y que además devuelva DEFAULT_OPERARTOR_ERROR
 * si se introduce cualquier cosa que sea diferente a "+", "-", "*", "/"
 *
 */
export const simpleCalculatorObject = (operartor, num_1, num_2) => {
    if (calculatorObject.hasOwnProperty(operartor)) {
        return calculatorObject[operartor](num_1, num_2);
    } else {
        return DEFAULT_OPERARTOR_ERROR;
    }
};
