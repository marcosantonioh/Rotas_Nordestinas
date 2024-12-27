// Seleciona os elementos
const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const userSidebar = document.getElementById('userSidebar');

// Adiciona o evento de clique no botão do menu
menuButton.addEventListener('click', () => {
    userSidebar.classList.add('open');
});

// Adiciona o evento de clique no botão de fechar
closeButton.addEventListener('click', () => {
    userSidebar.classList.remove('open');
});
