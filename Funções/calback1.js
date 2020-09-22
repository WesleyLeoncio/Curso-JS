const fabricante = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
    console.log(indice + 1 + ". " + nome);
}

fabricante.forEach(imprimir);
fabricante.forEach(fabricante => console.log(fabricante));


/*Legenda
 Calback é a passagem de uma função que sera executada quando um evento acontecer
 Exemplo: forEach a cada elemento encontrado ele chama a função imprir passando os parametros
*/