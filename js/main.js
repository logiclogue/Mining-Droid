// Jordan Lord


(function () {
	droid_console.println("MINING DROID OS");
	droid_console.println("VERSION 0.1");

	var cursor = droid_console.println("_");

	setInterval(function () {
		if (cursor.data === " ") {
			cursor.data = "_";
		}
		else {
			cursor.data = " ";
		}
	}, 500);
}());