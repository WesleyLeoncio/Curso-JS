// par nome/valor
const saudacao = "Opa"; // Contexto léxico 1(Local fisico onde a variavel foi definida)

function exec(){
    const saudacao = "Falaa" // Contexto léxico 2
    return saudacao;
}

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Muito Legal",
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);