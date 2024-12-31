// Função para carregar templates reutilizáveis
function loadTemplate(elementId, templatePath) {
    fetch(templatePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar template:', error));
}

// Carregar o header e footer
document.addEventListener('DOMContentLoaded', () => {
    loadTemplate('header', '../global/header.html');
    loadTemplate('footer', '../global/footer.html');
    loadTemplate('feedback-section', '../global/feedback.html');
});
