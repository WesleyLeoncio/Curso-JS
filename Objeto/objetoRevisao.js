// Coleção dinâmica de pares chave/valor 
const produto = new Object();
produto.nome = "Cadeira"
produto.preco = 350;
console.log(produto);
///////////////////////////////////

// Objeto comum 
const pessoa = {
    nome: "",
    idade: 0
}
///////////////////////////////////////////////////////////

// Objeto podem ser compostos por outros objetos e funções
const aluno = {
    pessoa,
    nota: 0,

    calcularNota() {
        if (this.nota > 6) {
            console.log(" Nota Azul");
        } else {
            console.log("Nota Vermelha");
        }
    }
}

aluno.pessoa.nome = "Wesley";
aluno.pessoa.idade = 23;
aluno.nota = 10;
console.log(aluno);
aluno.calcularNota();
//////////////////////////////////////////////////////////

//Array de Objetos
const jogador = [{
    nome: "JOGADOR 1",
    gols: 10
}, {
    nome: "JOGADOR 2",
    gols: 9
}]

console.log(jogador);
//////////////////////////////////////

/*Legenda
  Diferente de java em javaScript objetos podem ser declarados de forma dinamia
*/