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







// Função para inicializar os modais
function initModals() {
    const touristModal = document.getElementById('touristModal');
    const tipModal = document.getElementById('tipModal');
    const activityModal = document.getElementById('activityModal');

    // Botões de abrir modal
    const touristSuggestionButton = document.getElementById('touristSuggestionButton');
    const tipSuggestionButton = document.getElementById('tipSuggestionButton');
    const activitySuggestionButton = document.getElementById('activitySuggestionButton');

    // Botões de fechar modal
    const closeTouristModal = document.getElementById('closeTouristModal');
    const closeTipModal = document.getElementById('closeTipModal');
    const closeActivityModal = document.getElementById('closeActivityModal');

    // Abrir modais
    touristSuggestionButton?.addEventListener('click', () => {
        touristModal.style.display = 'flex';
    });

    tipSuggestionButton?.addEventListener('click', () => {
        tipModal.style.display = 'flex';
    });

    activitySuggestionButton?.addEventListener('click', () => {
        activityModal.style.display = 'flex';
    });

    // Fechar modais
    closeTouristModal?.addEventListener('click', () => {
        touristModal.style.display = 'none';
    });

    closeTipModal?.addEventListener('click', () => {
        tipModal.style.display = 'none';
    });

    closeActivityModal?.addEventListener('click', () => {
        activityModal.style.display = 'none';
    });

    // Fechar modal ao clicar fora
    window.addEventListener('click', (event) => {
        if (event.target === touristModal) touristModal.style.display = 'none';
        if (event.target === tipModal) tipModal.style.display = 'none';
        if (event.target === activityModal) activityModal.style.display = 'none';
    });
}

// Chamar a inicialização após carregar o conteúdo do modal
window.addEventListener('DOMContentLoaded', initModals);