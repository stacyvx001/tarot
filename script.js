document.addEventListener("DOMContentLoaded", () => {

const cards = [
    // ===== Кубки (Женя) =====
    { name:"Ace of Cups", image:"cards/cups/ace_cups.jpeg", suit:"cups", meanings:{general:"Новый эмоциональный старт", love:"Новые чувства", work:"Творческий проект", yesno:"Да"}, advice:"Совет от Жени: будь открыта новым эмоциям"},
    { name:"Two of Cups", image:"cards/cups/two_cups.jpeg", suit:"cups", meanings:{general:"Партнерство и гармония", love:"Союз с кем-то особенным", work:"Сотрудничество", yesno:"Да"}, advice:"Совет от Жени: доверяй партнеру"},
    { name:"Three of Cups", image:"cards/cups/three_cups.jpeg", suit:"cups", meanings:{general:"Веселье и дружба", love:"Веселая компания", work:"Командная работа", yesno:"Да"}, advice:"Совет от Жени: радуйся общению"},
    { name:"Four of Cups", image:"cards/cups/four_cups.jpeg", suit:"cups", meanings:{general:"Размышления и апатия", love:"Возможность не замечена", work:"Сосредоточься на важных задачах", yesno:"Нет"}, advice:"Совет от Жени: смотри шире"},
    { name:"Five of Cups", image:"cards/cups/five_cups.jpeg", suit:"cups", meanings:{general:"Потеря и сожаление", love:"Разочарование в отношениях", work:"Неудача проекта", yesno:"Нет"}, advice:"Совет от Жени: учись отпускать"},
    { name:"Six of Cups", image:"cards/cups/six_cups.jpeg", suit:"cups", meanings:{general:"Ностальгия и воспоминания", love:"Возвращение прошлых чувств", work:"Повтор старых проектов", yesno:"Да"}, advice:"Совет от Жени: вспомни хорошие моменты"},
    { name:"Seven of Cups", image:"cards/cups/seven_cups.jpeg", suit:"cups", meanings:{general:"Иллюзии и выбор", love:"Много возможностей в любви", work:"Разные пути", yesno:"Нет"}, advice:"Совет от Жени: действуй осознанно"},
    { name:"Eight of Cups", image:"cards/cups/eight_cups.jpeg", suit:"cups", meanings:{general:"Отход и поиск", love:"Покидаешь ситуацию", work:"Переход на новый проект", yesno:"Нет"}, advice:"Совет от Жени: не бойся идти дальше"},
    { name:"Nine of Cups", image:"cards/cups/nine_cups.jpeg", suit:"cups", meanings:{general:"Удовлетворение и радость", love:"Исполнение желаний", work:"Успешный проект", yesno:"Да"}, advice:"Совет от Жени: наслаждайся результатом"},
    { name:"Ten of Cups", image:"cards/cups/ten_cups.jpeg", suit:"cups", meanings:{general:"Семейное счастье", love:"Гармония в отношениях", work:"Успех команды", yesno:"Да"}, advice:"Совет от Жени: цени гармонию"},
    { name:"Page of Cups", image:"cards/cups/page_cups.jpeg", suit:"cups", meanings:{general:"Сообщение и новые чувства", love:"Нежность и интерес", work:"Начало маленького проекта", yesno:"Да"}, advice:"Совет от Жени: будь любопытна"},
    { name:"Knight of Cups", image:"cards/cups/khight_cups.jpeg", suit:"cups", meanings:{general:"Романтическое предложение", love:"Чувства проявляются", work:"Проект движется", yesno:"Да"}, advice:"Совет от Жени: следуй сердцу"},
    { name:"Queen of Cups", image:"cards/cups/queen_cups.jpeg", suit:"cups", meanings:{general:"Эмоциональная зрелость", love:"Забота и поддержка", work:"Интуитивное решение", yesno:"Да"}, advice:"Совет от Жени: проявляй заботу"},
    { name:"King of Cups", image:"cards/cups/king_cups.jpeg", suit:"cups", meanings:{general:"Контроль эмоций", love:"Надежный партнер", work:"Лидерство в проекте", yesno:"Да"}, advice:"Совет от Жени: сохраняй спокойствие"},

    // ===== Пентакли (Настя) =====
    { name:"Ace of Pentacles", image:"cards/pentacles/ace_pentacles.jpeg", suit:"pentacles", meanings:{general:"Новые финансовые возможности", love:"Стабильность", work:"Начало проекта", yesno:"Да"}, advice:"Совет от Насти: действуй обдуманно"},
    { name:"Two of Pentacles", image:"cards/pentacles/two_pentacles.jpeg", suit:"pentacles", meanings:{general:"Баланс и гибкость", love:"Уравновешивай эмоции", work:"Управление задачами", yesno:"Да"}, advice:"Совет от Насти: не теряй равновесие"},
    { name:"Three of Pentacles", image:"cards/pentacles/three_pentacles.jpeg", suit:"pentacles", meanings:{general:"Командная работа", love:"Общение и сотрудничество", work:"Совместные проекты", yesno:"Да"}, advice:"Совет от Насти: цени вклад других"},
    { name:"Four of Pentacles", image:"cards/pentacles/four_pentacles.jpeg", suit:"pentacles", meanings:{general:"Стабильность и контроль", love:"Сохранение отношений", work:"Удержание ресурсов", yesno:"Нет"}, advice:"Совет от Насти: отпусти контроль"},
    { name:"Five of Pentacles", image:"cards/pentacles/five_pentacles.jpeg", suit:"pentacles", meanings:{general:"Материальные трудности", love:"Проблемы в отношениях", work:"Финансовые проблемы", yesno:"Нет"}, advice:"Совет от Насти: ищи поддержку"},
    { name:"Six of Pentacles", image:"cards/pentacles/six_pentacles.jpeg", suit:"pentacles", meanings:{general:"Щедрость и помощь", love:"Поддержка партнера", work:"Помощь коллег", yesno:"Да"}, advice:"Совет от Насти: делись ресурсами"},
    { name:"Seven of Pentacles", image:"cards/pentacles/seven_pentacles.jpeg", suit:"pentacles", meanings:{general:"Терпение и ожидание", love:"Размышления о любви", work:"Оценка прогресса", yesno:"Да"}, advice:"Совет от Насти: будь терпелива"},
    { name:"Eight of Pentacles", image:"cards/pentacles/eight_pentacles.jpeg", suit:"pentacles", meanings:{general:"Упорный труд", love:"Совершенствуй отношения", work:"Обучение и практика", yesno:"Да"}, advice:"Совет от Насти: развивайся"},
    { name:"Nine of Pentacles", image:"cards/pentacles/nine_pentacles.jpeg", suit:"pentacles", meanings:{general:"Успех и независимость", love:"Самодостаточность", work:"Финансовая стабильность", yesno:"Да"}, advice:"Совет от Насти: гордись достижениями"},
    { name:"Ten of Pentacles", image:"cards/pentacles/ten_pentacles.jpeg", suit:"pentacles", meanings:{general:"Богатство и наследие", love:"Семейная гармония", work:"Успешный бизнес", yesno:"Да"}, advice:"Совет от Насти: цени успехи"},
    { name:"Page of Pentacles", image:"cards/pentacles/page_pentacles.jpeg", suit:"pentacles", meanings:{general:"Учение и идеи", love:"Любопытство в отношениях", work:"Начало обучения", yesno:"Да"}, advice:"Совет от Насти: будь внимательна к деталям"},
    { name:"Knight of Pentacles", image:"cards/pentacles/knight_pentacles.jpeg", suit:"pentacles", meanings:{general:"Усердие и стабильность", love:"Надежность", work:"Постепенный прогресс", yesno:"Да"}, advice:"Совет от Насти: будь настойчива"},
    { name:"Queen of Pentacles", image:"cards/pentacles/queen_pentacles.jpeg", suit:"pentacles", meanings:{general:"Практичность и забота", love:"Поддержка партнера", work:"Управление ресурсами", yesno:"Да"}, advice:"Совет от Насти: проявляй заботу"},
    { name:"King of Pentacles", image:"cards/pentacles/king_pentacles.jpeg", suit:"pentacles", meanings:{general:"Материальная власть", love:"Ответственный партнер", work:"Лидерство и контроль", yesno:"Да"}, advice:"Совет от Насти: сохраняй стабильность"},

    // ===== Мечи (Маша) =====
    { name:"Ace of Swords", image:"cards/swords/ace_swords.jpeg", suit:"swords", meanings:{general:"Новая идея или правда", love:"Ясность в отношениях", work:"Прорыв в проекте", yesno:"Да"}, advice:"Совет от Маши: действуй решительно"},
    { name:"Two of Swords", image:"cards/swords/two_swords.jpeg", suit:"swords", meanings:{general:"Выбор и дилемма", love:"Неопределенность", work:"Невыборочный путь", yesno:"Нет"}, advice:"Совет от Маши: взвесь варианты"},
    { name:"Three of Swords", image:"cards/swords/three_swords.jpeg", suit:"swords", meanings:{general:"Разочарование и боль", love:"Разрыв отношений", work:"Проблемы в проекте", yesno:"Нет"}, advice:"Совет от Маши: принимай уроки"},
    { name:"Four of Swords", image:"cards/swords/four_swords.jpeg", suit:"swords", meanings:{general:"Отдых и восстановление", love:"Время на раздумья", work:"Пауза в работе", yesno:"Да"}, advice:"Совет от Маши: передохни"},
    { name:"Five of Swords", image:"cards/swords/five_swords.jpeg", suit:"swords", meanings:{general:"Конфликт и борьба", love:"Споры в отношениях", work:"Ссоры на работе", yesno:"Нет"}, advice:"Совет от Маши: избегай конфликтов"},
    { name:"Six of Swords", image:"cards/swords/six_swords.jpeg", suit:"swords", meanings:{general:"Переход и движение", love:"Разрешение проблем", work:"Смена проекта", yesno:"Да"}, advice:"Совет от Маши: двигайся дальше"},
    { name:"Seven of Swords", image:"cards/swords/seven_swords.jpeg", suit:"swords", meanings:{general:"Скрытность и стратегия", love:"Тайные действия", work:"Планирование действий", yesno:"Нет"}, advice:"Совет от Маши: будь внимательна"},
    { name:"Eight of Swords", image:"cards/swords/eight_swords.jpeg", suit:"swords", meanings:{general:"Ограничения и страх", love:"Чувство ловушки", work:"Трудности", yesno:"Нет"}, advice:"Совет от Маши: ищи выход"},
    { name:"Nine of Swords", image:"cards/swords/nine_swords.jpeg", suit:"swords", meanings:{general:"Беспокойство и страхи", love:"Тревоги в отношениях", work:"Ночные переживания", yesno:"Нет"}, advice:"Совет от Маши: успокой ум"},
    { name:"Ten of Swords", image:"cards/swords/ten_swords.jpeg", suit:"swords", meanings:{general:"Конец и поражение", love:"Разрыв", work:"Провал проекта", yesno:"Нет"}, advice:"Совет от Маши: отпусти прошлое"},
    { name:"Page of Swords", image:"cards/swords/page_swords.jpeg", suit:"swords", meanings:{general:"Внимание и любознательность", love:"Исследование отношений", work:"Начало обучения", yesno:"Да"}, advice:"Совет от Маши: будь внимательна"},
    { name:"Knight of Swords", image:"cards/swords/knight_swords.jpeg", suit:"swords", meanings:{general:"Решительные действия", love:"Активность в отношениях", work:"Быстрые решения", yesno:"Да"}, advice:"Совет от Маши: действуй смело"},
    { name:"Queen of Swords", image:"cards/swords/queen_swords.jpeg", suit:"swords", meanings:{general:"Ясность и интеллект", love:"Честность", work:"Решения с логикой", yesno:"Да"}, advice:"Совет от Маши: будь объективна"},
    { name:"King of Swords", image:"cards/swords/king_swords.jpeg", suit:"swords", meanings:{general:"Авторитет и разум", love:"Стабильность", work:"Лидерство и анализ", yesno:"Да"}, advice:"Совет от Маши: действуй с рассудком"},

    // ===== Жезлы (Дарина) =====
    { name:"Ace of Wands", image:"cards/wands/ace_wands.jpeg", suit:"wands", meanings:{general:"Новая энергия", love:"Начало страсти", work:"Проект стартует", yesno:"Да"}, advice:"Совет от Дарины: действуй с энтузиазмом"},
    { name:"Two of Wands", image:"cards/wands/two_wands.jpeg", suit:"wands", meanings:{general:"Планирование и решения", love:"Выбор партнера", work:"Стратегия развития", yesno:"Да"}, advice:"Совет от Дарины: продумывай шаги"},
    { name:"Three of Wands", image:"cards/wands/three_wands.jpeg", suit:"wands", meanings:{general:"Прогресс и расширение", love:"Отношения развиваются", work:"Расширение проекта", yesno:"Да"}, advice:"Совет от Дарины: смотри вперёд"},
    { name:"Four of Wands", image:"cards/wands/four_wands.jpeg", suit:"wands", meanings:{general:"Праздник и стабильность", love:"Гармония", work:"Завершение этапа", yesno:"Да"}, advice:"Совет от Дарины: радуйся успеху"},
    { name:"Five of Wands", image:"cards/wands/five_wands.jpeg", suit:"wands", meanings:{general:"Соревнование и борьба", love:"Конфликты", work:"Соревнование коллег", yesno:"Нет"}, advice:"Совет от Дарины: действуй мудро"},
    { name:"Six of Wands", image:"cards/wands/six_wands.jpeg", suit:"wands", meanings:{general:"Победа и признание", love:"Признание в отношениях", work:"Успех проекта", yesno:"Да"}, advice:"Совет от Дарины: наслаждайся победой"},
    { name:"Seven of Wands", image:"cards/wands/seven_wands.jpeg", suit:"wands", meanings:{general:"Защита позиции", love:"Отстаивай отношения", work:"Отстаивай идеи", yesno:"Да"}, advice:"Совет от Дарины: будь стойкой"},
    { name:"Eight of Wands", image:"cards/wands/eight_wands.jpeg", suit:"wands", meanings:{general:"Движение и скорость", love:"Быстрое развитие", work:"Проект идет быстро", yesno:"Да"}, advice:"Совет от Дарины: действуй решительно"},
    { name:"Nine of Wands", image:"cards/wands/nine_wands.jpeg", suit:"wands", meanings:{general:"Выносливость и подготовка", love:"Осторожность", work:"Подготовка к трудностям", yesno:"Да"}, advice:"Совет от Дарины: держись до конца"},
    { name:"Ten of Wands", image:"cards/wands/ten_wands.jpeg", suit:"wands", meanings:{general:"Бремя и ответственность", love:"Тяжесть отношений", work:"Перегрузка проектом", yesno:"Нет"}, advice:"Совет от Дарины: делегируй задачи"},
    { name:"Page of Wands", image:"cards/wands/page_wands.jpeg", suit:"wands", meanings:{general:"Любопытство и энергия", love:"Интерес к новым знакомствам", work:"Начало работы", yesno:"Да"}, advice:"Совет от Дарины: будь смела"},
    { name:"Knight of Wands", image:"cards/wands/knight_wands.jpeg", suit:"wands", meanings:{general:"Действие и страсть", love:"Смелость в любви", work:"Динамика проекта", yesno:"Да"}, advice:"Совет от Дарины: действуй активно"},
    { name:"Queen of Wands", image:"cards/wands/queen_wands.jpeg", suit:"wands", meanings:{general:"Энергия и харизма", love:"Обаяние и страсть", work:"Вдохновляй команду", yesno:"Да"}, advice:"Совет от Дарины: будь уверенной"},
    { name:"King of Wands", image:"cards/wands/king_wands.jpeg", suit:"wands", meanings:{general:"Лидерство и власть", love:"Ответственный партнер", work:"Ведение команды", yesno:"Да"}, advice:"Совет от Дарины: веди за собой"},

    // ===== Старшие Арканы (Ника) =====
    { name:"Fool", image:"cards/major/fool.jpeg", suit:"major", meanings:{general:"Новый путь, начало", love:"Приключение в любви", work:"Новые возможности", yesno:"Да"}, advice:"Совет от Ники: будь смела"},
    { name:"Magician", image:"cards/major/magician.jpeg", suit:"major", meanings:{general:"Мастерство и сила", love:"Используй свои возможности", work:"Начни проект", yesno:"Да"}, advice:"Совет от Ники: действуй уверенно"},
    { name:"High Priestess", image:"cards/major/high_priestess.jpeg", suit:"major", meanings:{general:"Интуиция и тайна", love:"Доверяй своим чувствам", work:"Секретные возможности", yesno:"Да"}, advice:"Совет от Ники: слушай себя"},
    { name:"Empress", image:"cards/major/empress.jpeg", suit:"major", meanings:{general:"Творчество и забота", love:"Любовь и гармония", work:"Создание чего-то нового", yesno:"Да"}, advice:"Совет от Ники: проявляй заботу"},
    { name:"Emperor", image:"cards/major/emperor.jpeg", suit:"major", meanings:{general:"Власть и структура", love:"Стабильность отношений", work:"Лидерство и контроль", yesno:"Да"}, advice:"Совет от Ники: действуй уверенно"},
    { name:"Hierophant", image:"cards/major/heirophant.jpeg", suit:"major", meanings:{general:"Традиции и обучение", love:"Советы старших", work:"Следуй правилам", yesno:"Да"}, advice:"Совет от Ники: слушай опыт"},
    { name:"Lovers", image:"cards/major/lovers.jpeg", suit:"major", meanings:{general:"Выбор и партнерство", love:"Любовь и союз", work:"Важное решение", yesno:"Да"}, advice:"Совет от Ники: действуй сердцем"},
    { name:"Chariot", image:"cards/major/chariot.jpeg", suit:"major", meanings:{general:"Движение и контроль", love:"Достижение целей", work:"Успех через усилия", yesno:"Да"}, advice:"Совет от Ники: управляй энергией"},
    { name:"Strength", image:"cards/major/strength.jpeg", suit:"major", meanings:{general:"Сила и терпение", love:"Мягкая сила в любви", work:"Контроль над ситуацией", yesno:"Да"}, advice:"Совет от Ники: будь терпелива"},
    { name:"Hermit", image:"cards/major/hermit.jpeg", suit:"major", meanings:{general:"Поиск и одиночество", love:"Время для себя", work:"Рефлексия", yesno:"Да"}, advice:"Совет от Ники: прислушайся к себе"},
    { name:"Wheel of Fortune", image:"cards/major/wheel_of_fortune.jpeg", suit:"major", meanings:{general:"Судьба и перемены", love:"Неожиданные события", work:"Изменения в проекте", yesno:"Да"}, advice:"Совет от Ники: будь готова к переменам"},
    { name:"Justice", image:"cards/major/justice.jpeg", suit:"major", meanings:{general:"Равновесие и справедливость", love:"Честность в отношениях", work:"Объективное решение", yesno:"Да"}, advice:"Совет от Ники: будь справедлива"},
    { name:"Hanged Man", image:"cards/major/hanged_man.jpeg", suit:"major", meanings:{general:"Пауза и переосмысление", love:"Время обдумать отношения", work:"Задержка в проекте", yesno:"Нет"}, advice:"Совет от Ники: смотри под другим углом"},
    { name:"Death", image:"cards/major/death.jpeg", suit:"major", meanings:{general:"Конец и начало", love:"Завершение цикла", work:"Закрытие проекта", yesno:"Нет"}, advice:"Совет от Ники: отпусти старое"},
    { name:"Temperance", image:"cards/major/temperance.jpeg", suit:"major", meanings:{general:"Баланс и гармония", love:"Уравновешенность в чувствах", work:"Сотрудничество", yesno:"Да"}, advice:"Совет от Ники: соблюдай баланс"},
    { name:"Devil", image:"cards/major/devil.jpeg", suit:"major", meanings:{general:"Иллюзии и зависимость", love:"Привязанность", work:"Ограничения", yesno:"Нет"}, advice:"Совет от Ники: освободи себя"},
    { name:"Tower", image:"cards/major/tower.jpeg", suit:"major", meanings:{general:"Внезапные изменения", love:"Разрушение иллюзий", work:"Кризис", yesno:"Нет"}, advice:"Совет от Ники: будь готова к переменам"},
    { name:"Star", image:"cards/major/star.jpeg", suit:"major", meanings:{general:"Надежда и вдохновение", love:"Оптимизм в любви", work:"Творческое вдохновение", yesno:"Да"}, advice:"Совет от Ники: верь в себя"},
    { name:"Moon", image:"cards/major/moon.jpeg", suit:"major", meanings:{general:"Интуиция и тайны", love:"Неясность в чувствах", work:"Скрытые факторы", yesno:"Нет"}, advice:"Совет от Ники: будь внимательна"},
    { name:"Sun", image:"cards/major/sun.jpeg", suit:"major", meanings:{general:"Успех и радость", love:"Счастье в отношениях", work:"Успешный проект", yesno:"Да"}, advice:"Совет от Ники: радуйся жизни"},
    { name:"Judgement", image:"cards/major/judgement.jpeg", suit:"major", meanings:{general:"Возрождение и оценка", love:"Понимание отношений", work:"Итоги работы", yesno:"Да"}, advice:"Совет от Ники: оцени ситуацию"},
    { name:"World", image:"cards/major/world.jpeg", suit:"major", meanings:{general:"Завершение и целостность", love:"Гармония", work:"Успех проекта", yesno:"Да"}, advice:"Совет от Ники: чувствуй завершение"}
];

// ===== Функции выпадения карт =====
function getRandomCard() {
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

// ===== Кнопки =====
document.getElementById("one-card").addEventListener("click", ()=> showCards(1));
document.getElementById("three-cards").addEventListener("click", ()=> showCards(3));
document.getElementById("five-cards").addEventListener("click", ()=> showCards(5));

// ===== Падающие звёзды =====
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

});


