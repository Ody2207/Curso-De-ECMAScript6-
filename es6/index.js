// Una de las caracteristicas que se agregaron fueron los parametros por defecto
// Son valores que se les puede dar a una funcion por defecto 


// Fuction antes de ECMAScript 6

function newFuction(name, age, country) {
	var name = name || 'oscar';
	var age = age || 32;
	var country = country || 'MX'
	console.log(name, agem, country)
}

// ES6

function newFuction2(name='OSCAR', age=32, country='MX') {
	console.log(name, age, country);
}

// Para que se imprima con los valores establecidos
newFuction2();

// Para poder darle los valores que nosotros deseamos
newFuction2('Ricardo', '23', 'CO');

console.log("Hola mundo");

// Antes de es6

let hello = 'hello';
let world = 'wordl';
let epicPhrase = hello + '' + world;
console.log(epicPhrase);

// Despues de es6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// `` SE LE CONOCE COMO COMILLA FRANCESA Y SE PUEDE SACAR CON EL "COMANDO ALT + 96"


//--------------------------------------------------------------------------------------


// LET y CONST, Multilínea, Spread Operator y Desestructuración (SEGUNDA CLASE)

let lorem = "Esta es una frase especial \n" + "mente hecha para poder ser separada";

// es6

let lorem2 = 
`Otra frase epica 
Esta es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

	// DESTRUCTURACION DE ELEMENTOS
// Declaración del objeto
let person = {
	'names': 'Oscar',
	'age':	32,
	'country': 'MX'
}

// Forma antigua de traer los eleemntos
console.log(person.names, person.age, person.country);

// es6
let { names, age } = person;
console.log(names, age);

	// OPERADORES 
// EL OBJETIVO ES TENER VARIOS ARREGLOS Y PODER UNIRLOS ENTRE SI

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);



// NOTA --------------------------------------------------
{
	var nombre = 'Hola';
}

{
	let nombre2 = 'Hola'
}

console.log(nombre);
console.log(nombre2);

const saludo = 'Hola';

// Como su nombre nos indica esta es una constante, esto quiere decir que su valor siempre 
// sera el mismo 

// Var nos perimte tener la informacion globalmente mientras que let solamente le dara 
// acceso localmente

// NOTA --------------------------------------------------

// ------------------------------------------------------------------------------------------------

// Arrow Functions, Promesas y Parámetros en objetos (TERCERA CLASE)

let Name = 'Rodrigo';
let edad = 32;

// es5 anterior
obj = { Name:Name, adad:edad };

// es6
obj2 = { Name, edad };

// INPRECIÓN
console.log(obj);
console.log(obj2);

	// ARROW FUCTION

const Names = [
	{ names: 'Oscar', age: 32 },
	{ names: 'Yesica', age: 27 }
];

let list0Names = names.map(function(item){
	console.log(item.name);
});

let list0Names2 = names.map(item => console.log(item.name));

const list0Names3 = (names, agen, coutry) => {

}

const list0Names4 = name => {

}

const square = num => num * num;

	// PROMESAS 
// La promesa como su nombre lo indica seran acciones que en algun momneto se cumpliran 

const helloPromies = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			resolve('Hey!')
		} else {
			reject('Ups!!');
		}
	})
};

helloPromies()
	.then(response => console.log(response))
	.then(() => console.log('Hola'))
	.catch(error => console.log(error));

	//Clases, Módulos y Generadores
// CLASES 

class calculator {
	constructor() {
		this.valorA = 0;
		this.valorB = 0;
	}

	sum(valorA, valorB) {
		this.valorA = valorA;
		this.valorB = valorB;
		return this.valorA + this.valorB;
	}
};

const calc = new calculator();
console.log(calc.sum(2,2));

// MÓDULOS
// Los modulos nos permiten tener una lógica fuera de nuestro hilo principal, esto nos puede 
// nos puede llegar a ayudar para poder tener un código más limpio

import { hello } from "./module";
hello();


// GENERADORES

function* helloWorld() {
	if (true) {
		yield 'Hello, ';
	}
	if  (true) {
		yield 'World';
	}
}

// Para poder ejecutarlo 

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);