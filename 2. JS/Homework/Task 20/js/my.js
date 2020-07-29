// Здесь наше представление
var view = {
	displayMessage: function(msg){
		var messageArea = document.querySelector('#messageArea');
		messageArea.innerHTML = msg;
	},

	displayHit: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},

	displayMiss: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}
};

// Здесь наша модель поведения игры

var model = {
	boardSize: 7,  // размер игрового поля
	numShips: 3,   // количество кораблей в игре
	shipLength: 3, // длина корабля в клетках
	shipsSunk: 0,  // количество потопленных кораблей

	ships: [
		ship1 = { location: ['10', '20', '30'], hits: ['', '', ''] },
		ship2 = { location: ['32', '33', '34'], hits: ['', '', ''] },
		ship3 = { location: ['63', '64', '65'], hits: ['', '', ''] }
		],

	fire: function(guess){ // получает координаты выстрела
		for(var i =0; i < this.numShips; i++){
			var ship = this.ships[i];

			var index = ship.location.indexOf(guess);
			if(index >= 0){
				ship.hits[index] = 'hit';
				view.displayHit(guess);
				view.displayMessage("HIT!!!");
				if(this.isSunk(ship)){
					view.displayMessage("You sank my battleship!");
					this.shipsSunk++;
				}
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage("You missed!");
		return false;
	},

	isSunk: function(ship){
		for(var i = 0; i < this.shipLength; i++){
			if(ship.hits[i] !== "hit"){
				return false;
			}
		}
		return true;
	}
};

var controller = {
	gusses: 0,

	processGuess: function(guess){
		var location = parseGuess(guess);
		if(location){
			this.gusses++;
			var hit = model.fire(location);
			if(hit && model.shipsSunk === model.numShips){
				view.displayMessage("Вы потопили все корабли за: " + this.gusses + " выстрелов");
			}
		}
	}
}

function parseGuess(guess){
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if(guess === null || guess.length !== 2){
		alert("Вы ввели неверные координаты");
	}else{
		firstChar = guess.charAt(0); //извлекаем со строки первый символ
		var row = alphabet.indexOf(firstChar);
		var column = guess.charAt(1);

		if(isNaN(row) || isNaN(column)){
			alert("Вы ввели неверные координаты");
		}else if(row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize){
			alert("Вы ввели неверные координаты");
		}else{
			return row + column;
		}
	}
	return null;
}

function init() {
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;
	// поработаем с Enter
	var guessInput = document.getElementById('guessInput');
	guessInput.onkeypress = handleKeyPress;
}

function handleFireButton(){
	var guessInput = document.getElementById('guessInput');
	var guess = guessInput.value;
	controller.processGuess(guess);

	guessInput.value = "";
}

function handleKeyPress(e){
	var fireButton = document.getElementById("fireButton");
	if(e.keyCode === 13){
		fireButton.click();
		return false;
	}
}

window.onload = init;
/*
controller.processGuess("B0");
controller.processGuess("C0");
controller.processGuess("D0");

controller.processGuess("B5");
controller.processGuess("C4");
controller.processGuess("F0");

controller.processGuess("D2");
controller.processGuess("D3");
controller.processGuess("D4");

controller.processGuess("G3");
controller.processGuess("G4");
controller.processGuess("G5");*/