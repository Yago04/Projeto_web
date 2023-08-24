// Função para multiplicar matrizes
function multiplicarMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length;
    const colunasA = matrizA[0].length;
    const linhasB = matrizB.length;
    const colunasB = matrizB[0].length;

    if (colunasA !== linhasB) {
        console.log("Não é possível calcular a multiplicação das matrizes.");
        return null;
    }

    let matrizC = new Array(linhasA);
    for (let i = 0; i < linhasA; i++) {
        matrizC[i] = new Array(colunasB);
        for (let j = 0; j < colunasB; j++) {
            matrizC[i][j] = 0;
            for (let k = 0; k < colunasA; k++) {
                matrizC[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return matrizC;
}

// Matrizes de exemplo A e B
let matrizA = [
    [1, 2],
    [3, 4]
];

let matrizB = [
    [5, 6],
    [7, 8]
];

// Multiplicando as matrizes AxB para obter C
let matrizC = multiplicarMatrizes(matrizA, matrizB);

if (matrizC !== null) {
    // Imprimindo a matriz resultante C
    console.log("Matriz resultante C:");
    for (let i = 0; i < matrizC.length; i++) {
        console.log(matrizC[i].join('\t'));
    }
}
