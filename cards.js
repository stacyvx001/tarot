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
    { id: 38, name: "Тройка Пентаклей", number: 3, arcana: "minor", suit: "pentacles", person: "Настя", image: "cards/pentacles/3_pentacles.jpg", meanings: { general: "Командная работа, мастерство, обучение." }},
    { id: 39, name: "Четвёрка Пентаклей", number: 4, arcana: "minor", suit: "pentacles", person: "Настя", image: "cards/pentacles/4_pentacles.jpg", meanings: { general: "Стабильность, контроль, накопления." }},
    { id: 40, name: "Пятёрка Пентаклей", number: 5, arcana: "minor", suit: "pentacles", person: "Настя", image: "cards/pentacles/5_pentacles.jpg", meanings: { general: "Материальные трудности, поддержка." }},
    { id: 41, name: "Шестёрка Пентаклей", number: 6, arcana: "minor", suit: "pentacles", person: "Настя", image: "cards/pentacles/6_pentacles.jpg", meanings: { general: "Щедрость, помощь, равновесие." }},
    { id: 42, name: "Семёрка Пентаклей", number: 7, arcana: "minor", suit: "pentacles", person: "Настя", image: "cards/pentacles/7_pentacles.jpg", meanings: { general: "Оценка результатов, терпение." }},
    { id: 43, name: "Восьмёрка Пентаклей", number: 8, arcana: "minor", suit: "pentacles", person: "Настя", image: "cards/pentacles/8_pentacles.jpg", meanings: { general: "Усердие, практика, навыки." }},
    { id: 44, name: "Девятка Пентаклей", number: 9, arcana: "minor", suit: "pentacles", person: "Настя", image: "cards/pentacles/9_pentacles.jpg", meanings: { general: "Успех, самодостаточность, комфорт." }},
    { id: 45, name: "Десятка Пентаклей", number: 10, arcana: "minor", suit: "pentacles", person: "Настя", image: "cards/pentacles/10_pentacles.jpg", meanings: { general: "Материальное благополучие, семья." }},
    { id: 46, name: "Паж Пентаклей", number: 11, arcana: "minor", suit: "pentacles", person: "Настя", image: "cards/pentacles/page_pentacles.jpg", meanings: { general: "Учёба, новые знания, внимание к деталям." }},
    { id: 47, name: "Рыцарь Пентаклей", number: 12, arcana: "minor", suit: "pentacles", person: "Настя", image: "cards/pentacles/knight_pentacles.jpg", meanings: { general: "Ответственность, стабильность, методичность." }},
    { id: 48, name: "Королева Пентаклей", number: 13, arcana: "minor", suit: "pentacles", person: "Настя", image: "cards/pentacles/queen_pentacles.jpg", meanings: { general: "Забота, практичность, уют." }},
    { id: 49, name: "Король Пентаклей", number: 14, arcana: "minor", suit: "pentacles", person: "Настя", image: "cards/pentacles/king_pentacles.jpg", meanings: { general: "Богатство, успех, лидерство." }},

    // ================= МЕЧИ (SWORDS) - Маша =================
    { id: 50, name: "Туз Мечей", number: 1, arcana: "minor", suit: "swords", person: "Маша", image: "cards/swords/ace_swords.jpg", meanings: { general: "Новые идеи, ясность, решимость." }},
    { id: 51, name: "Двойка Мечей", number: 2, arcana: "minor", suit: "swords", person: "Маша", image: "cards/swords/2_swords.jpg", meanings: { general: "Выбор, сомнения, компромисс." }},
    { id: 52, name: "Тройка Мечей", number: 3, arcana: "minor", suit: "swords", person: "Маша", image: "cards/swords/3_swords.jpg", meanings: { general: "Боль, разочарование, расставание." }},
    { id: 53, name: "Четвёрка Мечей", number: 4, arcana: "minor", suit: "swords", person: "Маша", image: "cards/swords/4_swords.jpg", meanings: { general: "Отдых, восстановление, пауза." }},
    { id: 54, name: "Пятёрка Мечей", number: 5, arcana: "minor", suit: "swords", person: "Маша", image: "cards/swords/5_swords.jpg", meanings: { general: "Конфликт, напряжение, уроки." }},
    { id: 55, name: "Шестёрка Мечей", number: 6, arcana: "minor", suit: "swords", person: "Маша", image: "cards/swords/6_swords.jpg", meanings: { general: "Переход, движение, путь." }},
    { id: 56, name: "Семёрка Мечей", number: 7, arcana: "minor", suit: "swords", person: "Маша", image: "cards/swords/7_swords.jpg", meanings: { general: "Хитрость, стратегия, обход правил." }},
    { id: 57, name: "Восьмёрка Мечей", number: 8, arcana: "minor", suit: "swords", person: "Маша", image: "cards/swords/8_swords.jpg", meanings: { general: "Ограничения, страх, замешательство." }},
    { id: 58, name: "Девятка Мечей", number: 9, arcana: "minor", suit: "swords", person: "Маша", image: "cards/swords/9_swords.jpg", meanings: { general: "Беспокойство, ночные страхи, стресс." }},
    { id: 59, name: "Десятка Мечей", number: 10, arcana: "minor", suit: "swords", person: "Маша", image: "cards/swords/10_swords.jpg", meanings: { general: "Кризис, конец цикла, разочарование." }},
    { id: 60, name: "Паж Мечей", number: 11, arcana: "minor", suit: "swords", person: "Маша", image: "cards/swords/page_swords.jpg", meanings: { general: "Любопытство, наблюдение, информация." }},
    { id: 61, name: "Рыцарь Мечей", number: 12, arcana: "minor", suit: "swords", person: "Маша", image: "cards/swords/knight_swords.jpg", meanings: { general: "Действие, скорость, решимость." }},
    { id: 62, name: "Королева Мечей", number: 13, arcana: "minor", suit: "swords", person: "Маша", image: "cards/swords/queen_swords.jpg", meanings: { general: "Интеллект, независимость, проницательность." }},
    { id: 63, name: "Король Мечей", number: 14, arcana: "minor", suit: "swords", person: "Маша", image: "cards/swords/king_swords.jpg", meanings: { general: "Логика, стратегия, власть." }},

    // ================= ЖЕЗЛЫ (WANDS) - Дарина =================
    { id: 64, name: "Туз Жезлов", number: 1, arcana: "minor", suit: "wands", person: "Дарина", image: "cards/wands/ace_wands.jpg", meanings: { general: "Новые начинания, энергия, энтузиазм." }},
    { id: 65, name: "Двойка Жезлов", number: 2, arcana: "minor", suit: "wands", person: "Дарина", image: "cards/wands/2_wands.jpg", meanings: { general: "Планирование, перспектива, стратегия." }},
    { id: 66, name: "Тройка Жезлов", number: 3, arcana: "minor", suit: "wands", person: "Дарина", image: "cards/wands/3_wands.jpg", meanings: { general: "Действие, ожидание результатов, прогресс." }},
    { id: 67, name: "Четвёрка Жезлов", number: 4, arcana: "minor", suit: "wands", person: "Дарина", image: "cards/wands/4_wands.jpg", meanings: { general: "Праздник, стабильность, домашний уют." }},
    { id: 68, name: "Пятёрка Жезлов", number: 5, arcana: "minor", suit: "wands", person: "Дарина", image: "cards/wands/5_wands.jpg", meanings: { general: "Конфликты, конкуренция, борьба." }},
    { id: 69, name: "Шестёрка Жезлов", number: 6, arcana: "minor", suit: "wands", person: "Дарина", image: "cards/wands/6_wands.jpg", meanings: { general: "Победа, признание, успех." }},
    { id: 70, name: "Семёрка Жезлов", number: 7, arcana: "minor", suit: "wands", person: "Дарина", image: "cards/wands/7_wands.jpg", meanings: { general: "Отстаивание позиции, защита." }},
    { id: 71, name: "Восьмёрка Жезлов", number: 8, arcana: "minor", suit: "wands", person: "Дарина", image: "cards/wands/8_wands.jpg", meanings: { general: "Быстрое движение, прогресс, новости." }},
    { id: 72, name: "Девятка Жезлов", number: 9, arcana: "minor", suit: "wands", person: "Дарина", image: "cards/wands/9_wands.jpg", meanings: { general: "Выносливость, защита, осторожность." }},
    { id: 73, name: "Десятка Жезлов", number: 10, arcana: "minor", suit: "wands", person: "Дарина", image: "cards/wands/10_wands.jpg", meanings: { general: "Нагрузка, ответственность, завершение цикла." }},
    { id: 74, name: "Паж Жезлов", number: 11, arcana: "minor", suit: "wands", person: "Дарина", image: "cards/wands/page_wands.jpg", meanings: { general: "Интерес, исследования, новые возможности." }},
    { id: 75, name: "Рыцарь Жезлов", number: 12, arcana: "minor", suit: "wands", person: "Дарина", image: "cards/wands/knight_wands.jpg", meanings: { general: "Энергия, приключения, движение." }},
    { id: 76, name: "Королева Жезлов", number: 13, arcana: "minor", suit: "wands", person: "Дарина", image: "cards/wands/queen_wands.jpg", meanings: { general: "Харизма, уверенность, лидерство." }},
    { id: 77, name: "Король Жезлов", number: 14, arcana: "minor", suit: "wands", person: "Дарина", image: "cards/wands/king_wands.jpg", meanings: { general: "Воля, стратегия, энергия." }},
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
