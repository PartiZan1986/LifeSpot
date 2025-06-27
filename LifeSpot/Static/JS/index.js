
let session = new Map();

function filterVideos(inputParseFunction) {
    let elements = document.getElementsByClassName('video-container');
    let searchText = inputParseFunction().toLowerCase();

    for (let i = 0; i < elements.length; i++) {
        let videoText = elements[i].querySelector(".video-title").innerText;
        if (!videoText.toLowerCase().includes(inputParseFunction() /*Переданная функция вызвана*/.toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
                }
    };

    // Если поле поиска пустое, показываем все видео
    if (!searchText) {
        videoContainers.forEach(container => {
            container.style.display = 'block';
        });
    }


// Логирование сессии (объявлено через expression)
let sessionLog = function logSession() {
    for (let result of session) {
        console.log(result)
    }
}



function handleSession() {

    // Сохраним время начала сессии
    session.set("startDate", new Date().toLocaleString())
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent)
}

function checkAge() {
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

    if (session.get("age") >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}