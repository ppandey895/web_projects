var textEffect = document.querySelector('.textEffect');
var jobTitles = ['Programmer', 'Front End Web Developer', 'Content Writer', 'Science Enthusiast'];
var count = 0;

setInterval(() => {
	textEffect.innerHTML = jobTitles[count];

	count++;
	if(count > jobTitles.length - 1){
		count = 0;
	}

}, 3000)