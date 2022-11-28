
    var selecao = localStorage.getItem("FK_SELECAO");
    var quiz = localStorage.getItem("FK_QUIZ");
    var nome = localStorage.getItem("NOME_USUARIO");
    var id = localStorage.getItem("ID_USUARIO");

    function menu() {

        var animation = document.getElementById('menu')

        if (animation.style.display == 'none') {
            animation.style.display = 'block'
            b.innerHTML = `${nome}`
        } else if (animation.style.display == 'block') {
            animation.style.display = 'none'
        }

    };

    function dados() {

        var imgs = document.querySelector('#imgSelecao')

        fetch("/selecao/selecao").then(function (resposta) {
            if (resposta.ok) {
                console.log(resposta)

                resposta.json().then(function (response) {
                    console.log(response[selecao-1].imagem);
                    console.log(response[selecao-1].fkQuiz);
                    var bandeira = response[selecao-1].imagem;
                    imgs.src = `${bandeira}`;

                });
            }
        });
    };

    function quizFunc() {

        var choice  = document.getElementById('quizChoice');
        var quizPersonagem  = document.getElementById('quizPersonagem');

        fetch("/usuarios/listar").then(function (resposta2) {
            if (resposta2.ok) {
                console.log(resposta2)

                resposta2.json().then(function (response2) {
                    var quiz = response2[id-1].fkQuiz;
                    console.log(response2[id-1].fkQuiz);

                    if (quiz != undefined) {
                        alert('voce possui personagem')
                        choice.style.display = 'none'
                        quizPersonagem.style.display = 'flex'
                    } else {
                        alert('Parece que você ainda não tem um personagem, faça o Quiz e receba um!')
                        choice.style.display = 'flex'
                        quizPersonagem.style.display = 'none'
                    }

                });
            }
        });

        fetch("/quiz/quizListar").then(function (resposta3) {
            if (resposta3.ok) {
                console.log(resposta3)

                resposta3.json().then(function (response3) {
                    // var quiz = response3[id-1].fkQuiz;
                    // console.log(response3[id-1].fkQuiz);

                    // var idQuiz = response3[id-1].idQuiz;

                    console.log(response3[id-1])

                });
            }
        });
    };


    // var valores = [];
    var valores = [ 
        {nome: 'disciplina', pontos: 0},  // cr7
        {nome: 'lealdade', pontos: 0}, // neuer
        {nome: 'bondade', pontos: 0 }, // messi
        {nome: 'respeito', pontos: 0 }, // pelé
        {nome: 'amor', pontos: 0 }, // kaka
        {nome: 'ambicao', pontos: 0 }, // neymar
        {nome: 'responsabilidade', pontos: 0} // puyol
    ];

    var personagem = 0;

    function game(option) {
        
        var choice  = document.getElementById('quizChoice');
        var choice2 = document.getElementById('quizChoice2');
        var choice3 = document.getElementById('quizChoice3');
        var choice4 = document.getElementById('quizChoice4');
        var choice5 = document.getElementById('quizChoice5');
        var choice6 = document.getElementById('quizChoice6');
        var choice7 = document.getElementById('quizChoice7');
        var choice8 = document.getElementById('quizChoice8');

        if (choice.style.display == 'flex') {
            choice.style.display = 'none'
            choice2.style.display = 'flex'

        } else if (choice2.style.display == 'flex') {
            choice2.style.display = 'none'
            choice3.style.display = 'flex'

        } else if (choice3.style.display == 'flex') {
            choice3.style.display = 'none'
            choice4.style.display = 'flex'

        } else if (choice4.style.display == 'flex') {
            choice4.style.display = 'none'
            choice5.style.display = 'flex'

        } else if (choice5.style.display == 'flex') {
            choice5.style.display = 'none'
            choice6.style.display = 'flex'

        } else if (choice6.style.display == 'flex') {
            choice6.style.display = 'none'
            choice7.style.display = 'flex'

        } else if (choice7.style.display == 'flex') {
            choice7.style.display = 'none'
            choice8.style.display = 'flex'
        } 

            var evento = option;

            console.log(evento);

            var random = Number(1 + Math.random() * 5).toFixed(0);

            console.log(random);

                if (evento == 'disciplina') {
                    valores[0].pontos += Number(random);
                    console.log('ok')

                } else if (evento == 'lealdade') {
                    valores[1].pontos += Number(random);
                    console.log('ok')

                } else if (evento == 'bondade') {
                    valores[2].pontos += Number(random);
                    console.log('ok')

                } else if (evento == 'respeito') {
                    valores[3].pontos += Number(random);
                    console.log('ok')

                } else if (evento == 'amor') {
                    valores[4].pontos += Number(random);
                    console.log('ok')

                } else if (evento == 'ambicao') {
                    valores[5].pontos += Number(random);
                    console.log('ok')

                } else if (evento == 'responsabilidade') {
                    valores[6].pontos += Number(random);
                    console.log('ok')

                };

                const maior = valores.reduce(function(maior, menor) {
                    return (maior.pontos > menor.pontos) ? maior:menor
                });

                console.log(maior);

                // var maiorponto = maior.pontos
               

                if (maior.nome == 'disciplina') {
                    personagem = 1;
                } else if (maior.nome == 'lealdade') {
                    personagem = 2;
                } else if (maior.nome == 'bondade') {
                    personagem = 3;
                } else if (maior.nome == 'respeito') {
                    personagem = 4;
                } else if (maior.nome == 'amor') {
                    personagem = 5;
                } else if (maior.nome == 'ambicao') {
                    personagem = 6;
                } else if (maior.nome == 'responsabilidade') {
                    personagem = 7;
                }
                
            };

            function cadastrar() {

                fetch("/quiz/update", {
            
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
            
                        quizServer: personagem,
                        idServer: id
                    })
            
                }).then(function (resposta6) {
            
                    console.log("resposta: ", resposta6);
            
                    if (resposta6.ok) {
            
                        alert('Registrado com Sucesso!')
                        
                        /* setTimeout(function () {
                            window.location = "./login.html";
                        }, 1000); */
            
                    } else {
            
                        throw ("Houve um erro ao tentar realizar o cadastro!");
                    }
                });
            
                var choice8 = document.getElementById('quizChoice8');
                var quizPersonagem = document.getElementById('quizPersonagem');
            
                if (choice8.style.display == 'flex') {
                    choice8.style.display = 'none'
                    quizPersonagem.style.display = 'flex'
                }
            
                }

            

    window.onload = function() {
        dados(); quizFunc();

    };