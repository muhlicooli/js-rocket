var timer = null;
var countdownNumber = 10;

var changeState = function (state){
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;

	//countdown
	if (state == 2){
		timer = setInterval(function(){
			countdownNumber = countdownNumber - 1;
			document.getElementById('countdown').innerHTML = countdownNumber;
			if (countdownNumber <= 0){			
			changeState(3);
			}; 

			if (countdownNumber <= 5 && countdownNumber > 1){
				//meow
				document.getElementById('meow').className = 'meow show';
			};
		},500);
	} 	

	else if (state==3) {
		var success = setTimeout (function(){
			var randomNumber = Math.round(Math.random()*10);

			// success
			if (randomNumber > 4) {
				changeState(4);
			// oh no
			} else {
				changeState(5);
			} 
		}, 2000);
	};	
}
