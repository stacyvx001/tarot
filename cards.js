// ============================================
// ПОЛНАЯ КОЛОДА ТАРО ДЛЯ ПОДРУГ
// ============================================

const tarotDeck = [
    // ================= КУБКИ (CUPS) - Женя =================
    { id: 0, name: "Туз Кубков", number: 1, arcana: "minor", suit: "cups", person: "Женя", image: "cards/cups/ace_cups.jpg", meanings: { general: "Новые чувства, эмоции, открытость сердцу." }},
    { id: 1, name: "Двойка Кубков", number: 2, arcana: "minor", suit: "cups", person: "Женя", image: "cards/cups/2_cups.jpg", meanings: { general: "Гармония, партнёрство, взаимность." }},
    { id: 2, name: "Тройка Кубков", number: 3, arcana: "minor", suit: "cups", person: "Женя", image: "cards/cups/3_cups.jpg", meanings: { general: "Праздник, дружба, радость." }},
    { id: 3, name: "Четвёрка Кубков", number: 4, arcana: "minor", suit: "cups", person: "Женя", image: "cards/cups/4_cups.jpg", meanings: { general: "Размышление, неудовлетворённость, пауза." }},
    { id: 4, name: "Пятёрка Кубков", number: 5, arcana: "minor", suit: "cups", person: "Женя", image: "cards/cups/5_cups.jpg", meanings: { general: "Печаль, потеря, уроки из прошлого." }},
    { id: 5, name: "Шестёрка Кубков", number: 6, arcana: "minor", suit: "cups", person: "Женя", image: "cards/cups/6_cups.jpg", meanings: { general: "Ностальгия, воспоминания, детство." }},
    { id: 6, name: "Семёрка Кубков", number: 7, arcana: "minor", suit: "cups", person: "Женя", image: "cards/cups/7_cups.jpg", meanings: { general: "Выбор, мечты, иллюзии." }},
    { id: 7, name: "Восьмёрка Кубков", number: 8, arcana: "minor", suit: "cups", person: "Женя", image: "cards/cups/8_cups.jpg", meanings: { general: "Уход, поиск чего-то большего." }},
    { id: 8, name: "Девятка Кубков", number: 9, arcana: "minor", suit: "cups", person: "Женя", image: "cards/cups/9_cups.jpg", meanings: { general: "Исполнение желаний, удовлетворение." }},
    { id: 9, name: "Десятка Кубков", number: 10, arcana: "minor", suit: "cups", person: "Женя", image: "cards/cups/10_cups.jpg", meanings: { general: "Счастье, гармония в семье и отношениях." }},
    { id: 10, name: "Паж Кубков", number: 11, arcana: "minor", suit: "cups", person: "Женя", image: "cards/cups/page_cups.jpg", meanings: { general: "Любопытство, эмоции, новые впечатления." }},
    { id: 11, name: "Рыцарь Кубков", number: 12, arcana: "minor", suit: "cups", person: "Женя", image: "cards/cups/knight_cups.jpg", meanings: { general: "Романтика, движение чувств, приглашения." }},
    { id: 12, name: "Королева Кубков", number: 13, arcana: "minor", suit: "cups", person: "Женя", image: "cards/cups/queen_cups.jpg", meanings: { general: "Эмпатия, забота, интуиция." }},
    { id: 13, name: "Король Кубков", number: 14, arcana: "minor", suit: "cups", person: "Женя", image: "cards/cups/king_cups.jpg", meanings: { general: "Эмоциональная зрелость, поддержка." }},

    // ================= СТАРШИЕ АРКАНЫ - Ника =================
    { id: 14, name: "Шут", number: 0, arcana: "major", suit: "major", person: "Ника", image: "cards/major/the_fool.jpg", meanings: { general: "Начало нового пути, спонтанность." }},
    { id: 15, name: "Маг", number: 1, arcana: "major", suit: "major", person: "Ника", image: "cards/major/the_magician.jpg", meanings: { general: "Проявление воли, мастерство, ресурсы под рукой." }},
    { id: 16, name: "Верховная Жрица", number: 2, arcana: "major", suit: "major", person: "Ника", image: "cards/major/the_high_priestess.jpg", meanings: { general: "Интуиция, тайны, внутренняя мудрость." }},
    { id: 17, name: "Императрица", number: 3, arcana: "major", suit: "major", person: "Ника", image: "cards/major/the_empress.jpg", meanings: { general: "Изобилие, забота, красота." }},
    { id: 18, name: "Император", number: 4, arcana: "major", suit: "major", person: "Ника", image: "cards/major/the_emperor.jpg", meanings: { general: "Структура, контроль, стабильность." }},
    { id: 19, name: "Иерофант", number: 5, arcana: "major", suit: "major", person: "Ника", image: "cards/major/the_hierophant.jpg", meanings: { general: "Традиции, обучение, мораль." }},
    { id: 20, name: "Влюблённые", number: 6, arcana: "major", suit: "major", person: "Ника", image: "cards/major/the_lovers.jpg", meanings: { general: "Выбор, гармония, отношения." }},
    { id: 21, name: "Колесница", number: 7, arcana: "major", suit: "major", person: "Ника", image: "cards/major/the_chariot.jpg", meanings: { general: "Движение, победа, контроль." }},
    { id: 22, name: "Сила", number: 8, arcana: "major", suit: "major", person: "Ника", image: "cards/major/strength.jpg", meanings: { general: "Внутренняя сила, мягкость, мужество." }},
    { id: 23, name: "Отшельник", number: 9, arcana: "major", suit: "major", person: "Ника", image: "cards/major/the_hermit.jpg", meanings: { general: "Самоанализ, мудрость, уединение." }},
    { id: 24, name: "Колесо Фортуны", number: 10, arcana: "major", suit: "major", person: "Ника", image: "cards/major/wheel_of_fortune.jpg", meanings: { general: "Судьба, перемены, циклы." }},
    { id: 25, name: "Справедливость", number: 11, arcana: "major", suit: "major", person: "Ника", image: "cards/major/justice.jpg", meanings: { general: "Баланс, справедливость, карма." }},
    { id: 26, name: "Повешенный", number: 12, arcana: "major", suit: "major", person: "Ника", image: "cards/major/the_hanged_man.jpg", meanings: { general: "Жертва, новая перспектива, ожидание." }},
    { id: 27, name: "Смерть", number: 13, arcana: "major", suit: "major", person: "Ника", image: "cards/major/death.jpg", meanings: { general: "Трансформация, окончание, новое начало." }},
    { id: 28, name: "Умеренность", number: 14, arcana: "major", suit: "major", person: "Ника", image: "cards/major/temperance.jpg", meanings: { general: "Баланс, терпение, гармония." }},
    { id: 29, name: "Дьявол", number: 15, arcana: "major", suit: "major", person: "Ника", image: "cards/major/the_devil.jpg", meanings: { general: "Искушения, зависимости, материальность." }},
    { id: 30, name: "Башня", number: 16, arcana: "major", suit: "major", person: "Ника", image: "cards/major/the_tower.jpg", meanings: { general: "Внезапные перемены, разрушение." }},
    { id: 31, name: "Звезда", number: 17, arcana: "major", suit: "major", person: "Ника", image: "cards/major/the_star.jpg", meanings: { general: "Надежда, вдохновение, духовность." }},
    { id: 32, name: "Луна", number: 18, arcana: "major", suit: "major", person: "Ника", image: "cards/major/the_moon.jpg", meanings: { general: "Интуиция, иллюзии, подсознание." }},
    { id: 33, name: "Солнце", number: 19, arcana: "major", suit: "major", person: "Ника", image: "cards/major/the_sun.jpg", meanings: { general: "Успех, радость, ясность." }},
    { id: 34, name: "Суд", number: 20, arcana: "major", suit: "major", person: "Ника", image: "cards/major/judgement.jpg", meanings: { general: "Возрождение, призыв, оценка." }},
    { id: 35, name: "Мир", number: 21, arcana: "major", suit: "major", person: "Ника", image: "cards/major/the_world.jpg", meanings: { general: "Завершение, успех, целостность." }},

    // ================= ПЕНТАКЛИ (PENTACLES) - Настя =================
    { id: 36, name: "Туз Пентаклей", number: 1, arcana: "minor", suit: "pentacles", person: "Настя", image: "cards/pentacles/ace_pentacles.jpg", meanings: { general: "Новые возможности, ресурсы, стабильность." }},
    { id: 37, name: "Двойка Пентаклей", number: 2, arcana: "minor", suit: "pentacles", person: "Настя", image: "cards/pentacles/2_pentacles.jpg", meanings: { general: "Баланс, гибкость, управление делами." }},
    // … остальные карты Пентаклей …

    // ================= МЕЧИ (SWORDS) - Маша =================
    { id: 50, name: "Туз Мечей", number: 1, arcana: "minor", suit: "swords", person: "Маша", image: "cards/swords/ace_swords.jpg", meanings: { general: "Новые идеи, ясность, решимость." }},
    // … остальные карты Мечей …

    // ================= ЖЕЗЛЫ (WANDS) - Дарина =================
    { id: 64, name: "Туз Жезлов", number: 1, arcana: "minor", suit: "wands", person: "Дарина", image: "cards/wands/ace_wands.jpg", meanings: { general: "Новые начинания, энергия, энтузиазм." }},
    // … остальные карты Жезлов …
];

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
