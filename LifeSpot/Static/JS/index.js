
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
let session = {
    'startDate': new Date().toLocaleString(),
    'userAgent': window.navigator.userAgent,
    'userAge': prompt("Пожалуйста, введите ваш возраст?")
}



function handleSession(logger, checker) {

    // Проверяем дату захода и проставляем, если новый визит
    if (window.sessionStorage.getItem("startDate") == null) {
        window.sessionStorage.setItem("startDate", new Date().toLocaleString())
    }

    // Проверяем userAgent и проставляем, если новый визит
    if (window.sessionStorage.getItem("userAgent") == null) {
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent)
    }

    // Проверяем возраст и проставляем, если новый визит
    if (window.sessionStorage.getItem("userAge") == null) {
        let input = prompt("Пожалуйста, введите ваш возраст?");
        window.sessionStorage.setItem("userAge", input)

        /* Возраст отсутствовал в sessionStorage. Значит, это первый визит пользователя, и
         при прохождении проверки на возраст он увидит приветствие*/
        checker(true)
    } else {

        /* Пользователь заходит не первый раз, приветствие не показываем. */
        checker(false)
    }

    /* Вызываем переданную в качестве колл-бэка функцию логирования.
        передавать в качестве коллбека не обязательно, можно вызвать и напрямую, но мы добавили для повторения.
    */
    logger()
}

//Проверка возраста пользователя
let checker = function (newVisit) {
    if (window.sessionStorage.getItem("userAge") >= 18) {
        // Добавим проверку на первое посещение, чтобы не показывать приветствие
        // лишний раз
        if (newVisit) {
            alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
        }
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

//Вывод данных сессии в консоль

let logger = function () {
    console.log('Начало сессии: ' + window.sessionStorage.getItem("startDate"))
    console.log('Даныне клиента: ' + window.sessionStorage.getItem("userAgent"))
    console.log('Возраст пользователя: ' + window.sessionStorage.getItem("userAge"))
}