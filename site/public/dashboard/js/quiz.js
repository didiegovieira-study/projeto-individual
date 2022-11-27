
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

        fetch("/usuarios/listar").then(function (resposta2) {
            if (resposta2.ok) {
                console.log(resposta2)

                resposta2.json().then(function (response2) {
                    var quiz = response2[id-1].fkQuiz;
                    console.log(response2[id-1].fkQuiz);

                    if (quiz == undefined) {
                        // alert('Parece que você ainda não tem um personagem, faça o Quiz e receba um!')
                    } else {
                        
                    }

                });
            }
        });
    };


    // var valores = [];
    var valores = [{
        disciplina: 0, // cr7
        lealdade: 0, // neuer
        bondade: 0, // messi
        respeito: 0, // pelé
        amor: 0, // kaka
        ambicao: 0, // neymar
        responsabilidade: 0 // beckenbeuer
    }];

    function game(option) {
        
        var choice = document.getElementById('quizChoice');
        var choice2 = document.getElementById('quizChoice2');

        if (choice.style.display == 'flex') {
            choice.style.display = 'none'
            choice2.style.display = 'flex'
        };

            var evento = option;

            console.log(evento);

            var random = Number(Math.random() * 5);

            if (evento == 'disciplina') {
                valores.disciplina += random;
                console.log('ok')
            } else if (evento == 'lealdade') {
                valores.lealdade += random;
                console.log('ok')
            } else if (evento == 'bondade') {
                valores.bondade += random;
                console.log('ok')
            } else if (evento == 'respeito') {
                valores.respeito += random;
                console.log('ok')
            } else if (evento == 'amor') {
                valores.amor += random;
                console.log('ok')
            } else if (evento == 'ambicao') {
                valores.ambicao += random;
                console.log('ok')
            } else if (evento == 'responsabilidade') {
                valores.responsabilidade += random;
                console.log('ok')
            };

    };

    window.onload = function() {
        dados(); quizFunc();
    };