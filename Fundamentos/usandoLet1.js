var numero = 1;

{
    let numero = 2; // let tem escopo em broco sepre vai da preferencia para o menor escopo 
    console.log("Dentro: "+numero);
}
console.log("Fora: "+numero);