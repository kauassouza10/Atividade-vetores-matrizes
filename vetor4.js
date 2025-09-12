const prompt = require('prompt-sync')();
const nomes = [];

for (let i = 0; i < 10; i++) {
    let nome = prompt(`Digite um nome ${i + 1}: `);
    nomes.push(nome);
}

const nomeBusca = prompt("Digite um nome para procurar: ")

if (nomes.includes(nomeBusca)) {
    console.log("Achei");

} else {
    console.log("Não achei");
    
}
