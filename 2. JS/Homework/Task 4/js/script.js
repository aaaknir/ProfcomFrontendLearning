// Калькулятор через if
let x = parseInt(prompt ('Введите первое число'));
let y = parseInt(prompt ('Введите второе число'));
let z = parseInt(prompt ('Введите 1,чтобы сработал знак + 2,чтобы - 3,чтобы *, 4 чтобы /'));
let result;

if (z === 1) {
	result = x + y;
} else if (z === 2) {
	result = x - y;
} else if (z === 3) {
	result = x * y;
} else if (z === 4) {
	result = x / y;
} else {
	result = 'Вы ввели не существующую команду!';
}
alert (result);

// Переписать задание из прошлого урока с помощью switch
let name = prompt ('Ваше имя');
switch (name) {
	case 'Andrei':
		document.write('Hello, Andrei');
		break;
	case 'Pit':
		document.write('Hello, Pit');
		break;
	case 'Kate':
		document.write('Hello, Kate');
		break;
	default:
		document.write('hello no-name');
}