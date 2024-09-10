class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'atacou de forma desconhecida';
      }
      console.log(`o ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Criando alguns heróis
  const heroi1 = new Heroi('Gandalf', 2000, 'mago');
  const heroi2 = new Heroi('Conan', 30, 'guerreiro');
  const heroi3 = new Heroi('Ryu', 35, 'monge');
  const heroi4 = new Heroi('Hanzo', 32, 'ninja');
  
  // Chamando o método atacar para cada herói
  heroi1.atacar();
  heroi2.atacar();
  heroi3.atacar();
  heroi4.atacar();