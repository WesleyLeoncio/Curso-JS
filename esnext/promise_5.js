const { reject } = require("lodash");

// TRATAMENTO DE ERRO DE PROMISE

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Valores invalidos!');
        } else {
            resolve(valor);
        }
    })
}

funcionarOuNao('Testando ....', 0.5)
    .then(valor => console.log(valor))
    .catch(err => console.log(`Erro: ${err}`));