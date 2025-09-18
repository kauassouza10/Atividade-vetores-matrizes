const LINHAS = 10;
const COLUNAS = 15;

let MAT = Array.from({ length: LINHAS }, () =>
    Array.from({ length: COLUNAS }, () => Math.floor(Math.random() * 10))
);

console.log("Matriz (10x15):");
MAT.forEach(linha => console.log(linha.join(" ")));

console.log("\n Soma por linha ");
MAT.map((linha, i) => {
    let soma = linha.reduce((a, b) => a + b, 0);
    let tipo = soma % 2 === 0 ? "par" : "ímpar";
    console.log(`Linha ${i + 1}: soma = ${soma} - ${tipo}`);
});

console.log("\n Soma por coluna ");

for (let j = 0; j < COLUNAS; j++) {
    let soma = MAT.map(linha => linha[j]).reduce((a, b) => a + b, 0);
    let tipo = soma % 2 === 0 ? "par" : "ímpar";
    console.log(`Coluna ${j + 1}: soma = ${soma} - ${tipo}`);
}