var audio = new Audio("assets/sound.mp3");

window.onload = function() {
	audio.play();
};

document.onclick = function() {
	audio.play();
};

document.ondblclick = function() {
	window.location.href = "https://www.youtube.com/watch?v=oKqqRrITlWg&list=PLJcXulNv_GYgmiIYoG4cMJPinVQOR8XEn";
};

setInterval(function() {
	audio.play();
}, 10000);