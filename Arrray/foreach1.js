const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];
aprovados.forEach((nome, index) => { console.log((index + 1) + ") " + nome) });

aprovados.forEach((nome) => console.log(nome));

const exibirAprovados = aprovado => console.log(aprovado);//funcão na variavel
aprovados.forEach(exibirAprovados);

aprovados.forEach((nome, index, array) => {
    console.log((index + 1) + ") " + nome);
    console.log(array);
});

/* Legenda
    forEach tem 3 parametros e todos são opcionais o primeiro é o nome o segundo o index e o terceiro
    é o array,objeto, etc.....

*/