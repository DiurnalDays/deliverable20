var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video.autoplay = false;
	video.load();
	video.loop=false
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		vid.play();
	});
	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		vid.pause();
		});
});

	
