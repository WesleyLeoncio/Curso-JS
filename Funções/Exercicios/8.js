let pontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0";



function calcularRecordes(pontuacao) {
    let vetPontuacao = pontuacao.split(", ");
    let maiorPT = vetPontuacao[0];
    let menorPT = vetPontuacao[0];
    let quantidadeR = 0;
    let piorJogo = 1;

    for (let i = 0; i < vetPontuacao.length; i++) {
        if (vetPontuacao[i] > maiorPT) {
            maiorPT = vetPontuacao[i];
            quantidadeR++;
        } else if (vetPontuacao[i] < menorPT) {
            menorPT = vetPontuacao[i];
            piorJogo = i + 1;
        }
    }


    return [quantidadeR, piorJogo, maiorPT];
}

console.log(calcularRecordes(pontuacoes));
