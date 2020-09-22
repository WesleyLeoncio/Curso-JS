const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

const contadorC = require('./instanciaNova')(); // Ta pegando o objeto 
const contadorD = require('./instanciaNova')();

contadorA.inc();
contadorA.inc();

contadorC.inc();
contadorC.inc();


console.log(contadorA.valor, contadorB.valor);
console.log(contadorC.valor, contadorD.valor);