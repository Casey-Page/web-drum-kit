// ******* Detect Button Press *******

const drumList = document.querySelectorAll('.drum').length;

// Incrementally loop through the array's index
for(var i = 0; i < drumList; i++) { 

		// Anonymous function call to add event listener to the current array index[i]
		document.querySelectorAll('.drum')[i].addEventListener('click',	 function() {

			// Store this button press, pass it to the 'makeSound' function
			var buttonInnerHTML = this.innerHTML;
			makeSound(buttonInnerHTML);
			buttonAnimation(buttonInnerHTML);
    });
}

// ******* Detect Keyboard Press (Added to entire document) *******

// Catch key's pressed on the whole page, pass the event
document.addEventListener('keydown', function (event) {

	// Pass the events key using the .key method to the 'makeSound' function
	makeSound(event.key); 
	buttonAnimation(event.key);
});

// ******* Make a sound based on the passed event key *******

function makeSound (key) {

	var drumSound;

	// Determine the sound output based on the key pressed 
	switch(key){
		default:
			console.log('not a usable key.');
			break;
		case 'w' || 'W':
			drumSound = new Audio('sounds/tom-1.mp3');
			drumSound.play();
			break;
		case 'a' || 'A':
			drumSound = new Audio('sounds/tom-2.mp3');
			drumSound.play();
			break;
		case 's' || 'S':
			drumSound = new Audio('sounds/tom-3.mp3');
			drumSound.play();
			break;
		case 'd' || 'D':
			drumSound = new Audio('sounds/tom-4.mp3');
			drumSound.play();
			break;
		case 'j' || 'J':
			drumSound = new Audio('sounds/snare.mp3');
			drumSound.play();
			break;
		case 'k' || 'K':
			drumSound = new Audio('sounds/crash.mp3');
			drumSound.play();
			break;
		case 'l' || 'L':
			drumSound = new Audio('sounds/kick-bass.mp3');
			drumSound.play();
			break;
	}
}

// ******* Add animation to button interaction *******

function buttonAnimation (currentKey) {

	// Tap into the current keys class and add '.pressed' to the classlist
	var activeButton = document.querySelector("." + currentKey);
	activeButton.classList.add('pressed');

	// Remove class list after 0.1s 
	setTimeout(function () {
		activeButton.classList.remove("pressed");
	}, 100)

}