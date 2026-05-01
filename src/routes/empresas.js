var express = require("express");
var router = express.Router();

var divindadesController = require("../controllers/divindadesController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    divindadesController.cadastrar(req, res);
})

router.get("/buscar/:id", function (req, res) {
  divindadesController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  divindadesController.listar(req, res);
});

module.exports = router;