class Carro {
    /**
     * Cria uma nova instância de um carro.
     * @param {string} marca - A marca do carro.
     * @param {string} modelo - O modelo do carro.
     * @param {number} ano - O ano de fabricação do carro.
     * @param {string} cor - A cor do carro.
     */
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidade = 0; // A velocidade inicial do carro é 0 km/h.
    }

    /**
     * Aumenta a velocidade do carro.
     * @param {number} velocidade - A quantidade de km/h para aumentar.
     */
    acelerar(velocidade) {
        this.velocidade += velocidade;
        console.log(`Você acelerou para ${this.velocidade} km/h`);
    }

    /**
     * Diminui a velocidade do carro.
     * @param {number} velocidade - A quantidade de km/h para diminuir.
     */
    desacelerar(velocidade) {
        this.velocidade -= velocidade;
        if (this.velocidade < 0) this.velocidade = 0; // A velocidade não pode ser negativa.
        console.log(`Você desacelerou para ${this.velocidade} km/h`);
    }

    /**
     * Para o carro, definindo a velocidade para 0.
     */
    parar() {
        this.velocidade = 0;
        console.log(`O carro parou.`);
    }

    /**
     * Exibe o status atual do carro.
     */
    status() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}, Velocidade: ${this.velocidade} km/h`);
    }
}

// Exemplo de uso
const meuCarro = new Carro('Toyota', 'Corolla', 2020, 'Prata');
meuCarro.acelerar(50);
meuCarro.desacelerar(20);
meuCarro.parar();
meuCarro.status();
