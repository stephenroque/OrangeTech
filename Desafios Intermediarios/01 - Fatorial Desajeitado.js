let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

let r = n;
let s = 0;
let x = 1;

if (n <= 2) { 

print(n); 

} else {
    n--;
    for (; n > 0; n--) {
        if (x == 1) {
            r = r * n;
        } else if (x == 2) {
            r = Math.round(r / n);
        } else if (x == 3) {
            r = r + n;
        } else if (x == 4) {
            s += r;
            r = -n;
            x = 0;
        }
        if (n == 1 && x != 0) {
            s += r;
        }
        x++;
    }
    print(s);
}

// Desafio
// O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n. Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação por uma rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de operações aritméticas. Além disso, a divisão neste caso sempre resulta em um número inteiro, por exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n.

// Entrada
// A entrada consiste em um valor inteiro positivo N.

// Saída
// A saída consiste em retornar o valor do seu fatorial desajeitado de N, conforme exemplo abaixo.

// Exemplo 1:
// Entrada  Saída
// 4	    7
// Explicação: 7 = 4 * 3 / 2 + 1 

// Exemplo 2:
// Entrada  Saída
// 10	    12
// Explicação: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1