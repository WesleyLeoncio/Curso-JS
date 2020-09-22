const moduloA = require("./modoloA");
const moduloB = require("./modoloB");
const modoloC = require("./modoloC");

console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);

console.log(moduloB.bomDia);
console.log(moduloB.boaNoite());
console.log(moduloB);

const teste = new modoloC("teste", 50); // Class importada  
console.log(teste);
