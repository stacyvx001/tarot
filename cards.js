// ============================================
// ПОЛНАЯ КОЛОДА ТАРО ДЛЯ ПОДРУГ
// ============================================
// ===== КУБКИ (Женя) =====
const cardsCups = [
  { name: "Ace of Cups", image: "cards/cups/ace_of_cups.jpeg", meanings: { general: "Новые эмоции, любовь" }, comment: "Женя говорит: открой сердце новым эмоциям" },
  { name: "Two of Cups", image: "cards/cups/two_of_cups.jpeg", meanings: { general: "Слияние, гармония" }, comment: "Женя говорит: союз приносит радость" },
  { name: "Three of Cups", image: "cards/cups/three_of_cups.jpeg", meanings: { general: "Праздник, дружба, радость" }, comment: "Женя говорит: веселье с друзьями" },
  { name: "Four of Cups", image: "cards/cups/four_of_cups.jpeg", meanings: { general: "Размышление, скука" }, comment: "Женя говорит: прислушайся к своим эмоциям" },
  { name: "Five of Cups", image: "cards/cups/five_of_cups.jpeg", meanings: { general: "Разочарование, сожаление" }, comment: "Женя говорит: смотри не на потерю, а на то, что осталось" },
  { name: "Six of Cups", image: "cards/cups/six_of_cups.jpeg", meanings: { general: "Ностальгия, воспоминания" }, comment: "Женя говорит: вспомни хорошие моменты" },
  { name: "Seven of Cups", image: "cards/cups/seven_of_cups.jpeg", meanings: { general: "Выбор, иллюзии" }, comment: "Женя говорит: подумай, чего ты действительно хочешь" },
  { name: "Eight of Cups", image: "cards/cups/eight_of_cups.jpeg", meanings: { general: "Отпускание, уход" }, comment: "Женя говорит: иногда нужно двигаться дальше" },
  { name: "Nine of Cups", image: "cards/cups/nine_of_cups.jpeg", meanings: { general: "Удовлетворение, исполнение желаний" }, comment: "Женя говорит: радуйся своим достижениям" },
  { name: "Ten of Cups", image: "cards/cups/ten_of_cups.jpeg", meanings: { general: "Семейное счастье, гармония" }, comment: "Женя говорит: цените моменты с близкими" },
  { name: "Page of Cups", image: "cards/cups/page_of_cups.jpeg", meanings: { general: "Новое предложение, любопытство" }, comment: "Женя говорит: будь открыта новому" },
  { name: "Knight of Cups", image: "cards/cups/khight_of_cups.jpeg", meanings: { general: "Романтика, движение эмоций" }, comment: "Женя говорит: действуй сердцем" },
  { name: "Queen of Cups", image: "cards/cups/queen_of_cups.jpeg", meanings: { general: "Сострадание, интуиция" }, comment: "Женя говорит: прислушивайся к интуиции" },
  { name: "King of Cups", image: "cards/cups/king_of_cups.jpeg", meanings: { general: "Эмоциональная зрелость" }, comment: "Женя говорит: сохраняй спокойствие и понимание" }
];

// ===== ПЕНТАКЛИ (Настя) =====
const cardsPentacles = [
  { name: "Ace of Pentacles", image: "cards/pentacles/ace_of_pentacles.jpeg", meanings: { general: "Новые возможности, финансы" }, comment: "Настя говорит: начни действовать" },
  { name: "Two of Pentacles", image: "cards/pentacles/two_of_pentacles.jpeg", meanings: { general: "Баланс, гибкость" }, comment: "Настя говорит: найди равновесие" },
  { name: "Three of Pentacles", image: "cards/pentacles/three_of_pentacles.jpeg", meanings: { general: "Командная работа, мастерство" }, comment: "Настя говорит: сотрудничай с другими" },
  { name: "Four of Pentacles", image: "cards/pentacles/four_of_pentacles.jpeg", meanings: { general: "Стабильность, сохранение" }, comment: "Настя говорит: держись своих ресурсов" },
  { name: "Five of Pentacles", image: "cards/pentacles/five_of_pentacles.jpeg", meanings: { general: "Потери, трудности" }, comment: "Настя говорит: не теряй веру" },
  { name: "Six of Pentacles", image: "cards/pentacles/six_of_pentacles.jpeg", meanings: { general: "Щедрость, помощь" }, comment: "Настя говорит: помогай и принимай помощь" },
  { name: "Seven of Pentacles", image: "cards/pentacles/seven_of_pentacles.jpeg", meanings: { general: "Ожидание, оценка" }, comment: "Настя говорит: оцени свои усилия" },
  { name: "Eight of Pentacles", image: "cards/pentacles/eight_of_pentacles.jpeg", meanings: { general: "Труд, обучение" }, comment: "Настя говорит: совершенствуй мастерство" },
  { name: "Nine of Pentacles", image: "cards/pentacles/nine_of_pentacles.jpeg", meanings: { general: "Самодостаточность, успех" }, comment: "Настя говорит: наслаждайся плодами труда" },
  { name: "Ten of Pentacles", image: "cards/pentacles/ten_of_pentacles.jpeg", meanings: { general: "Семейное богатство" }, comment: "Настя говорит: цени наследие и уют" },
  { name: "Page of Pentacles", image: "cards/pentacles/page_of_pentacles.jpeg", meanings: { general: "Учёба, новые идеи" }, comment: "Настя говорит: учись и развивайся" },
  { name: "Knight of Pentacles", image: "cards/pentacles/knight_of_pentacles.jpeg", meanings: { general: "Трудолюбие, стабильность" }, comment: "Настя говорит: медленно, но уверенно" },
  { name: "Queen of Pentacles", image: "cards/pentacles/queen_of_pentacles.jpeg", meanings: { general: "Практичность, забота" }, comment: "Настя говорит: заботься о близких" },
  { name: "King of Pentacles", image: "cards/pentacles/king_of_pentacles.jpeg", meanings: { general: "Материальный успех" }, comment: "Настя говорит: используй ресурсы с умом" }
];

