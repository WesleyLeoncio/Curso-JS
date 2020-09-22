const pilotos = ["Vettel", "Alonso", "Raikkonem", "Massa"];
pilotos.pop(); // Remove o ultimo elemento da lista
console.log(pilotos);

pilotos.push("Verstappen"); //Adiciona um elemento na ultima posição do array
console.log(pilotos);

pilotos.shift(); // Remove o primeiro elemento da lista 
console.log(pilotos);

pilotos.unshift("Hamiton"); // adiciona um elemento na primeira posição do array
console.log(pilotos);


// slice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

// Remover
pilotos.splice(3, 1);
console.log(pilotos);


const algunsPilotos1 = pilotos.slice(2); // Cria um novo array com pedaços de outro array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);// vai pegar do index 1 ao 3 o 4 não entra 
console.log(algunsPilotos2);