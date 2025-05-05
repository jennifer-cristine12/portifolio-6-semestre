document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector(".cards-container"); // Supondo que você tenha um contêiner para vários cards

    // todo: tirar esses exemplos e subistituir pelos projetos
    const projetos = [
        {
            titulo: "Projeto 1 - Web Design",
            alternativo:"Imagem 1",
            subtitulo: "Design Responsivo",
            descricao: "Este projeto consiste em um site responsivo, projetado para dispositivos móveis e desktop, com foco na experiência do usuário.",
            imagem: "../img/imagem1.jpg",
        },
        {
            titulo: "Projeto 2 - E-commerce",
            alternativo:"Imagem 2",
            subtitulo: "Loja Online",
            descricao: "Um projeto de loja online com integração de pagamento e gerenciamento de produtos.",
            imagem: "../img/imagem1.jpg",
        },
        {
            titulo: "Projeto 3 - Portfolio Pessoal",
            subtitulo: "Design Moderno",
            alternativo:"Imagem 3",
            descricao: "Este projeto é um portfólio pessoal com uma interface clean e focada em destacar projetos.",
            imagem: "../img/imagem1.jpg",
        },
        {
            titulo: "Projeto 4 - Web Design",
            alternativo:"Imagem 4",
            subtitulo: "Design Responsivo",
            descricao: "Este projeto consiste em um site responsivo, projetado para dispositivos móveis e desktop, com foco na experiência do usuário.",
            imagem: "../img/imagem1.jpg",
        },
        {
            titulo: "Projeto 5 - E-commerce",
            alternativo:"Imagem 5",
            subtitulo: "Loja Online",
            descricao: "Um projeto de loja online com integração de pagamento e gerenciamento de produtos.",
            imagem: "../img/imagem1.jpg",
        },
        {
            titulo: "Projeto 6 - Portfolio Pessoal",
            alternativo:"Imagem 6",
            subtitulo: "Design Moderno",
            descricao: "Este projeto é um portfólio pessoal com uma interface clean e focada em destacar projetos.",
            imagem: "../img/imagem1.jpg",
        },
    ];

    const cardHTML = projetos.map(projeto => {
       
       
        return `
            <div class="conteudo-card">
                <img src=${projeto.imagem} alt=${projeto.alternativo}>
                <h2>${projeto.titulo}</h2>
                <h3>${projeto.subtitulo}</h3>
                <p class="descricao">${projeto.descricao}</p>
            </div>
        `;
    }).join(``); // Junta todos os cards em uma string

   
    cardContainer.innerHTML = cardHTML;
});
