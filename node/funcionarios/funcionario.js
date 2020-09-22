const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');



axios.get(url).then(response => {
    const funcionarios = response.data;
    // Desafio obter a mulher chinesa com menor salario
    const chinesas = funcionarios.filter(filtarPais).filter(filtarSexo);
    const chinesaMernorSalario = chinesas.reduce(menorSalario);
    console.log(chinesaMernorSalario);
});



const filtarPais = (funcionario) => funcionario.pais === "China";
const filtarSexo = (funcionario) => funcionario.genero === "F";
const menorSalario = (func, funcAtual) => {
    if (func.salario < funcAtual.salario) {
        return func;
    } else {
        return funcAtual;
    }
}



/* Teste de um web-service
const url1 = 'https://csr-backend-spring.herokuapp.com/veiculos';

axios.get(url1).then((response) => console.log(response.data)); // forma reducida de imprimir os dados
*/
