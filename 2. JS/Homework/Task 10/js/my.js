let chevy = {
	make: "Chevy",
	model: "Aveo",
	year: 2011,
	color: "red",
	passengers: 4,
	convertible: false,
	mileage: 1021
};

let cadi = {
	make: "Cadillac",
	model: "GM",
	year: 1955,
	color: "yellow",
	passengers: 2,
	convertible: true,
	mileage: 12821
};

delete cadi.passengers;

cadi.state = "normal";
console.log(cadi);

console.log(cadi.passengers);

// homework
let cat = {
	legs: 4,
	skin_color: "orange",
	eyes_color: "green",
	age: 5,
	food: "fish"
};

let dog = {
	legs: 4,
	skin_color: "black",
	eyes_color: "brown",
	age: 5,
	food: "meat"
};