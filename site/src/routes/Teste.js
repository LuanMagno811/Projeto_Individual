var express = require("express");
var router = express.Router();

var TesteController = require("../controllers/TesteController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/autenticar", function (req, res) {
    TesteController.entrarTeste(req, res);
})

router.post("/salvar", function (req, res) {
    TesteController.salvarBanco(req, res);
});

module.exports = router;
