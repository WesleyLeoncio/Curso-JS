function tratarValor1(valor) {
    return "R$:" + valor.toFixed(2).toString().replace(".", ",");
}

const tratarValor2 = (valor) => "R$:" + valor.toFixed(2).replace(".", ",");

console.log(tratarValor1(0.30000000000000004));
console.log(tratarValor2(0.30000000000000004));