//Desafio 
const alunos = [
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.8, bolsista: false },
    { nome: "Ana", nota: 8.7, bolsista: true }
];

const resultados = alunos.map(a => a.bolsista);
console.log(resultados);

const temBolsista = resultados.reduce((acumulado, atual) => acumulado && atual);

const eBolsista = resultados.reduce((acumulado, atual) => acumulado || atual);
console.log(temBolsista);
console.log(eBolsista);

