// ============================================
// ПОЛНАЯ КОЛОДА ТАРО ДЛЯ ПОДРУГ
// ============================================
// ================================
//          КУБКИ (Женя говорит)
// ================================
const cardsCups = [
  { name: "Ace of Cups", image: "cards/cups/ace_of_cups.jpeg",
    meanings: { general:"Начало чувств, открытое сердце", love:"Новый роман или углубление связи", work:"Творческий подъем, вдохновение", yesno:"Да" },
    comment: "Женя говорит: открой сердце новым эмоциям" },
  { name: "Two of Cups", image: "cards/cups/two_of_cups.jpeg",
    meanings: { general:"Гармония и партнерство", love:"Укрепление отношений, союз", work:"Сотрудничество дает результат", yesno:"Да" },
    comment: "Женя говорит: союз приносит радость" },
  { name: "Three of Cups", image: "cards/cups/three_of_cups.jpeg",
    meanings: { general:"Праздник, радость с друзьями", love:"Веселье и доверие", work:"Успешная команда", yesno:"Скорее Да" },
    comment: "Женя говорит: наслаждайся праздником дружбы" },
  { name: "Four of Cups", image: "cards/cups/four_of_cups.jpeg",
    meanings: { general:"Апатия, скука, размышления", love:"Не замечаешь возможности", work:"Размышления над предложением", yesno:"Скорее Нет" },
    comment: "Женя говорит: обрати внимание вокруг" },
  { name: "Five of Cups", image: "cards/cups/five_of_cups.jpeg",
    meanings: { general:"Печаль и сожаление", love:"Разочарование в чувствах", work:"Потери или ошибки", yesno:"Нет" },
    comment: "Женя говорит: смотри не на потерю, а на то, что осталось" },
  { name: "Six of Cups", image: "cards/cups/six_of_cups.jpeg",
    meanings: { general:"Ностальгия, воспоминания", love:"Воспоминания о прошлом", work:"Учись на опыте", yesno:"Скорее Да" },
    comment: "Женя говорит: вспомни хорошие моменты" },
  { name: "Seven of Cups", image: "cards/cups/seven_of_cups.jpeg",
    meanings: { general:"Много вариантов, иллюзии", love:"Романтические фантазии", work:"Множество возможностей, нужно выбрать", yesno:"Зависит" },
    comment: "Женя говорит: подумай, чего ты действительно хочешь" },
  { name: "Eight of Cups", image: "cards/cups/eight_of_cups.jpeg",
    meanings: { general:"Уход от прошлого", love:"Завершение отношений", work:"Поиск новых целей", yesno:"Скорее Да" },
    comment: "Женя говорит: иногда нужно двигаться дальше" },
  { name: "Nine of Cups", image: "cards/cups/nine_of_cups.jpeg",
    meanings: { general:"Удовлетворение, счастье", love:"Гармония желаний", work:"Успех в начинаниях", yesno:"Да" },
    comment: "Женя говорит: радуйся своим достижениям" },
  { name: "Ten of Cups", image: "cards/cups/ten_of_cups.jpeg",
    meanings: { general:"Семейное счастье", love:"Полное счастье в отношениях", work:"Комфортная обстановка", yesno:"Да" },
    comment: "Женя говорит: цени моменты с близкими" },
  { name: "Page of Cups", image: "cards/cups/page_of_cups.jpeg",
    meanings: { general:"Новое сообщение, вдохновение", love:"Нежное начало", work:"Идеи и предложения", yesno:"Скорее Да" },
    comment: "Женя говорит: будь открыта новому" },
  { name: "Knight of Cups", image: "cards/cups/khight_of_cups.jpeg",
    meanings: { general:"Романтика и движение эмоций", love:"Предложение или приглашение", work:"Творческий порыв", yesno:"Скорее Да" },
    comment: "Женя говорит: действуй сердцем" },
  { name: "Queen of Cups", image: "cards/cups/queen_of_cups.jpeg",
    meanings: { general:"Эмоциональная поддержка", love:"Сочувствие и забота", work:"Интуитивное решение", yesno:"Да" },
    comment: "Женя говорит: прислушивайся к интуиции" },
  { name: "King of Cups", image: "cards/cups/king_of_cups.jpeg",
    meanings: { general:"Контроль эмоций, мудрость", love:"Зрелые чувства", work:"Гармония в команде", yesno:"Да" },
    comment: "Женя говорит: сохраняй спокойствие и понимание" }
];

