//Faça um programa que gere uma matriz transposta (Matriz transposta é toda a matriz onde são
//trocadas as linhas pelas colunas, ou vice-versa).



const LINHAS = 5;
const COLUNAS = 5;

let MAT = Array.from({ length: LINHAS }, () =>
    Array.from({ length: COLUNAS }, () => Math.floor(Math.random() * 5))

);

console.log("Matriz (10X10):");
MAT.forEach(linha => console.log(linha.join(" ")));

function transporMatriz(matrizOriginal) {

    const matrizTransposta = new Array(COLUNAS).fill(0).map(() => new Array(LINHAS));


    for (let i = 0; i < LINHAS; i++) {
        for (let j = 0; j < COLUNAS; j++) {

            matrizTransposta[j][i] = matrizOriginal[i][j];
        }
    }

    return matrizTransposta;
}

const matrizInvertida = transporMatriz(MAT);
console.log(matrizInvertida);