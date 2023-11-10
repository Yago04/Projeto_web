const express = require("express");
const router = express.Router();

const calculadoraController = require("../src/views/controller/calculadoraController");

router.get("/", calculadoraController.indexCalculadora);
router.post("/calcular", calculadoraController.calcular);

module.exports = router;