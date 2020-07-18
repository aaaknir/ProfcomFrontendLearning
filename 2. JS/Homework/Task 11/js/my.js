const generator = {
	makes: ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"],
	models: ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"],
	years: [1955, 1957, 1948, 1954, 1961],
	colors: ["red", "blue", "tan", "yellow", "white"],
	convertible: [true, false],
	random (array) {
		return Math.floor (Math.random() * array.length);
	},
	generatorCar () {
		let car = [
			this.makes[this.random (this.makes)],
			this.models[this.random (this.models)],
			this.years[this.random (this.years)],
			this.colors[this.random (this.colors)],
			this.convertible[this.random (this.convertible)]
		];
		return car;
	}
};
alert (generator.generatorCar ());