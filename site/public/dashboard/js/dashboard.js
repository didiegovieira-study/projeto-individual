

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
                                <p>13h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[9-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[9-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[14-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[14-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Domingo, 20 de Nov.</p>
                                <span><p>Grupo A - Jogo 1</p></span>
                                <span><p>Al Bayt</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>13h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[28-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[28-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[19-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[19-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Segunda, 21 de Nov.</p>
                                <span><p>Grupo A - Jogo 2</p></span>
                                <span><p>Al Thumama</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                                <div class="jogos3-hora">
                                <p>10h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[9-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[9-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[28-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[28-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Sexta, 25 de Nov.</p>
                                <span><p>Grupo A - Jogo 18</p></span>
                                <span><p>Al Thumama</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>13h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[19-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[19-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[14-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[14-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Sexta, 25 de Nov.</p>
                                <span><p>Grupo A - Jogo 19</p></span>
                                <span><p>Khalifa International</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>12h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[14-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[14-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[28-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[28-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Terça, 29 de Nov.</p>
                                <span><p>Grupo A - Jogo 35</p></span>
                                <span><p>Khalifa International</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>12h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[19-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[19-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[9-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[9-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Terça, 29 de Nov.</p>
                                <span><p>Grupo A - Jogo 36</p></span>
                                <span><p>Al Bayt</p></span>
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
                                <p>10h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[20-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[20-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[21-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[21-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Segunda, 21 de Nov.</p>
                                <span><p>Grupo B - Jogo 3</p></span>
                                <span><p>Khalifa International</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[16-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[16-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[25-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[25-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Segunda, 21 de Nov.</p>
                                <span><p>Grupo B - Jogo 4</p></span>
                                <span><p>Al Rayyan</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                                <div class="jogos3-hora">
                                <p>07h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[25-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[25-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[21-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[21-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Sexta, 25 de Nov.</p>
                                <span><p>Grupo B - Jogo 17</p></span>
                                <span><p>Al Rayyan</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[20-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[20-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[16-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[16-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Sexta, 25 de Nov.</p>
                                <span><p>Grupo B - Jogo 20</p></span>
                                <span><p>Al Bayt</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[25-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[25-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[20-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[20-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Terça, 29 de Nov.</p>
                                <span><p>Grupo B - Jogo 33</p></span>
                                <span><p>Al Rayyan</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[21-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[21-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[16-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[16-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Terça, 29 de Nov.</p>
                                <span><p>Grupo C - Jogo 34</p></span>
                                <span><p>Al Thumama</p></span>
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
                                                
                        jogos.innerHTML = `<div class="jogos2">
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>10h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[13-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[13-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[31-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[31-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Terça, 22 de Nov.</p>
                                <span><p>Grupo D - Jogo 6</p></span>
                                <span><p>Cidade da Educação</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[17-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[17-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[4-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[4-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Terça, 22 de Nov.</p>
                                <span><p>Grupo D - Jogo 5</p></span>
                                <span><p>Al Janoub</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                                <div class="jogos3-hora">
                                <p>07h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[31-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[31-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[4-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[4-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Sabado, 26 de Nov.</p>
                                <span><p>Grupo D - Jogo 21</p></span>
                                <span><p>Al Janoub</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>13h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[17-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[17-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[13-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[13-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Sabado, 26 de Nov.</p>
                                <span><p>Grupo D - Jogo 23</p></span>
                                <span><p>Stadium 974</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>12h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[4-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[4-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[13-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[13-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Quarta, 30 de Nov.</p>
                                <span><p>Grupo D - Jogo 37</p></span>
                                <span><p>Al Janoub</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>12h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[31-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[31-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[17-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[17-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Quarta, 30 de Nov.</p>
                                <span><p>Grupo D - Jogo 38</p></span>
                                <span><p>Cidade da Educação</p></span>
                            </div>
                        </div>
                    </div>`
                        
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
                                                
                        jogos.innerHTML = `<div class="jogos2">
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>10h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[1-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[1-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[22-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[22-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Quarta, 23 de Nov.</p>
                                <span><p>Grupo E - Jogo 11</p></span>
                                <span><p>Khalifa International</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>13h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[15-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[15-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[11-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[11-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Quarta, 23 de Nov.</p>
                                <span><p>Grupo E - Jogo 10</p></span>
                                <span><p>Al Thumama</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                                <div class="jogos3-hora">
                                <p>07h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[22-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[22-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[11-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[11-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Domingo, 27 de Nov.</p>
                                <span><p>Grupo E - Jogo 25</p></span>
                                <span><p>Al Rayyan</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[15-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[15-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[1-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[1-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Domingo, 27 de Nov.</p>
                                <span><p>Grupo E - Jogo 28</p></span>
                                <span><p>Al Bayt</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[22-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[22-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[15-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[15-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Quinta, 1 de Dez.</p>
                                <span><p>Grupo E - Jogo 43</p></span>
                                <span><p>Khalifa International</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[11-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[11-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[1-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[1-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Quinta, 1 de Dez.</p>
                                <span><p>Grupo E - Jogo 44</p></span>
                                <span><p>Al Bayt</p></span>
                            </div>
                        </div>
                    </div>`
                        
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
                                                
                        jogos.innerHTML = `<div class="jogos2">
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>07h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[23-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[23-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[12-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[12-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Quarta, 23 de Nov.</p>
                                <span><p>Grupo F - Jogo 12</p></span>
                                <span><p>Al Bayt</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[5-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[5-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[8-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[8-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Quarta, 23 de Nov.</p>
                                <span><p>Grupo F - Jogo 9</p></span>
                                <span><p>Al Rayyan</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                                <div class="jogos3-hora">
                                <p>10h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[5-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[5-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[23-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[23-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Domingo, 27 de Nov.</p>
                                <span><p>Grupo F - Jogo 26</p></span>
                                <span><p>Al Thumama</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>13h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[12-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[12-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[8-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[8-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Domingo, 27 de Nov.</p>
                                <span><p>Grupo F - Jogo 27</p></span>
                                <span><p>Khalifa International</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>12h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[12-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[12-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[5-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[5-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Quinta, 1 de Dez.</p>
                                <span><p>Grupo F - Jogo 41</p></span>
                                <span><p>Al Rayyan</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>12h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[8-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[8-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[23-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[23-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Quinta, 1 de Dez.</p>
                                <span><p>Grupo F - Jogo 42</p></span>
                                <span><p>Al Thumama</p></span>
                            </div>
                        </div>
                    </div>`
                        
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
                                                
                        jogos.innerHTML = `<div class="jogos2">
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>07h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[30-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[30-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[7-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[7-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Quinta, 24 de Nov.</p>
                                <span><p>Grupo G - Jogo 13</p></span>
                                <span><p>Al Janoub</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[6-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[6-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[29-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[29-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Quinta, 24 de Nov.</p>
                                <span><p>Grupo G - Jogo 16</p></span>
                                <span><p>Lusail Iconic</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                                <div class="jogos3-hora">
                                <p>07h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[7-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[7-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[29-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[29-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Segunda, 28 de Nov.</p>
                                <span><p>Grupo G - Jogo 29</p></span>
                                <span><p>Al Janoub</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>13h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[6-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[6-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[30-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[30-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Segunda, 28 de Nov.</p>
                                <span><p>Grupo G - Jogo 31</p></span>
                                <span><p>Stadium 974</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[29-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[29-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[30-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[30-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Sexta, 2 de Dez.</p>
                                <span><p>Grupo G - Jogo 47</p></span>
                                <span><p>Stadium 974</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[7-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[7-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[6-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[6-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Sexta, 2 de Dez.</p>
                                <span><p>Grupo G - Jogo 48</p></span>
                                <span><p>Lusail Iconic</p></span>
                            </div>
                        </div>
                    </div>`
                        
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
                                                
                        jogos.innerHTML = `<div class="jogos2">
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>10h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[32-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[32-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[10-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[10-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Quinta, 24 de Nov.</p>
                                <span><p>Grupo H - Jogo 14</p></span>
                                <span><p>Cidade da Educação</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>13h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[27-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[27-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[18-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[18-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Quinta, 24 de Nov.</p>
                                <span><p>Grupo H - Jogo 15</p></span>
                                <span><p>Stadium 974</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                                <div class="jogos3-hora">
                                <p>10h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[10-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[10-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[18-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[18-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Segunda, 28 de Nov.</p>
                                <span><p>Grupo H - Jogo 30</p></span>
                                <span><p>Cidade da Educação</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>16h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[27-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[27-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[32-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[32-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Segunda, 28 de Nov.</p>
                                <span><p>Grupo H - Jogo 32</p></span>
                                <span><p>Lusail Iconic</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>12h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[18-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[18-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[32-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[32-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Sexta, 2 de Dez.</p>
                                <span><p>Grupo H - Jogo 45</p></span>
                                <span><p>Al Janoub</p></span>
                            </div>
                        </div>
                        <div class="jogos3">
                            <div class="jogos3-hora">
                                <p>12h00</p>
                            </div>
                            <div class="jogos3-selecao">
                                <p class="p1">${response[10-1].nome}</p>
                                <div class="jogos3-selecaoImg">
                                    <img src="${response[10-1].imagem}" alt="">
                                    <span><p>x</p></span>
                                    <img src="${response[27-1].imagem}" alt="">
                                </div>
                                <p class="p2">${response[27-1].nome}</p>
                            </div>
                            <div class="jogos3-dia">
                                <p>Sexta, 2 de Dez.</p>
                                <span><p>Grupo H - Jogo 46</p></span>
                                <span><p>Cidade da Educação</p></span>
                            </div>
                        </div>
                    </div>`
                        
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
        var circle1 = document.querySelector('.circle1');
        var circle2 = document.querySelector('.circle2');
        var circle3 = document.querySelector('.circle3');
        var table2 = document.querySelector('.table2');

        fetch("/ranking/ranking").then(function (resposta2) {
            if (resposta2.ok) {
                console.log(resposta2)

                resposta2.json().then(function (response2) {
                    console.log(response2[0]);
                    
                    for (var i = 0; i < response2.length; i++) {
                        
                        var rank = response2[i].Ranking;
                        var nome = response2[i].nome;
                        var imagem = response2[i].imagem;
                        
                        if (i == 0) {
                            circle1.innerHTML = `
                            <b><p>1º</p></b>
                            <img src="${imagem}" alt="">
                            <p>${nome}</p>
                            <p><i>Votos: ${rank}</i></p>`
                        } else if (i == 1) {
                            circle2.innerHTML = `
                            <b><p>2º</p></b>
                            <img src="${imagem}" alt="">
                            <p>${nome}</p>
                            <p><i>Votos: ${rank}</i></p>`
                        } else if (i == 2) {
                            circle3.innerHTML = `
                            <b><p>3º</p></b>
                            <img src="${imagem}" alt="">
                            <p>${nome}</p>
                            <p><i>Votos: ${rank}</i></p>`
                        }


                        if (i >= 3) {
                            table2.innerHTML += `
                            <div class="lineTable">
                                <b><p>${i}º</p></b>
                                <div class="table2-box">
                                    <img src="${imagem}" alt="">
                                    <p>${nome}</p>
                                    <p><i>Votos: ${rank}</i></p>
                                </div>
                            </div>`
                        }

                        if (i == 10) {
                            break
                        }

                    }
                    
                })

            }
        });

    }

    window.onload = function() {
        dados(); ranking()
    };