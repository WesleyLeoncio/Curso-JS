//Operador ... rest(junta)/Spread(espalha)
// usar rest com parâmetro de função
function total(...numeros) { // ... rest 
    let total = 0;
    numeros.forEach((n) => total += n);
    return total;
}


//usar spread com objeto
const funcionario = { nome: "Wesley", cpf: "135.895.568.70" }
const clone = { ...funcionario } // o operador spread espalha os valores do objeto funcionario 
console.log(clone);              // dentro do objeto clone               

//usar spread com array
const numeros = [1, 2, 3, 4];
const numerosFinal = [...numeros, 5, 6, 7, 8, 9]
console.log(numerosFinal);
