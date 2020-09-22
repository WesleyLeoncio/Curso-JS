console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
    return this.split("").reverse().join("");
}
console.log("Escola".reverse());

// Como String é uma função vc pode criar ou mudar metodos  da funções 
