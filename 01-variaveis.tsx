/*
    1o Conjunto de superset para JS / Base JS, mas pode ser considerado nova linguagem
    2o Microsoft é criadora e mantedora do TS
    3o Boa parte das tecnologias front-end utilizam TS
    4o Criado pelo desenvolvedor: Anders Hejlsberg
*/

// TS não obriga a tipar, aceita como o JS
let nome = 'Livia'

// Mas por boa prática, é importante definir o tipo
// O TS já percebe que o tipo não corresponde ao dado corretamente e notifica como erro
// let nome2:string = 2 // erro

// Variáveis (Tipos Primitivos)
let nome3:string = 'Ralf'
let idade:number = 29;
let peso:number = 58.5;
let estuda:boolean = true;

// Obs: aqui não existe as subdivisões que outras linguagens tem em relação a número (ex: int, double, float)

// Quando não sabemos qual o tipo de dado que será recebido
let endereco:any = 'Rua Tal'

// Exibir variáveis
console.log(`O nome é ${nome}`);
console.log(`A idade é ${idade}`);
console.log(`Estuda ${estuda}`);
console.log(`O endereço é ${endereco}`);

// 'Exportar' arquivo TS
// npx tsc nome_arquivo.ts
// Cria um arquivo JS

// Executar projeto
// node nome_arquivo.js