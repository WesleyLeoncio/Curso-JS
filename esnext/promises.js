const { reject } = require("lodash");

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase);
        }, segundos * 1000)
    })
}

falarDepoisDe(10, "Que legal!").then(frase => console.log(frase));