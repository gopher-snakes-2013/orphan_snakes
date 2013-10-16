var typed_stuff = [];

document.onkeypress = function(event){
	var key_press,key_code;
	
	key_code = event.keyCode;
	key_press = String.fromCharCode(event.keyCode);
	typed_stuff.push(key_press);
	$("#typed").html(typed_stuff.join(""));
	// document.getElementById('typed').innerHTML =
	// typed_stuff.join("");
}

document.onkeydown = function(event) {
	var key_press, key_code;

	key_code = event.keyCode;
	key_press = String.fromCharCode(event.keyCode);
	if(key_code === 8){
		typed_stuff.pop();
		$("#typed").html(typed_stuff.join(""));
	}
}
