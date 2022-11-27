// Desafio
// Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

// Entrada
// A entrada deverá ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 

// Saída
// A saída deverá retornar o valor da soma de todos os múltiplos A até o seu limite N.

// Exemplo 1

// Entrada	Saída
// 5
// 20	    50

// Exemplo 2

// Entrada	Saída
// 3
// 18	    63

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

var a = parseInt(gets());
var N = parseInt(gets());
var soma = 0;
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

for (;a<(N+1);N--){
    if (N%a == 0){
        soma=soma+=N;
    }
}
print(soma);