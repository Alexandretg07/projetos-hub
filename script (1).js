// AULA 2 – Funções, condicionais, validação e repetição
// Classificador de resultados executado no Console

// Função de validação: nota deve ser número entre 0 e 10
function notaValida(nota) {
  return !isNaN(nota) && nota >= 0 && nota <= 10;
}

// Função que lê uma nota e repete (while) até ser válida
function lerNota(numero) {
  let nota;
  do {
    const entrada = prompt(`Digite a nota ${numero} (0 a 10):`);
    if (entrada === null) return null; // usuário cancelou
    nota = Number(entrada.replace(",", "."));
    if (entrada.trim() === "" || !notaValida(nota)) {
      console.warn("Nota inválida! Tente novamente.");
      nota = NaN;
    }
  } while (isNaN(nota));
  return nota;
}

// Função que calcula a média
function calcularMedia(notas) {
  let soma = 0;
  for (const n of notas) {
    soma += n;
  }
  return soma / notas.length;
}

// Função com condicionais (if / else if / else)
function classificar(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

// Programa principal com repetição: vários alunos
const resultados = [];
let continuar = true;

while (continuar) {
  const nome = prompt("Nome do aluno:");
  if (!nome) break;

  const notas = [];
  for (let i = 1; i <= 3; i++) {
    const nota = lerNota(i);
    if (nota === null) break;
    notas.push(nota);
  }
  if (notas.length < 3) break;

  const media = calcularMedia(notas);
  const situacao = classificar(media);
  resultados.push({ nome, media, situacao });

  console.log(`${nome}: média ${media.toFixed(1)} → ${situacao}`);
  continuar = confirm("Deseja cadastrar outro aluno?");
}

// Resumo final
console.log("===== RESUMO =====");
console.table(resultados);
console.log(`Total de alunos: ${resultados.length}`);
