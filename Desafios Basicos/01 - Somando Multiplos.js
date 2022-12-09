var a = parseInt(gets());
var N = parseInt(gets());
var soma = 0;
for (; a <= N; N--) {
  soma += (N % a === 0) ? N : 0;
}
print(soma);

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