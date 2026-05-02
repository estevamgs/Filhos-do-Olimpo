/*
var database = require("../database/config");

function buscarAquariosPorEmpresa(deusesId) {

  var instrucaoSql = `SELECT * FROM aquario a WHERE fk_deuses = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(deusesId, descricao) {
  
  var instrucaoSql = `INSERT INTO (descricao, fk_deuses) aquario VALUES (${descricao}, ${deusesId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
 */