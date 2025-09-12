const prompt = require('prompt-sync')();
let vetor1 = [];
let vetor2 = [];

for (let i = 0; i <= 5; i++) {
    let num = parseInt(prompt('Digite um número: '), 10);
    vetor1[i] = num;

}

for (let i = 0; i <= 5; i++) {
    let num = parseInt(prompt('Digite um número: '), 10);
    vetor2[i] = num;

}

function vericacao(vetor1, vetor2) {
    if (vetor1.length !== vetor2.length){
        return false;
    }

    for (let i = 0; i <= vetor1.length; i++) {
        if (vetor1[i] !== vetor2[i]) {
            return false;
        }
    }
    return true;

}

console.log("Verificando a igualdade:",vericacao(vetor1,vetor2));

