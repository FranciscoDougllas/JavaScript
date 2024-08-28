function externa() {
    console.log("Função externa");
  
    function interna() {
      console.log("Função interna");
    }
  
    interna(); // Chama a função interna
  }
  
  externa(); // Chama a função externa



//Exemplo Calculadora
  function calculadora() {
    function somar(a, b) {
      return a + b;
    }
  
    function subtrair(a, b) {
      return a - b;
    }
  
    function multiplicar(a, b) {
      return a * b;
    }
  
    function dividir(a, b) {
      return a / b;
    }
  
    return {
      somar: somar,
      subtrair: subtrair,
      multiplicar: multiplicar,
      dividir: dividir
    };
  }
  
  var calc = calculadora();
  console.log(calc.somar(2, 3)); // 5
  console.log(calc.subtrair(5, 2)); // 3