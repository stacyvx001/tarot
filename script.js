// Карта дня
const cardContainer = document.getElementById('card-container');
const drawCardBtn = document.getElementById('draw-card-btn');

function drawCardOfTheDay() {
  const randomCard = allCards[Math.floor(Math.random() * allCards.length)];
  cardContainer.innerHTML = '';
  const img = document.createElement('img');
  img.src = randomCard.image;
  img.alt = randomCard.name;
  img.addEventListener('click', () => {
    alert(`${randomCard.name}\n\n${randomCard.description}`);
  });
  cardContainer.appendChild(img);
}

drawCardBtn.addEventListener('click', drawCardOfTheDay);
window.onload = drawCardOfTheDay;

// Расклад на три карты
const threeContainer = document.getElementById('three-card-container');
const drawThreeBtn = document.getElementById('draw-three-btn');

function drawThreeCards() {
  threeContainer.innerHTML = '';
  const shuffled = allCards.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);
  selected.forEach(card => {
    const img = document.createElement('img');
    img.src = card.image;
    img.alt = card.name;
    img.addEventListener('click', () => {
      alert(`${card.name}\n\n${card.description}`);
    });
    threeContainer.appendChild(img);
  });
}

drawThreeBtn.addEventListener('click', drawThreeCards);

