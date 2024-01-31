function calcularimc() {
	var altura = document.getElementById('altura').value;
	var peso = document.getElementById('peso').value;
	var imc = peso/(altura*altura);
	let d = 'Por favor rellene los datos de Altura y Peso';
	if (imc < 16) { //ejemplo de condicional anidado
		d = 'Infrapeso: Delgadez Severa';
	} else if (16 <= imc && imc <= 16.99) { // && es un operador lógico equivalente a AND
		d = 'Infrapeso: Delgadez moderada'; // en d se almacena el resultado correspondiente
	} else if (17 <= imc && imc <= 18.49) {
		d = 'Infrapeso: Delgadez aceptable';
	} else if (18.50 <= imc && imc <= 24.99) {
		d = 'Peso Normal';
	} else if (25.00 <= imc && imc <= 29.99) {
		d = 'Sobrepeso';
	} else if (30.00 <= imc && imc <= 34.99) {
		d = 'Obeso: Tipo I';
	} else if (35.00 <= imc && imc <= 40.00) {
		d = 'Obeso: Tipo II';
	} else if (imc > 40.00) {
		d = 'Obeso: Tipo III';
	}
	const info = d;
	document.getElementById('imc').innerHTML = imc;
	document.getElementById('info').innerHTML = info;
	}