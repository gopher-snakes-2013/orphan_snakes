StarWarsRacerApp = {
	keyLogger: {
		keysPressed: [],
		addKey: function(character) {
			this.keysPressed.push(character);
		},
		typedStuff: function() {
			return this.keysPressed.join("");
		},
		deleteLastKey: function() {
			this.keysPressed.pop();
		}
	},
	bindEvents: function() {
		document.addEventListener('keypress', handleKeyPress);
		document.addEventListener('keydown', handleKeyDown);
	},
	handleKeyDown: function(e) {
		if(e.keyCode === 8){
			this.keyLogger.deleteLastKey();
			refreshView(keyLogger);
		}
	},
	handleKeyPress: function(e) {
		var character = String.fromCharCode(e.keyCode);
		this.keyLogger.addKey(character);
		this.refresh();
	},
	refresh: function() {
		$('#typed').html(this.keylogger.typedStuff());
	}
};
