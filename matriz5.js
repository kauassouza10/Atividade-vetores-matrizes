//Faça um programa que faça a soma de duas matrizes.

const LINHAS = 5;
const COLUNAS = 5;


let MAT1 = Array.from({ length: LINHAS }, () =>
    Array.from({ length: COLUNAS }, () => Math.floor(Math.random() * 5))
);


let MAT2 = Array.from({ length: LINHAS }, () =>
    Array.from({ length: COLUNAS }, () => Math.floor(Math.random() * 5))
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

function somaMatrizes(A, B) {
    if (A.length !== B.length || A[0].length !== B[0].length) {
        console.log("Não é possível somar: número de colunas da 1 matriz diferente do número de linhas da 2 matriz.")
        return null;
    }

    let resultado = Array.from({ length: A.length }, () =>
        Array.from({ length: A[0].length }, () => 0)
    );

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            resultado[i][j] = A[i][j] + B[i][j];

        }
    }

    return resultado;


}

const MAT_RESULT = somaMatrizes(MAT1, MAT2);

console.log("\nSoma das matrizes:");
imprimirMatriz(MAT_RESULT);