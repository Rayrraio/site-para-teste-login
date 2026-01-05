window.onload = function() {
    const container = document.getElementById('container-produto');
    
    // Lista dos seus produtos (usando os nomes das suas imagens)
    const produtos = [
        { nome: "Scarpin Rosa", preco: "120,00", img: "SAPATO01.jpg" },
        { nome: "Scarpin Caramelo", preco: "150,00", img: "SAPATO02.jpg" },
        { nome: "Scarpin Caramelo Tiras", preco: "200,00", img: "SAPATO03.jpg" },
        { nome: "Scarpin Br Cr", preco: "180,00", img: "SAPATO04.jpg" },
        { nome: "Scarpin Luxo", preco: "90,00", img: "SAPATO05.jpg" },
        { nome: "Scarpin Laço", preco: "220,00", img: "SAPATO06.jpg" },
        { nome: "Scarpin Renda", preco: "130,00", img: "SAPATO07.jpg" },
        { nome: "Rasteirinha", preco: "70,00", img: "SAPATO08.jpg" }
    ];

    // Automação para criar os cards
    produtos.forEach((produto, index) => {
        const card = document.createElement('div');
        card.className = 'card-produto'; // Usaremos classe agora, não ID único
        
        card.innerHTML = `
            <img src="./img/${produto.img}" alt="${produto.nome}" style="height: 100px;">
            <p>${produto.nome}</p>
            <p>R$ ${produto.preco}</p>
            <button onclick="alert('Adicionado: ${produto.nome}')">Adicionar no Carrinho</button>
        `;
        
        container.appendChild(card);
    });
};