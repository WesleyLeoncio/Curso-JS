const { timingSafeEqual } = require("crypto");

// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias na Notação Literal

const pessoa = {
    nome: "Carla",
    ola() {
        return "Ola meu nome é " + this.nome;
    }
}

console.log(pessoa.ola());

// CLASS
class Pai {
    constructor(sobrenome = "Leoncio") {
        this.sobrenome = sobrenome;
    }
}

class Filho extends Pai {
    constructor(nome, sobrenome) {
        super(sobrenome);
        this.nome = nome;
    }
    getNomeCompleto() {
        return this.nome + " " + this.sobrenome;
    }
}
const filho = new Filho("Wesley");

console.log(filho.getNomeCompleto());