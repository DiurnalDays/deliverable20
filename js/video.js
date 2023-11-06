var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	//video.autoplay = false;
	video.load();
	video.loop=false
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		video.volume = volume;
	});
	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
		});
	document.querySelector("#slower").addEventListener("click", function() {
			console.log("Volume slowed by ");
			video.playbackRate=0.9;
		});
});

	
