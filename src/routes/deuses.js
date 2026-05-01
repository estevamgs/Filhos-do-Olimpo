var express = require("express");
var router = express.Router();

var deusesController = require("../controllers/deusesController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

router.get("/buscar", function (req, res) {
    deusesController.buscarPorCodigo(req, res);
});

router.get("/buscar/:id", function (req, res) {
  deusesController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  deusesController.listar(req, res);
});

module.exports = router;