//Declarando funcoes
function teste(){
    console.log('Testando funções');
}
teste(); //Chamando a função


// Declarando uma função
const tete2 = function(){
    // Corpo da função
    console.log("Testando funções 2");
  }
// Chamando a função
tete2(); // "Testando funções 2"



// Exemplo com condição
const podeDirigir = function(idade){
    // Condição para verificar se a pessoa pode dirigir
    if(idade >= 18){
      // Se a pessoa tem 18 anos ou mais, pode dirigir
      console.log(`Voce tem ${idade} anos, pode dirigir`);
    }else if(idade >= 16 && idade < 18){
      // Se a pessoa tem entre 16 e 17 anos, pode votar
      console.log(`Voce tem ${idade} anos, pode votar`);
    }else{
      // Se a pessoa tem menos de 16 anos, não pode dirigir nem votar
      console.log(`Voce tem ${idade} anos, não pode dirigir nem votar`);
    }
}