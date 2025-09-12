const prompt = require('prompt-sync')();
let vetor = [];

for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt('Digite um número: '));
    vetor[i] = num;
    console.log(i + '/10');
}

console.log('Vetor na ordem diretas: ');
for (let i = 1; i <= 10; i++ );{
console.log(vetor[i])
}
console.log('vetor na ordem inversa: ');
for (var i = 10; i >= 1 ; i--) {
    console.log(vetor[i]);
}

