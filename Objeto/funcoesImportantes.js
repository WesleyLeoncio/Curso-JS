const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)); // retorna só os nomes do atributos
console.log(Object.values(pessoa)); // retorna só os valores 
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => { // usando destructuring para pegar os elementos do array
    console.log(chave + ": " + valor);
})

Object.defineProperty(pessoa, "dataNacimento", { // define algumas caracteristica para o atributo do objeto
    enumerable: true,
    writable: false,
    value: "01/01/2020"
})
pessoa.dataNacimento = "01/01/2019";
console.log(pessoa.dataNacimento);

//Object.assign
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3 };
Object.assign(dest, o1, o2); // coloca os atributos de outros objetos dentro de um objeto destino 
console.log(dest);