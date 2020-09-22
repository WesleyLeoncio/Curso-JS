// Armazenar função em variavel

const imprimirSoma = function(a, b){
    console.log(a + b);
}
imprimirSoma(5, 10);

// Armazenando função arrow em uma variavel

const soma =(a,b)=>{ // Usado para substituir a palavra reservada function para reduzir codigo
  return a + b;
}
console.log(soma(8, 8));


// Retorno implicito com arrow

const subtrair = (a, b) => a - b; // Retirando as {} é posivel utilizar o retorno implicito
console.log(subtrair(10, 5));