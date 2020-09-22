function Pessoa(nome) {
    let nomeP = nome;

    this.falar = () => console.log("Meu nome é " + nomeP);

}



const p1 = new Pessoa("Wesley");
const p2 = new Pessoa("Pedro");
p1.falar();
p2.falar();