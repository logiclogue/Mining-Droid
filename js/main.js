// Jordan Lord


var MiningDroid = function () {

	this.pos = {
		x: 0,
		y: 0,
		z: 0
	};

}


(function () {
	droid_console.println("MINING DROID OS");
	droid_console.println("VERSION 0.1");
	droid_console.println("BASIC");
	droid_console.breakLine();

	var world = new ArrayMulti(3);

	world.set("Jordan", 0, 0, 0);
	console.log(world.get(0, 0, 0));
}());