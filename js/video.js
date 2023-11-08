var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video.autoplay = false;
	video.load();
	video.loop=false
	video.volume=document.querySelector("#slider").value/100;
	});
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		document.querySelector("#volume").textContent = Math.round(video.volume*100) + "%";
	});
	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
		});
	document.querySelector("#slower").addEventListener("click", function() {
			video.playbackRate*=.9;
			console.log("The current playback speed is " + video.playbackRate);
		});
	document.querySelector("#faster").addEventListener("click", function(){
		video.playbackRate/=.9;
		console.log("New speed is " + video.playbackRate);
	});
	document.querySelector("#skip").addEventListener("click", function(){
			video.currentTime+=10;
			console.log("The current time of the video is " + video.currentTime)
			if (video.currentTime>=video.duration)
				{video.currentTime=0;}
	});
	document.querySelector("#mute").addEventListener("click", function(){
		if (video.muted==false)
			{video.muted=true;}
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


	
