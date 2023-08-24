function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join('\t'));
    }
}

// Definindo uma matriz A
let matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Imprimindo a matriz A original
console.log("Matriz A:");
imprimirMatriz(matrizA);

// Calculando a transposta da matriz A
let transpostaA = [];
for (let i = 0; i < matrizA[0].length; i++) {
    transpostaA[i] = [];
    for (let j = 0; j < matrizA.length; j++) {
        transpostaA[i][j] = matrizA[j][i];
    }
}

console.log("\nTransposta da Matriz A:");
imprimirMatriz(transpostaA);
