function Pessoa() {
    this.idade = 0;

    const selft = this;
    setInterval(function () {
        selft.idade++;
        console.log(selft.idade);
    }/*.bind(this))*/, 10000); // primeiro forma 
}

new Pessoa;