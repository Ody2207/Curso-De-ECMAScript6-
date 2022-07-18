const button = document.getElementById("btn");

button.addEventListener("click", async function() {
	const modul = await import("./file.js")
	modul.hello();
})

// Big INT: permite trabajar con numeros mayores a 2^53

const  aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// Promise All Settled

const promiseOne = new Promise((resolve, reject) => reject("reject"));
const promiseTwo = new Promise((resolve, reject) => resolve("resolve"));
const promiseThree = new Promise((resolve, reject) => resolve("resolveOne"));

Promise.allSettled([promiseOne, promiseTwo, promiseThree])
	.then(response => console.log(response))

// Global This

console.log(window);
console.log(globalThis);

// Nuevo operador lógico: null operator

const fooo = null ?? 'Default string';
console.log(fooo);

const foo = 'abc' ?? 'Default string';
console.log(foo);

// Optional chaining

const user = {};
console.log(user?.profile?.email());

// Es importante colocar los símbolos de "?" ya que esto le dice a la aplicación que no
// rompa el programa 

if (user?.profile?.email) {
	console.log('emal')
} else {
	console.log('Fail')
}
