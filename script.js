document.getElementById("formContato").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const status = document.getElementById("status");

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      status.innerText = "Mensagem enviada com sucesso!";
      form.reset();
    } else {
      status.innerText = "Erro ao enviar mensagem.";
    }

  } catch (err) {
    console.error(err);
    status.innerText = "Erro ao enviar o formulário.";
  }
});