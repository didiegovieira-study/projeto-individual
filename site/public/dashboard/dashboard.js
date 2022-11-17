

    var selecao = sessionStorage.getItem("FK_SELECAO");
    var idolo = sessionStorage.getItem("FK_IDOLO");
    var nome = sessionStorage.getItem("NOME_USUARIO");


    function menu() {

        var animation = document.getElementById('menu')

        if (animation.style.display == 'none') {
            animation.style.display = 'block'
            b.innerHTML = `${nome}`
        } else if (animation.style.display == 'block') {
            animation.style.display = 'none'
        }

    }

    function dash() {
        
        

    }

    function dados() {
        var imgs = document.querySelector('#imgSelecao')

        fetch("/selecao/selecao").then(function (resposta) {
            if (resposta.ok) {
                console.log(resposta)

                resposta.json().then(function (response) {
                    console.log(response[selecao-1].imagem);
                    var bandeira = response[selecao-1].imagem;
                    imgs.src = `${bandeira}`;

                    divSelecao.innerHTML = `<img id="imgSelecao" src="${bandeira}" alt="bandeira">`
                })

            }
        });

    }

    window.onload = function() {
        dash(); dados()
    };