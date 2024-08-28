/**
 * Função que executa uma ação de callback.
 * 
 * @param {function} cb - Função de callback a ser executada.
 * @description Executa a ação de callback e imprime informações 
 * sobre o tipo da função.
 */

function executarCallback(cb) {
    console.log("Executando ação de callback");
    console.log(`Tipo da função: ${typeof cb}`);
    cb();
}

// Exemplo de uso:
executarCallback(function() {
    console.log("Função passada por parâmetro");
});