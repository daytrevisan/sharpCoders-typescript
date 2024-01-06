// Funções no TS
// Em TS, é uma boa prática tipar os parâmetros e o retorno
// Função para somar
function somar(num1, num2) {
    return num1 + num2;
}
// Função sem retorno (console não é retorno)
// Palavra reservada *void*
function texto(nome) {
    console.log("Boa noite ".concat(nome));
}
// Usamos return quando queremos guardar uma informação em variável
var calculo = somar(5, 6);
var string = texto('a,b');
