// AULA 1 – Variáveis, operadores e entrada de dados
// Calculadora simples executada no Console

// 1. Entrada de dados (prompt devolve texto, por isso usamos Number)
const nome = prompt("Qual é o seu nome?") || "Aluno";
const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));

// 2. Operadores aritméticos
let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;
let resto = numero1 % numero2;
let potencia = numero1 ** numero2;

// 3. Saída no console
console.log(`Olá, ${nome}! Vamos calcular com ${numero1} e ${numero2}:`);
console.log(`${numero1} + ${numero2} = ${soma}`);
console.log(`${numero1} - ${numero2} = ${subtracao}`);
console.log(`${numero1} * ${numero2} = ${multiplicacao}`);
console.log(`${numero1} / ${numero2} = ${divisao}`);
console.log(`${numero1} % ${numero2} = ${resto}`);
console.log(`${numero1} ** ${numero2} = ${potencia}`);

// 4. Operadores de comparação (retornam true ou false)
console.log("Os números são iguais?", numero1 === numero2);
console.log("O primeiro é maior?", numero1 > numero2);

// 5. Tipos de dados
console.log("Tipo de nome:", typeof nome);
console.log("Tipo de numero1:", typeof numero1);
