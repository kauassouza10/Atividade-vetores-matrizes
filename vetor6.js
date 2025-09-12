const prompt = require('prompt-sync')();

let vetor1 = [];


for (let i = 0; i <= 5; i++) {
    let num = parseInt(prompt('Digite um número: '), 10);
    vetor1.push(num);

}

let pares = [];
let impares = [];

for (let i = 0; i < vetor1.length; i++) {
    if (vetor1[i] % 2 === 0) {
        pares.push(vetor1[i]);
    } else {
        impares.push(vetor1[i]);
    }
}

pares.sort((a, b) => a - b);
impares.sort((a, b) => b - a);

let resultado = pares.concat(impares)

console.log("Números originais", vetor1)
console.log("Números pares em ordem crescente", pares)
console.log("Números impares em ordem decrescente", impares)
console.log("Números impares e pares ", resultado)