describe('keylogger', function() {
  var keylogger;
  beforeEach(function() {
    keylogger = StarWarsRacerApp.keyLogger;
    keylogger.keysPressed = [];
  });

  describe('addKey', function() {
    it('can add 1 character to typedStuff', function() {
      keylogger.addKey('a');
      expect(keylogger.typedStuff()).toEqual('a');
    });

    it('can add 2 characters to typedStuff', function() {
      keylogger.addKey('z');
      keylogger.addKey('e');

      expect(keylogger.typedStuff()).toEqual('ze');
    });
  });
});
// bindEvents - Make sure the document is listening for keypress
// handleKeypress - Take a keypress event, and gives it to a keylogger and refreshes the view
// keylogger - keeps track of what the user has typed so far
// refreshView - updates the dom with what the keylogger says the user has typed
