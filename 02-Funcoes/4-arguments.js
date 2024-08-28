// Função para somar os elementos de um array
// @param {Array} arr - Array de números a serem somados
// @returns {number} - Soma dos elementos do array
function somar(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// Exemplo de uso da função somar
console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Saída: 55


// Função para somar os argumentos passados
// @returns {number} - Soma dos argumentos
function somar2() {
    console.log(arguments); // Exibe os argumentos passados para a função
    let tot = 0;
    for (let i = 0; i < arguments.length; i++) {
        tot += arguments[i];
    }
    return tot;
}

// Exemplos de uso da função somar2
console.log(somar2(1, 2, 3)); // Saída: 6
console.log(somar2(4, 5));    // Saída: 9
console.log(somar2(5, 6, 7)); // Saída: 18
