//Faça um algoritmo que construa uma matriz 50 por 50 de números reais e depois de construída,
//colocar o conteúdo de sua diagonal principal dentro de um vetor e depois do vetor montado,
//imprimir o vetor.

const LINHAS = 50;
const COLUNAS = 50;

let MAT = Array.from({ length: LINHAS }, () =>
    Array.from({ length: COLUNAS }, () => Math.floor(Math.random() * 50))
);

console.log("Matriz (50X50):");
MAT.forEach(linha => console.log(linha.join(" ")));

function obterDiagonalPrincipal(matriz) {
    const vetorDiagonal = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i === j) {
                vetorDiagonal.push(matriz[i][j]);
            }
        }
    }
    return vetorDiagonal;
}

const diagonal = obterDiagonalPrincipal(MAT);
console.log(diagonal); 