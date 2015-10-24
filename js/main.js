// Copyright Jordan Lord 2015


window.addEventListener("load", function () {
	// example
	var droid = new MiningDroid("Jordan");

	droid.turn.right();
	droid.detect();
	droid.move();
	droid.move();
	droid.turn.right();
	droid.turn.right();
	droid.detect();
});