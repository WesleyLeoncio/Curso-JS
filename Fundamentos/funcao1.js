// Função sem retorno 

function multiplicar(a, b){
    console.log(a * b);
}

function somar(a = 0, b = 0){ // Atribui um valor padrão para a variavel se não for passado nenhum valor
    console.log(a + b);
}
multiplicar(2, 5);
somar(5, 6);

// Função com retorno

function dividir(a, b){
    if(b != 0){
        return a / b;
    }else{
        return "O valor de B não pode ser 0";
    }
}

console.log(dividir(8, 0));
