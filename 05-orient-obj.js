var Produto = /** @class */ (function () {
    // Como o acesso está privado, passamos os parâmetros pelo construtor
    // Construtor
    function Produto(nome, valor) {
        this.nome = nome;
        this.valor = valor;
        this.mensagem();
    }
    // Método para exibir uma mensagem
    Produto.prototype.mensagem = function () {
        console.log("O produto ".concat(this.nome, " custa ").concat(this.valor));
    };
    return Produto;
}());
// Instanciar objeto da classe Produto
// Através do construtor, passamos os parâmetros ao instanciar
var p = new Produto('iPhone15', 7000);
