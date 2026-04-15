

// -----------------------------
// FORMULÁRIO DE CONTATO
// -----------------------------
document.getElementById("formContato").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    nome: form.nome.value,
    email: form.email.value,
    telefone: form.telefone.value,
    mensagem: form.mensagem.value
  };

  try {
    const res = await fetch("http://localhost:3000/leadscontato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    document.getElementById("status").innerText = result.message;
    form.reset();
  } catch (err) {
    document.getElementById("status").innerText = "Erro ao enviar o formulário.";
    console.error(err);
  }
});


// -----------------------------
// ATUALIZA OS LEADS
// -----------------------------

async function atualizarLead(id, status, observacoes) {
  try {
    const response = await fetch(`http://localhost:3000/leads/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status, observacoes })
    });

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error('Erro:', error);
  }
}

// -----------------------------
// BOTÃO BACK TO TOP
// -----------------------------
const btnTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  btnTop.style.display = window.scrollY > 300 ? "block" : "none";
});

// -----------------------------
// MENU HAMBURGUER FUNCIONAL
// -----------------------------
const toggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Fecha menu ao clicar em link
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// -----------------------------
// SCROLL SUAVE COM OFFSET (HEADER FIXO)
// -----------------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});


//-----------------------------
//CAROUSEL
//-----------------------------


document.addEventListener("DOMContentLoaded", () => {

  const carousel = document.getElementById('carouselProjetos');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  // só executa se existir
  if (carousel && next && prev) {

    next.addEventListener('click', () => {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });

    prev.addEventListener('click', () => {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });

  }

});