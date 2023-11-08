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
		console.log("The current playback speed is " + video.playbackRate);
	});
	document.querySelector("#skip").addEventListener("click", function(){
			if (video.currentTime + 10>=video.duration)
				{video.currentTime=0;
				console.log("Restarting video");}
			else
			    {video.currentTime+=10;}
			console.log("The current time of the video is " + video.currentTime)
	});
	document.querySelector("#mute").addEventListener("click", function(){
		if (video.muted==false)
			{video.muted=true;
			this.textContent="Unmute"}
		else 
			{video.muted=false
			this.textContent="Mute"}
	});
	document.querySelector("#slider").addEventListener("input", function(){
		video.volume = this.value/100;
		document.querySelector("#volume").textContent=this.value+"%";
		  });
    document.querySelector("#orig").addEventListener("click", function(){
		video.classList.remove("oldSchool");
	});
	document.querySelector("#vintage").addEventListener("click", function(){
		video.classList.add("oldSchool");
	});



	
