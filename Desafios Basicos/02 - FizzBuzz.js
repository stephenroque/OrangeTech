let resultado = gets();
print(fizzBuzz(resultado));

function fizzBuzz(n) {
  var aux = ((n % 3 === 0 ? 'Fizz' : '') + (n % 5 === 0 ? 'Buzz' : ''));
  return aux === '' ? n : aux;
}

// Desafio
// Neste desafio, você terá que criar uma função que faça um número como argumento e retorne "Fizz", "Buzz" ou "FizzBuzz". 

// Entrada
// Você receberá um número onde: 
// Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ; 
// Se o número for apenas múltiplo de 3 -> "Fizz" ; 
// Se o número for apenas múltiplo de 5 -> "Buzz"; 
// Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido; 

// Saída
// Retorne a palavra correta de acordo com o seu múltiplo. Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme exemplo abaixo:

// EXEMPLO DE ENTRADA  EXEMPLO DE SAÍDA 
// 3                   Fizz
// 5                   Buzz
// 15                  FizzBuzz 
// 4                   4 