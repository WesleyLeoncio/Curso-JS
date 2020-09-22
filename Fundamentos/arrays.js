const valores = [1, 2, 3, 4];
console.log(valores[0], valores[3]);
console.log(valores);

valores[4] = 5;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, "teste"); //Push adiciona valores no array 
console.log(valores); // O array pode ter varios tipos de dados diferentes(ex:boolean,String)

console.log(valores.pop());//Retira o último elemento do arrray
delete valores[0]; // Remove um dado valor do array com base no index passado
console.log(valores); 

console.log(typeof valores); // Array em javaScrip é do tipo object