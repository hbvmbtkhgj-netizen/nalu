const text = `
Nalu,
depois de tudo isso,
de cada palavra,
de cada detalhe…

eu só queria te perguntar uma coisa,
com o coração aberto
e um sorriso nervoso:

você aceita (não)namorar comigo?
`;

let index = 0;
const speed = 45;
const pedido = document.getElementById("pedido");

function escrever() {
  if (index < text.length) {
    pedido.innerHTML += text.charAt(index);
    index++;
    setTimeout(escrever, speed);
  }
}

escrever();

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function aceitou() {
  document.body.style.transition = "opacity 1.5s";
  document.body.style.opacity = 0;

  setTimeout(() => {
    window.location.href = "fasefinal.html";
  }, 1500);
}
