// Jordan Lord


var MiningDroid = function () {
	var self = this;

	self.pos = {
		x: 0,
		y: 0,
		z: 0
	};

	self.turn = {
		right: turnRight,
		left: turnLeft
	};

	self.direction = 0;
	self.console = true;


	function printConsole(str) {
		if (self.console) {
			droid_console.println("[DROID] " + str);
		}
	}

	function directionStr() {
		switch (self.direction) {
			case 0:
				return "north";
			case 1:
				return "east";
			case 2:
				return "south";
			case 3:
				return "west";
			default:
				return "none";
		}
	}

	function turnRight() {
		self.direction = (self.direction > 2 ? 0 : self.direction + 1);
		printConsole("Turning right towards " + directionStr());
	}

	function turnLeft() {
		self.direction = (self.direction < 1 ? 3 : self.direction - 1);
		printConsole("Turning left towards " + directionStr());
	}

};


(function () {
	var world = new ArrayMulti(3);
	var droid = new MiningDroid();

	droid_console.println("MINING DROID OS");
	droid_console.println("JORDAN LORD DEVELOPMENTS");
	droid_console.println("BASIC");
	droid_console.breakLine();

	droid.turn.right();
}());