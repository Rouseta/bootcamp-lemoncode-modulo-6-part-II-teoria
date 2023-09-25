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
//const range = 200 - 100 + 1
//console.log("range", range)
//console.log(Math.floor(Math.random() * range));
//Nos faltaría por tanto, sumar a nuestro resultado el mínimo que queremos, que en nuestro caso es 50, por tanto:
//console.log(Math.floor(Math.random() * range) + 100) // Números aleatorios enteros en el rango [50, 100]

//2. Algorítmos de búsqueda
//A Busqueda Secuencial o Lineal
var array = [1, 1, 3, 4, 5, 2, 9, 6, 7, 8];
var search = (array, target) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }
    return -1;
};

// console.log(search(array, 0));
// console.log(array.indexOf(1));
var myString = "casa";
//console.log(myString.indexOf("s"));
//B. Búsqueda binaria
//cuando tenemos la certeza que nuestro array está ordenado, la busqueda binaria es una forma más eficiente de buscar
var binarySearch = (sortedArray, target) => {
    var min = 0;
    var max = array.length - 1;
    while (min <= max) {
        var mid = min + Math.floor((max - min) / 2);
        console.log(mid)
        if (array[mid] === target) return mid;
        else if (array[mid] < target) min = mid + 1;
        else max = mid - 1;
    }
    return -1;
};
var sortedArray = [11, 15, 32, 34, 36, 37, 75, 79, 80, 89];
console.log(binarySearch(sortedArray, 34));

// 3.Algoritmos de ordenación
//Vamos a introducir tres técnicas de ordenación:

//A Bubble sort u ordenación por burbuja
array = [3, 5, 1, 8, 7, 2];
var swap = (array, a, b) => {
    // Intercambiamos el contenido de los índices a y b
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}
var bubbleSort = array => {
    var size = array.length; // Calculamos su tamaño
    // Bucle externo
    for (var index = 1; index < size; index++) {
        // Bucle interno
        for (var left = 0; left < size - index; left++) {
            var right = left + 1;
            if (array[left] > array[right]) {
                swap(array, left, right);
            }
        }
    }
    return array; // Devuelve el array ordenado
};
console.log(bubbleSort([3, 5, 1, 8, 7, 2]));
//B. Selection Sort u ordenación por selección
// Este algoritmo consiste en buscar el mínimo elemento entre una posición i y el final de la lista.
// Es decir, en nuestra la lista de ejemplo [3, 5, 1, 8, 7, 2] :
// Se empieza por recorrer la lista desde el índice 0 hasta encontrar el menor elemento. En este caso el menor elemento es
// el 1. De manera que se intercambia con el dato que están en la primera posición, el 3, quedando la lista como [1, 5, 3,
// 8, 7, 2] .
var selectionSort = array => {
    var minIndex;
    var size = array.length; // Calculamos su tamaño;
    for (var s = 0; s < size; s++) {
        // s => selection
        // Bucle externo.
        minIndex = s;
        for (var i = s + 1; i < size; i++) {
            // Bucle interno.
            if (array[i] < array[minIndex]) minIndex = i;
        }
        swap(array, minIndex, s);
    }
    return array;
};
console.log(selectionSort([3, 5, 1, 8, 7, 2]));
//C. Insertion Sort u ordenación por inserción
//Este algoritmo consiste en comparar un elemento con todos los ubicados a su izquierda e ir realizando cambios hasta que encuentre su posición en la lista
var insertionSort = array => {
    var size = array.length; // Calculamos su tamaño.
    var sortedListLastIndex = 0;
    // Bucle externo.
    for (var item = 1; item < size; item++) {
        var current = array[item]; //esto es el número 3
        var currentIndex = item;// esto es el index 0
        var swapIndex = sortedListLastIndex;
        // Bucle interno.
        while (current < array[swapIndex] && swapIndex >= 0) {
            swap(array, currentIndex--, swapIndex--);
        }
        sortedListLastIndex++;
    }
    return array;
};
console.log(insertionSort([3, 5, 1, 8, 7, 2]));




