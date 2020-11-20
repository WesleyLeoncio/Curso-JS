let p = new Promise(function (resolve) {
    resolve(['Ana', 'Carlos', 'João']);
})

const primeiroElemento = (array) => array[0];
const primeiraLetra = (letra) => letra[0];
const letraMinuscula = (letraM) => letraM.toLowerCase();

p
    .then(primeiroElemento)
    .then(primeiraLetra) // pega a chamada anterior e aplica a função
    .then(letraMinuscula)// pega a chamada anterior e aplica a função
    .then(console.log)