//Faça um programa que faça a multiplicação de duas matrizes

const LINHAS1 = 5;
const COLUNAS1 = 5;

const LINHAS2 = 5;
const COLUNAS2 = 5;

let MAT1 = Array.from({ length: LINHAS1 }, () =>
    Array.from({ length: COLUNAS1 }, () => Math.floor(Math.random() * 5))
);

let MAT2 = Array.from({ length: LINHAS2 }, () =>
    Array.from({ length: COLUNAS2 }, () => Math.floor(Math.random() * 50))
);

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].map(n => n.toString().padStart(2, " ")).join(" "));
    }
}

console.log("Matriz 1:");
imprimirMatriz(MAT1);

console.log("\nMatriz 2:");
imprimirMatriz(MAT2);

function multMatrizes(A, B) {
    let linhasA = A.length;
    let colunasA = A[0].length;
    let linhasB = B.length;
    let colunasB = B[0].length;

    if (colunasA !== linhasB) {
        console.log("Não é possível multiplicar: número de colunas da 1 matriz diferente do número de linhas da 2 matriz.");
        return null;
    }

    let resultado = Array.from({ length: linhasA }, () =>
        Array.from({ length: colunasB }, () => 0)
    );

    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < colunasA; k++) {
                resultado[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return resultado;


}

const MAT_RESULT = multMatrizes(MAT1, MAT2);

console.log("\nMultiplicação das matrizes:");
imprimirMatriz(MAT_RESULT);
 