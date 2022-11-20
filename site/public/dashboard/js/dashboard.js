

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
        var tabela = document.querySelector('.tabela')
        var jogos = document.querySelector('.jogos')

        fetch("/selecao/selecao").then(function (resposta) {
            if (resposta.ok) {
                console.log(resposta)

                resposta.json().then(function (response) {
                    console.log(response[selecao-1].imagem);
                    var bandeira = response[selecao-1].imagem;
                    imgs.src = `${bandeira}`;

                    // divSelecao.innerHTML = `<img id="imgSelecao" src="${bandeira}" alt="bandeira">`
                    bandeirao.src = `${bandeira}`

                    if (selecao == 3 || selecao == 24 || selecao == 26 || selecao == 2) {

                            jogos.innerHTML = `<div class="jogos2">
                            <div class="jogos3">
                                <div class="jogos3-hora">
                                    <p>07h00</p>
                                </div>
                                <div class="jogos3-selecao">
                                    <p class="p1">${response[3-1].nome}</p>
                                    <div class="jogos3-selecaoImg">
                                        <img src="${response[3-1].imagem}" alt="">
                                        <span><p>x</p></span>
                                        <img src="${response[2-1].imagem}" alt="">
                                    </div>
                                    <p class="p2">${response[2-1].nome}</p>
                                </div>
                                <div class="jogos3-dia">
                                    <p>Terça, 22 de Nov.</p>
                                    <span><p>Grupo C - Jogo 0</p></span>
                                    <span><p>Lusail Iconic</p></span>
                                </div>
                            </div>
                            <div class="jogos3">
                                <div class="jogos3-hora">
                                    <p>13h00</p>
                                </div>
                                <div class="jogos3-selecao">
                                    <p class="p1">${response[24-1].nome}</p>
                                    <div class="jogos3-selecaoImg">
                                        <img src="${response[24-1].imagem}" alt="">
                                        <span><p>x</p></span>
                                        <img src="${response[26-1].imagem}" alt="">
                                    </div>
                                    <p class="p2">${response[26-1].nome}</p>
                                </div>
                                <div class="jogos3-dia">
                                    <p>Terça, 22 de Nov.</p>
                                    <span><p>Grupo C - Jogo 7</p></span>
                                    <span><p>Stadium 974</p></span>
                                </div>
                            </div>
                            <div class="jogos3">
                                    <div class="jogos3-hora">
                                    <p>10h00</p>
                                </div>
                                <div class="jogos3-selecao">
                                    <p class="p1">${response[26-1].nome}</p>
                                    <div class="jogos3-selecaoImg">
                                        <img src="${response[26-1].imagem}" alt="">
                                        <span><p>x</p></span>
                                        <img src="${response[2-1].imagem}" alt="">
                                    </div>
                                    <p class="p2">${response[2-1].nome}</p>
                                </div>
                                <div class="jogos3-dia">
                                    <p>Sabado, 26 de Nov.</p>
                                    <span><p>Grupo C - Jogo 22</p></span>
                                    <span><p>Cidade da Educação</p></span>
                                </div>
                            </div>
                            <div class="jogos3">
                                <div class="jogos3-hora">
                                    <p>16h00</p>
                                </div>
                                <div class="jogos3-selecao">
                                    <p class="p1">${response[3-1].nome}</p>
                                    <div class="jogos3-selecaoImg">
                                        <img src="${response[3-1].imagem}" alt="">
                                        <span><p>x</p></span>
                                        <img src="${response[24-1].imagem}" alt="">
                                    </div>
                                    <p class="p2">${response[24-1].nome}</p>
                                </div>
                                <div class="jogos3-dia">
                                    <p>Sabado, 26 de Nov.</p>
                                    <span><p>Grupo C - Jogo 24</p></span>
                                    <span><p>Lusail Iconic</p></span>
                                </div>
                            </div>
                            <div class="jogos3">
                                <div class="jogos3-hora">
                                    <p>16h00</p>
                                </div>
                                <div class="jogos3-selecao">
                                    <p class="p1">${response[26-1].nome}</p>
                                    <div class="jogos3-selecaoImg">
                                        <img src="${response[26-1].imagem}" alt="">
                                        <span><p>x</p></span>
                                        <img src="${response[3-1].imagem}" alt="">
                                    </div>
                                    <p class="p2">${response[3-1].nome}</p>
                                </div>
                                <div class="jogos3-dia">
                                    <p>Quarta, 30 de Nov.</p>
                                    <span><p>Grupo C - Jogo 39</p></span>
                                    <span><p>Stadium 974</p></span>
                                </div>
                            </div>
                            <div class="jogos3">
                                <div class="jogos3-hora">
                                    <p>16h00</p>
                                </div>
                                <div class="jogos3-selecao">
                                    <p class="p1">${response[2-1].nome}</p>
                                    <div class="jogos3-selecaoImg">
                                        <img src="${response[2-1].imagem}" alt="">
                                        <span><p>x</p></span>
                                        <img src="${response[24-1].imagem}" alt="">
                                    </div>
                                    <p class="p2">${response[24-1].nome}</p>
                                </div>
                                <div class="jogos3-dia">
                                    <p>Quarta, 30 de Nov.</p>
                                    <span><p>Grupo C - Jogo 40</p></span>
                                    <span><p>Lusail Iconic</p></span>
                                </div>
                            </div>
                        </div>`

                        tabela.innerHTML = `
                            <div class="tabela2">
                                <div class="topo">
                                    <div class="grupo">
                                        <p>Grupo C</p>
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
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>1º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[3-1].imagem}" alt=""> 
                                                <p>${response[3-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>2º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[24-1].imagem}" alt=""> 
                                                <p>${response[24-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>3º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[26-1].imagem}" alt=""> 
                                                <p>${response[26-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>4º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[2-1].imagem}" alt=""> 
                                                <p>${response[2-1].nome}</p>
                                            </div>
                                            
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;

                    } else if (selecao == 19 || selecao == 14 || selecao == 28 || selecao == 9) {
                                                
                        jogos.innerHTML = `<div class="jogos2">
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>07h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[3-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[3-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[2-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[2-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Terça, 22 de Nov.</p>
                                <span><p>Grupo C - Jogo 0</p></span>
                                <span><p>Lusail Iconic</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>13h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[24-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[24-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[26-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[26-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Terça, 22 de Nov.</p>
                                <span><p>Grupo C - Jogo 7</p></span>
                                <span><p>Stadium 974</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                                <div class="jogos3-hora">
                                <p>10h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[26-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[26-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[2-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[2-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Sabado, 26 de Nov.</p>
                                <span><p>Grupo C - Jogo 22</p></span>
                                <span><p>Cidade da Educação</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[3-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[3-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[24-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[24-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Sabado, 26 de Nov.</p>
                                <span><p>Grupo C - Jogo 24</p></span>
                                <span><p>Lusail Iconic</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[26-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[26-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[3-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[3-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Quarta, 30 de Nov.</p>
                                <span><p>Grupo C - Jogo 39</p></span>
                                <span><p>Stadium 974</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[2-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[2-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[24-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[24-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Quarta, 30 de Nov.</p>
                                <span><p>Grupo C - Jogo 40</p></span>
                                <span><p>Lusail Iconic</p></span>
                            </div>
                        </div>
                    </div>`

                        tabela.innerHTML = `
                            <div class="tabela2">
                                <div class="topo">
                                    <div class="grupo">
                                        <p>Grupo A</p>
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
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>1º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[19-1].imagem}" alt=""> 
                                                <p>${response[19-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>2º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[14-1].imagem}" alt=""> 
                                                <p>${response[14-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>3º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[28-1].imagem}" alt=""> 
                                                <p>${response[28-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>4º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[9-1].imagem}" alt=""> 
                                                <p>${response[9-1].nome}</p>
                                            </div>
                                            
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                    } else if (selecao == 20 || selecao == 25 || selecao == 16 || selecao == 21) {
                                                
                        jogos.innerHTML = `<div class="jogos2">
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>07h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[3-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[3-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[2-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[2-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Terça, 22 de Nov.</p>
                                <span><p>Grupo C - Jogo 0</p></span>
                                <span><p>Lusail Iconic</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>13h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[24-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[24-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[26-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[26-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Terça, 22 de Nov.</p>
                                <span><p>Grupo C - Jogo 7</p></span>
                                <span><p>Stadium 974</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                                <div class="jogos3-hora">
                                <p>10h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[26-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[26-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[2-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[2-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Sabado, 26 de Nov.</p>
                                <span><p>Grupo C - Jogo 22</p></span>
                                <span><p>Cidade da Educação</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[3-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[3-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[24-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[24-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Sabado, 26 de Nov.</p>
                                <span><p>Grupo C - Jogo 24</p></span>
                                <span><p>Lusail Iconic</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[26-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[26-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[3-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[3-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Quarta, 30 de Nov.</p>
                                <span><p>Grupo C - Jogo 39</p></span>
                                <span><p>Stadium 974</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[2-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[2-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[24-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[24-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Quarta, 30 de Nov.</p>
                                <span><p>Grupo C - Jogo 40</p></span>
                                <span><p>Lusail Iconic</p></span>
                            </div>
                        </div>
                    </div>`
                    
                        tabela.innerHTML = `
                            <div class="tabela2">
                                <div class="topo">
                                    <div class="grupo">
                                        <p>Grupo B</p>
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
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>1º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[20-1].imagem}" alt=""> 
                                                <p>${response[20-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>2º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[25-1].imagem}" alt=""> 
                                                <p>${response[25-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>3º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[16-1].imagem}" alt=""> 
                                                <p>${response[16-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>4º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[21-1].imagem}" alt=""> 
                                                <p>${response[21-1].nome}</p>
                                            </div>
                                            
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                    } else if (selecao == 17 || selecao == 13 || selecao == 4 || selecao == 31) {
                        tabela.innerHTML = `
                            <div class="tabela2">
                                <div class="topo">
                                    <div class="grupo">
                                        <p>Grupo D</p>
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
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>1º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[17-1].imagem}" alt=""> 
                                                <p>${response[17-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>2º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[13-1].imagem}" alt=""> 
                                                <p>${response[13-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>3º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[4-1].imagem}" alt=""> 
                                                <p>${response[4-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>4º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[31-1].imagem}" alt=""> 
                                                <p>${response[31-1].nome}</p>
                                            </div>
                                            
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                    } else if (selecao == 15 || selecao == 1 || selecao == 22 || selecao == 11) {
                        tabela.innerHTML = `
                            <div class="tabela2">
                                <div class="topo">
                                    <div class="grupo">
                                        <p>Grupo E</p>
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
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>1º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[15-1].imagem}" alt=""> 
                                                <p>${response[15-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>2º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[1-1].imagem}" alt=""> 
                                                <p>${response[1-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>3º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[22-1].imagem}" alt=""> 
                                                <p>${response[22-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>4º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[11-1].imagem}" alt=""> 
                                                <p>${response[11-1].nome}</p>
                                            </div>
                                            
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                    } else if (selecao == 12 || selecao == 23 || selecao == 5 || selecao == 8) {
                        tabela.innerHTML = `
                            <div class="tabela2">
                                <div class="topo">
                                    <div class="grupo">
                                        <p>Grupo F</p>
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
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>1º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[12-1].imagem}" alt=""> 
                                                <p>${response[12-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>2º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[23-1].imagem}" alt=""> 
                                                <p>${response[23-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>3º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[5-1].imagem}" alt=""> 
                                                <p>${response[5-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>4º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[8-1].imagem}" alt=""> 
                                                <p>${response[8-1].nome}</p>
                                            </div>
                                            
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                    } else if (selecao == 6 || selecao == 30 || selecao == 29 || selecao == 7) {
                        tabela.innerHTML = `
                            <div class="tabela2">
                                <div class="topo">
                                    <div class="grupo">
                                        <p>Grupo G</p>
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
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>1º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[6-1].imagem}" alt=""> 
                                                <p>${response[6-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>2º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[30-1].imagem}" alt=""> 
                                                <p>${response[30-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>3º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[29-1].imagem}" alt=""> 
                                                <p>${response[29-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>4º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[7-1].imagem}" alt=""> 
                                                <p>${response[7-1].nome}</p>
                                            </div>
                                            
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                    } else if (selecao == 27 || selecao == 32 || selecao == 10 || selecao == 18) {
                        tabela.innerHTML = `
                            <div class="tabela2">
                                <div class="topo">
                                    <div class="grupo">
                                        <p>Grupo H</p>
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
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>1º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[27-1].imagem}" alt=""> 
                                                <p>${response[27-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>2º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[32-1].imagem}" alt=""> 
                                                <p>${response[32-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>3º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[10-1].imagem}" alt=""> 
                                                <p>${response[10-1].nome}</p>
                                            </div>
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="line">
                                        <div class="lineBody">
                                            <div id="number">
                                                <p>4º</p>
                                            </div>
                                            <div id="tabelaSel">
                                                <img id="imgLine" src="${response[18-1].imagem}" alt=""> 
                                                <p>${response[18-1].nome}</p>
                                            </div>
                                            
                                        </div>
                                        <div class="lineCount">
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
                                            <p>0</p>
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

                        info.innerHTML += `${nome} - <img src="${imagem}" alt=""> - ${rank} <br>`
                        
                    }
                    
                })

            }
        });

    }

    window.onload = function() {
        dados(); ranking()
    };