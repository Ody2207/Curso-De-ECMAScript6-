// Replace All 

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web"

// Metodo antiguo
const replacedString = string.replace("JavaScript", "PHP");

// Nuevo metodo
const replacedString2 = string.replaceAll("JavaScript", "Phyton");

console.log(replacedString);
console.log(replacedString2);

// ----------

// class Message {
// 	#show(val) {
// 		console.log(val)
// 	}
// 	get add(val) {
// 		// ...
// 	}
// }

// Colo cando el símbolo de "#" le estamos diciendo al programa que este clase es exclusiva

const message = new Message();
message.show("Hello!");


	// Primise any
// La propiedad .any nos permite en un array de Promise nos retorna la que se ejecute 
// más rapido 

const promiseOne = new Promise((resolve, reject) => reject("1"));
const promiseTwo = new Promise((resolve, reject) =>	resolve("2"));
const promiseThree = new Promise((resolve, reject) => resolve("3"));

Promise.any([promiseOne, promiseTwo, promiseThree])
	.then(response => console.log(response))


	// WeakRef(element);
// Libera elementos de la memoria, garantiza que la estructura interna de nuestro código
// la recoja y la podamos ultilizar en cualquier momento

class anyClass {
	constructor(element) {
	this.ref = new WeakRef(element)
	}
}


	//  Nuevos operadores lógicos

let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue1 &&= isFalse1);

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ||= isFalse2);

let isTrue3 = undefined;
let isFalse3 = false;
console.log(isTrue3 ??= isFalse3);