// ================================
//     ПЕНТАКЛИ (Настя говорит)
// ================================
const cardsPentacles = [
  { name: "Ace of Pentacles", image: "cards/pentacles/ace_of_pentacles.jpeg",
    meanings: { general:"Новая возможность, финансовый старт", love:"Стабильность в отношениях", work:"Успех проекта", yesno:"Да" },
    comment: "Настя говорит: начни действовать" },
  { name: "Two of Pentacles", image: "cards/pentacles/two_of_pentacles.jpeg",
    meanings: { general:"Баланс и адаптация", love:"Баланс внутри пары", work:"Управление ресурсами", yesno:"Скорее Да" },
    comment: "Настя говорит: найди равновесие" },
  { name: "Three of Pentacles", image: "cards/pentacles/three_of_pentacles.jpeg",
    meanings: { general:"Сотрудничество, навыки", love:"Работа над отношениями", work:"Командная работа", yesno:"Да" },
    comment: "Настя говорит: сотрудничай с другими" },
  { name: "Four of Pentacles", image: "cards/pentacles/four_of_pentacles.jpeg",
    meanings: { general:"Страх потерь, стабильность", love:"Сохранение контроля", work:"Сохранение ресурсов", yesno:"Скорее Нет" },
    comment: "Настя говорит: держи свои ресурсы под контролем" },
  { name: "Five of Pentacles", image: "cards/pentacles/five_of_pentacles.jpeg",
    meanings: { general:"Материальные трудности", love:"Ощущение одиночества", work:"Финансовые проблемы", yesno:"Нет" },
    comment: "Настя говорит: не теряй веру" },
  { name: "Six of Pentacles", image: "cards/pentacles/six_of_pentacles.jpeg",
    meanings: { general:"Щедрость и помощь", love:"Делиться заботой", work:"Помощь и поддержка", yesno:"Да" },
    comment: "Настя говорит: помогай и принимай помощь" },
  { name: "Seven of Pentacles", image: "cards/pentacles/seven_of_pentacles.jpeg",
    meanings: { general:"Оценка результатов", love:"Оценка усилий в отношениях", work:"Плоды труда", yesno:"Скорее Да" },
    comment: "Настя говорит: оцени свои усилия" },
  { name: "Eight of Pentacles", image: "cards/pentacles/eight_of_pentacles.jpeg",
    meanings: { general:"Труд и мастерство", love:"Усердие в отношениях", work:"Сосредоточенность на мастерстве", yesno:"Да" },
    comment: "Настя говорит: совершенствуй мастерство" },
  { name: "Nine of Pentacles", image: "cards/pentacles/nine_of_pentacles.jpeg",
    meanings: { general:"Самодостаточность", love:"Независимость в любви", work:"Материальный успех", yesno:"Да" },
    comment: "Настя говорит: наслаждайся плодами труда" },
  { name: "Ten of Pentacles", image: "cards/pentacles/ten_of_pentacles.jpeg",
    meanings: { general:"Семейное благополучие", love:"Стабильные отношения", work:"Устойчивый успех", yesno:"Да" },
    comment: "Настя говорит: цени уют и достаток" },
  { name: "Page of Pentacles", image: "cards/pentacles/page_of_pentacles.jpeg",
    meanings: { general:"Учёба и возможности", love:"Начало изучения партнёра", work:"Готовность учиться", yesno:"Скорее Да" },
    comment: "Настя говорит: учись и развивайся" },
  { name: "Knight of Pentacles", image: "cards/pentacles/knight_of_pentacles.jpeg",
    meanings: { general:"Усердие и стабильность", love:"Стабильный, надёжный партнёр", work:"Методичный прогресс", yesno:"Скорее Да" },
    comment: "Настя говорит: медленно, но уверенно" },
  { name: "Queen of Pentacles", image: "cards/pentacles/queen_of_pentacles.jpeg",
    meanings: { general:"Практичность и забота", love:"Забота о партнёре", work:"Организованность и планирование", yesno:"Да" },
    comment: "Настя говорит: заботься о близких" },
  { name: "King of Pentacles", image: "cards/pentacles/king_of_pentacles.jpeg",
    meanings: { general:"Материальный успех", love:"Зрелые стабильные отношения", work:"Авторитет в деле", yesno:"Да" },
    comment: "Настя говорит: используй ресурсы с умом" }
];

