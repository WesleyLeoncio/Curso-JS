console.log("01) ", "1" == 1); // Compara somente os valores 
console.log("02) ", "1" === 1);// O igual a mais na operação compara o valor e o tipo
console.log("03) ", "3" != 3);// Compara somente os valores 
console.log("04) ", "3" !== 3);// O igual a mais na operação compara o valor e o tipo
console.log("05) ", 3 < 2);  // Igual java
console.log("06) ", 3 > 2);  // Igual java
console.log("07) ", 3 <= 2); // Igual java
console.log("08) ", 3 >= 2); // Igual java

const d1 = new Date(0); // Zero representa a data de referência da linguagem
const d2 = new Date(0); 
console.log("09) ", d1 == d2); // Vai da falsa pois vai comparar o endereço de memoria e n o valor
console.log("10) ", d1 === d2); // Vai da falsa pois vai comparar o endereço de memoria e n o valor
console.log("10) ", d1.getTime === d2.getTime); // Agora vai da verdadeiro pois está utilizando um valor

