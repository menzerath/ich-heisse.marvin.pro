//var audio = new Audio("assets/audio.mp3");
//audio.loop = true;
var sound = new Audio("assets/sound.mp3");

window.onload = function() {
	//audio.play();

	//setTimeout(function() {
		sound.play();

		setInterval(function() {
			sound.play();
		}, 10000);
	//}, 3000);
};

document.onclick = function() {
	sound.play();
};

document.ondblclick = function() {
	window.location.href = "https://www.youtube.com/watch?v=oKqqRrITlWg&list=PLJcXulNv_GYgmiIYoG4cMJPinVQOR8XEn";
};