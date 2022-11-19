

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

    function dados() {

        var imgs = document.querySelector('#imgSelecao')
        var bandeirao = document.querySelector('#imgBandeirao')

        fetch("/selecao/selecao").then(function (resposta) {
            if (resposta.ok) {
                console.log(resposta)

                resposta.json().then(function (response) {
                    console.log(response[selecao-1].imagem);
                    var bandeira = response[selecao-1].imagem;
                    imgs.src = `${bandeira}`;

                    divSelecao.innerHTML = `<img id="imgSelecao" src="${bandeira}" alt="bandeira">`
                    bandeirao.src = `${bandeira}`
                })

            }
        });

    }

    function tabelas() {
        var tabela = document.querySelector('.tabela')

        fetch("/selecao/selecao").then(function (resposta3) {
            if (resposta3.ok) {
                console.log(resposta3)

                resposta3.json().then(function (response3) {
                    response3[0].imagem;
                    
                    if (selecao == 3 || selecao == 24 || selecao == 26 || selecao == 2) {
                        tabela.innerHTML = `
                            <div class="tabela2">
                                <div class="topo">
                                    <div class="grupo">
                                        <b>Grupo A</b>
                                    </div>
                                    <div class="parametro">
                                        <b>PG</b>
                                        <b>J</b>
                                        <b>V</b>
                                        <b>E</b>
                                        <b>D</b>
                                        <b>GP</b>
                                        <b>SG</b>
                                        <b>GC</b>
                                        <b>%</b>
                                    </div>
                                </div>
                                <div class="corpo">
                                    <div class="line1">
                                        <div class="line1Body">
                                            <p id="number">1</p> <img id="imgLine1" src="${response3[3-1].imagem}" alt=""> 
                                        </div>
                                        <div class="line1Count">
                                            <p>PG</p>
                                            <p>J</p>
                                            <p>V</p>
                                            <p>E</p>
                                            <p>D</p>
                                            <p>GP</p>
                                            <p>SG</p>
                                            <p>GC</p>
                                            <p>%</p>
                                        </div>
                                    </div>
                                    <div class="line2">
                                        <div class="line2Body">
                                            <p id="number">2</p> <img id="imgLine2" src="${response3[24-1].imagem}" alt=""> 
                                        </div>
                                        <div class="line2Count">
                                            <p>PG</p>
                                            <p>J</p>
                                            <p>V</p>
                                            <p>E</p>
                                            <p>D</p>
                                            <p>GP</p>
                                            <p>SG</p>
                                            <p>GC</p>
                                            <p>%</p>
                                        </div>
                                    </div>
                                    <div class="line3">
                                        <div class="line3Body">
                                            <p id="number">3</p> <img id="imgLine3" src="${response3[26-1].imagem}" alt=""> 
                                        </div>
                                        <div class="line3Count">
                                            <p>PG</p>
                                            <p>J</p>
                                            <p>V</p>
                                            <p>E</p>
                                            <p>D</p>
                                            <p>GP</p>
                                            <p>SG</p>
                                            <p>GC</p>
                                            <p>%</p>
                                        </div>
                                    </div>
                                    <div class="line4">
                                        <div class="line3Body">
                                            <p id="number">4</p> <img id="imgLine3" src="${response3[2-1].imagem}" alt=""> 
                                        </div>
                                        <div class="line3Count">
                                            <p>PG</p>
                                            <p>J</p>
                                            <p>V</p>
                                            <p>E</p>
                                            <p>D</p>
                                            <p>GP</p>
                                            <p>SG</p>
                                            <p>GC</p>
                                            <p>%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                    }
                })

            }
        });


    }

    function ranking() {
        var info = document.querySelector('.info')

        fetch("/ranking/ranking").then(function (resposta2) {
            if (resposta2.ok) {
                console.log(resposta2)

                resposta2.json().then(function (response2) {
                    console.log(response2[0]);
                    
                    for (var i = 0; i < response2.length; i++) {
                        
                        var rank = response2[i].Ranking;
                        var nome = response2[i].nome;
                        var imagem = response2[i].imagem;

                        // info.innerHTML += `${nome} - <img src="${imagem}" alt=""> - ${rank} <br>`
                        
                    }
                    
                })

            }
        });

    }

    window.onload = function() {
        dados(); ranking()
    };