document.getElementById('logic_version').innerHTML = "Logic version: 2019.12.02.1"

if (typeof DeviceMotionEvent.requestPermission == 'function') {
	var button = document.getElementById('id_button')
	button.addEventListener('click', request_clicked)
} else {
	window.addEventListener('devicemotion', on_motion_data_uab)
}

function request_clicked() {
	DeviceMotionEvent.requestPermission().then(state => {
		if(state == 'granted')
			window.addEventListener('devicemotion', on_motion_data_uab)
		else
			alert("Nu ai acordat permisiune")
	}).catch(error => alert(error))
}

function on_motion_data_uab(e) {
	var acc = e.accelerationIncludingGravity

	var rot_x = Math.atan(acc.x / acc.z) * 180 / Math.PI
	var rot_y = Math.atan(acc.y / acc.z) * 180 / Math.PI

	deseneaza(rot_x, rot_y)
}

function deseneaza(unghi_x, unghi_y) {
	var circle = document.getElementById('id_circle')
	var box = document.getElementById('id_svg')
	var raza = circle.getAttribute('r')
	var svgBox = {
		width: box.getAttribute('width'),
		height: box.getAttribute('height'),
	}
	var x = unghi_x / 90 * (svgBox.width / 2 - raza) + svgBox.width / 2
	var y = unghi_y / 90 * (svgBox.height / 2 - raza) + svgBox.height / 2

	circle.setAttribute('cx', x)
	circle.setAttribute('cy', y)
}
