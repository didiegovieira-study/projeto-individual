
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

    }

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
    }

    function quizFunc() {

        fetch("/usuarios/listar").then(function (resposta2) {
            if (resposta2.ok) {
                console.log(resposta2)

                resposta2.json().then(function (response2) {
                    var quiz = response2[id-1].fkQuiz
                    console.log(response2[id-1].fkQuiz);

                    if (quiz == undefined) {
                        alert('Parece que você ainda não tem um personagem, faça o Quiz e receba um!')
                    } else {
                        
                    }

                });
            }
        });
    }

    function game() {

        

    }

    window.onload = function() {
        dados(); quizFunc();
    }