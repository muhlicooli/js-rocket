let timer = null;
let countdownNumber = 10;

let changeState = function (state){
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;
	const muhliMiaut='meow';

	//countdown
	if (state == 2){
		timer = setInterval(function(){
			countdownNumber = countdownNumber - 1;
			document.getElementById('countdown').innerHTML = countdownNumber;

			if (countdownNumber <= 5 && countdownNumber >=2 ){
				//meow
				document.getElementById(muhliMiaut).className = 'meow show';
			} else {
				document.getElementById(muhliMiaut).className = muhliMiaut;
			}

			if (countdownNumber <= 0){			
			changeState(3);
			}; 	

		},500);
	} 	

	if (state ==3) {
		document.getElementById('rocket').style.visibility = 'hidden';
		// setTimeout(function() {
		// 	changeState(4);
		// },5000)
	} else {
		document.getElementById('rocket').style.visibility = 'visible';
	}

	// if (state == 3) {
	// 	setTimeout (function() {
	// 		changeState(4);
	// 	}, 2000); 

	// if (state==3) {
	// 	document.getElementById('click').style.visibility = 'visibile';
	// 	document.getElementById('rocket').style.visibility = 'hidden';

	// }


	};


	// else if (state==3) {
	// 	let success = setTimeout (function(){
	// 		let randomNumber = Math.round(Math.random()*10);

	// 		// success
	// 		if (randomNumber > 4) {
	// 			changeState(4);
	// 		// oh no
	// 		} else {
	// 			changeState(5);
	// 		} 
	// 	}, 2000);
	// };	

	// if (state==3) {

	// }
