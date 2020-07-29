function pageloader(){
	alert("Страница загружена полностью");
}

// Событие сработает при 100% загрузке страницы
window.onload = pageloader; 

// сработает сразу же!
alert("Some");