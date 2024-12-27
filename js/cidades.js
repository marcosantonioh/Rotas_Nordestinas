// Seleciona os elementos
const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const userSidebar = document.getElementById('userSidebar');
const userSidebarWrapper = document.getElementById('userSidebarWrapper');

// Abre o modal ao clicar no botão do menu
menuButton.addEventListener('click', () => {
    userSidebarWrapper.classList.add('open');
    userSidebar.classList.add('open');
});

// Fecha o modal ao clicar no botão de fechar
closeButton.addEventListener('click', () => {
    userSidebarWrapper.classList.remove('open');
    userSidebar.classList.remove('open');
});

// Fecha o modal ao clicar fora dele
userSidebarWrapper.addEventListener('click', (event) => {
    // Verifica se o clique foi fora do modal
    if (!userSidebar.contains(event.target)) {
        userSidebarWrapper.classList.remove('open');
        userSidebar.classList.remove('open');
    }
});

