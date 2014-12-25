var $ = function (query) {
	return document.querySelector(query) || document.createElement('div');
};

window.addEventListener('keydown', function(e) {
	if(e.keyCode === e.DOM_VK_BACK_SPACE){ // virtual keycodes are deprecated, but work cross browser
		e.preventDefault();
	}
});

var Logger = {
	race_text: [],
	loadRaceText: function(){
		var text = document.getElementById("race_text").innerText || document.getElementById("race_text").textContent;
		text = text.replace(/\s+/g, ' ').trim();
		return text.split("");
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

	accuracy: function() {
		var total_race_text = document.getElementById('race_text').innerText || document.getElementById('race_text').textContent;
		total_race_text = text.replace(/\s+/g, ' ').trim();
		var total_race_letters = total_race_text.split("").length;
		var accuracy = ((total_race_letters - Logger.errors) / total_race_letters) * 100;
		return Math.floor(accuracy);
	}
}

race_text = Logger.loadRaceText();

correct = true;

var StarWarsRacerApp ={
	handleKeyPress: function(event) {
		event.preventDefault(); // catch any browser specific action
		var character = String.fromCharCode(event.keyCode || event.charCode);
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
		if(race_text.length === 1){
			this.displayRaceStats();
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
	displayRaceStats: function(){
		$(".race-stats").insertAdjacentHTML('beforeend', "<div> Congratulations on finishing the Star Wars Racer! <br/></div>");
		$(".race-stats").insertAdjacentHTML('beforeend', "<div> You made a total of: <br/>"+Logger.errors+" errors </div>");
		$(".race-stats").insertAdjacentHTML('beforeend', "<div> You finished with an accuracy of: <br/>"+Logger.accuracy()+"%</div>");
	},
	refreshProgress: function(){
		$("#typed").textContent = Logger.userProgress().join("");
	},
	refreshErrors: function() {
		$("#errors").textContent = Logger.errors;
	},
	refreshAccuracy: function(){
		$("#accuracy").textContent = "Accuracy: " + Logger.accuracy() + "%";
	},
	bindKeyEvent: function(){
		var self = this
		document.addEventListener('keypress', function(event){
			self.handleKeyPress(event)
		});
	}
};

StarWarsRacerApp.bindKeyEvent();