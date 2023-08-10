console.log('Bem vindo a calculadora UCB!!!');
console.log("Insira dois números:");
var n1 = parseFloat(prompt());
var n2 = parseFloat(prompt());

console.log("Digite 1 para Adição\nDigite 2 para Subtração\nDigite 3 para Multiplicação\nDigite 4 para Divisão\n");
var escolha = parseInt(prompt());

var result;

switch (escolha) {
    case 1:
        result = n1 + n2;
        console.log("Resultado da adição:", result);
        break;

    case 2:
        result = n1 - n2;
        console.log("Resultado da subtração:", result);
        break;

    case 3:
        result = n1 * n2;
        console.log("Resultado da multiplicação:", result);
        break;

    case 4:
        result = n1 / n2;
        console.log("Resultado da divisão:", result);
        break;

    default:
        console.log("Opção inválida!");
        break;

}