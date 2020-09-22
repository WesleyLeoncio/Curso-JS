const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) { // inserir/alterar 
    if (!produto.id) produto.id = sequence.id;
    produtos[produto.id] = produto;
    return produto;

}

function getProduto(id) { // listar por id
    return produtos[id] || {};
}

function getProdutos() { // listar todos 
    return Object.values(produtos);
}

function excluirProduto(id) {
    const produto = produtos[id];
    delete produtos[id];
    return produto;
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }