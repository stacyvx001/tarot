// ==========================
// script.js для "Гончарного Таро"
// Полный массив карт с 78 картами
// ==========================

// ===== Кубки (Женя) =====
const cards = [
{ name:"Ace of Cups", image:"cards/cups/ace_cups.jpeg", suit:"cups", meanings:{general:"Новый эмоциональный старт", love:"Новые чувства", work:"Творческий проект", yesno:"Да"}, advice:"Совет от Жени: будь открыта новым эмоциям"},
{ name:"Two of Cups", image:"cards/cups/two_cups.jpeg", suit:"cups", meanings:{general:"Партнерство и гармония", love:"Союз с кем-то особенным", work:"Сотрудничество", yesno:"Да"}, advice:"Совет от Жени: доверяй партнеру"},
{ name:"Three of Cups", image:"cards/cups/three_cups.jpeg", suit:"cups", meanings:{general:"Радость и встречи", love:"Весёлые свидания", work:"Командная работа", yesno:"Да"}, advice:"Совет от Жени: радуйся мелочам"},
{ name:"Four of Cups", image:"cards/cups/four_cups.jpeg", suit:"cups", meanings:{general:"Размышления и скука", love:"Не замечаешь нового", work:"Отдых нужен", yesno:"Нет"}, advice:"Совет от Жени: присмотрись внимательнее"},
{ name:"Five of Cups", image:"cards/cups/five_cups.jpeg", suit:"cups", meanings:{general:"Потери и сожаления", love:"Разочарование", work:"Ошибка в проекте", yesno:"Нет"}, advice:"Совет от Жени: смотри вперед"},
{ name:"Six of Cups", image:"cards/cups/six_cups.jpeg", suit:"cups", meanings:{general:"Ностальгия и воспоминания", love:"Старые чувства", work:"Опыт помогает", yesno:"Да"}, advice:"Совет от Жени: цени прошлое"},
{ name:"Seven of Cups", image:"cards/cups/seven_cups.jpeg", suit:"cups", meanings:{general:"Выбор и мечты", love:"Иллюзии", work:"Много вариантов", yesno:"Нет"}, advice:"Совет от Жени: выбирай разумно"},
{ name:"Eight of Cups", image:"cards/cups/eight_cups.jpeg", suit:"cups", meanings:{general:"Отход и поиск", love:"Оставь прошлое", work:"Поменяй стратегию", yesno:"Нет"}, advice:"Совет от Жени: двигайся дальше"},
{ name:"Nine of Cups", image:"cards/cups/nine_cups.jpeg", suit:"cups", meanings:{general:"Исполнение желаний", love:"Счастье в отношениях", work:"Успех проекта", yesno:"Да"}, advice:"Совет от Жени: наслаждайся моментом"},
{ name:"Ten of Cups", image:"cards/cups/ten_cups.jpeg", suit:"cups", meanings:{general:"Семейное счастье", love:"Гармония и радость", work:"Завершение цикла", yesno:"Да"}, advice:"Совет от Жени: цени семью"},
{ name:"Page of Cups", image:"cards/cups/page_cups.jpeg", suit:"cups", meanings:{general:"Новые эмоции", love:"Маленькая радость", work:"Творческий всплеск", yesno:"Да"}, advice:"Совет от Жени: будь открыта новым возможностям"},
{ name:"Knight of Cups", image:"cards/cups/khight_cups.jpeg", suit:"cups", meanings:{general:"Романтичные действия", love:"Ухаживание", work:"Проявление инициативы", yesno:"Да"}, advice:"Совет от Жени: действуй с сердцем"},
{ name:"Queen of Cups", image:"cards/cups/queen_cups.jpeg", suit:"cups", meanings:{general:"Эмоциональная мудрость", love:"Поддержка партнера", work:"Интуиция помогает", yesno:"Да"}, advice:"Совет от Жени: слушай свои чувства"},
{ name:"King of Cups", image:"cards/cups/king_cups.jpeg", suit:"cups", meanings:{general:"Контроль эмоций", love:"Стабильность в любви", work:"Лидерство в проекте", yesno:"Да"}, advice:"Совет от Жени: держи баланс эмоций"},

// ===== Пентакли (Настя) =====
{ name:"Ace of Pentacles", image:"cards/pentacles/ace_pentacles.jpeg", suit:"pentacles", meanings:{general:"Новые финансовые возможности", love:"Стабильность", work:"Начало проекта", yesno:"Да"}, advice:"Совет от Насти: действуй обдуманно"},
{ name:"Two of Pentacles", image:"cards/pentacles/two_pentacles.jpeg", suit:"pentacles", meanings:{general:"Баланс и адаптация", love:"Гармония в отношениях", work:"Управляй ресурсами", yesno:"Да"}, advice:"Совет от Насти: держи баланс"},
{ name:"Three of Pentacles", image:"cards/pentacles/three_pentacles.jpeg", suit:"pentacles", meanings:{general:"Командная работа", love:"Поддержка партнера", work:"Сотрудничество приносит успех", yesno:"Да"}, advice:"Совет от Насти: цените команду"},
{ name:"Four of Pentacles", image:"cards/pentacles/four_pentacles.jpeg", suit:"pentacles", meanings:{general:"Стабильность и осторожность", love:"Береги отношения", work:"Не рискуй слишком", yesno:"Нет"}, advice:"Совет от Насти: будь внимательна с ресурсами"},
{ name:"Five of Pentacles", image:"cards/pentacles/five_pentacles.jpeg", suit:"pentacles", meanings:{general:"Потери и трудности", love:"Разлад в отношениях", work:"Финансовые трудности", yesno:"Нет"}, advice:"Совет от Насти: ищи поддержку"},
{ name:"Six of Pentacles", image:"cards/pentacles/six_pentacles.jpeg", suit:"pentacles", meanings:{general:"Помощь и щедрость", love:"Баланс отдачи и получения", work:"Делиться опытом", yesno:"Да"}, advice:"Совет от Насти: помогай и принимай помощь"},
{ name:"Seven of Pentacles", image:"cards/pentacles/seven_pentacles.jpeg", suit:"pentacles", meanings:{general:"Оценка результатов", love:"Подумай о будущем", work:"Планирование успеха", yesno:"Да"}, advice:"Совет от Насти: терпение и планирование"},
{ name:"Eight of Pentacles", image:"cards/pentacles/eight_pentacles.jpeg", suit:"pentacles", meanings:{general:"Мастерство и обучение", love:"Работа над отношениями", work:"Развивай навыки", yesno:"Да"}, advice:"Совет от Насти: практикуйся каждый день"},
{ name:"Nine of Pentacles", image:"cards/pentacles/nine_pentacles.jpeg", suit:"pentacles", meanings:{general:"Материальная независимость", love:"Самодостаточность", work:"Достижения", yesno:"Да"}, advice:"Совет от Насти: гордись результатом"},
{ name:"Ten of Pentacles", image:"cards/pentacles/ten_pentacles.jpeg", suit:"pentacles", meanings:{general:"Семейное благополучие", love:"Гармония дома", work:"Завершение финансового цикла", yesno:"Да"}, advice:"Совет от Насти: цени стабильность"},
{ name:"Page of Pentacles", image:"cards/pentacles/page_pentacles.jpeg", suit:"pentacles", meanings:{general:"Новое обучение", love:"Учись понимать партнера", work:"Интерес к новым знаниям", yesno:"Да"}, advice:"Совет от Насти: проявляй любопытство"},
{ name:"Knight of Pentacles", image:"cards/pentacles/knight_pentacles.jpeg", suit:"pentacles", meanings:{general:"Упорство и труд", love:"Настойчивость в отношениях", work:"Систематическая работа", yesno:"Да"}, advice:"Совет от Насти: будь усердна"},
{ name:"Queen of Pentacles", image:"cards/pentacles/queen_pentacles.jpeg", suit:"pentacles", meanings:{general:"Забота и мудрость", love:"Поддержка партнера", work:"Организация и забота", yesno:"Да"}, advice:"Совет от Насти: заботься о доме и работе"},
{ name:"King of Pentacles", image:"cards/pentacles/king_pentacles.jpeg", suit:"pentacles", meanings:{general:"Финансовый успех", love:"Надежность", work:"Лидерство и стабильность", yesno:"Да"}, advice:"Совет от Насти: будь уверен в ресурсах"},

// ===== Мечи (Маша) =====
{ name:"Ace of Swords", image:"cards/swords/ace_swords.jpeg", suit:"swords", meanings:{general:"Новая идея или правда", love:"Ясность в отношениях", work:"Прорыв в проекте", yesno:"Да"}, advice:"Совет от Маши: действуй решительно"},
{ name:"Two of Swords", image:"cards/swords/two_swords.jpeg", suit:"swords", meanings:{general:"Выбор и дилемма", love:"Неопределенность в любви", work:"Нужен выбор", yesno:"Нет"}, advice:"Совет от Маши: взвесь все варианты"},
{ name:"Three of Swords", image:"cards/swords/three_swords.jpeg", suit:"swords", meanings:{general:"Боль и разочарование", love:"Разрыв или обида", work:"Проблемы на работе", yesno:"Нет"}, advice:"Совет от Маши: пережди трудности"},
{ name:"Four of Swords", image:"cards/swords/four_swords.jpeg", suit:"swords", meanings:{general:"Отдых и восстановление", love:"Передышка", work:"Перерыв в проекте", yesno:"Да"}, advice:"Совет от Маши: восстанови силы"},
{ name:"Five of Swords", image:"cards/swords/five_swords.jpeg", suit:"swords", meanings:{general:"Конфликт и поражение", love:"Ссора", work:"Конфликт с коллегами", yesno:"Нет"}, advice:"Совет от Маши: держи дистанцию"},
{ name:"Six of Swords", image:"cards/swords/six_swords.jpeg", suit:"swords", meanings:{general:"Переход и движение", love:"Изменения в отношениях", work:"Смена направления", yesno:"Да"}, advice:"Совет от Маши: двигайся вперед"},
{ name:"Seven of Swords", image:"cards/swords/seven_swords.jpeg", suit:"swords", meanings:{general:"Осторожность и хитрость", love:"Скрытые мотивы", work:"Осторожно с коллегами", yesno:"Нет"}, advice:"Совет от Маши: будь внимательна"},
{ name:"Eight of Swords", image:"cards/swords/eight_swords.jpeg", suit:"swords", meanings:{general:"Ограничения и страх", love:"Чувство ловушки", work:"Преграды на пути", yesno:"Нет"}, advice:"Совет от Маши: ищи выход"},
{ name:"Nine of Swords", image:"cards/swords/nine_swords.jpeg", suit:"swords", meanings:{general:"Беспокойство и тревога", love:"Ночные мысли о любви", work:"Стресс на работе", yesno:"Нет"}, advice:"Совет от Маши: успокой ум"},
{ name:"Ten of Swords", image:"cards/swords/ten_swords.jpeg", suit:"swords", meanings:{general:"Конец цикла", love:"Разрыв отношений", work:"Завершение проекта", yesno:"Нет"}, advice:"Совет от Маши: отпусти ситуацию"},
{ name:"Page of Swords", image:"cards/swords/page_swords.jpeg", suit:"swords", meanings:{general:"Любопытство и новости", love:"Новое знакомство", work:"Сбор информации", yesno:"Да"}, advice:"Совет от Маши: будь внимательна"},
{ name:"Knight of Swords", image:"cards/swords/knight_swords.jpeg", suit:"swords", meanings:{general:"Решительные действия", love:"Стремление к цели", work:"Быстрое выполнение задач", yesno:"Да"}, advice:"Совет от Маши: действуй смело"},
{ name:"Queen of Swords", image:"cards/swords/queen_swords.jpeg", suit:"swords", meanings:{general:"Ясность и рациональность", love:"Честность в отношениях", work:"Анализ ситуации", yesno:"Да"}, advice:"Совет от Маши: будь объективна"},
{ name:"King of Swords", image:"cards/swords/king_swords.jpeg", suit:"swords", meanings:{general:"Лидерство и логика", love:"Контроль и честность", work:"Стратегическое решение", yesno:"Да"}, advice:"Совет от Маши: принимай решения разумно"},

// ===== Жезлы (Дарина) =====
{ name:"Ace of Wands", image:"cards/wands/ace_wands.jpeg", suit:"wands", meanings:{general:"Новая энергия", love:"Начало страсти", work:"Проект стартует", yesno:"Да"}, advice:"Совет от Дарины: действуй с энтузиазмом"},
{ name:"Two of Wands", image:"cards/wands/two_wands.jpeg", suit:"wands", meanings:{general:"Планы и перспектива", love:"Размышления о партнере", work:"Стратегия", yesno:"Да"}, advice:"Совет от Дарины: смотри вперед"},
{ name:"Three of Wands", image:"cards/wands/three_wands.jpeg", suit:"wands", meanings:{general:"Расширение и прогресс", love:"Долгосрочные отношения", work:"Расширение бизнеса", yesno:"Да"}, advice:"Совет от Дарины: будь активной"},
{ name:"Four of Wands", image:"cards/wands/four_wands.jpeg", suit:"wands", meanings:{general:"Праздник и стабильность", love:"Счастливые моменты", work:"Успех команды", yesno:"Да"}, advice:"Совет от Дарины: радуйся достижениям"},
{ name:"Five of Wands", image:"cards/wands/five_wands.jpeg", suit:"wands", meanings:{general:"Конфликты и конкуренция", love:"Мелкие разногласия", work:"Соревнование с коллегами", yesno:"Нет"}, advice:"Совет от Дарины: не вступай в споры"},
{ name:"Six of Wands", image:"cards/wands/six_wands.jpeg", suit:"wands", meanings:{general:"Победа и признание", love:"Успех в отношениях", work:"Признание заслуг", yesno:"Да"}, advice:"Совет от Дарины: гордись собой"},
{ name:"Seven of Wands", image:"cards/wands/seven_wands.jpeg", suit:"wands", meanings:{general:"Защита и настойчивость", love:"Отстаивай чувства", work:"Отстаивай проект", yesno:"Да"}, advice:"Совет от Дарины: будь упорной"},
{ name:"Eight of Wands", image:"cards/wands/eight_wands.jpeg", suit:"wands", meanings:{general:"Быстрое движение", love:"Развитие отношений", work:"Скорость действий", yesno:"Да"}, advice:"Совет от Дарины: действуй быстро"},
{ name:"Nine of Wands", image:"cards/wands/nine_wands.jpeg", suit:"wands", meanings:{general:"Выносливость", love:"Преграды в любви", work:"Преодоление трудностей", yesno:"Да"}, advice:"Совет от Дарины: не сдавайся"},
{ name:"Ten of Wands", image:"cards/wands/ten_wands.jpeg", suit:"wands", meanings:{general:"Нагрузка и ответственность", love:"Обязанности в отношениях", work:"Тяжелая работа", yesno:"Нет"}, advice:"Совет от Дарины: делегируй задачи"},
{ name:"Page of Wands", image:"cards/wands/page_wands.jpeg", suit:"wands", meanings:{general:"Интерес и исследование", love:"Любопытство в чувствах", work:"Новые идеи", yesno:"Да"}, advice:"Совет от Дарины: проявляй инициативу"},
{ name:"Knight of Wands", image:"cards/wands/knight_wands.jpeg", suit:"wands", meanings:{general:"Действие и энергия", love:"Романтика и страсть", work:"Быстрое продвижение", yesno:"Да"}, advice:"Совет от Дарины: действуй смело"},
{ name:"Queen of Wands", image:"cards/wands/queen_wands.jpeg", suit:"wands", meanings:{general:"Энергия и харизма", love:"Привлекаешь партнера", work:"Лидерские качества", yesno:"Да"}, advice:"Совет от Дарины: проявляй уверенность"},
{ name:"King of Wands", image:"cards/wands/king_wands.jpeg", suit:"wands", meanings:{general:"Лидерство и власть", love:"Ответственный партнер", work:"Ведение команды", yesno:"Да"}, advice:"Совет от Дарины: веди за собой"},

// ===== Старшие Арканы (Ника) =====
{ name:"Fool", image:"cards/major/fool.jpeg", suit:"major", meanings:{general:"Новый путь, начало", love:"Приключение в любви", work:"Новые возможности", yesno:"Да"}, advice:"Совет от Ники: будь смела"},
{ name:"Magician", image:"cards/major/magician.jpeg", suit:"major", meanings:{general:"Мастерство и сила", love:"Используй свои возможности", work:"Начни проект", yesno:"Да"}, advice:"Совет от Ники: действуй уверенно"},
{ name:"High Priestess", image:"cards/major/high_priestess.jpeg", suit:"major", meanings:{general:"Интуиция и тайны", love:"Слушай сердце", work:"Доверяй интуиции", yesno:"Да"}, advice:"Совет от Ники: внимательнее к знакам"},
{ name:"Empress", image:"cards/major/empress.jpeg", suit:"major", meanings:{general:"Творчество и изобилие", love:"Романтика и забота", work:"Проект растет", yesno:"Да"}, advice:"Совет от Ники: проявляй заботу"},
{ name:"Emperor", image:"cards/major/emperor.jpeg", suit:"major", meanings:{general:"Структура и власть", love:"Стабильность", work:"Контроль и руководство", yesno:"Да"}, advice:"Совет от Ники: будь организована"},
{ name:"Hierophant", image:"cards/major/heirophant.jpeg", suit:"major", meanings:{general:"Учение и наставничество", love:"Следуй традициям", work:"Совет мудрого", yesno:"Да"}, advice:"Совет от Ники: прислушивайся к опыту"},
{ name:"Lovers", image:"cards/major/lovers.jpeg", suit:"major", meanings:{general:"Выбор и отношения", love:"Сердечная связь", work:"Решение важно", yesno:"Да"}, advice:"Совет от Ники: слушай сердце"},
{ name:"Chariot", image:"cards/major/chariot.jpeg", suit:"major", meanings:{general:"Движение и победа", love:"Прогресс в отношениях", work:"Продвигайся вперед", yesno:"Да"}, advice:"Совет от Ники: действуй уверенно"},
{ name:"Strength", image:"cards/major/strength.jpeg", suit:"major", meanings:{general:"Сила духа", love:"Терпение и любовь", work:"Внутренний контроль", yesno:"Да"}, advice:"Совет от Ники: будь смела"},
{ name:"Hermit", image:"cards/major/hermit.jpeg", suit:"major", meanings:{general:"Размышление и поиск", love:"Время для себя", work:"Анализ ситуации", yesno:"Да"}, advice:"Совет от Ники: прислушивайся к себе"},
{ name:"Wheel of Fortune", image:"cards/major/wheel_of_fortune.jpeg", suit:"major", meanings:{general:"Перемены и судьба", love:"Случайные встречи", work:"Изменения в проекте", yesno:"Да"}, advice:"Совет от Ники: принимай перемены"},
{ name:"Justice", image:"cards/major/justice.jpeg", suit:"major", meanings:{general:"Баланс и правда", love:"Честность в отношениях", work:"Справедливое решение", yesno:"Да"}, advice:"Совет от Ники: будь объективна"},
{ name:"Hanged Man", image:"cards/major/hanged_man.jpeg", suit:"major", meanings:{general:"Пауза и жертва", love:"Взгляни по-новому", work:"Временная задержка", yesno:"Нет"}, advice:"Совет от Ники: смотри с другой стороны"},
{ name:"Death", image:"cards/major/death.jpeg", suit:"major", meanings:{general:"Конец и трансформация", love:"Изменение отношений", work:"Переход на новый этап", yesno:"Да"}, advice:"Совет от Ники: отпусти прошлое"},
{ name:"Temperance", image:"cards/major/temperance.jpeg", suit:"major", meanings:{general:"Гармония и баланс", love:"Уравновешенность", work:"Сбалансированное решение", yesno:"Да"}, advice:"Совет от Ники: ищи гармонию"},
{ name:"Devil", image:"cards/major/devil.jpeg", suit:"major", meanings:{general:"Соблазн и ограничения", love:"Опасные привязанности", work:"Зависимость от ситуации", yesno:"Нет"}, advice:"Совет от Ники: освобождайся"},
{ name:"Tower", image:"cards/major/tower.jpeg", suit:"major", meanings:{general:"Разрушение и перемены", love:"Внезапные события", work:"Неожиданные трудности", yesno:"Нет"}, advice:"Совет от Ники: будь готова к изменениям"},
{ name:"Star", image:"cards/major/star.jpeg", suit:"major", meanings:{general:"Надежда и вдохновение", love:"Вдохновение в любви", work:"Новые идеи", yesno:"Да"}, advice:"Совет от Ники: верь в лучшее"},
{ name:"Moon", image:"cards/major/moon.jpeg", suit:"major", meanings:{general:"Интуиция и скрытое", love:"Неясность в отношениях", work:"Скрытые трудности", yesno:"Нет"}, advice:"Совет от Ники: доверяй интуиции"},
{ name:"Sun", image:"cards/major/sun.jpeg", suit:"major", meanings:{general:"Радость и успех", love:"Счастье в любви", work:"Успех в проекте", yesno:"Да"}, advice:"Совет от Ники: наслаждайся моментом"},
{ name:"Judgement", image:"cards/major/judgement.jpeg", suit:"major", meanings:{general:"Переоценка и пробуждение", love:"Новые возможности", work:"Анализ прошлых действий", yesno:"Да"}, advice:"Совет от Ники: слушай внутренний голос"},
{ name:"World", image:"cards/major/world.jpeg", suit:"major", meanings:{general:"Завершение цикла", love:"Целостность отношений", work:"Успешное завершение проекта", yesno:"Да"}, advice:"Совет от Ники: празднуй достижения"},
];

// ==========================
// Функции генерации раскладов и логика выпадения
// ==========================

function getRandomCard() {
    // 25% шанс на Старший Аркан
    let majorChance = Math.random() < 0.25;
    let filtered = majorChance ? cards.filter(c => c.suit === "major") : cards.filter(c => c.suit !== "major");
    return filtered[Math.floor(Math.random() * filtered.length)];
}

function drawCards(number) {
    let result = [];
    while(result.length < number){
        let card = getRandomCard();
        if(!result.includes(card)) result.push(card);
    }
    return result;
}

// ==========================
// Функция отображения карт на странице
// ==========================
function showCards(number){
    const container = document.getElementById("cards-container");
    container.innerHTML = "";
    let drawn = drawCards(number);
    drawn.forEach(card => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
        <img src="${card.image}" alt="${card.name}" />
        <h3>${card.name}</h3>
        <p><strong>Общее:</strong> ${card.meanings.general}</p>
        <p><strong>Любовь:</strong> ${card.meanings.love}</p>
        <p><strong>Работа:</strong> ${card.meanings.work}</p>
        <p><strong>Да/Нет:</strong> ${card.meanings.yesno}</p>
        <p><strong>Совет:</strong> ${card.advice}</p>
        `;
        container.appendChild(div);
    });
}

// ==========================
// Привязка кнопок
// ==========================
document.getElementById("one-card").addEventListener("click", ()=> showCards(1));
document.getElementById("three-cards").addEventListener("click", ()=> showCards(3));
document.getElementById("five-cards").addEventListener("click", ()=> showCards(5));

// ==========================
// Анимация падающих звезд (CSS можно вынести отдельно)
// ==========================
const starContainer = document.getElementById("stars-container");
function createStar(){
    let star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random()*100+"%";
    star.style.animationDuration = (2+Math.random()*3)+"s";
    starContainer.appendChild(star);
    setTimeout(()=> star.remove(),5000);
}
setInterval(createStar,300);



