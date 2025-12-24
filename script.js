// Функции из cards.js уже доступны (tarotDeck, getRandomCard, getRandomCards)

const drawCardBtn = document.getElementById('draw-card-btn');
const drawThreeBtn = document.getElementById('draw-three-btn');
const cardsDisplay = document.getElementById('cards-display');

function displayCards(cards) {
    cardsDisplay.innerHTML = '';
    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.innerHTML = `
            <img src="${card.image}" alt="${card.name}">
            <h3>${card.name}</h3>
            <p>${card.meanings.general}</p>
            <small>Персона: ${card.person}</small>
        `;
        cardsDisplay.appendChild(cardDiv);
    });
}

drawCardBtn.addEventListener('click', () => {
    const card = getRandomCard();
    displayCards([card]);
});

drawThreeBtn.addEventListener('click', () => {
    const cards = getRandomCards(3);
    displayCards(cards);
});
