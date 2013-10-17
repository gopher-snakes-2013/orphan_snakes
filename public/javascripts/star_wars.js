var typed_stuff = []; // holds the correct letters of the user's input
var race_text = []; // holds the text of the race track
var errors = 0; // counter for errors
var correct = true; // tells whether the current pressed letter is correct or not

// Waiting till the page is loaded, then update these variables
// race text is the stuff you wanna type
$(document).ready( function() {
	race_text = document.getElementById("race_text").innerText.split("");	
});

// In our browser window, on a keydown event
// if the key pressed is the delete button, don't do anything
$(window).keydown(function(e) {
	if(e.which === 8){
		e.preventDefault();
	}
});

// logic for comparing user input to the race text
// takes in what the user typed as a string
// typed stuff is an array of correct user input
// if the user typed in the correct letter, add it to typed stuff
// Display to html the typed stuff array
// set the correctness to true and return true
function compare_characters(user_typed) {
	if (race_text[0] === user_typed){
		typed_stuff.push(user_typed);
		$("#typed").html(typed_stuff.join(""));
		correct = true;
		return true;
	// if the user input is wrong, then check if the current correctness is true,
	// and if so, reset it to false and increment the errors counter
	} else { 
		if (correct == true){
			correct = false;
			errors++;
		}
		// print to the screen when they type something wrong
		$("#errors").text("Errors: "+errors);
	}
};

// In the window, handles whenever a key is pressed
document.onkeypress = function(event){
	var key_press;
	// save the letter of the key that was pressed
	key_press = String.fromCharCode(event.keyCode);
	// pass it to the comparison method and if it evaluates to true
	// then delete the first element of the race text array
	if (compare_characters(key_press) === true){
		race_text.shift();
	}
};
