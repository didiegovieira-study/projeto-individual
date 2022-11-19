
    function ranking() {

        fetch("/ranking/ranking").then(function (resposta2) {
            if (resposta2.ok) {
                console.log(resposta2)

                resposta2.json().then(function (response2) {
                    console.log(response2[0]);
                    var rank = response2[0].Ranking;
                    var nome = response2[0].nome;

                    p.innerHTML = `${rank}`
                })

            }
        });

    }

    window.onload = function() {
        ranking()
    };