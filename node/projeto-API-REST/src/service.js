const porta = 3003;

const express = require('express'); // RESPONSAVEL POR CRIAR OS WEB SERVICE
const app = express();
const bodyParser = require('body-parser'); // RESPONSAVEL POR TRASFORMA EM OBJETO
const bancoDeDados = require('./bancoDeDados'); // BANCO DE DADOS EM MEMORIA PARA TESTE


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (req, res, next) => { // LISTAR TODOS OS PRODUTOS
    res.send(bancoDeDados.getProdutos({ extended: true }));
});

app.get('/produtos/:id', (req, res, next) => { // LISTAR PRODUTOS POR ID
    res.send(bancoDeDados.getProduto(req.params.id));
});

app.post('/produtos', (req, res, next) => { // INSERIR PRODUTO
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})


app.put('/produtos/:id', (req, res, next) => { // EDITAR PRODUTO
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => { // DELETAR PRODUTO
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

//ESCUNTADNO NA PORTA 3003
app.listen(porta, () => {
    console.log("Servidor executando na porta: " + porta);
});