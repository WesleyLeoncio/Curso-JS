let comparaComThis = function (param) { // Função normal
    console.log(this === param);
}

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param); //Função arrow com 1 parametro
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

// Não tem como mudar o comportamento do this em funções arrow
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);

/* LEGENDA
   Em funções normais o this vai variar já em funções arrow o this vai permanecer o mesmo */