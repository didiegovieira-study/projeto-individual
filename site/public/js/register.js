

function sumirMensagem() {
    // cardErro.style.display = "none"
}


/*     function prosseguir1() {
        var displayCont = document.querySelector(".container")

        displayCont.classList.toggle('ativo')

        var displayCont2 = document.querySelector(".container2")

        displayCont2.classList.toggle('ativo')
    }
 */

    function prosseguir() {
        box1.style.display = "none"
        box2.style.display = "flex"

        var displayCont = document.querySelector(".container")

        displayCont.classList.toggle('ativo')
    }

    function voltar() {
        box1.style.display = "flex"
        box2.style.display = "none"

        
    }