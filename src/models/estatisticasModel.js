var database = require("../database/config");

function buscarPorDeus(idDeus) {
    var instrucao = `
        SELECT e.id, e.forca, e.vitalidade, e.energia, e.inteligencia, 
               e.velocidade, e.resistencia, e.fk_deuses, d.nome AS nome_deus
        FROM estatisticas e
        JOIN deuses d ON e.fk_deuses = d.id
        WHERE e.fk_deuses = ${idDeus}
    `;
    return database.executar(instrucao);
}

module.exports = { buscarPorDeus };