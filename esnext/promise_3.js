const { promises } = require("fs");

function gerarNumerosEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max]; //destructuring para inverter os valores
    }

    return new Promise(resolve => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;
        resolve(aleatorio);
    })
}

gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(console.log);