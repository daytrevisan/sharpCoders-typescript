// Orientação a Objetos em Typescript

// Em TS, o uso do *constructor* é opcional, mas será necessário na utilização de métodos

// Classe -> Molde
class Pessoa {
    // Atributos
    nome:string;
    idade:number;
    cidade:string;
}

// Instanciar objeto
const p = new Pessoa();
p.nome = 'Camila';
p.idade = 39;
p.cidade = 'Recife';

// Caso algum dos atributos fosse recebido pelo usuário, elencaríamos via html(form/input)

console.log(p)