class Produto {
    
    // Atributos
    // Se declarados sem nada, tem acesso *public*
    // nome:string;
    // valor:number;

    // Podemos alterá-los para *privado*
    private nome:string;
    private valor:number;
    
    // Como o acesso está privado, passamos os parâmetros pelo construtor

    // Construtor
    public constructor(nome:string, valor:number) {
        this.nome = nome;
        this.valor = valor;

        this.mensagem();
    }

    // Método para exibir uma mensagem
    private mensagem() {
        console.log(`O produto ${this.nome} custa ${this.valor}`)
    }
}

// Instanciar objeto da classe Produto
// Através do construtor, passamos os parâmetros ao instanciar
const p = new Produto('iPhone15', 7000);