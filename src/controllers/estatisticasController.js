var estatisticasModel = require("../models/estatisticasModel");

function buscarPorDeus(req, res) {
    var idDeus = req.params.fk_deuses;
    estatisticasModel.buscarPorDeus(idDeus)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error(erro);
            res.status(500).json({ erro: "Erro ao buscar estatísticas" });
        });
}

module.exports = { buscarPorDeus };
