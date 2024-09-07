// Classe Pessoa
class Pessoa {
    // Construtor da classe
    constructor(nome, idade) {
        // Atributos da classe
        this.nome = nome; // Nome da pessoa
        this.idade = idade; // Idade da pessoa
    }

    // Método para exibir detalhes da pessoa
    exibirDetalhes() {
        // Exibe o nome e a idade da pessoa no console
        console.log(`Nome: ${this.nome} Idade: ${this.idade}`);
    }

    // Método para cumprimentar
    cumprimentar() {
        // Exibe uma mensagem de cumprimento no console
        console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// Instanciação de objetos da classe Pessoa
const pessoa = new Pessoa('João', 29); // Cria um objeto Pessoa com nome 'João' e idade 29
const p2 = new Pessoa('Maria', 40); // Cria um objeto Pessoa com nome 'Maria' e idade 40

// Chamada dos métodos
pessoa.cumprimentar(); // Chama o método cumprimentar do objeto 'pessoa'
p2.exibirDetalhes(); // Chama o método exibirDetalhes do objeto 'p2'
