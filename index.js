document.addEventListener('DOMContentLoaded', () => {
  
  const menuToggle = document.getElementById('menu-icono');
  const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('show');
    });

});
