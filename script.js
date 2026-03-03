const btn = document.querySelector('#toggle-dark');


btn.addEventListener('click', () => {
  // Adiciona ou remove a classe no <html>
  document.documentElement.classList.toggle('dark-mode');

  
  // Opcional: Salvar a preferência no navegador do usuário
  const isDark = document.documentElement.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

const hamburger = document.getElementById("hamburger");
const menu = document.querySelector("nav ul");


hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

const botao = document.getElementById('toggle-dark');
const imagem = botao.querySelector('img');