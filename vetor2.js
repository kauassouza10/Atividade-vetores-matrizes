const prompt = require('prompt-sync')(); 

const vetor1 = [];
const vetor2 = [];

for (let i = 0; i < 10; i++) { 
    let num = parseInt(prompt(`Digite o número ${i + 1}: `));
    vetor1[i] = num;            
}

for (let i = vetor1.length - 1; i >= 0; i--) {
    vetor2.push(vetor1[i]);     
}
console.log("Vetor original:", vetor1);
console.log("Vetor invertido:", vetor2);
