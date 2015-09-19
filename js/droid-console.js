var droid_console = new (function () {

	var divDisplay = document.getElementById("divDisplay");


	function breakLine() {
		var elmnt = document.createElement("br");

		divDisplay.appendChild(elmnt);
	}

	function printText(str) {
		var elmnt = document.createElement("span");
		var txt = document.createTextNode(str);

		elmnt.appendChild(txt);
		divDisplay.appendChild(elmnt);

		return txt;
	};


	this.print = function (str) {
		return printText(str);
	};

	this.println = function (str) {
		var text = printText(str);
		breakLine();

		return text;
	};

});