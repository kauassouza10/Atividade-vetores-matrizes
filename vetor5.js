const prompt = require('prompt-sync')();
let vetor1 = [];
let vetor2 = [];
let vetor3 = [];
let vetor4 = [];
let vetor5 = [];

for (let i = 0; i <= 20; i++) {
    let num = parseInt(prompt('Digite um número: '));
    vetor1[i] = num;

}

for (let i = 0; i <= 20; i++) {
    let num = parseInt(prompt('Digite um número: '));
    vetor2[i] = num;

}

for (let i = 0; i < vetor1.length; i++) {
    vetor3[i] = vetor1[i] - vetor2[i];
    vetor4[i] = vetor1[i] + vetor2[i];
    vetor5[i] = vetor1[i] * vetor2[i];
    
}

console.log("Vetor 1:", vetor1);
console.log("Vetor 2:", vetor2);
console.log("Vetor diferança:", vetor3);
console.log("Vetor soma:", vetor4);
console.log("Vetor multiplicação", vetor5);