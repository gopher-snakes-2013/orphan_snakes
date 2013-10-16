var typed_stuff = [];

document.onkeypress = function(event){
	var key_press,key_code;
	// if the key pressed is anything but shift
	if (event.keyCode!=16) {
		key_code = event.keyCode;
		key_press = String.fromCharCode(event.keyCode);
		typed_stuff.push(key_press);
		document.getElementById('typed').innerHTML =
		typed_stuff.join("");
	}
}