
function enviar() {
    document.getElementById("numero").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
          event.preventDefault(); 
          enviar(); 
        }
      });
  const input = document.getElementById("numero");
  const valor = input.value.trim();
  const chat = document.querySelector(".chat-messages");

  if (valor === "") return;


  const userMsg = document.createElement("div");
  userMsg.className = "chat-message user";
  userMsg.innerHTML = `<p>${valor}</p>`;
  chat.appendChild(userMsg);

  let resposta = "";

  switch (valor) {
    case "1":
      resposta = "Você pode adquirir nossas camisas em: https://www.furia.gg/";
      break;
    case "2":
      resposta = "Assista à jogada do ano aqui: https://youtu.be/3MQB6MVVnig?si=zU36PUYEHEFp4ZI6";
      break;
    case "3":
      resposta = "Siga nosso Instagram: https://www.instagram.com/furiagg/";
      break;
    default:
      resposta = "Opção inválida. Por favor, digite 1, 2 ou 3.";
  }

  const botMsg = document.createElement("div");
  botMsg.className = "chat-message bot";
  botMsg.innerHTML = `<p>${resposta}</p>`;
  chat.appendChild(botMsg);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}

