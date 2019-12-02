document.getElementById('id_logic').innerHTML = "Logic Version: 2019.12.02.4"

window.addEventListener('touchstart', touch_start_uab)
window.addEventListener('touchmove', touch_move_uab, {
	passive: false,
})

window.addEventListener('touchend', touch_end_uab)

var canvas = document.getElementById('id_canvas')
var context = canvas.getContext('2d')
var last_position = []

function get_random_color() {
	// let r = Math.floor(Math.random() * 256)
	// let g = Math.floor(Math.random() * 256)
	// let b = Math.floor(Math.random() * 256)
	// return 'rgb(' + r + ',' + g + ',' + b + ')'

	let chars = "0123456789ABCDEF"
	var culoare = "#"
	for(let i=0 ; i<6 ; i++)
		culoare += chars[Math.floor(Math.random() * 16)]
	return culoare
}

function touch_start_uab(p) {
    var t = p.changedTouches
    for (var i = 0; i < t.length; i++) {
		var touch_info = {
			x: t[i].pageX,
			y: t[i].pageY,
			id: t[i].identifier,
			color: get_random_color()
		}

        context.beginPath()
        context.arc(touch_info.x, touch_info.y, 10, 0, 2 * Math.PI)
		context.fillStyle = touch_info.color
		context.strokeStyle = touch_info.color
		context.lineWidth = 1
		context.fill()
        context.stroke()

		last_position.push(touch_info)
    }

}

function touch_move_uab(p) {
	p.preventDefault()
	var t = p.changedTouches
	for (var i = 0; i < t.length; i++) {
		var down_finger = -1
		for(var j = 0; j < last_position.length ; j++)
			if(last_position[j].id == t[i].identifier) {
				down_finger = j;
				break;
			}
		context.beginPath()
		context.moveTo(last_position[down_finger].x,last_position[down_finger].y)
		context.lineTo(t[i].pageX,t[i].pageY)
		context.fillStyle = last_position[down_finger].color
		context.strokeStyle = last_position[down_finger].color
		context.lineWidth = 20
		context.fill()
		context.stroke()
		last_position[down_finger] = {
			...last_position[down_finger],
			x: t[i].pageX,
			y: t[i].pageY,
		}
	}
}

function touch_end_uab(p) {
	var t = p.changedTouches

	for (var i = 0; i < t.length; i++) {
		var up_finger = -1
		for(var j = 0; j < last_position.length ; j++)
			if(last_position[j].id == t[i].identifier) {
				up_finger = j;
				break;
			}
		last_position.splice(up_finger, 1)
	}
}
