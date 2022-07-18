const obj = {
	name: 'Oscar',
	age: 32,
	coutntry: 'MX'
};

// Nos permite en un objeto imprimir solo lo que nosotros deseamos y nada más

let { name, ...all } = obj;
console.log(name, all);

// let { coutntry, ...all } = obj;
// console.log(all);

const obj2 = {
	name: 'Rodrigo',
	age: 17
}

const obj3 = {
	...obj2,
	coutntry: 'MX'
}

console.log(obj3);

// Nos ayudan a poder mesclar objetos sin nesecidad de volver a hacer uno completo con 
// todos los elementos que ya tienes

const HelloWorld = () => {
	return new Promise((resolve, reject) => {
		(true)
		// ? resolve('Hello world')
		? setTimeout(() => resolve('Hello world'), 3000)	// Para agregarle más complejidad 
		: reject(new Error('Test Error'))
	})
}

// Antigua manera 

HelloWorld()
	.then(response => console.log(response))
	.catch(error => console.log(error))
	.finally(() => console.log('Finalizo'))

// A este punto se le agregaron mejoras para poder agrupar bloques de Js y poder acceder a 
// cada uno de ellos

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);