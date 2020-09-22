const nome = "Wesley";
const nome1 = "Neuza";
const concatenacao = "Olá "+nome+"!"; 

const template = `Olá ${nome}!`; //Concatena uma string com uma expressão passada
console.log(template);

// Expressão
console.log(`1 + 1 = ${1 + 1}`); //Concatena uma string com uma expressão passada


const up = texto => texto.toUpperCase(); //Função para trasforma o texto em maiusculo 
console.log(`Ei... ${up("cuidado")}!`);