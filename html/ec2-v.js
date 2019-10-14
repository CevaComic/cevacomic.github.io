function solve_eq2() {
	var coef = read_coefficients()
	var sol = compute_solutions([...coef])
	print_solutions([...sol])
}

function read_coefficients(){
	var a = document.getElementById('id_a').value
	var b = document.getElementById('id_b').value
	var c = document.getElementById('id_c').value

	var coef = [a,b,c]

	return coef
}

function compute_solutions([a,b,c]){
	var delta = b * b - 4 * a * c

	var x1_re,x2_re,x1_im=0,x2_im=0

	if(delta >= 0) {
		x1_re = (-b - Math.sqrt(delta))/(2*a)
		x2_re = (-b + Math.sqrt(delta))/(2*a)
	} else {
		x1_re = x2_re = (-b)/(2*a)
		x1_im = (-Math.sqrt(-delta))/(2*a)
		x2_im = (+Math.sqrt(-delta))/(2*a)
	}

	var sol = [x1_re, x2_re, x1_im, x2_im]

	return sol
}

function print_solutions([x1_re,x2_re,x1_im,x2_im]){
	document.getElementById('id_x1').innerHTML = 'x1 = ' + x1_re + '+' + x1_im + 'i'
	document.getElementById('id_x2').innerHTML = 'x2 = ' + x2_re + '+' + x2_im + 'i'
}

function version() {
	var logic_version = '2019.10.14.1'
	document.getElementById('id_logic_version').innerHTML = "Logic version : " + logic_version
}

version()

document.getElementById('id_button').addEventListener('click', solve_eq2)
