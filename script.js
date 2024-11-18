const storySteps = {
    inicio: {
      title: "Bem-vindo à Estória Interativa",
      text: "Você está em uma floresta escura. Ouve um barulho ao longe. O que deseja fazer?",
      options: [
        { text: "Explorar o barulho", next: "explorar" },
        { text: "Ficar parado", next: "parado" },
      ],
    },
    explorar: {
      title: "Explorando o Barulho",
      text: "Você encontra uma caverna misteriosa. Deseja entrar ou voltar para trás?",
      options: [
        { text: "Entrar na caverna", next: "caverna" },
        { text: "Voltar para trás", next: "inicio" },
      ],
    },
    parado: {
      title: "Ficando Parado",
      text: "Enquanto você espera, uma criatura aparece e você precisa decidir rápido.",
      options: [
        { text: "Correr", next: "inicio" },
        { text: "Enfrentar a criatura", next: "criatura" },
      ],
    },
    caverna: {
      title: "Dentro da Caverna",
      text: "Você encontrou um tesouro! Parabéns, você venceu a aventura.",
      options: [],
    },
    criatura: {
      title: "Enfrentando a Criatura",
      text: "Você enfrentou bravamente, mas a criatura era muito forte. Fim de jogo.",
      options: [],
    },
  };
  
  // Função para carregar o passo da estória
  function loadStep(step) {
    const app = document.getElementById("app");
    const currentStep = storySteps[step];
  
    // Salvar o passo atual no localStorage
    localStorage.setItem("lastStep", step);
  
    // Renderizar o conteúdo
    app.innerHTML = `
          <h1>${currentStep.title}</h1>
          <p>${currentStep.text}</p>
          <div>
              ${currentStep.options
                .map(
                  (option) => `
                  <a href="?step=${option.next}">${option.text}</a>
              `
                )
                .join("<br>")}
          </div>
      `;
  }
  
  // Recuperar o passo da URL ou localStorage
  function getInitialStep() {
    const params = new URLSearchParams(window.location.search);
    return params.get("step") || localStorage.getItem("lastStep") || "inicio";
  }
  
  // Evento para carregar a página
  window.addEventListener("load", () => {
    const step = getInitialStep();
    loadStep(step);
  });
  