function rand([min = 0, max = 1000]){
    if(min > max){
        [min, max] = [max,min]; //Invertendo os valores
    }
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([1,6]));
