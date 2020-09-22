const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)); // Convertendo objeto em JSON usando JSON.stringify(obj)

//Converter Json para Objeto
const json1 = '{"a": 1, "b": 2, "c":3}';
const json2 = '{"a": 1, "b": "nome b", "c": true, "d": {}, "e": []}';
console.log(JSON.parse(json1));
console.log(JSON.parse(json2));

