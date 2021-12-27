link  = document.querySelector('a');

addEventListener('click', () => {
	let userText = prompt('Введите текст, чтобы он отобразился на странице');	
    link.textContent = userText;
    link.preventDefault();
});