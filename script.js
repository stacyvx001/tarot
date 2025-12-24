// ==========================
// Массив карт Таро
// ==========================
const cards = [
  // Кубки
  { name: "Ace of Cups", image: "cards/cups/ace_cups.jpeg", meanings: { general: "Любовь, новые чувства, открытое сердце" } },
  { name: "Two of Cups", image: "cards/cups/two_cups.jpeg", meanings: { general: "Сотрудничество, гармония, союз" } },
  { name: "Three of Cups", image: "cards/cups/three_cups.jpeg", meanings: { general: "Дружба, радость, праздник" } },
  { name: "Four of Cups", image: "cards/cups/four_cups.jpeg", meanings: { general: "Рефлексия, апатия, неудовлетворённость" } },
  { name: "Five of Cups", image: "cards/cups/five_cups.jpeg", meanings: { general: "Печаль, сожаление, потеря" } },
  { name: "Six of Cups", image: "cards/cups/six_cups.jpeg", meanings: { general: "Воспоминания, ностальгия, радость прошлого" } },
  { name: "Seven of Cups", image: "cards/cups/seven_cups.jpeg", meanings: { general: "Выбор, мечты, иллюзии" } },
  { name: "Eight of Cups", image: "cards/cups/eight_cups.jpeg", meanings: { general: "Поиск нового, уход от старого" } },
  { name: "Nine of Cups", image: "cards/cups/nine_cups.jpeg", meanings: { general: "Удовольствие, счастье, гармония" } },
  { name: "Ten of Cups", image: "cards/cups/ten_cups.jpeg", meanings: { general: "Семья, радость, полное счастье" } },
  { name: "Page of Cups", image: "cards/cups/page_cups.jpeg", meanings: { general: "Новое чувство, сообщение, лёгкость" } },
  { name: "Knight of Cups", image: "cards/cups/knight_cups.jpeg", meanings: { general: "Романтика, предложение, движение к цели" } },
  { name: "Queen of Cups", image: "cards/cups/queen_cups.jpeg", meanings: { general: "Эмоции, забота, интуиция" } },
  { name: "King of Cups", image: "cards/cups/king_cups.jpeg", meanings: { general: "Мудрость, контроль эмоций, поддержка" } },

  // Жезлы
  { name: "Ace of Wands", image: "cards/wands/ace_wands.jpeg", meanings: { general: "Новые начинания, энергия, вдохновение" } },
  { name: "Two of Wands", image: "cards/wands/two_wands.jpeg", meanings: { general: "Планирование, выбор, дальние перспективы" } },
  { name: "Three of Wands", image: "cards/wands/three_wands.jpeg", meanings: { general: "Расширение, прогресс, успех" } },
  { name: "Four of Wands", image: "cards/wands/four_wands.jpeg", meanings: { general: "Праздник, стабильность, гармония" } },
  { name: "Five of Wands", image: "cards/wands/five_wands.jpeg", meanings: { general: "Конфликт, соревнование, напряжение" } },
  { name: "Six of Wands", image: "cards/wands/six_wands.jpeg", meanings: { general: "Победа, признание, успех" } },
  { name: "Seven of Wands", image: "cards/wands/seven_wands.jpeg", meanings: { general: "Защита, сопротивление, уверенность" } },
  { name: "Eight of Wands", image: "cards/wands/eight_wands.jpeg", meanings: { general: "Движение, скорость, прогресс" } },
  { name: "Nine of Wands", image: "cards/wands/nine_wands.jpeg", meanings: { general: "Упорство, защита, подготовка" } },
  { name: "Ten of Wands", image: "cards/wands/ten_wands.jpeg", meanings: { general: "Нагрузка, ответственность, завершение" } },
  { name: "Page of Wands", image: "cards/wands/page_wands.jpeg", meanings: { general: "Любопытство, новости, обучение" } },
  { name: "Knight of Wands", image: "cards/wands/knight_wands.jpeg", meanings: { general: "Действие, смелость, приключение" } },
  { name: "Queen of Wands", image: "cards/wands/queen_wands.jpeg", meanings: { general: "Энергия, уверенность, харизма" } },
  { name: "King of Wands", image: "cards/wands/king_wands.jpeg", meanings: { general: "Лидерство, видение, мудрость" } },

  // Мечи
  { name: "Ace of Swords", image: "cards/swords/ace_swords.jpeg", meanings: { general: "Новая идея, ясность, победа" } },
  { name: "Two of Swords", image: "cards/swords/two_swords.jpeg", meanings: { general: "Выбор, сомнения, блокировка" } },
  { name: "Three of Swords", image: "cards/swords/three_swords.jpeg", meanings: { general: "Боль, разочарование, утрата" } },
  { name: "Four of Swords", image: "cards/swords/four_swords.jpeg", meanings: { general: "Отдых, восстановление, пауза" } },
  { name: "Five of Swords", image: "cards/swords/five_swords.jpeg", meanings: { general: "Конфликт, проигрыш, напряжение" } },
  { name: "Six of Swords", image: "cards/swords/six_swords.jpeg", meanings: { general: "Переход, решение проблем, путешествие" } },
  { name: "Seven of Swords", image: "cards/swords/seven_swords.jpeg", meanings: { general: "Хитрость, тайна, стратегия" } },
  { name: "Eight of Swords", image: "cards/swords/eight_swords.jpeg", meanings: { general: "Ограничение, страх, ловушка" } },
  { name: "Nine of Swords", image: "cards/swords/nine_swords.jpeg", meanings: { general: "Тревога, бессонница, стресс" } },
  { name: "Ten of Swords", image: "cards/swords/ten_swords.jpeg", meanings: { general: "Конец цикла, поражение, кризис" } },
  { name: "Page of Swords", image: "cards/swords/page_swords.jpeg", meanings: { general: "Любопытство, внимание, новости" } },
  { name: "Knight of Swords", image: "cards/swords/knight_swords.jpeg", meanings: { general: "Решительность, скорость, смелость" } },
  { name: "Queen of Swords", image: "cards/swords/queen_swords.jpeg", meanings: { general: "Интеллект, ясность, независимость" } },
  { name: "King of Swords", image: "cards/swords/king_swords.jpeg", meanings: { general: "Мудрость, стратегия, сила разума" } },

  // Пентакли
  { name: "Ace of Pentacles", image: "cards/pentacles/ace_pentacles.jpeg", meanings: { general: "Новая возможность, финансовый старт" } },
  { name: "Two of Pentacles", image: "cards/pentacles/two_pentacles.jpeg", meanings: { general: "Баланс, адаптация, гибкость" } },
  { name: "Three of Pentacles", image: "cards/pentacles/three_pentacles.jpeg", meanings: { general: "Сотрудничество, мастерство, работа в команде" } },
  { name: "Four of Pentacles", image: "cards/pentacles/four_pentacles.jpeg", meanings: { general: "Сохранение, стабильность, контроль" } },
  { name: "Five of Pentacles", image: "cards/pentacles/five_pentacles.jpeg", meanings: { general: "Материальные трудности, потеря" } },
  { name: "Six of Pentacles", image: "cards/pentacles/six_pentacles.jpeg", meanings: { general: "Щедрость, помощь, равновесие" } },
  { name: "Seven of Pentacles", image: "cards/pentacles/seven_pentacles.jpeg", meanings: { general: "Ожидание, рост, оценка результатов" } },
  { name: "Eight of Pentacles", image: "cards/pentacles/eight_pentacles.jpeg", meanings: { general: "Труд, обучение, мастерство" } },
  { name: "Nine of Pentacles", image: "cards/pentacles/nine_pentacles.jpeg", meanings: { general: "Успех, независимость, достаток" } },
  { name: "Ten of Pentacles", image: "cards/pentacles/ten_pentacles.jpeg", meanings: { general: "Семья, богатство, стабильность" } },
  { name: "Page of Pentacles", image: "cards/pentacles/page_pentacles.jpeg", meanings: { general: "Учёба, новые возможности, внимание к деталям" } },
  { name: "Knight of Pentacles", image: "cards/pentacles/knight_pentacles.jpeg", meanings: { general: "Усердие, надежность, стабильность" } },
  { name: "Queen of Pentacles", image: "cards/pentacles/queen_pentacles.jpeg", meanings: { general: "Забота, практичность, материальная поддержка" } },
  { name: "King of Pentacles", image: "cards/pentacles/king_pentacles.jpeg", meanings: { general: "Богатство, стабильность, авторитет" } },

  // Старшие арканы
  { name: "The Fool", image: "cards/major/the_fool.jpeg", meanings: { general: "Начало, наивность, приключение" } },
  { name: "The Magician", image: "cards/major/the_magician.jpeg", meanings: { general: "Власть, мастерство, действие" } },
  { name: "The High Priestess", image: "cards/major/the_high_priestess.jpeg", meanings: { general: "Интуиция, тайна, знания" } },
  { name: "The Empress", image: "cards/major/the_empress.jpeg", meanings: { general: "Творчество, забота, плодородие" } },
  { name: "The Emperor", image: "cards/major/the_emperor.jpeg", meanings: { general: "Структура, власть, контроль" } },
  { name: "The Hierophant", image: "cards/major/the_hierophant.jpeg", meanings: { general: "Традиции, обучение, наставничество" } },
  { name: "The Lovers", image: "cards/major/the_lovers.jpeg", meanings: { general: "Любовь, выбор, партнерство" } },
  { name: "The Chariot", image: "cards/major/the_chariot.jpeg", meanings: { general: "Победа, движение, сила воли" } },
  { name: "Strength", image: "cards/major/strength.jpeg", meanings: { general: "Сила, мужество, терпение" } },
  { name: "The Hermit", image: "cards/major/the_hermit.jpeg", meanings: { general: "Отшельничество, размышление, мудрость" } },
  { name: "Wheel of Fortune", image: "cards/major/wheel_of_fortune.jpeg", meanings: { general: "Судьба, перемены, циклы" } },
  { name: "Justice", image: "cards/major/justice.jpeg", meanings: { general: "Справедливость, равновесие, ответственность" } },
  { name: "The Hanged Man", image: "cards/major/the_hanged_man.jpeg", meanings: { general: "Пауза, переосмысление, жертва" } },
  { name: "Death", image: "cards/major/death.jpeg", meanings: { general: "Конец, трансформация, перерождение" } },
  { name: "Temperance", image: "cards/major/temperance.jpeg", meanings: { general: "Баланс, гармония, умеренность" } },
  { name: "The Devil", image: "cards/major/the_devil.jpeg", meanings: { general: "Привязанность, ограничения, искушение" } },
  { name: "The Tower", image: "cards/major/the_tower.jpeg", meanings: { general: "Разрушение, потрясение, освобождение" } },
  { name: "The Star", image: "cards/major/the_star.jpeg", meanings: { general: "Надежда, вдохновение, вера" } },
  { name: "The Moon", image: "cards/major/the_moon.jpeg", meanings: { general: "Иллюзии, подсознание, тайна" } },
  { name: "The Sun", image: "cards/major/the_sun.jpeg", meanings: { general: "Радость, успех, ясность" } },
  { name: "Judgement", image: "cards/major/judgement.jpeg", meanings: { general: "Прозрение, решение, возрождение" } },
  { name: "The World", image: "cards/major/the_world.jpeg", meanings: { general: "Завершение, успех, целостность" } }
];

// ==========================
// Функции выбора карт
// ==========================
function getRandomCard() {
  return cards[Math.floor(Math.random() * cards.length)];
}

function getRandomCards(count) {
  const shuffled = [...cards].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// ==========================
// Отображение карт
// ==========================
function showCards(cardsArray) {
  const result = document.getElementById('result');
  result.innerHTML = '';

  cardsArray.forEach(card => {
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

// ==========================
// Функции для кнопок
// ==========================
function drawCard() {
  const card = getRandomCard();
  showCards([card]);
}

function spread(count) {
  const cardsArr = getRandomCards(count);
  showCards(cardsArr);
}
