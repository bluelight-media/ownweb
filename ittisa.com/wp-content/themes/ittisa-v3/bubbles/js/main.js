		

	/**
	*
	*	MAIN|JS
	* 	-------------------
	*	DESC | Define main entry
	*	LOCATION | scripts > js > main.js
	*
	*/

	
	/*---------- CLASS -----------*/





window.onload = function() {

	var App;


	App = function() {

		// Get canvas DOM
		var canvas = document.getElementById('canvas')

		// Create an instance of the bubble and init it
		this.bubble = new Bubble().init(canvas)

	}

	var app = new App()

}