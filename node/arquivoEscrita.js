const fs = require('fs');

const produto = {
    nome: 'celular',
    preco: 1240.90,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo!');
})

/*const prod = require('./arquivoGerado.json');
console.log(prod.nome);*/



