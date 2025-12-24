function drawCard() {
    const card = getRandomCard();
    showCards([card]);
}

function spread(count) {
    const cards = getRandomCards(count);
    showCards(cards);
}

function showCards(cards) {
    const result = document.getElementById('result');
    result.innerHTML = '';

    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        const img = document.createElement('img');
        img.src = card.image;
        img.alt = card.name;

        const text = document.createElement('div');
        text.className = 'card-text';
        text.innerHTML = `<strong>${card.name}</strong><br>${card.meanings.general}`;

        cardDiv.appendChild(img);
        cardDiv.appendChild(text);
        result.appendChild(cardDiv);
    });
}
