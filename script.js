const story = {
  inicio: {
    title: "Bem-vindo à Vila do Chaves",
    text: "Você chegou na vila do Chaves. O que deseja fazer primeiro?",
    options: [
      { text: "Visitar o Seu Madruga", next: "madruga" },
      { text: "Ir ao barril do Chaves", next: "barril" },
    ],
  },
  madruga: {
    title: "A Casa do Seu Madruga",
    text: "Seu Madruga está tentando consertar um móvel, mas está sem paciência. Ele pede sua ajuda. O que você faz?",
    options: [
      { text: "Ajudar Seu Madruga", next: "ajudar_madruga" },
      { text: "Fugir antes que ele fique bravo", next: "inicio" },
    ],
  },
  barril: {
    title: "O Barril do Chaves",
    text: "Você encontra o Chaves no barril, comendo um sanduíche de presunto. Ele te oferece um pedaço. O que você faz?",
    options: [
      { text: "Aceitar o sanduíche", next: "aceitar_sanduiche" },
      { text: "Recusar e sair do barril", next: "inicio" },
    ],
  },
  ajudar_madruga: {
    title: "Ajudando Seu Madruga",
    text: "Você ajuda Seu Madruga e ele fica muito feliz. Como agradecimento, ele te dá uma moeda para comprar churros com a Dona Florinda.",
    options: [
      { text: "Ir até a Dona Florinda", next: "dona_florinda" },
      { text: "Voltar para a vila", next: "inicio" },
    ],
  },
  aceitar_sanduiche: {
    title: "O Sanduíche do Chaves",
    text: "O sanduíche estava delicioso! O Chaves agradece sua companhia e te convida para jogar futebol com a turma.",
    options: [
      { text: "Jogar futebol", next: "futebol" },
      { text: "Voltar para a vila", next: "inicio" },
    ],
  },
  dona_florinda: {
    title: "A Casa da Dona Florinda",
    text: "Dona Florinda agradece pela visita e te serve um prato de churros. Mas cuidado, o Quico pode ficar com ciúmes!",
    options: [
      { text: "Conversar com Quico", next: "quico" },
      { text: "Voltar para a vila", next: "inicio" },
    ],
  },
  futebol: {
    title: "Partida de Futebol",
    text: "Você joga futebol com Chaves, Quico e Chiquinha. A turma se diverte muito, e o Quico faz um gol com sua bola quadrada.",
    options: [],
  },
  quico: {
    title: "O Ciúme do Quico",
    text: "Quico começa a reclamar e dizer que os churros deveriam ser só dele. Dona Florinda dá uma bronca nele, e você aproveita para voltar à vila.",
    options: [{ text: "Voltar para a vila", next: "inicio" }],
  },
};


function renderStory(step) {
  const content = document.getElementById("content");
  const current = story[step];

  
  localStorage.setItem("currentStep", step);

  
  const title = `<h1>${current.title}</h1>`;
  const text = `<p>${current.text}</p>`;
  const options = current.options
    .map((option) => `<a href="?step=${option.next}">${option.text}</a>`)
    .join("");

  content.innerHTML = `${title}${text}${options}`;
}


function getStep() {
  const params = new URLSearchParams(window.location.search);
  return params.get("step") || localStorage.getItem("currentStep") || "inicio";
}


window.addEventListener("load", () => {
  const step = getStep();
  renderStory(step);
});
