const { promises } = require("fs");

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('Executando Promise ...');
            resolve();
        }, tempo)
    })
}

esperarPor()
    .then(esperarPor)
    .then(esperarPor);