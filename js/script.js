

var doCoolStuff = function(){
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName=='cool'){
		document.getElementById('cool').className = 'cool red';
	}
	else{
		document.getElementById ('cool').className = 'cool';
	} 
}

var sayMyName = function (name) {
	alert('My name is ' +name);
}

var car = {
	make: 'VW',
	type: 'Polo',
	color:'blue',
	isTurnedOn: false,
	nrOfWheels: 4,
	seats: [
		'Vordersitz',
		'Beifahrer',
		'Rückbank'
		],
	turnOn: function() {
		this.isTurnedOn = true;
	},
	fly: function() {
		alert('Fly');
	},
	switchCar: function(isOn) {
		console.log('Turn car ' + isOn)
		if (isOn == true) {
			this.isTurnedOn = true;
		} else {
			this.isTurnedOn = false;
		}


	} 

}
