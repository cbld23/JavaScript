const persona = {
    edad: 30,
    nombre: 'Ana',
    apellidos: 'Rodriguez Pardo',
    telefono: 666141466,
    titulos : ["ESO", "Grado", "Master"],
    direccion: {
        calle: "Competa",
        cp: 29010
    },
    progenitores: {
        padre: "Jose",
        madre: "Noelia"

    }
}
//Devuelven un array con las claves y los valores, respectivamente
console.log(Object.keys(persona));
console.log(Object.values(persona));