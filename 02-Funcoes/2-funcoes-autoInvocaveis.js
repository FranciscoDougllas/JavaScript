// Função autoinvocável que retorna um valor
(function() {
  console.log("Função autoinvocável 1");
  return "Valor retornado";
})();



// Função autoinvocável que não retorna um valor
(function() {
  console.log("Função autoinvocável 2");
})();



// Função autoinvocável que recebe parâmetros
(function(nome, idade) {
  console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
})("João", 30);


// Função autoinvocável que retorna uma função
let resultado = (function() {
  return function() {
    console.log("Função retornada");
  };
})();
resultado();


// Função autoinvocável que modifica o contexto
(function() {
  let contexto = "Função autoinvocável";
  console.log(this.contexto); // undefined
  console.log(contexto); // "Função autoinvocável"
}.bind({ contexto: "Objeto" })());


// Função autoinvocável que usa o operador new
let objeto = new (function() {
  // Esta é uma função anônima que é executada imediatamente após ser definida
  // O operador new é usado para criar um novo objeto
  this.nome = "João"; // Define a propriedade 'nome' do objeto com o valor "João"
  this.idade = 30; // Define a propriedade 'idade' do objeto com o valor 30
})();
// A função é executada e o objeto é criado
console.log(objeto.nome); // "João" // Acessa a propriedade 'nome' do objeto e imprime o valor
console.log(objeto.idade); // 30 // Acessa a propriedade 'idade' do objeto e imprime o valor