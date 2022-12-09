let n = parseInt(gets());

function somatorio(n) {
    return n === 0 ? 0 : n + somatorio(n - 1);
}
print(somatorio(n));

// Descrição
// Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   

// Entrada
// A Entrada será composta por um número inteiro, N. 

// Saída
// Será  impresso o somatório de N até 0, como no exemplo a baixo: 

// EXEMPLO DE ENTRADA   EXEMPLO DE SAÍDA
// 10	                55
// 4	                10
// 15	                120