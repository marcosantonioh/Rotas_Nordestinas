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
});





const cityData = {
    recife: {
        name: "Recife",
        // description: "Recife é conhecida como a Veneza Brasileira...",
        points: [
            {
                name: "Casa Grande do Engenho das Dunas",
                description: "O coração de Recife, onde eventos culturais acontecem. Cercado por construções históricas e próximo ao Recife Antigo.",
                image: "/images/cidades/casa_grande_engenho_dunas.png"

            },
            {
                name: "Boa Viagem",
                description: "Um museu de arte e cultura que abriga uma vasta coleção de armas e obras de arte em um ambiente arquitetônico impressionante.",
                image: "/images/cidades/boa_viagem.png"
            },
            {
                name: "Praia de Boa Viagem",
                description: "Uma das praias mais famosas do Brasil, conhecida por sua extensa faixa de areia e águas mornas, além de opções gastronômicas incríveis.",
                image: "/images/cidades/praia_boa_viagem.png"
            }
        ]
    },
    salvador: {
        name: "Salvador",
        description: "Salvador é famosa pelo Carnaval e o Pelourinho...",
        points: [
            "Pelourinho",
            "Elevador Lacerda",
            "Igreja de São Francisco"
        ]
    }
    // Adicione mais cidades aqui
};



const params = new URLSearchParams(window.location.search);
const cityKey = params.get("cidade") || "recife"; // Padrão: Recife

const city = cityData[cityKey];

if (city) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <div class="container">
            <h1 class="cityName">${city.name}</h1>
            <h2 class="points-title">Pontos Turísticos:</h2>
            <div class="points-list">
                ${city.points
                    .map(point => `
                        <div class="group1">
                            <img class="point-image" src="${point.image}" alt="${point.name}">
                            
                            <div class="group2">    
                                <h3 class="point-name">${point.name}</h3>
                                <p class="point-description">${point.description}</p>
                            </div>
                        </div>
                    `)
                    .join('')}
            </div>
        </div>
    `;
} else {
    document.getElementById("content").innerHTML = "<p>Informações não disponíveis para esta cidade.</p>";
}
