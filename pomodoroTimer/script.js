// declaring variables
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var startButton = document.querySelector('.start');
var stopButton = document.querySelector('.stop');
var resetButton = document.querySelector('.reset');
var timer = document.querySelector('.timer');
var setTimer = document.querySelector('.set-timer');
var message = document.querySelector('.message');
var audIcon = document.querySelector('.aud-icon');
var musicCheck = document.querySelector('.music');
var workOn = true;

// Howler for adding sounds and music
var music = new Howl({
      src: ['https://cdn.pixabay.com/audio/2021/08/08/audio_88447e769f.mp3'],
      volume: 0.2,
      loop: true
    });

var sound = new Howl({
	src: ['https://assets.mixkit.co/sfx/preview/mixkit-christmas-magic-bell-hit-939.mp3'],
	volume: 0.5
})

const timer_func = () => {
	// this function is responsible for managing the time

	if (minutes.innerHTML == '0' && seconds.innerHTML == '0'){

		if (workOn === true){
			workOn = false;
			resetButton.setAttribute('disabled', 'true');
			minutes.innerHTML = relaxTime;
			sound.play();
			message.innerHTML = 'Chill Mode';
		}
		else{
			workOn = true
			minutes.innerHTML = workTime;
			sound.play();
			message.innerHTML = 'Work Mode';
		}
	}
	else if (seconds.innerHTML == '0'){
		minutes.innerHTML -= 1;
		seconds.innerHTML = 59;
	}
	else{
		seconds.innerHTML = seconds.innerHTML - 1;
	}
		
}

const start_timer = () => {
	// this function sets the interval for the timer

	stopButton.removeAttribute('disabled');
	startButton.setAttribute('disabled', 'true');
	interval = setInterval(timer_func, 1000);
}

const stop_timer = () => {
	// this function clears the time interval/halts the timer

	startButton.removeAttribute('disabled');
	clearInterval(interval);
}

const reset_timer = () => {
	// this function resets the time to the original value

	minutes.innerHTML = workTime;
	seconds.innerHTML = '0';
}

const set_timer_func = () => {
	// this function sets the timer according to the user input

	workMin = document.querySelector('#work');
	relaxMin = document.querySelector('#relax');
	workTime = parseInt(workMin.value);
	relaxTime = parseInt(relaxMin.value);

	if ((Number.isInteger(workTime)) && (Number.isInteger(relaxTime))) {
		setTimer.classList.add('fadeOut');
		timer.style.opacity = '0.8';
		timer.style.pointerEvents = 'all';
		minutes.innerHTML = workTime;
		seconds.innerHTML = '0';
	}
	else{
		alert('Please enter valid numbers')
	}
	
}

const changeBack = (theme) => {
	// this function is used for changing the background

	try{
		if(theme === 'mount'){
			url = "https://images.unsplash.com/photo-1491654712055-d4c0feb37ef3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
		}
		else if(theme === 'snow'){
			url = "https://images.unsplash.com/photo-1414541944151-2f3ec1cfd87d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
		}
		else if(theme === 'night-sky'){
			url = "https://images.unsplash.com/photo-1498611291069-aa296192f1e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
		}
		else if(theme === 'beach'){
			url = "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
		}
		else if(theme === 'river'){
			url = "https://images.unsplash.com/photo-1455998620455-89e5484db07d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80";
		}
		document.body.style.background = "url(\'"+url+"\')";
		document.body.style.backgroundSize = "1340px 720px";
		document.body.style.repeat = "no-repeat";
	}
	catch{
		document.body.style.background = "#999999";
	}
}

// toggling music
audIcon.addEventListener('click', () => {

	if (musicCheck.checked){
		audIcon.innerHTML = "<i class=\"fas fa-volume-up\"></i>";
		music.play();
	}
	else{
		audIcon.innerHTML = "<i class=\"fas fa-volume-mute\"></i>";
		music.pause();
	}
})
