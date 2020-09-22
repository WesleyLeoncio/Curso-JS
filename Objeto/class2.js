class Avo {

    constructor(sobrenome) {
        this._sobrenome = sobrenome;
    }

    setSobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }
    getSobrenome() {
        return this._sobrenome;
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = "Professor") {
        super(sobrenome);
        this._profissao = profissao;
    }
}

class Filho extends Pai {
    constructor() {
        super("Silva");
    }
}
const filho = new Filho();
const avo = new Avo();
filho.setSobrenome("Leoncio");
console.log(avo);
console.log(filho);