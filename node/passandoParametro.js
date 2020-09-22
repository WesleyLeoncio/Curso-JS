/*module.exports = function (...nomes) { // vai receber um numero de parametro variavel
    return nomes.map((nome) => `Boa Semana ${nome}`);
}*/

module.exports = function (...valores) {// vai receber um numero de parametro variavel
    return { // retorna um objeto com todas as funções
        soma(a, b) {
            return a + b;
        },
        subtrair(a, b) {
            return a - b;
        },
        multiplicar(a, b, c) {
            return a * b * c;
        },

        juntarNome(nome, profissao) {
            return "Nome: " + nome + " Profissão: " + profissao;
        }


    }


}