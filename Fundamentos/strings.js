const escola = "Cod3r";

console.log(escola.charAt(4)); // Mostra o caracter na posição passada 
console.log(escola.charAt(5)); // Se a posição não existir ele retorna nulo 
console.log(escola.charCodeAt(3)); // Retorna o codigo da ASC da posião passada 
console.log(escola.indexOf("d")); // Verifica se tem o caracter e retorna a posição

console.log(escola.substring(1)); // Mostra todos os caracteres apartir de um index 
console.log(escola.substring(0 , 3)); // Mostra apartir do index inicial ate o index final - 1 

console.log("Escola ".concat(escola).concat("!")); // Concatena strings
console.log("Escola "+escola+"!");  // O operador + tambem concatena strings 
console.log(escola.replace(3, "e")); // Substitui o valor de um index por um valor passado

console.log("Ana,Maria,Pedro".split(",")); // Cria um array com base no separador passado