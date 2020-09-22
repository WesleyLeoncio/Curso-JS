var numero = 1;
// Se for declarado uma variavel do tipo var com o mesmo nome ele sobrescreve a variavel
{
    var numero = 2;
    console.log("Dentro: "+numero);
}
console.log("Fora: "+numero);

