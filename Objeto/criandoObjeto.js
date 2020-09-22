// Usando a notação literal
const obj1 = {}
console.log(obj1);

// Object em JS
const obj2 = new Object();
console.log(obj2);


// Funções Construtoras
function Produto(nome, preco) {

    this.getNome = () => nome;
    this.setNome = (novoNome) => nome = novoNome;

    this.getPreco = () => preco;
    this.setPreco = (novoPreco) => preco = novoPreco;
}
const p1 = new Produto("Caneta", 2);
//p1.setNome("Lapis");
//p1.setPreco(1);
console.log(("Nome: " + p1.getNome()), "Preço: " + p1.getPreco());

//Função Factory
function criarFuncionario(nome, salario) {
    return {
        nome,
        salario
    }
}
const p2 = criarFuncionario("Wesley", 600);
console.log(p2);

//Object.create

const filha = Object.create(null);
filha.nome = "Wesley"
console.log(filha);

// Um função famosa que retorna Objeto...
const fromJSOM = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSOM.info);

// Class
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade
    }
}
const ps1 = new Pessoa("Wesley", 23);
console.log(ps1);