// Object.entries Nos permite devolver la clave y los valores de una matiz 

const data = {
	fronted: 'Oscar',
	backed: 'Isabel',
	desing: 'Ana'
}

const entries = Object.entries(data)
console.log(entries);
console.log(entries.length)

// El .length nos permite saber cuantos valores hay en nuestra matriz


	// Object.values 
// Nos permite devolver los valores de un arreglo a un objeto 

// NOTA - Es importante que Object siempre la O sea mayuscula

const data2 = {
	fronted: 'Oscar',
	backed: 'Isabel',
	desing: 'Ana',
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);

	// Padding 
// Nos permite agregar más caracteres a algún objeto de una forma más amigable

const string = 'hello';
console.log(string.padStart(8, 'hi '));
console.log(string.padEnd(12, '------'));

	// Traling-comas
// Permitre poder siguir añadiendo elementos a nuestro objeto sin nesecidad de hacer 
// cosas extrañas

const obj = {
	name: 'Oscar',
} 

	// Async Await

const helloWorld2 = () => {
	return new Promise((resolve, reject) => {
		(true)
			? setTimeout(() => resolve('Hello World'), 3000)
			: reject(new Error('Test Error'))
	})
}; 

const helloAsync = async() => {
	const hello = await helloWorld2();
	console.log(hello)
}
helloAsync();

const anotherFuction = async() => {
	try {
		const hello = await helloWorld2();
		console.log(hello);

	} catch (error) {
		console.log(error);
	}
};
anotherFuction();