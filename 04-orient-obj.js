// Orientação a Objetos em Typescript
// Em TS, o uso do *constructor* é opcional, mas será necessário na utilização de métodos
// Classe -> Molde
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    return Pessoa;
}());
// Instanciar objeto
var p = new Pessoa();
p.nome = 'Camila';
p.idade = 39;
p.cidade = 'Recife';
// Caso algum dos atributos fosse recebido pelo usuário, elencaríamos via html(form/input)

console.log(p)