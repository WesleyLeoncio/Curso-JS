const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));


/* Função que vai receber os dados do formulario */
app.post("/usuarios", (req, resp) => {
    console.log(req.body);
    const nomeUser = req.body.nome;
    const msg = "<h1>Sejá bem vindo " + nomeUser + "</h1>"
    resp.send(msg);
})

app.listen(3003);


/*    Dependencias
   Para baixar as dependencias entre na pasta do arquivo onde está o servidor
   Digite no terminal o comando: "npm init -y" para criar o arquivo package.json
   Digite no terminal o comando: "npm i ---save express@4.16.3 body-parser@1.18.2 -E"
*/