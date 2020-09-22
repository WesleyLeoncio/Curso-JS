function rand ({min = 0, max = 100}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

const obj = {max: 50, min: 40};
const obj1 = {}; // SE for passar um valor vazio ele vai utilizar o valor padrão da função
console.log(rand(obj));