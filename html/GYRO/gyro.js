document.getElementById('logic_version').innerHTML = "Logic version: 2019.11.04.2"

window.addEventListener('deviceorientation', on_gyro_data_uab)
window.addEventListener('devicemotion', on_motion_data_uab)

function on_gyro_data_uab(e) {

	document.getElementById('id_alpha').innerHTML = e.alpha.toFixed(2)
	document.getElementById('id_beta').innerHTML = e.beta.toFixed(2)
	document.getElementById('id_gamma').innerHTML = e.gamma.toFixed(2)

}

function on_motion_data_uab(e) {

	var acc = e.accelerationIncludingGravity

	document.getElementById('id_x').innerHTML = acc.x.toFixed(2)
	document.getElementById('id_y').innerHTML = acc.y.toFixed(2)
	document.getElementById('id_z').innerHTML = acc.z.toFixed(2)

	var rot_x = Math.atan(acc.x / acc.z) * 180 / Math.PI
	var rot_y = Math.atan(acc.y / acc.z) * 180 / Math.PI

	document.getElementById('id_rot_x').innerHTML = rot_x.toFixed(2)
	document.getElementById('id_rot_y').innerHTML = rot_y.toFixed(2)

	deseneaza(rot_x,rot_y)

}

function deseneaza(unghi_x, unghi_y) {
	// get context 2d

	var canvas = document.getElementById('canvas')
	var context = canvas.getContext('2d')
	const raza = 10

	// clean the canvas for next draw
	context.clearRect(0, 0, canvas.width, canvas.height)

	// build path
	context.beginPath()

	// add circle to path
	var x = unghi_x / 90 * (canvas.width / 2 - raza)  + canvas.width / 2
	var y = unghi_y / 90 * (canvas.height / 2 - raza)  + canvas.height / 2

	context.arc(x, y, raza, 0, 2 * Math.PI)

	// draw path
	context.stroke()
}
