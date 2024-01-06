// Funções no TS

// Em TS, é uma boa prática tipar os parâmetros e o retorno

// Função para somar
function somar(num1:number, num2:number):number {
    return num1+num2;
}

// Função sem retorno (console não é retorno)
// Palavra reservada *void*
function texto(nome:string):void {
    console.log(`Boa noite ${nome}`);
}

// Usamos return quando queremos guardar uma informação em variável
let calculo:number = somar(5,6);
console.log(calculo)
let string = texto('a,b')