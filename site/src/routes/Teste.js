// var express = require("express");
// var router = express.Router();

// var TesteController = require("../controllers/TesteController");

// router.get("/:idUsuario", function (req, res) {
//   TesteController.buscarTestePorUsuario(req, res);
// });

// router.post("/cadastrar", function (req, res) {
//   TesteController.salvarBanco(req, res);
// })

// module.exports = router;

var express = require("express");
var router = express.Router();

var TesteController = require("../controllers/TesteController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/Teste", function (req, res) {
    TesteController.salvarBanco(req, res);
});

module.exports = router;
