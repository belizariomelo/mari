function abrirFormulario() {
  document.getElementById("formulario").style.display = "block";
}

function fecharFormulario(event) {
  event.preventDefault(); // Impede o comportamento padrão do botão
  document.getElementById("formulario").style.display = "none";
}
// abrir/fechar o menu hamburguer ao clicar
var menuToggle = document.querySelector(".menu-toggle");
var nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("open");
  nav.classList.toggle("open");
});
new Glide(".glide", {
  type: "carousel",
  perView: 1,
  focusAt: "center",
  autoplay: 3500,
  hoverpause: true,
  breakpoints: {
    640: {
      perView: 1.25,
    },
  },
  animationDuration: 500,
}).mount();
const form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const procedimento = document.getElementById("procedimento").value;

  const data = new Date(document.getElementById("data").value);
  const dataFormatada = data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const horario = document.getElementById("horario").value;
  // Constrói a mensagem de texto
  const texto = `Olá, meu nome é ${nome}.
               Gostaria de agendar um(a) ${procedimento} para o seguinte dia e horário:
               Data: ${data}
               Horário: ${horario}.`;

  const api = `https://api.whatsapp.com/send?phone=5561986727887&text=${encodeURIComponent(
    texto
  )}`;
  window.location.href = api;
});
