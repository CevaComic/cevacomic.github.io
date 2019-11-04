document.getElementById('logic_version').innerHTML = "Logic version: 2019.11.04.0"

window.addEventListener('deviceorientation', on_gyro_data_uab)

function on_gyro_data_uab(e) {

	document.getElementById('id_alpha').innerHTML = e.alpha.toFixed(2)
	document.getElementById('id_beta').innerHTML = e.beta.toFixed(2)
	document.getElementById('id_gamma').innerHTML = e.gamma.toFixed(2)

}
