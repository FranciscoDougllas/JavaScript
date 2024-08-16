//Temos 2 formas de declara variaveis
// let: Permite declarar variáveis que podem ser reatribuídas dentro de um escopo de bloco.
// const: Permite declarar variáveis que não podem ser reatribuídas

let nome = "João"; // Variável mutável com o nome "João"
const idade = 30; // Variável constante com a idade 30

// Imprimindo no console
console.log("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");

// Imprimindo na página (não recomendado para aplicações complexas)
document.write("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");

// Inserindo o valor em um elemento HTML
let paragrafo = document.getElementById("meuParagrafo");
paragrafo.textContent = "Olá, meu nome é " + nome + " e tenho " + idade + " anos.";