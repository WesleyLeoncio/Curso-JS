// let e cont 

{
    var a = 2; // é visivel fora do bloco
    let b = 3; // só é visivel no bloco
    console.log(b);
}
console.log(a);

// Template String 
const produto = 'Ipad';
console.log(`${produto} é caro!`);

// Destructuring 
const [b, c, d] = [1, 2, 3];
console.log(b, c, d);

const { idade: i, nome } = { nome: "Wesley", idade: 24 }
console.log(nome, i);