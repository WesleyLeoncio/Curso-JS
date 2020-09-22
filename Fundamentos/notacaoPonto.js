console.log(Math.ceil(6.1));

const obj1 = {}
obj1.nome = 'Bola';
console.log(obj1.nome);

function obj(nome){
   /* this dentro do conceito de função funciona para deixar uma variavel ou função publica 
   para que ele possa ser vista fora da função quando a função for estanciada parecida com 
   a class em java (Bizarro) */
   this.nome = nome; 
   this.exec = function() {
       console.log("Exec...");
   }
}
const obj2 = new obj("Cadeira");
const obj3 = new obj("Mesa");
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();