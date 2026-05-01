var divindadeModel = require("../models/divindadeModel");

function listar(req, res) {
  divindadeModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  divindadeModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var ónoma = req.body.ónoma;

  divindadeModel.buscarPorCnpj(cnpj).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a divindade com o cnpj ${cnpj} já existe` });
    } else {
      divindadeModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorId,
  cadastrar,
  listar,
};
