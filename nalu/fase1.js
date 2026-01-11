const text = `
Eu preciso da sua graça,
Para me lembrar,
Para encontrar a minha própria.

Tudo o que eu sou,
Tudo que já fui,
Está aqui nos seus olhos perfeitos,
eles são tudo o que consigo ver.

Pois nestes dias eu fui feliz,
Pois nestes dias eu renasci,
Pois eu amei um anjo.
`;

const speed = 45;
let index = 0;
const textElement = document.getElementById("text");
const button = document.getElementById("nextBtn");

function typeWriter() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    button.style.opacity = 1;
  }
}

function goNext() {
  window.location.href = "fase2.html";
}

typeWriter();
