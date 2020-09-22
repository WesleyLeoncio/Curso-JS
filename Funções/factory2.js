function criarProduto(nomeProd = "Nome invalido", precoProd = 0) {
    return {
        nome: nomeProd,
        preco: precoProd,
        desconto: 0.10
    }
}

console.log(criarProduto("Carro 1", 20000));
console.log(criarProduto("Carro 2", 40000));
console.log(criarProduto());