// ================================
//       МЕЧИ (Маша говорит)
// ================================
const cardsSwords = [
  { name: "Ace of Swords", image: "cards/swords/ace_of_swords.jpeg",
    meanings: { general:"Прозрение и ясность", love:"Честный разговор", work:"Новая идея", yesno:"Да" },
    comment: "Маша говорит: ясно смотри на ситуацию" },
  { name: "Two of Swords", image: "cards/swords/two_of_swords.jpeg",
    meanings: { general:"Дилемма и решение", love:"Нужно выбрать", work:"Взвесь варианты", yesno:"Скорее Нет" },
    comment: "Маша говорит: взвесь все варианты" },
  { name: "Three of Swords", image: "cards/swords/three_of_swords.jpeg",
    meanings: { general:"Боль, разочарование", love:"Расставание или обида", work:"Ошибки и конфликты", yesno:"Нет" },
    comment: "Маша говорит: сердце требует внимания" },
  { name: "Four of Swords", image: "cards/swords/four_of_swords.jpeg",
    meanings: { general:"Отдых и восстановление", love:"Пауза в отношениях", work:"Время на восстановление", yesno:"Скорее Да" },
    comment: "Маша говорит: передохни и подумай" },
  { name: "Five of Swords", image: "cards/swords/five_of_swords.jpeg",
    meanings: { general:"Конфликт и поражение", love:"Ссоры, напряжение", work:"Проигрыш или разногласия", yesno:"Нет" },
    comment: "Маша говорит: выбирай свои битвы" },
  { name: "Six of Swords", image: "cards/swords/six_of_swords.jpeg",
    meanings: { general:"Переход, движение вперёд", love:"Переход к новому этапу", work:"Изменения к лучшему", yesno:"Скорее Да" },
    comment: "Маша говорит: двигайся дальше" },
  { name: "Seven of Swords", image: "cards/swords/seven_of_swords.jpeg",
    meanings: { general:"Хитрость и стратегия", love:"Осторожность", work:"Планирование действий", yesno:"Зависит" },
    comment: "Маша говорит: будь осторожна" },
  { name: "Eight of Swords", image: "cards/swords/eight_of_swords.jpeg",
    meanings: { general:"Ограничения и страхи", love:"Страх сделать шаг", work:"Чувство ловушки", yesno:"Скорее Нет" },
    comment: "Маша говорит: освободи себя от страхов" },
  { name: "Nine of Swords", image: "cards/swords/nine_of_swords.jpeg",
    meanings: { general:"Бессонница, тревога", love:"Обиды и страхи", work:"Стресс и переживания", yesno:"Нет" },
    comment: "Маша говорит: не переживай слишком сильно" },
  { name: "Ten of Swords", image: "cards/swords/ten_of_swords.jpeg",
    meanings: { general:"Конец цикла", love:"Разрыв, финал", work:"Завершение проблемы", yesno:"Скорее Да" },
    comment: "Маша говорит: это конец одного этапа" },
  { name: "Page of Swords", image: "cards/swords/page_of_swords.jpeg",
    meanings: { general:"Наблюдение, учёба", love:"Узнай партнёра лучше", work:"Изучи ситуацию", yesno:"Скорее Да" },
    comment: "Маша говорит: изучай ситуацию внимательно" },
  { name: "Knight of Swords", image: "cards/swords/knight_of_swords.jpeg",
    meanings: { general:"Быстрое действие", love:"Резкое движение в отношениях", work:"Действуй решительно", yesno:"Скорее Да" },
    comment: "Маша говорит: действуй решительно" },
  { name: "Queen of Swords", image: "cards/swords/queen_of_swords.jpeg",
    meanings: { general:"Рассудок и честность", love:"Честность в чувствах", work:"Объективность", yesno:"Да" },
    comment: "Маша говорит: слушай разум" },
  { name: "King of Swords", image: "cards/swords/king_of_swords.jpeg",
    meanings: { general:"Сила разума", love:"Зрелость в любви", work:"Стратегическое мышление", yesno:"Да" },
    comment: "Маша говорит: принимай решения объективно" }
];

