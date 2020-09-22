const ferrari = {
    modelo: "F40",
    velMax: 324
}

const volvo = {
    modelo: "V40",
    velMax: 200
}

console.log(ferrari.__proto__); // __proto__ vai mostrar que é o pai do objeto
console.log(ferrari.__proto__ === Object.prototype);
