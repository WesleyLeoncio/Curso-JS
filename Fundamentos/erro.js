function tratarErroELancar(erro) {
    throw new Error("Ocorreu um erro!");
}


function imprirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!");
    } catch (e) {
        tratarErroELancar(e);
    } finally {
        console.log("Final");
    }
}

const pessoa = { nome: "Wesley" };
imprirNomeGritado(pessoa);