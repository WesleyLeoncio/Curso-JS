//Forma normal colocando a função na variavel
let dobro = function (a) {
    return 2 * a;
}

// Forma ArrowFunction que oculta a palavra reservada function
dobro = (a) => {
    return 2 * a;
}

/*Forma ArrowFunction que oculta a palavra reservada function e sem o corpo da função quando tem um
parametro só alem de ter retorno implícito*/
dobro = a => 2 * a;
console.log(dobro(Math.PI));