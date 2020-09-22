{
    {
        {
            var sera = "Será ?";
            console.log("Dentro do Bloco: "+sera);
        }
    }
}
console.log("Fora do Bloco: "+sera);
/* JavaStrip reconhece a variavel do tipo var fora do bloco de codigo exceto quando for declarada
dentro de uma function*/

function teste(){
    var local =  123;
    console.log(local);
}
teste();
//console.log(local);