// ==================================
//       ЖЕЗЛЫ (Дарина говорит)
// ==================================
const cardsWands = [
  { name: "Ace of Wands", image: "cards/wands/ace_of_wands.jpeg",
    meanings: { general:"Энергия и инициатива", love:"Начало страстных отношений", work:"Инициатива принесёт успех", yesno:"Да" },
    comment: "Дарина говорит: действуй смело" },
  { name: "Two of Wands", image: "cards/wands/two_of_wands.jpeg",
    meanings: { general:"Планы и выбор пути", love:"Обдумывай шаги", work:"Выбор направления", yesno:"Скорее Да" },
    comment: "Дарина говорит: продумай шаги" },
  { name: "Three of Wands", image: "cards/wands/three_of_wands.jpeg", meanings: { general:"Прогресс и рост", love:"Совместный рост", work:"Ожидай результата", yesno:"Да" },
    comment: "Дарина говорит: двигайся вперёд" },
  { name: "Four of Wands", image: "cards/wands/four_of_wands.jpeg", meanings: { general:"Праздник и стабильность", love:"Праздник в любви", work:"Стабильный прогресс", yesno:"Да" },
    comment: "Дарина говорит: радуйся успехам" },
  { name: "Five of Wands", image: "cards/wands/five_of_wands.jpeg", meanings: { general:"Соревнование", love:"Непонимания в паре", work:"Соревнование среди коллег", yesno:"Скорее Нет" },
    comment: "Дарина говорит: учись на конфликтах" },
  { name: "Six of Wands", image: "cards/wands/six_of_wands.jpeg", meanings: { general:"Победа и признание", love:"Счастье и признательность", work:"Успех перед командой", yesno:"Да" },
    comment: "Дарина говорит: гордись своими достижениями" },
  { name: "Seven of Wands", image: "cards/wands/seven_of_wands.jpeg", meanings: { general:"Защита позиции", love:"Стой за свои чувства", work:"Уверенность в действиях", yesno:"Да" },
    comment: "Дарина говорит: стой за себя" },
  { name: "Eight of Wands", image: "cards/wands/eight_of_wands.jpeg", meanings: { general:"Быстрое движение", love:"Резкое развитие отношений", work:"Скорость изменений", yesno:"Да" },
    comment: "Дарина говорит: действуй быстро" },
  { name: "Nine of Wands", image: "cards/wands/nine_of_wands.jpeg", meanings: { general:"Выносливость и защита", love:"Защита личных границ", work:"Упорство в достижение цели", yesno:"Скорее Да" },
    comment: "Дарина говорит: держись и не сдавайся" },
  { name: "Ten of Wands", image: "cards/wands/ten_of_wands.jpeg",
    meanings: { general:"Тяжесть и ответственность", love:"Чувство перегрузки в отношениях", work:"Много обязанностей", yesno:"Скорее Нет" },
    comment: "Дарина говорит: разделяй бремя с другими" },
  { name: "Page of Wands", image: "cards/wands/page_of_wands.jpeg",
    meanings: { general:"Энергия нового начинания", love:"Лёгкие флирты, начало общения", work:"Новые идеи, готовность учиться", yesno:"Скорее Да" },
    comment: "Дарина говорит: будь любопытна и смела" },
  { name: "Knight of Wands", image: "cards/wands/knight_of_wands.jpeg",
    meanings: { general:"Стремительное движение, приключение", love:"Пылкий роман", work:"Действуй быстро и решительно", yesno:"Скорее Да" },
    comment: "Дарина говорит: стремись к цели с энергией" },
  { name: "Queen of Wands", image: "cards/wands/queen_of_wands.jpeg",
    meanings: { general:"Харизма, уверенность", love:"Тепло и забота в отношениях", work:"Лидерство и уверенность", yesno:"Да" },
    comment: "Дарина говорит: веди за собой с улыбкой" },
  { name: "King of Wands", image: "cards/wands/king_of_wands.jpeg",
    meanings: { general:"Лидерство и видение", love:"Сильная личность в любви", work:"Руководство проектом", yesno:"Да" },
    comment: "Дарина говорит: будь решительным и мудрым лидером" }
];

