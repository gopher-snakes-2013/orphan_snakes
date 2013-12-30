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
	},
	// accuracy: function() {
	// 	var total_race_letters = document.getElementById('race_text').innerText.split("").length;
	// 	var accuracy = ((total_race_letters - Logger.errors) / total_race_letters) * 100;
	// 	return Math.floor(accuracy);
	// }
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
			this.refreshAccuracy();
		}
		// if(race_text.length < 1){
		// 	this.displayRaceStats();
		// }
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
	// displayRaceStats: function(){
	// 	$("#race-stats").append("<h2> Congratulations on finishing the Star Wars Racer! </h2>");
	// 	$("#race-stats").append("<h2> You made a total of: "+Logger.errors+" errors </h2>");
	// 	$("#race-stats").append("<h3> You finished with an accuracy of: "+Logger.accuracy()+"%</h3>");
	// },
	refreshProgress: function(){
		$("#typed").text(Logger.userProgress().join(""));
	},
	refreshErrors: function() {
		$("#errors").text("Errors: " + Logger.errors);
	},
	// refreshAccuracy: function(){
	// 	console.log("We're in accuracy");
	// 	$("#accuracy").text("Accuracy: " + Logger.accuracy() + "%");
	// },
	bindKeyEvent: function(){
		var self = this
		document.addEventListener('keypress', function(event){
			self.handleKeyPress(event)
		});
	}
};

StarWarsRacerApp.bindKeyEvent();