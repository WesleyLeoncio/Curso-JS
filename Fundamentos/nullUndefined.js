let valor; // não inicializada 
console.log(valor);

valor = null; // Auséncia de valor
//console.log(valor.toString()); // Não pode acessar um metodo de um variavel null

const produto = {};
console.log(produto.preco); // preço não voi declarada 
console.log(produto);

produto.preco = 3.50;
console.log(produto);
console.log(!!produto.preco); // Trasformando o valor em boolean 

/*
  Tipos basiscos da linguagem são passados como parametro já Objetos e outros tipos são passados
  como referencia
  
*/

// Exemplos de tipos por parametro
let a = 5;
let b = a; // Copia o conteudo da variavel
b++;
console.log("A: "+a+" B: "+b);
////////////////////////////////////////////

// Exemplos por referencias
const pessoa1 = {a: 5};
const pessoa2 = pessoa1; // Copia a referencia de onde está o objeto 
pessoa2.a = 6;
console.log("P1: "+pessoa1.a+" P2: "+pessoa2.a);
/*Qualquer alteração feita no objeto pessoa2 vai refletir nos dados da pessoa1 porque os 2
estão apontando para o mesmo endereço de memoria */
///////////////////////////////////////////////

