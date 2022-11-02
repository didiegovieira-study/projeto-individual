
function menu() {
    var list = document.querySelector(".nav-list")

    list.classList.toggle('ativo')
    console.log(list)

    let el = document.querySelector(".mobile-menu")

    el.classList.toggle('menu2')
}