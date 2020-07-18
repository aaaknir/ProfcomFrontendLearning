let cat = {
	legs: 4,
	color: "red",
	food: "fish",
	calories: 0,
	sleep: function () {
		if (this.calories >= 200) {
			alert ("Кошка спит!");
			this.calories -= 100;
		} else {
			alert( "Кошку надо покормить!");
		}
	},
	eat: function () {
		this.calories += 150;
		alert( "Кошку поела!");
	}
};
cat.sleep();
cat.eat ();
cat.eat ();
cat.sleep();

