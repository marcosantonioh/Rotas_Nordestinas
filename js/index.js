//EU FIZ UMAS ALTERAÇÕES NO CÓDIGO ANTERIOR, COM ESSAS FUNÇÕES MODIFICADAS VOCÊ CONSEGUE CRIAR MAIS MODALS
//SEM PRECISAR VIR AQUI CRIAR UMA FUNÇÃO NOVA PARA CADA MODAL

//AQUI IRÁ GUARDAR OS IDS DOS MODALS QUE VOCÊ CRIOU
//TODA VEZ QUE CRIAR UM MODAL NOVO PEGUE O ID E COLOQUE AQUI
//O LOOP ABAIXO IRÁ CRIAR UM EVENTO PARA CADA MODAL QUANDO FOR CLICADO FORA DO MODAL ABERTO,
//O RESPECTIVO MODAL ABERTO SERÁ FECHADO
const idExtantModals = ['loginModal'];

idExtantModals.forEach(modal => {
    const openModal = document.getElementById(modal)
    const modalBtn = document.querySelector(`a[modal-target="${openModal.id}"]`)
    document.addEventListener('click', (e) => {
        if(!openModal.contains(e.target) && e.target.getAttribute('modal-target') != modalBtn.getAttribute('modal-target')){
            closeLoginModal(openModal.id)
        }
    })
})

// Função para fechar o modal
function closeLoginModal(modalId) {
    const activeModal = document.getElementById(modalId);
    const overlay = document.getElementById('overlay');
    activeModal.style.display = 'none';
    overlay.style.display = 'none';
}

// Função para abrir o modal
function openLoginModal(modalId) {
    const activeModal = document.getElementById(modalId);
    const overlay = document.getElementById('overlay');
    activeModal.style.display = 'flex';
    overlay.style.display = 'block';
}