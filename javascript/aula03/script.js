// AULA 3 – DOM, eventos, formulário e mensagens
// Aplicação web completa: classificador de alunos

// 1. Seleção de elementos do DOM
const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");
const camposNota = [
  document.getElementById("nota1"),
  document.getElementById("nota2"),
  document.getElementById("nota3"),
];
const mensagem = document.getElementById("mensagem");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");
const botaoLimpar = document.getElementById("limpar");

// 2. Estado da aplicação
let alunos = [];

// 3. Funções (reaproveitadas da Aula 2)
function notaValida(nota) {
  return !isNaN(nota) && nota >= 0 && nota <= 10;
}

function calcularMedia(notas) {
  return notas.reduce((soma, n) => soma + n, 0) / notas.length;
}

function classificar(media) {
  if (media >= 7) return "Aprovado";
  if (media >= 5) return "Recuperação";
  return "Reprovado";
}

// 4. Mensagens de feedback ao usuário
function mostrarMensagem(texto, tipo) {
  mensagem.textContent = texto;
  mensagem.className = tipo; // "erro" ou "sucesso"
}

// 5. Renderização da lista no DOM
function renderizar() {
  lista.innerHTML = "";

  alunos.forEach((aluno, indice) => {
    const item = document.createElement("li");

    const info = document.createElement("span");
    info.textContent = `${aluno.nome} – média ${aluno.media.toFixed(1)} `;

    const badge = document.createElement("span");
    badge.className = `badge ${aluno.situacao}`;
    badge.textContent = aluno.situacao;
    info.appendChild(badge);

    const remover = document.createElement("button");
    remover.textContent = "Remover";
    remover.addEventListener("click", () => {
      alunos.splice(indice, 1);
      renderizar();
      mostrarMensagem(`${aluno.nome} foi removido.`, "sucesso");
    });

    item.append(info, remover);
    lista.appendChild(item);
  });

  contador.textContent = alunos.length === 0
    ? "Nenhum aluno cadastrado."
    : `Total de alunos: ${alunos.length}`;
}

// 6. Evento de envio do formulário (com validação)
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // impede o recarregamento da página

  const nome = campoNome.value.trim();
  const notas = camposNota.map((campo) => Number(campo.value));

  if (nome === "") {
    mostrarMensagem("Informe o nome do aluno.", "erro");
    campoNome.focus();
    return;
  }

  for (let i = 0; i < camposNota.length; i++) {
    if (camposNota[i].value === "" || !notaValida(notas[i])) {
      mostrarMensagem(`A nota ${i + 1} deve ser um número de 0 a 10.`, "erro");
      camposNota[i].focus();
      return;
    }
  }

  const media = calcularMedia(notas);
  const situacao = classificar(media);

  alunos.push({ nome, media, situacao });
  renderizar();
  mostrarMensagem(`${nome}: média ${media.toFixed(1)} → ${situacao}.`, "sucesso");

  formulario.reset();
  campoNome.focus();
});

// 7. Evento do botão "Limpar lista"
botaoLimpar.addEventListener("click", () => {
  if (alunos.length === 0) {
    mostrarMensagem("A lista já está vazia.", "erro");
    return;
  }
  alunos = [];
  renderizar();
  mostrarMensagem("Lista limpa com sucesso.", "sucesso");
});

// 8. Primeira renderização
renderizar();
