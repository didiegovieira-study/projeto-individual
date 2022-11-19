

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
                    } else if (selecao == 20 || selecao == 25 || selecao == 16 || selecao == 21) {
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
                    } else if (selecao == 20 || selecao == 25 || selecao == 16 || selecao == 21) {
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
                    } else if (selecao == 20 || selecao == 25 || selecao == 16 || selecao == 21) {
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
                    } else if (selecao == 20 || selecao == 25 || selecao == 16 || selecao == 21) {
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
                    } else if (selecao == 20 || selecao == 25 || selecao == 16 || selecao == 21) {
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