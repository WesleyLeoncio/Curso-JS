const fs = require('fs'); // modulo responsavel por ler e gravar em arquivo

const caminho = __dirname + '/dados.txt';


function imprimirDados(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString());
        })
    })
}

imprimirDados(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(console.log);


