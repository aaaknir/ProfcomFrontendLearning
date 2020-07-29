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
			location = ship.location;
			var index = location.indexOf(guess);
			if(index >= 0){
				ship.hits[index] = 'hit';
				return true;
			}
		}
		return false;
	}
};

/*view.displayMessage("Some message..");
view.displayHit("35");
view.displayMiss("23");*/