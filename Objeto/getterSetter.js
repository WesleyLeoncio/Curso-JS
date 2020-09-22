/* Legenda 
   Em javaScript não existe atributos privados então para demostrar que um atributo só pode
   ser mexido internamente é utlilizado _ para representar um atributo privato 
   Exemplo(_nome, _idade) 
*/

const pessoa = {
    _nome: "",
    _idade: 0,

    get nome() { return this._nome },

    set nome(nome) { this._nome = nome; },

    get idade() { return this._idade; },

    set idade(idade) {
        if (idade > 0) {
            this._idade = idade;
        }
    }

}

pessoa.nome = "Wesley";
pessoa.idade = 23;
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);


class Aluno {
    _nome;
    _nota;

    get nome() { return this._nome; }
    set nome(nome) { this._nome = nome; }

    get nota() { return this.nota; }
    set nota(nota) { this._nota = nota; }

}

const aluno = new Aluno();
aluno.nome = "Wesley";
aluno.nota = 7;
console.log(aluno);

/* Lebrando que com _ o atributo não se torna privado. Então se for muito importante que atributo
   seja privado e que só possa acessar pelos metodos get/set, a melhor forma é usar uma função
   construtora para criar o objeto
*/

// Dentro da função criar metodos publicos com a palavra this para acesar os dados 
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