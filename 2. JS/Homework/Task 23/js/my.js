window.onload = init;

function init() {
	var image = document.getElementById("zero");
	image.onclick = showAnswer;
	console.log(111);
}

function showAnswer() {
	var image = document.getElementById("zero");
	image.src = "img/zero.jpg";
}