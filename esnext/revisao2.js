// Arrow Function 
const soma = (a, b) => a + b;

// Parametro default 

function log(texto = "Node") {
    console.log(texto);
}
log();
log("Sou mais forte");

// Operador rest 

function total(...numeros) {
    let total = 0;
    numeros.forEach((n) => total += n);
    return total;
}

function totalReduce(...numeros) {
    return numeros.reduce((acumulador, atual) => acumulador + atual);
}
console.log(total(2, 3, 4));
console.log(totalReduce(2, 3, 4));
