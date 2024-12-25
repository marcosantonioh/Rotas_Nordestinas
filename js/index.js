//EU FIZ UMAS ALTERAÇÕES NO CÓDIGO ANTERIOR, COM ESSAS FUNÇÕES MODIFICADAS VOCÊ CONSEGUE CRIAR MAIS MODALS
//SEM PRECISAR VIR AQUI CRIAR UMA FUNÇÃO NOVA PARA CADA MODAL

//AQUI IRÁ GUARDAR OS IDS DOS MODALS QUE VOCÊ CRIOU
//TODA VEZ QUE CRIAR UM MODAL NOVO PEGUE O ID E COLOQUE AQUI
//O LOOP ABAIXO IRÁ CRIAR UM EVENTO PARA CADA MODAL QUANDO FOR CLICADO FORA DO MODAL ABERTO,
//O RESPECTIVO MODAL ABERTO SERÁ FECHADO
const idExtantModals = [
    'login', 
    'forgotPassword', 
    'informarCodigo', 
    'alterarSenha', 
    'sucesso',
    'cadastro'
];

idExtantModals.forEach(modal => {
    const openModal = document.getElementById(modal)
    const modalBtn = document.querySelector(`a[modal-target="${openModal.id}"]`)
    document.addEventListener('click', (e) => {
        if(!openModal.contains(e.target) && e.target.getAttribute('modal-target') != modalBtn.getAttribute('modal-target')){
            closeModal(openModal.id)
        }
    })
})


// Função para abrir o modal
function openModal(modalPath) {
    const modalId = modalPath.split('/').pop(); // Obtém o nome do modal
    const activeModal = document.getElementById(modalId);
    const overlay = document.getElementById('overlay');

    if (activeModal) {
        // Se o modal já está carregado, apenas exibe
        activeModal.style.display = 'flex';
        overlay.style.display = 'block';
    } else {
        // Construir dinamicamente o caminho do arquivo modal
        const modalFile = `modais/${modalPath}.html`;

        // Carregar o modal dinamicamente
        fetch(modalFile)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao carregar o modal: ${modalFile}`);
                }
                return response.text();
            })
            .then(data => {
                // Criar um container para o modal
                const modalContainer = document.createElement('div');
                modalContainer.innerHTML = data;

                // Adicionar o modal ao corpo da página
                document.body.appendChild(modalContainer);

                // Exibir o modal carregado
                document.getElementById(modalId).style.display = 'flex';
                overlay.style.display = 'block';
            })
            .catch(error => console.error(error));
    }
}



// Função para fechar o modal
function closeModal() {
    const modals = document.querySelectorAll('.modal');
    const overlay = document.getElementById('overlay');

    modals.forEach(modal => (modal.style.display = 'none'));
    overlay.style.display = 'none';
}

