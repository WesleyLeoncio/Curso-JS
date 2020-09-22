const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));


/* Função que vai receber os dados do formulario */
app.post("/login", (req, resp) => {
    console.log(req.body);
    const usuario = { login: req.body.nLogin, senha: req.body.nSenha };//objeto
    const msg = verificar(usuario);
    resp.send(msg);
})

app.listen(3003);


function verificar(usuario) {
    const login = "admin";
    const senha = "123";
    if (usuario.login === login && usuario.senha === senha) {
        return "<h1>Login: " + usuario.login + " | Senha: " + usuario.senha + "</h2>";
    } else {
        return "<h1>Login e senha incorretos!</h1>"
    }
}

/*    Dependencias
   Para baixar as dependencias entre na pasta do arquivo onde está o servidor
   Digite no terminal o comando: "npm init -y" para criar o arquivo package.json
   Digite no terminal o comando: "npm i ---save express@4.16.3 body-parser@1.18.2 -E"
   para executar o servidor "node nomeServidor.js"
*/