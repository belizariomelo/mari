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

// fechar o menu hamburguer quando um link é clicado
var links = document.querySelectorAll("nav ul li a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    menuToggle.classList.remove("open");
    nav.classList.remove("open");
  });
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
const regexHorario = /^([01]\d|2[0-3]):([0-5]\d)$/;


const form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const procedimento = document.getElementById("procedimento").value;

  const dataInput = document.getElementById("data");
  const dataValue = dataInput.value;
  const dataParts = dataValue.split("/");
  const dataIso8601 = `${dataParts[2]}-${dataParts[1]}-${dataParts[0]}`;

  const horario = document.getElementById("horario").value;
  


  if (!regexHorario.test(horario)) {
    return;
  }

  const texto = `Olá, meu nome é ${nome}. Gostaria de agendar um(a) ${procedimento} para o dia ${dataValue} às ${horario}.`;

  const api = `https://api.whatsapp.com/send?phone=5561986727887&text=${encodeURIComponent(
    texto
  )}`;
  window.location.href = api;
});


const dataInput = document.getElementById("data");

// Adiciona as barras ao inserir a data
dataInput.addEventListener("input", function (event) {
  let value = event.target.value;
  value = value.replace(/\D/g, ""); // remove todos os caracteres não numéricos
  value = value.replace(/(\d{2})(\d)/, "$1/$2"); // adiciona a primeira barra
  value = value.replace(/(\d{2})(\d)/, "$1/$2"); // adiciona a segunda barra
  event.target.value = value;
});
const horarioInput = document.getElementById("horario");
horarioInput.oninvalid = function() {
  horarioInput.setCustomValidity("Por favor, insira um horário entre 10:00 e 16:00");
};
