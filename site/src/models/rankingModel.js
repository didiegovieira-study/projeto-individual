

var database = require("../database/config")

function ranking() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT s.nome, COUNT(fkSelecao) 'Ranking', s.imagem FROM usuario as u
        JOIN selecao as s ON fkSelecao = s.idSelecao 
        GROUP BY s.nome
        ORDER BY Ranking DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    ranking
};