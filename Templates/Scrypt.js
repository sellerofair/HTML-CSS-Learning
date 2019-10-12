// JavaScript Document
var size = 32
var delta = 1
function ChangeFont() {
	var paragraph = document.getElementById("MyName")
	size = size + delta
	paragraph.style.fontSize = size + "px"
	if (size > 40) {
		paragraph.innerHTML = "Timur Akopyan"
		delta = -1
	}
	if (size < 20) {
		paragraph.innerHTML = "Akopyan Timur"
		delta = 1
	}
	setTimeout("ChangeFont()", 100)
}
function ToggleVisibility(element) {
	var element = document.getElementById(element)
	if (element.style.display == "none") {
		element.style.display = "block"
	}
	else {
		element.style.display = "none"
	}
}