let age = prompt ('Сколько Вам лет?');
if (age >= 0 && age <= 12) {
	document.write('Ты ребенок!');
} else if (age >= 13 && age <= 17) {
    document.write('Ты подросток!');
} else if (age >= 18 && age <= 30) {
    document.write('Ты в расцвете сил!');
} else if (age >= 31 && age <= 45) {
    document.write('Пора сажать дерево и растить сына!');
} else if (age >= 60) {
    document.write('Тебе скоро на пенсию!');
} else {
	document.write('Просто привет!');
}