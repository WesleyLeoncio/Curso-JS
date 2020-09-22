// Desafio Criar um novo array com os precos do array Carrinho usando map

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const novoArray = carrinho.map((e) => JSON.parse(e).preco);
console.log(novoArray);

// map retorna um novo array com base no primeiro array 
// O novo array foi criado do seguinde modo 
// o novoArray recebe o arrayAnterior.map passando uma função calback que vai trasforma o 
// json em um objeto depois foi usado a notação . para retorna somente o preco do objeto