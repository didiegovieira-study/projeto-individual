var quizModel = require("../models/quizModel");

/* function quizListar(req, res) {
    quizModel.quizListar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
} */

function quizCadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var quiz = req.body.quizServer;
    var id = req.body.idServer;
    // var idolo = req.body.idoloServer;

    // Faça as validações dos valores
    if (quiz == undefined) {
        res.status(400).send("Seu quiz está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.quizCadastrar(quiz, id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    // quizListar,
    quizCadastrar
}