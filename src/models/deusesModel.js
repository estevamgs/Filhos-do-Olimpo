var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM deuses WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT id, nome, codigo FROM deuses`;

  return database.executar(instrucaoSql);
}

function buscarPorCodigo(codigo) {
  var instrucaoSql = `SELECT * FROM deuses WHERE deuses = '${codigo}'`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCodigo, buscarPorId, listar };
