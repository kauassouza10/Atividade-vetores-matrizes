const prompt = require('prompt-sync')();

const vetor1 = [];
const vetor2 = [];

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Digite o número ${i + 1}: `));
    vetor1[i] = num;
}

for (let i = 0; i < vetor1.length; i++) {
    if (i % 2 === 0) {
        vetor2.push(vetor1[i] / 2);
    } else {
        vetor2.push(vetor1[i] * 3);
    }
}

console.log("vetor original:", vetor1);
console.log("vetor transformado:", vetor2);