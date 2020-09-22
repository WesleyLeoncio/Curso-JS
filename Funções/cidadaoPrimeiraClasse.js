//Função em JS é Fist-Class Object (citizens)

//Criar de forma literal
function fun1() { }

//Armazenar em uma variavel
const fun2 = function () { };

//Armazenar em um array
const array = [function (a, b) { return a + b, fun1, fun2 }];

//Amarzena em um atrubuto de objeto
const obj = {};
obj.falar = function () { return "Opa" };
console.log(obj.falar());

// Passar função com param
function run(fun) {
    fun();
}

run(function () { console.log("executando....") });

//Um Função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}
soma(5, 5)(10);
const resultado = soma(5, 5);
resultado(15);