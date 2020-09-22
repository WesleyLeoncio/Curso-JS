const fs = require('fs'); // modulo responsavel por ler e gravar em arquivo

const caminho = __dirname + '/arquivo.json';

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// assincrono... 
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(config.db.host + ": " + config.db.port);
});

const config = require('./arquivo.json');
console.log(config);

// ler pasta
fs.readdir(__dirname, (err, arquivo) => {
    console.log("Conteudo da Pasta ...");
    console.log(arquivo);
});