input.addEventListener('click', function(){
	console.log('Button Clicked!')
})


function press1(){
	var value = document.getElementById('input').value;
	var n_val = value + '1'
	document.getElementById('input').value = n_val;
}
function press2(){
	var value = document.getElementById('input').value;
	var n_val = value + '2'
	document.getElementById('input').value = n_val;
}
function press3(){
	var value = document.getElementById('input').value;
	var n_val = value + '3'
	document.getElementById('input').value = n_val;
}
function pressC(){
	document.getElementById('input').value = '';
}
function press4(){
	var value = document.getElementById('input').value;
	var n_val = value + '4'
	document.getElementById('input').value = n_val;
}
function press5(){
	var value = document.getElementById('input').value;
	var n_val = value + '5'
	document.getElementById('input').value = n_val;
}
function press6(){
	var value = document.getElementById('input').value;
	var n_val = value + '6'
	document.getElementById('input').value = n_val;
}
function pressp(){
	pressed = '+'
	var value = document.getElementById('input').value;
	n_val = checker(value, pressed)
	document.getElementById('input').value = n_val;
}
function press7(){
	var value = document.getElementById('input').value;
	var n_val = value + '7'
	document.getElementById('input').value = n_val;
}
function press8(){
	var value = document.getElementById('input').value;
	var n_val = value + '8'
	document.getElementById('input').value = n_val;
}
function press9(){
	var value = document.getElementById('input').value;
	var n_val = value + '9'
	document.getElementById('input').value = n_val;
}
function pressm(){
	pressed = '-'
	var value = document.getElementById('input').value;
	n_val = checker(value, pressed)
	document.getElementById('input').value = n_val;
}
function pressd(){
	pressed = '/'
	var value = document.getElementById('input').value;
	n_val = checker(value, pressed)
	document.getElementById('input').value = n_val;
}
function press0(){
	var value = document.getElementById('input').value;
	var n_val = value + '0'
	document.getElementById('input').value = n_val;
}
function pressmul(){
	pressed = '*'
	var value = document.getElementById('input').value;
	n_val = checker(value, pressed)
	document.getElementById('input').value = n_val;
}
function pressr(){
	var value = document.getElementById('input').value;
	var result = eval(value);
	document.getElementById('input').value = result;
}

function checker(str, press){
	if((str[str.length - 1] = '+') || (str[str.length - 1] = '-') || (str[str.length - 1] = '/') || (str[str.length - 1] = '*')){
		var new_value = str.slice(0, str.length - 1) + press
		return new_value
	}
	else{
		return str
	}
}