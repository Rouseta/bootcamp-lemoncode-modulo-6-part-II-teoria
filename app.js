//1. Generación aleatoria
//A. Generación aleatoria binaria. Escoger dos posibilidades al 50%

const getRandom = (a, b) => Math.random() < 0.5 ? `El oráculo dice que... ${a}` : `El oráculo dice que... ${b}`
//console.log(getRandom("Sí", "No"))
var getRandomRounded = (a, b) => (Math.round(Math.random()) ? a : b);
//console.log(getRandomRounded("niño", "niña"));

//B Múltiples opciones. Un caso más general de generación aleatoria consiste en elegir entre múltiples opciones con igualdad de probabilidades.
//Empecemos por un caso sencillo, por ejemplo, sacar un número aleatorio del 0 al 9.
//console.log(Math.floor(Math.random() * 10));// floor entero más cercano por debajo
//Ahora un caso cuyo mínimo no sea un 0. En lugar del 0 al 9, busquemos un aleatorio entre 50 y 100 por ejemplo.
const range = 200 - 100 + 1
console.log("range", range)
console.log(Math.floor(Math.random() * range));
//Nos faltaría por tanto, sumar a nuestro resultado el mínimo que queremos, que en nuestro caso es 50, por tanto:
console.log(Math.floor(Math.random() * range) + 100) // Números aleatorios enteros en el rango [50, 100]

//2. Algorítmos de búsqueda
//A Busqueda Secuencial o Lineal
var array = [1, 1, 3, 4, 5, 2, 9, 6, 7, 8];
var search = (array, target) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }
    return -1;
};

console.log(search(array, 0));
console.log(array.indexOf(1));
var myString = "casa";
console.log(myString.indexOf("s"));
//B. Búsqueda binaria





