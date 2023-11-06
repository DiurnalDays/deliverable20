var video;

let vid = document.getElementById("video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	vid.autoplay = true;
	vid.load();
});

document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
vid.play();
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	vid.pause();
	});
	
