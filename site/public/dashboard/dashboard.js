

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
        

        imgSelecao.src = `${selecao}`
        

    }

    window.onload = function() {
        dash()
    };