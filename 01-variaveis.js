/*
    1o Conjunto de superset para JS / Base JS, mas pode ser considerado nova linguagem
    2o Microsoft é criadora e mantedora do TS
    3o Boa parte das tecnologias front-end utilizam TS
    4o Criado pelo desenvolvedor: Anders Hejlsberg
*/
// TS não obriga a tipar, aceita como o JS
var nome = 'Livia';
// Mas por boa prática, é importante definir o tipo
// O TS já percebe que o tipo não corresponde ao dado corretamente e notifica como erro
// let nome2:string = 2 // erro
// Variáveis (Tipos Primitivos)
var nome3 = 'Ralf';
var idade = 29;
var peso = 58.5;
var estuda = true;
// Obs: aqui não existe as subdivisões que outras linguagens tem em relação a número (ex: int, double, float)
// Quando não sabemos qual o tipo de dado que será recebido
var endereco = 'Rua Tal';
// Exibir variáveis
console.log("O nome \u00E9 ".concat(nome));
console.log("A idade \u00E9 ".concat(idade));
console.log("Estuda ".concat(estuda));
console.log("O endere\u00E7o \u00E9 ".concat(endereco));
