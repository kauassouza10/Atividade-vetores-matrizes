const prompt = require('prompt-sync')({ sigint: true });

const N = 4;

function lerNumeroObrigatorio(texto) {
  while (true) {
    const ent = prompt(texto);
    const num = Number(ent && ent.replace(',', '.'));
    if (!Number.isNaN(num)) return num;
    console.log('Entrada inválida — digite um número válido.');
  }
}

const matriz = Array.from({ length: N }, () => Array(N).fill(0));
console.log('Informe os 16 elementos (números) da matriz 4x4:');
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    matriz[i][j] = lerNumeroObrigatorio(`Elemento [${i}][${j}]: `);
  }
}

function imprimirMatriz() {
  console.log('\nMatriz:');
  for (let i = 0; i < N; i++) console.log(matriz[i].join(' '));
}

function somaQuadradosPrimeiraColuna() {
  let s = 0;
  for (let i = 0; i < N; i++) s += Math.pow(matriz[i][0], 2);
  return s;
}

function somaTerceiraLinha() {
  let s = 0;
  for (let j = 0; j < N; j++) s += matriz[2][j]; 
  return s;
}

function somaDiagonalPrincipal() {
  let s = 0;
  for (let i = 0; i < N; i++) s += matriz[i][i];
  return s;
}

function somaIndicesParSegundaLinha() {
  let s = 0;
  for (let j = 0; j < N; j += 1) {
    if (j % 2 === 0) s += matriz[1][j];
  }
  return s;
}

while (true) {
  console.log('\n--- MENU ---');
  console.log('1 - Imprimir todos os elementos da matriz');
  console.log('2 - Somar os quadrados dos elementos da 1ª coluna');
  console.log('3 - Somar os elementos da 3ª linha');
  console.log('4 - Somar os elementos da diagonal principal');
  console.log('5 - Somar elementos de índice par da 2ª linha');
  console.log('0 - Sair');
  const op = prompt('Escolha uma opção: ').trim();

  switch (op) {
    case '0':
      console.log('Saindo.'); process.exit(0);
    case '1':
      imprimirMatriz();
      break;
    case '2':
      console.log('Soma dos quadrados (1ª coluna) =', somaQuadradosPrimeiraColuna());
      break;
    case '3':
      console.log('Soma da 3ª linha =', somaTerceiraLinha());
      break;
    case '4':
      console.log('Soma da diagonal principal =', somaDiagonalPrincipal());
      break;
    case '5':
      console.log('Soma (índices pares — 2ª linha) =', somaIndicesParSegundaLinha());
      break;
    default:
      console.log('Opção inválida — escolha 0 a 5.');
  }
}
