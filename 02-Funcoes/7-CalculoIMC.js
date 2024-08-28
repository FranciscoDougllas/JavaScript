// Função para calcular o IMC
function calcularIMC(peso, altura) {
    // Calcula o IMC
    const imc = peso / (altura * altura);
    
    // Retorna o IMC
    return imc;
  }
  
  // Função para classificar o IMC
  function classificarIMC(imc) {
    // Classifica o IMC
    if (imc < 18.5) {
      return "Magreza";
    } else if (imc < 25) {
      return "Normal";
    } else if (imc < 30) {
      return "Sobrepeso";
    } else if (imc < 35) {
      return "Obesidade Grau I";
    } else if (imc < 40) {
      return "Obesidade Grau II";
    } else {
      return "Obesidade Grau III";
    }
  }
  
  // Programa principal
  function main() {
    // Pergunta o peso e a altura do usuário
    const peso = 80.5;//parseFloat(prompt("Digite o seu peso (em kg):"));
    const altura = 1.67; //parseFloat(prompt("Digite a sua altura (em metros):"));
    
    // Calcula o IMC
    const imc = calcularIMC(peso, altura);
    
    // Classifica o IMC
    const classificacao = classificarIMC(imc);
    
    // Mostra o resultado
    console.log(`Seu IMC é: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);
  }
  
  // Chama o programa principal
  main();