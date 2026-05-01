var deusesModel = require("../models/deusesModel");

function buscarPorCodigo(req, res) {
  var codigo = req.query.codigo;

  deusesModel.buscarPorCodigo(codigo).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  deusesModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  deusesModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
  buscarPorId,
  listar,
};
