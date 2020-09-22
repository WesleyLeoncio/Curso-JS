// Meu Exemplo de uma função parecida com class em java 
function Carro(model = "", veloc = 0) {
    let modelo = model;
    let velocidade = veloc;

    //GET/SET COM arrow
    this.setModelo = (model) => modelo = model;

    this.getModelo = () => modelo;

    this.setVelocidade = (veloc) => velocidade = veloc;

    this.getVelocidade = () => velocidade;

    this.toString = function () {
        return "Modelo: " + modelo + " Velocidade: " + velocidade;
    }

}

const carro1 = new Carro("BMW", 200);
const carro2 = new Carro("Ferrari", 250);

console.log(carro1.toString());
console.log(carro2.toString());



/* Legenda
 this simboliza que a função é publica

 funciona como um construtor de uma classe
 function Carro(model = "", veloc = 0) { let modelo = model; let velocidade = veloc; }

 */
