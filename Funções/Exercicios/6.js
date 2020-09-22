function jurosSimples1(capital, periodo, juros) {
    return capital + (capital * juros * periodo);
}

function jurosComposto1(capital, periodo, juros) {
    return capital * (1 + juros) ** periodo;
}


console.log(jurosSimples1(300, 6, 0.10));
console.log(jurosComposto1(300, 6, 0.10));