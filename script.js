const btn = document.querySelector('#toggle-dark');

btn.addEventListener('click', () => {
  // Adiciona ou remove a classe no <html>
  document.documentElement.classList.toggle('dark-mode');
  
  // Opcional: Salvar a preferência no navegador do usuário
  const isDark = document.documentElement.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});