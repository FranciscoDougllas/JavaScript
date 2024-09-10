function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Determina o nível com base no número de vitórias
    let nivel;
    if (vitorias >= 101) {
        nivel = "Imortal";
    } else if (vitorias >= 91) {
        nivel = "Lendário";
    } else if (vitorias >= 81) {
        nivel = "Diamante";
    } else if (vitorias >= 51) {
        nivel = "Ouro";
    } else if (vitorias >= 21) {
        nivel = "Prata";
    } else if (vitorias >= 11) {
        nivel = "Bronze";
    } else {
        nivel = "Ferro";
    }

    // Retorna o saldo e o nível
    return { saldoVitorias, nivel };
}

// Exemplo de uso
const vitorias = 35; 
const derrotas = 10; 

// Chama a função
const resultado = calcularNivel(vitorias, derrotas);

// Exibe a mensagem
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
