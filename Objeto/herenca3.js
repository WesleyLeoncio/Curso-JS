const pai = { nome: "Pedro", corCabelo: "preto" }
const filha1 = Object.create(pai);
filha1.nome = "Ana";
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: { value: "Bia", writable: false, enumerable: true }
})

console.log(filha2.nome);
filha2.nome = "Carla"; // Não vai poder setar o nome pois na configuração do objeto foi congelado
console.log(filha2.nome + " tem cabelo " + filha2.corCabelo);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (let key in filha2) {
    console.log(key);
}

for (let key in filha2) {
    if (filha2.hasOwnProperty(key)) {
        console.log(key);
    } else {
        console.log("Por herença: " + key)
    }


}

/*
 Legenda
 const filho = Object.create(Objeto Pai); define que o filho herdara os atributos e funçoes do pai.

 const filha2 = Object.create(pai, {nome: { value: "Bia", writable: false, enumerable: true }})
 Alem de definir que o objeto vai receber as caracteristicas do pai ele define os permiçoes de um
 atributo.

 (writable: false) não permite alteração do atributo
 (enumerable: true) permite que o atributo seja listado

*/