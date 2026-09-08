const formulario = document.getElementById("form-agendamento");

const mensagem = document.getElementById("mensagem-agendamento");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    mensagem.textContent = `🐾 Agendamento solicitado com sucesso, ${nome}! Em breve entraremos em contato para confirmar seu horário.`;

});