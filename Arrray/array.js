let aprovados = ["Bia", "Carlos", "Ana"];

console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = "Paulo";
aprovados.push("Abia"); // Adiciona no final do array
console.log(aprovados.length);

aprovados[9] = "Rafael"
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);

aprovados.sort(); //Ordena o array
console.log(aprovados);

delete aprovados[1];
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana", "Elemento1", "Elemento2"];

aprovados.splice(1, 2, "Elemento3", "Elemento4");
console.log(aprovados);

/* 
   Quando coloca em um dado em uma posição na frente as outras posições anteriores ficam como udefined
   Exemplo: aprovados[0] = "Rafael"; aprovados[1] = "Tiago" aprovados[5] = "Wesley" as posições 2,3,4
   seram criadas e seus valores serão ndefined

   funçãom splice funciona do seguinte modo o primeiro valor passsado splice(1) representa o elemento
   que a função vai realizar uma operação Exemplo se for passaod somente splice(1) ele vai deletar
   todos os elementos do 1 para frente agora se ouver um segundo paramentro splice(1, 2) ele vai deletar
   somente 2 elementos a partir do elemento 1. agora se ouver um terceiro parametro
   splice(1, 2, "Elemento3", "Elemento4"); ele irar deletar "Carlos", "Ana" e adicionar na posição delas
   os 2 novos elemntos para n excluir nenhum elemento basta colocar no segundo parametro o 0
   aprovados.splice(1, 0, "Elemento3", "Elemento4");

*/