// ================================
//       СТАРШИЕ АРКАНЫ (Ника говорит)
// ================================
const cardsMajor = [
  { name: "The Fool", image: "cards/major/fool.jpeg",
    meanings: { general:"Начало нового пути", love:"Невинное чувство или риск", work:"Начало проекта", yesno:"Скорее Да" },
    comment: "Ника говорит: дерзай, даже если страшно" },
  { name: "The Magician", image: "cards/major/magician.jpeg",
    meanings: { general:"Реализация потенциала", love:"Умение влиять на отношения", work:"Возможность проявить себя", yesno:"Да" },
    comment: "Ника говорит: используй свои ресурсы с умом" },
  { name: "The High Priestess", image: "cards/major/high_priestess.jpeg",
    meanings: { general:"Интуиция и тайна", love:"Слушай сердце", work:"Погружение в детали", yesno:"Скорее Да" },
    comment: "Ника говорит: прислушайся к интуиции" },
  { name: "The Empress", image: "cards/major/empress.jpeg",
    meanings: { general:"Изобилие, забота", love:"Любовь и гармония", work:"Творческое изобилие", yesno:"Да" },
    comment: "Ника говорит: цени заботу и красоту вокруг" },
  { name: "The Emperor", image: "cards/major/emperor.jpeg",
    meanings: { general:"Структура и власть", love:"Стабильность и ответственность", work:"Организация и руководство", yesno:"Да" },
    comment: "Ника говорит: бери ответственность" },
  { name: "The Hierophant", image: "cards/major/heirophant.jpeg",
    meanings: { general:"Учение и традиции", love:"Советы от старших", work:"Следование правилам и порядку", yesno:"Скорее Да" },
    comment: "Ника говорит: черпай знания из опыта" },
  { name: "The Lovers", image: "cards/major/lovers.jpeg",
    meanings: { general:"Выбор и партнерство", love:"Гармония и любовь", work:"Партнёрство и выбор", yesno:"Да" },
    comment: "Ника говорит: делай выбор сердцем" },
  { name: "The Chariot", image: "cards/major/chariot.jpeg",
    meanings: { general:"Контроль и победа", love:"Уверенность в чувствах", work:"Достижение целей", yesno:"Да" },
    comment: "Ника говорит: управляй своей дорогой" },
  { name: "Strength", image: "cards/major/strength.jpeg",
    meanings: { general:"Сила и терпение", love:"Сдержанность в эмоциях", work:"Выдержка и настойчивость", yesno:"Да" },
    comment: "Ника говорит: сила в терпении" },
  { name: "The Hermit", image: "cards/major/hermit.jpeg",
    meanings: { general:"Размышление, поиск", love:"Время для себя", work:"Пауза и анализ", yesno:"Скорее Да" },
    comment: "Ника говорит: посмотри внутрь себя" },
  { name: "Wheel of Fortune", image: "cards/major/wheel_of_fortune.jpeg",
    meanings: { general:"Перемены и циклы", love:"Изменения в отношениях", work:"Новые возможности", yesno:"Зависит" },
    comment: "Ника говорит: жизнь изменчива" },
  { name: "Justice", image: "cards/major/justice.jpeg",
    meanings: { general:"Справедливость и баланс", love:"Честность в чувствах", work:"Правильное решение", yesno:"Да" },
    comment: "Ника говорит: действуй справедливо" },
  { name: "The Hanged Man", image: "cards/major/hanged_man.jpeg",
    meanings: { general:"Жертва, пауза", love:"Взгляд под другим углом", work:"Временная остановка", yesno:"Скорее Нет" },
    comment: "Ника говорит: иногда нужно отпустить" },
  { name: "Death", image: "cards/major/death.jpeg",
    meanings: { general:"Конец цикла, трансформация", love:"Завершение отношений", work:"Изменение ситуации", yesno:"Скорее Да" },
    comment: "Ника говорит: отпусти старое" },
  { name: "Temperance", image: "cards/major/temperance.jpeg",
    meanings: { general:"Баланс и гармония", love:"Сбалансированные чувства", work:"Плавное развитие проекта", yesno:"Да" },
    comment: "Ника говорит: ищи гармонию" },
  { name: "The Devil", image: "cards/major/devil.jpeg",
    meanings: { general:"Привязанность и искушение", love:"Опасные страсти", work:"Соблазн отказаться от принципов", yesno:"Скорее Нет" },
    comment: "Ника говорит: осторожно с привязанностями" },
  { name: "The Tower", image: "cards/major/tower.jpeg",
    meanings: { general:"Внезапные изменения", love:"Разрыв и потрясения", work:"Неожиданные события", yesno:"Нет" },
    comment: "Ника говорит: будь готова к неожиданностям" },
  { name: "The Star", image: "cards/major/star.jpeg",
    meanings: { general:"Надежда и вдохновение", love:"Оптимизм в любви", work:"Вдохновение и идеи", yesno:"Да" },
    comment: "Ника говорит: держись надежды" },
  { name: "The Moon", image: "cards/major/moon.jpeg",
    meanings: { general:"Интуиция, тайны", love:"Неясность чувств", work:"Скрытые риски", yesno:"Скорее Нет" },
    comment: "Ника говорит: прислушивайся к внутреннему голосу" },
  { name: "The Sun", image: "cards/major/sun.jpeg",
    meanings: { general:"Счастье и успех", love:"Ясность и радость в любви", work:"Успех и признание", yesno:"Да" },
    comment: "Ника говорит: радуйся моменту" },
  { name: "Judgement", image: "cards/major/judgement.jpeg",
    meanings: { general:"Оценка, решение", love:"Размышление о чувствах", work:"Подведение итогов", yesno:"Скорее Да" },
    comment: "Ника говорит: принимай решения осознанно" },
  { name: "The World", image: "cards/major/world.jpeg",
    meanings: { general:"Завершение цикла, целостность", love:"Гармония и полнота отношений", work:"Успех завершенного проекта", yesno:"Да" },
    comment: "Ника говорит: почувствуй завершение и радость" }
];

// ================================
//       СОБИРАЕМ ВСЕ КАРТЫ
// ================================
const allCards = [
  ...cardsCups,
  ...cardsPentacles,
  ...cardsSwords,
  ...cardsWands,
  ...cardsMajor
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
