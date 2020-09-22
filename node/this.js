console.log(this == global);
console.log(this == module);


console.log(this == global);
//Fora de função this aponta para module.exports
console.log(this == module.exports);

function logThis() {
    //Dentro de uma função this aponta para global
    console.log(this === global);
}
logThis();