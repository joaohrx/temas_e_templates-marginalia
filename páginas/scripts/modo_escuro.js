document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggle = document.getElementById("toggle-darkmode");
  const icone = document.getElementById("solelua");

  // Função para atualizar o ícone baseado no modo atual
  function atualizarIcone() {
      if (body.classList.contains("modo-escuro")) {
          icone.src = "../assets/sol.svg";
          icone.alt = "Ícone do sol";
      } else {
          icone.src = "../assets/lua.svg";
          icone.alt = "Ícone da lua";
      }
  }

  // Verificar se o modo escuro estava ativo e aplicar
  if (localStorage.getItem("modo-escuro") === "true") {
      body.classList.add("modo-escuro");
  }
  
  // Atualizar o ícone inicial baseado no estado
  atualizarIcone();

  // Event listener para o toggle
  if (toggle) {
      toggle.addEventListener("click", () => {
          body.classList.toggle("modo-escuro");
          localStorage.setItem("modo-escuro", body.classList.contains("modo-escuro"));
          atualizarIcone();
      });
  }
});
  