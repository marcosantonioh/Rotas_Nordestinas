// Seleciona os elementos
const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const userSidebar = document.getElementById('userSidebar');
const userSidebarWrapper = document.getElementById('userSidebarWrapper');

// Abre o sidebar ao clicar no botão do menu
menuButton.addEventListener('click', () => {
    userSidebarWrapper.classList.add('open');
    userSidebar.classList.add('open');
});

// Fecha o sidebar ao clicar no botão de fechar
closeButton.addEventListener('click', () => {
    userSidebarWrapper.classList.remove('open');
    userSidebar.classList.remove('open');
});

// Fecha o sidebar ao clicar fora dele
userSidebarWrapper.addEventListener('click', (event) => {
    // Verifica se o clique foi fora do modal
    if (!userSidebar.contains(event.target)) {
        userSidebarWrapper.classList.remove('open');
        userSidebar.classList.remove('open');
    }
});






// Função genérica para abrir sidebars
function openSidebar(id) {
    const sidebar = document.getElementById(id);
    if (sidebar && !sidebar.classList.contains('open')) {
        sidebar.classList.add('open'); // Adiciona a classe 'open' apenas se o sidebar não estiver aberto
    }
}

// Função genérica para fechar sidebars
function closeSidebar(id) {
    const sidebar = document.getElementById(id);
    if (sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open'); // Remove a classe 'open' se o sidebar estiver aberto
    }
}

// Adiciona eventos aos botões
document.getElementById('editProfileButton').addEventListener('click', () => {
    openSidebar('editProfileSidebar'); // Abre o sidebar de edição de perfil
});

document.getElementById('suggestionButton').addEventListener('click', () => {
    openSidebar('suggestionSidebar'); // Abre o sidebar de sugestão
});

// Fecha o sidebar ao clicar no botão de fechar
document.getElementById('closeButton').addEventListener('click', () => {
    closeSidebar('userSidebarWrapper'); // Fecha o sidebar principal
});

// Fecha o sidebar ao clicar fora dele
userSidebarWrapper.addEventListener('click', (event) => {
    if (!userSidebar.contains(event.target)) {
        closeSidebar('userSidebarWrapper');
    }
});

// Função para exibir a mensagem de sucesso
function showSuccessMessage(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const suggestionForm = document.getElementById('suggestionForm');
    suggestionForm.style.display = 'none'; // Oculta o formulário
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block'; // Exibe a mensagem de sucesso
}

// Função para navegar de volta à página inicial
function goToHomePage() {
    window.location.href = 'cidades.html';
}