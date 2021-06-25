const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid');
const usuarioApi = require('./api/usuario');
const produtoApi = require('./api/produto');

app.post('/usuario',usuarioApi.salvar);
app.get('/usuario',usuarioApi.obter);

produtoApi(app, 'parametro');

// observação bodyParser foi preterido a nova forma é usando o express
app.use(bodyParser.text()); // Nova forma de escrever é com "express"
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(saudacao("Wesley"));


app.use('/mundo', (req, res, next)=>{
    console.log("Antes...");
    next();
});

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })
    res.send(req.body);
});

app.get('/clientes/relatorio', (req, res)=>{
    res.send(`Cliente relatorio: completo = ${req.query.completo} ano = ${req.query.ano}`);
});


app.get('/clientes/:id', (req, res)=>{
    res.send(`Clientes ${req.params.id} selecionado!`)
});




app.get('/mundo', (req, res, next)=>{
    console.log("Durante...")
    res.json({nome: 'Wesley', idade:'25'});
    next();
})


app.get('/mundo', (req, res, next)=>{
    console.log("Depois...")
})





app.listen(3000, ()=>{
    console.log("Backend executando...");
});