//Cadeia de protótipos (prototype chain)

/*Legenda
  Os 2 jeitos de usar herança:
  __proto__ : objeto pai
  Object.setPrototypeOf(Objeto Filho, Objeto Pai);
*/

const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B" };
const filho = { __proto__: pai, attr3: "C" };
console.log(filho.attr1 + " " + filho.attr2 + " " + filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,

    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },

    status() {
        return this.velAtual + "Km/h de " + this.velMax;
    }
}

const ferrari = {
    //__proto__: carro,
    modelo: "F40",
    velMax: 324 // vai sobrescrever o valor que ta no variavel velMax do pai (Carro)
}

const volvo = {
    // __proto__: carro,
    modelo: "V40",
    status() { // Sobrescrevendo a função e usando o super para acessar a função original do pai(Carro)
        return this.modelo + ": " + super.status();
    }
}
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

ferrari.acelerarMais(310);
console.log(ferrari.status());

volvo.acelerarMais(190);
console.log(volvo.status());


