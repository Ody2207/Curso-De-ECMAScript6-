let array = [ 1,2,3 [1,2,3 [ 1,2,3 ]]];

console.log(array.flat())

// El metodo flat nos permite tener niveles dentro del array, aplanandolo y haciendolo 
// mucho más facil de usar 

let array1 = [1,2,3,4,5];

console.log(array1.flatMap(value => [value, value * 2]))

// Metodo para eliminar los espacios del inicio

let hello = '				Hello wordl';
console.log(hello);
console.log(hello.trimStart());

// Metodo para eliminar los espacios del final

let helloMen = 'Hello Men 			';
console.log(helloMen);
console.log(helloMen.trimEnd());

// Erroes 
// es anteriores
try {

} catch (error) {
	error
}

// es10

try {

} catch {
	error
}

// Constructor de arreglos a objetos y viseversa 

let entries = [["name", "Oscar"], ["ege", 32]];
console.log(Object.fromEntries(entries));

// Objeto tipo simbolo 

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);