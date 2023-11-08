var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	//video.autoplay = false;
	video.load();
	video.loop=false
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		videoElement.onvolumechange = () => {
			const newVolume = video.volume;
	}});
	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
		});
	document.querySelector("#slower").addEventListener("click", function() {
			video.playbackRate=0.9;
			console.log("Volume slowed by " + video.playbackRate);
		});
	document.querySelector("#skip").addEventListener("click", function(){

			if (video.ended)
				video.currentTime=0;
	});
	document.querySelector("#mute").addEventListener("click", function(){
		if (video.muted==false){video.muted=true;}
		else 
			{video.muted=false}
	});
	document.querySelector("#slider").addEventListener("change", function(){
		slider.addEventListener('change', () => {
			video.volume = slider.value / 100;
			
			updateVolumeDisplay();
		  });
	});
	});


	
