var express = require("express");
var router = express.Router();
var database = require("../database/config.js")

var estatisticasController = require("../controllers/estatisticasController");

router.get("/:fk_deuses", function(req, res){
    var idDeus = req.params.fk_deuses;
    var instrucao = `
       SELECT e.id, e.forca, e.vitalidade, e.energia, e.inteligencia, 
               e.velocidade, e.resistencia, e.fk_deuses, d.nome AS nome_deus
        FROM estatisticas e
        JOIN deuses d ON e.fk_deuses = d.id
        WHERE e.fk_deuses = ${idDeus}
    `;

    database.executar(instrucao)
        .then(resultado => {
            res.json(resultado); // devolve os dados em JSON
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json({ erro: "Erro ao buscar estatísticas" });
        });
});
module.exports = router;