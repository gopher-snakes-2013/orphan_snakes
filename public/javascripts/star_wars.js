$(window).keydown(function(e) {
	if(e.which === 8){
		e.preventDefault();
	}
});

var Logger = {
	race_text: [],
	loadRaceText: function(){
		return document.getElementById("race_text").innerText.split(""); 
	},
	removeFirstLetter: function(){
		race_text.shift();
	},

	errors: 0,
	keysPressed: [],
	addKey: function(character){
		this.keysPressed.push(character);
	},
	userProgress: function() {
		return this.keysPressed;
	}
}

race_text = Logger.loadRaceText();

correct = true;

var StarWarsRacerApp ={
	handleKeyPress: function(event) {
		var character = String.fromCharCode(event.keyCode);
		if (this.validCharacter(character) === true){
			Logger.addKey(character);
			race_text.shift();
			this.refreshProgress();
			correct = true;
		}
		else {
			this.logNewError();
			this.refreshErrors();
		}
	},
	logNewError: function(){
		if (correct){
			Logger.errors++;
			correct = false;
		}
	},
	validCharacter: function(character){
		if(race_text[0] === character){
			return true;
		} else {
			return false;
		};
	},
	refreshProgress: function(){
		$("#typed").text(Logger.userProgress().join(""));
	},
	refreshErrors: function() {
		$("#errors").text("Errors: " + Logger.errors);
	},
	bindKeyEvent: function(){
		var self = this
		document.addEventListener('keypress', function(event){
			self.handleKeyPress(event)
		});
	}
};

StarWarsRacerApp.bindKeyEvent();