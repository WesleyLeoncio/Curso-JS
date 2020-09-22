let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // Os dois sinais de negação força a conversão do numero para boolean

console.log("Expressões verdadeiros");
console.log(!! 3); // Qualquer numero inteiro diferente de 0 será verdadeiro 
console.log(!! -1);
console.log(!! " "); // Qualquer texto que contenha pelo menos 1 caracter será verdadeiro 
console.log(!! "texto");
console.log(!! []); // Array mesmo vazio vai retornar verdadeiro
console.log(!! {}); // Um objeto tambem irar retornar verdadeiro
console.log(!! Infinity);
console.log(!! (isAtivo = true)); // retornara o valor da atribuição

console.log("---------------------------------------------");
console.log("Expressões falsas");
console.log(!! 0);
console.log(!! ""); //String vazia sempre retornara false
console.log(!! null);
console.log(!! NaN);
console.log(!! undefined);
console.log(!! (isAtivo = false));

console.log("Para finalizar...");
console.log(!!("" || null || 0 || " ")); //Retornar verdadeiro pois " " é verdadeiro 


// Utiliza a operação logina na string para verificar se ela é verdadeira ou falsa
let nome = "";
console.log(nome || "Campo não foi preenchido!");  

nome = "Wesley";
console.log(nome || "Campo não foi preenchido!");  