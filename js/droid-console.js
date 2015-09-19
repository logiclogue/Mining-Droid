var droid_console = new (function () {
	var self = this;

	var divDisplay = document.getElementById("divDisplay");


	function printText(str) {
		var elmnt = document.createElement("span");
		var txt = document.createTextNode(str);

		elmnt.appendChild(txt);
		divDisplay.appendChild(elmnt);

		return txt;
	};


	self.breakLine = function () {
		var elmnt = document.createElement("br");

		divDisplay.appendChild(elmnt);
	}

	self.print = function (str) {
		return printText(str);
	};

	self.println = function (str) {
		var text = printText(str);
		self.breakLine();

		return text;
	};

});