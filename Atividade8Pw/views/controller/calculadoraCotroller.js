const calculadora = require("../calculadora/calculadora");

function indexCalculadora(req, res) {
    res.render("index.html");
}

function calcular(req, res) {
    const numeros = {
        n1: parseFloat(req.body.n1),
        n2: parseFloat(req.body.n2),
        operador: req.body.operador
    };

    const operador = req.body.operador;
    let resultado;
    switch (operador) {
        case "+":
            resultado = calculadora.somar(numeros.n1, numeros.n2);
            break;
        case "-":
            resultado = calculadora.subtrair(numeros.n1, numeros.n2);
            break;
        case "*":
            resultado = calculadora.multiplicar(numeros.n1, numeros.n2);
            break;
        case "/":
            resultado = calculadora.dividir(numeros.n1, numeros.n2);
            break;
        default:
            resultado = "Operação inválida";
            break;
    }


    res.render("resultado.html", { numeros, resultado });
}

module.exports = {
    indexCalculadora,
    calcular
}