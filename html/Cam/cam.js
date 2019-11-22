document.getElementById("id_logic_version").innerHTML = "Logic version = 2019.11.22.1"

var video = document.getElementById("id_video")

var camera = { audio: true, video: {facingMode: "environment"} }

navigator.mediaDevices.getUserMedia(camera).then(on_ok_cam_uab).catch(on_fail_cam_uab)

function on_ok_cam_uab(e) {
	video.srcObject = e
}

function on_fail_cam_uab(e) {
	alert("Failure " + e)
}
