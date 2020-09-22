class Lancamento {

    constructor(nome = "Generico", valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.mes = mes;
        this.lancamentos = [];
    }
    // ... representa q a função vai receber uma quantidade de paramentros variavel
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario() {
        let valorConsolidade = 0;
        this.lancamentos.forEach(l => {
            valorConsolidade += l.valor;
        })
        return valorConsolidade;
    }
}

const salario = new Lancamento("Salario", 45000);
const contaDeLuz = new Lancamento("Luz", -220);

const contas = new CicloFinanceiro(11, 2020);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas);
console.log(contas.sumario());