// ===== МЕЧИ (Маша) =====
const cardsSwords = [
  { name: "Ace of Swords", image: "cards/swords/ace_of_swords.jpeg", meanings: { general: "Прозрение, сила разума" }, comment: "Маша говорит: ясно смотри на ситуацию" },
  { name: "Two of Swords", image: "cards/swords/two_of_swords.jpeg", meanings: { general: "Решение, дилемма" }, comment: "Маша говорит: взвесь все варианты" },
  { name: "Three of Swords", image: "cards/swords/three_of_swords.jpeg", meanings: { general: "Разочарование, боль" }, comment: "Маша говорит: сердце требует внимания" },
  { name: "Four of Swords", image: "cards/swords/four_of_swords.jpeg", meanings: { general: "Отдых, восстановление" }, comment: "Маша говорит: передохни и подумай" },
  { name: "Five of Swords", image: "cards/swords/five_of_swords.jpeg", meanings: { general: "Конфликт, проигрыш" }, comment: "Маша говорит: выбирай свои битвы" },
  { name: "Six of Swords", image: "cards/swords/six_of_swords.jpeg", meanings: { general: "Переход, движение" }, comment: "Маша говорит: двигайся дальше" },
  { name: "Seven of Swords", image: "cards/swords/seven_of_swords.jpeg", meanings: { general: "Обман, хитрость" }, comment: "Маша говорит: будь осторожна" },
  { name: "Eight of Swords", image: "cards/swords/eight_of_swords.jpeg", meanings: { general: "Ограничения, страх" }, comment: "Маша говорит: освободи себя от страха" },
  { name: "Nine of Swords", image: "cards/swords/nine_of_swords.jpeg", meanings: { general: "Беспокойство, тревога" }, comment: "Маша говорит: не переживай слишком сильно" },
  { name: "Ten of Swords", image: "cards/swords/ten_of_swords.jpeg", meanings: { general: "Конец, завершение" }, comment: "Маша говорит: это конец одного этапа" },
  { name: "Page of Swords", image: "cards/swords/page_of_swords.jpeg", meanings: { general: "Любопытство, наблюдение" }, comment: "Маша говорит: изучай ситуацию внимательно" },
  { name: "Knight of Swords", image: "cards/swords/knight_of_swords.jpeg", meanings: { general: "Быстрое действие, дерзость" }, comment: "Маша говорит: действуй решительно" },
  { name: "Queen of Swords", image: "cards/swords/queen_of_swords.jpeg", meanings: { general: "Ясность, рассудок" }, comment: "Маша говорит: слушай разум" },
  { name: "King of Swords", image: "cards/swords/king_of_swords.jpeg", meanings: { general: "Сила разума, справедливость" }, comment: "Маша говорит: принимай решения объективно" }
];

// ===== ЖЕЗЛЫ (Дарина) =====
const cardsWands = [
  { name: "Ace of Wands", image: "cards/wands/ace_of_wands.jpeg", meanings: { general: "Энергия, инициатива" }, comment: "Дарина говорит: действуй смело" },
  { name: "Two of Wands", image: "cards/wands/two_of_wands.jpeg", meanings: { general: "Планы, выбор пути" }, comment: "Дарина говорит: продумай шаги" },
  { name: "Three of Wands", image: "cards/wands/three_of_wands.jpeg", meanings: { general: "Прогресс, расширение" }, comment: "Дарина говорит: двигайся вперёд" },
  { name: "Four of Wands", image: "cards/wands/four_of_wands.jpeg", meanings: { general: "Праздник, стабильность" }, comment: "Дарина говорит: радуйся успехам" },
  { name: "Five of Wands", image: "cards/wands/five_of_wands.jpeg", meanings: { general: "Соревнование, конкуренция" }, comment: "Дарина говорит: учись на конфликтах" },
  { name: "Six of Wands", image: "cards/wands/six_of_wands.jpeg", meanings: { general: "Победа, признание" }, comment: "Дарина говорит: гордись своими достижениями" },
  { name: "Seven of Wands", image: "cards/wands/seven_of_wands.jpeg", meanings: { general: "Отстаивание позиции" }, comment: "Дарина говорит: стой за себя" },
  { name: "Eight of Wands", image: "cards/wands/eight_of_wands.jpeg", meanings: { general: "Движение, скорость" }, comment: "Дарина говорит: действуй быстро" },
  { name: "Nine of Wands", image: "cards/wands/nine_of_wands.jpeg", meanings: { general: "Выносливость, защита" }, comment: "Дарина говорит: держись и не сдавайся" },
  { name: "Ten of Wands", image: "cards/wands/ten_of_wands.jpeg", meanings: { general: "Бремя, ответственность" }, comment: "Дарина говорит: делегируй, где можешь" },
  { name: "Page of Wands", image: "cards/wands/page_of_wands.jpeg", meanings: { general: "Энтузиазм, исследование" }, comment: "Дарина говорит: изучай новые возможности" },
  { name: "Knight of Wands", image: "cards/wands/knight_of_wands.jpeg", meanings: { general: "Стремительность, приключения" }, comment: "Дарина говорит: действуй смело" },
  { name: "Queen of Wands", image: "cards/wands/queen_of_wands.jpeg", meanings: { general: "Уверенность, харизма" }, comment: "Дарина говорит: проявляй лидерство" },
  { name: "King of Wands", image: "cards/wands/king_of_wands.jpeg", meanings: { general: "Руководство, стратегия" }, comment: "Дарина говорит: будь вдохновляющим лидером" }
];

