const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const clickAlert = document.querySelector('#alert');

clickAlert.addEventListener('click', () => {
    alert('Выводит информацию в диалоговое окно с сообщением и кнопкой ОК')
})

const clickPrompt = document.querySelector('#prompt');

clickPrompt.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста')
})