const calc = require('.calculadora');
const express = require('express');

const app = express();


app.get("/somar/:a/:b", function (req, res) {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} + ${b} = ${calc.somar(a, b)}`);
});

const PORT = 3080;
app.listen(PORT, function () {
    console.log("app rodando na porta "+PORT);
});