function schoolYears (name, form) {
	let year = 11 - form;
	if (year === 0) {
		return name + ', последний год';
	} else if (year >= 1 && year <= 4) {
		return name + ', учиться еще ' + year + ' года';
	} else if (year >= 5 && year < 11) {
		return name + ', учиться еще ' + year + ' лет';
	} else {
		return 'Школа давно позади!';
	}
}

let name = prompt ('Введите свое имя');
let form =  prompt ('Введите номер своего класса');
alert(schoolYears(name, form));