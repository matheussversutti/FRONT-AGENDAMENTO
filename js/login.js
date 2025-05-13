export function initLogin() {
  window.addEventListener("DOMContentLoaded", function () {
    console.log("DOM completamente carregado!");

    document.getElementById("login-form-admin").addEventListener("submit", async function (e) {
      e.preventDefault();
      console.log("Formulário enviado!");

      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senha").value.trim();
      const erroDiv = document.getElementById("mensagemErro");
      erroDiv.classList.add("d-none");

      try {
        const response = await fetch("http://localhost:8080/administrador/administradores");
        console.log("Resposta recebida:", response);

        if (!response.ok) {
          erroDiv.textContent = "Erro ao buscar administradores.";
          erroDiv.classList.remove("d-none");
          return;
        }

        const admins = await response.json();
        console.log("Dados da API:", admins);

        const adminValido = admins.find(adm =>
          adm.email === email && adm.senha === senha
        );

        if (adminValido) {
          localStorage.setItem("nomeAdmin", adminValido.nome);
          window.location.href = "dashboard.html";
        } else {
          erroDiv.textContent = "Usuário ou senha inválidos.";
          erroDiv.classList.remove("d-none");
        }
      } catch (err) {
        console.error("Erro de conexão:", err);
        erroDiv.textContent = "Erro de conexão com o servidor.";
        erroDiv.classList.remove("d-none");
      }
    });
  });
}