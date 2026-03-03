const btn = document.querySelector('#toggle-dark');


btn.addEventListener('click', () => {
  // Adiciona ou remove a classe no <html>
  document.documentElement.classList.toggle('dark-mode');

  
  // Opcional: Salvar a preferência no navegador do usuário
  const isDark = document.documentElement.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


class MobileNavBar{
  constructor(mobileMenu, navList, navLinks){
    this.mobileMenu = document.querySelector(mobileMenu); 
    this.navList = document.querySelector(navList); 
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active"

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log(this)
    this.navList.classList.toggle(this.activeClass)
  }

  addClickEvent(){
    this.mobileMenu.addEventListener("click", this.handleClick)
  }

  init(){
  if (this.mobileMenu && this.navList) {
    this.addClickEvent()
  }
  return this;
}
}

const mobileNavBar = new MobileNavBar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);

mobileNavBar .init();