// ===== СТАРШИЕ АРКАНЫ (Ника) =====
const cardsMajor = [
  { name: "Fool", image: "cards/major/fool.jpeg", meanings: { general: "Начало пути, спонтанность" }, comment: "Ника говорит: рискни, но будь внимательна" },
  { name: "Magician", image: "cards/major/magician.jpeg", meanings: { general: "Мастерство, ресурсы" }, comment: "Ника говорит: используй свои навыки" },
  { name: "High Priestess", image: "cards/major/high_priestess.jpeg", meanings: { general: "Интуиция, тайны" }, comment: "Ника говорит: прислушайся к внутреннему голосу" },
  { name: "Empress", image: "cards/major/empress.jpeg", meanings: { general: "Творчество, забота" }, comment: "Ника говорит: проявляй заботу о себе и других" },
  { name: "Emperor", image: "cards/major/emperor.jpeg", meanings: { general: "Структура, контроль" }, comment: "Ника говорит: строй планы и придерживайся их" },
  { name: "Hierophant", image: "cards/major/heirophant.jpeg", meanings: { general: "Учитель, традиции" }, comment: "Ника говорит: учись у мудрых" },
  { name: "Lovers", image: "cards/major/lovers.jpeg", meanings: { general: "Выбор, союз" }, comment: "Ника говорит: слушай сердце" },
  { name: "Chariot", image: "cards/major/chariot.jpeg", meanings: { general: "Контроль, движение" }, comment: "Ника говорит: управляй ситуацией уверенно" },
  { name: "Strength", image: "cards/major/strength.jpeg", meanings: { general: "Сила, терпение" }, comment: "Ника говорит: проявляй стойкость" },
  { name: "Hermit", image: "cards/major/hermit.jpeg", meanings: { general: "Размышление, уединение" }, comment: "Ника говорит: время для внутреннего поиска" },
  { name: "Wheel of Fortune", image: "cards/major/wheel_of_fortune.jpeg", meanings: { general: "Перемены, судьба" }, comment: "Ника говорит: будь готова к поворотам" },
  { name: "Justice", image: "cards/major/justice.jpeg", meanings: { general: "Равновесие, правда" }, comment: "Ника говорит: поступай честно" },
  { name: "Hanged Man", image: "cards/major/hanged_man.jpeg", meanings: { general: "Пауза, новая перспектива" }, comment: "Ника говорит: смотри иначе на ситуацию" },
  { name: "Death", image: "cards/major/death.jpeg", meanings: { general: "Конец, трансформация" }, comment: "Ника говорит: что-то заканчивается, что-то начинается" },
  { name: "Temperance", image: "cards/major/temperance.jpeg", meanings: { general: "Гармония, баланс" }, comment: "Ника говорит: ищи баланс в делах" },
  { name: "Devil", image: "cards/major/devil.jpeg", meanings: { general: "Привязанности, ограничения" }, comment: "Ника говорит: освободи себя от зависимостей" },
  { name: "Tower", image: "cards/major/tower.jpeg", meanings: { general: "Разрушение, внезапные изменения" }, comment: "Ника говорит: будь готова к переменам" },
  { name: "Star", image: "cards/major/star.jpeg", meanings: { general: "Надежда, вдохновение" }, comment: "Ника говорит: верь в лучшее" },
  { name: "Moon", image: "cards/major/moon.jpeg", meanings: { general: "Интуиция, иллюзии" }, comment: "Ника говорит: будь внимательна к знакам" },
  { name: "Sun", image: "cards/major/sun.jpeg", meanings: { general: "Успех, радость



// Экспорт всех карт
const allCards = [...cups, ...swords, ...pentacles, ...wands, ...major];


// ============================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================

function getRandomCard() {
    return tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
}

function getRandomCards(count) {
    const shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { tarotDeck, getRandomCard, getRandomCards };
}
