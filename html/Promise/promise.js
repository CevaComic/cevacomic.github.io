document.getElementById("id_logic_version").innerHTML = "Logic version: 2019.11.22.0"

document.getElementById("id_button").addEventListener("click", start)

function f_uab(rezolve, reject) {
	// facem calcule
	rezolve(":)")

	// reject(":(")
}

function start() {
	alert("start")
	var promisiune = new Promise(f_uab)
	promisiune.then(on_ok_uab).catch(on_fail_uab)
	alert("end")
}

function on_ok_uab(e) {
	alert("SUCCESS" + e)
}

function on_fail_uab(e) {
	alert("FAIL" + e)
}
