module.exports = {

    criarDiv(nome = 'Sem Nome') {
        const body = document.querySelector('body');
        const divNome = document.createElement('div');
        divNome.innerHTML = nome;
        body.appendChild(divNome)
    },
}