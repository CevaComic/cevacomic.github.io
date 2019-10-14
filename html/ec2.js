function solve_eq2() {
	var a = document.getElementById('id_a').value
	var b = document.getElementById('id_b').value
	var c = document.getElementById('id_c').value

	var delta = a * b - 4 * a * c

	var x1_re,x2_re,x1_im=0,x2_im=0

	if(delta >= 0) {
		x1_re = (-b - Math.sqrt(delta))/(2*a)
		x2_re = (-b + Math.sqrt(delta))/(2*a)
	} else {
		x1_re = x2_re = (-b)/(2*a)
		x1_im = (-Math.sqrt(-delta))/(2*a)
		x2_im = (+Math.sqrt(-delta))/(2*a)
	}

	document.getElementById('id_x1').innerHTML = 'x1 = ' + x1_re + '+' + x1_im + 'i'
	document.getElementById('id_x2').innerHTML = 'x2 = ' + x2_re + '+' + x2_im + 'i'
}

function version() {
	var logic_version = '2019.10.14.1'
	document.getElementById('id_logic_version').innerHTML = "Logic version : " + logic_version
}

version()

document.getElementById('id_button').addEventListener('click', solve_eq2)
