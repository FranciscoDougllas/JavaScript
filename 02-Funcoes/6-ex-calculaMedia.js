/**
 * Função anônima autoinvocada que calcula a média de um conjunto de números.
 */
(function(){
  /**
   * Função que calcula a média de um conjunto de números.
   * @param {...number} numbers - Números a serem calculados.
   * @returns {number} A média dos números.
   */
  function calculaMedia(){
    let total = 0; // Soma dos números
    let qtd = arguments.length; // Quantidade de números

    // Loop que itera sobre os números
    for(let i = 0; i < qtd; i++){
      // Verifica se o número é um número
      if(typeof arguments[i] !== 'number'){
        throw Error("only numbers"); // Lança erro se não for número
      }
      total += arguments[i]; // Adiciona o número à soma
    }

    // Retorna a média
    return total / qtd;
  }

  // Chama a função com números
  let media1 = calculaMedia(2, 4);
  let media2 = calculaMedia(1, 3, 5, 7);

  // Imprime os resultados
  console.log(media1);
  console.log(media2);
})();