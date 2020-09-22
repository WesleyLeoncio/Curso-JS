const pessoa = {
    nome: "Wesley",
    idade: "28",
    endereco: {
        logradouro: "Rua ABC",
        numero: 560
    }
}


const {nome, idade} = pessoa; //Operador destructuring
// tipo da variavel {campos1 , campo2, ...} = nome da estrutura
console.log(nome, idade);

// Para mudar o nome das variaveis
const {nome: nomePessoa, idade: idadePessoa} = pessoa; 
// tipo da variavel {campos1 : novoNome, campo2: novoNome, ...} = nome da estrutura
console.log(nomePessoa, idadePessoa);

//Colocando um valor padrao na variavel 
const {sobrenome = "Não tem sobrenome"} = pessoa;
console.log(sobrenome);

// Pegando um objeto que está dentro de outro objeto!
const {endereco: {logradouro, numero}} = pessoa;
console.log(logradouro, numero);