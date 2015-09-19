var MiningDroid = function (name) {
	var self = this;

	var seed = world.seed + "_DROID_" + name;

	self.pos = {
		x: getInitPos("x"),
		y: getInitPos("y"),
		z: getInitPos("z")
	};

	self.turn = {
		right: turnRight,
		left: turnLeft
	};

	self.direction = Math.floor(md5Rand(seed + "direction") * 3);
	self.console = true;


	function printConsole(str) {
		if (self.console) {
			droid_console.println("[DROID_" + name + "] " + (str + "").toUpperCase());
		}
	}

	function getInitPos(coord) {
		var max = Math.pow(2, 16);

		return Math.floor(md5Rand(seed + "_" + coord) * max) - (max / 2);
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
		printConsole("Turning right, facing " + directionStr());
	}

	function turnLeft() {
		self.direction = (self.direction < 1 ? 3 : self.direction - 1);
		printConsole("Turning left, facing " + directionStr());
	}


	self.detect = function () {
		var numId = "";

		switch (self.direction) {
			case 0: // north
				numId = world.get(self.pos.x, self.pos.y + 1, self.pos.z);
				break;
			case 1: // east
				numId = world.get(self.pos.x + 1, self.pos.y, self.pos.z);
				break;
			case 2: // south
				numId = world.get(self.pos.x, self.pos.y - 1, self.pos.z);
				break;
			case 3: // west
				numId = world.get(self.pos.x - 1, self.pos.y, self.pos.z);
				break;
			default:
				numId = "error";
				break;
		}

		printConsole("Detected " + (numId > 80 ? "rock" : "dirt"));

		return numId;
	};

	self.move = function () {
		var str;

		switch (self.direction) {
			case 0: // north
				self.pos.y += 1;
				str = "north";
				break;
			case 1: // east
				self.pos.x += 1;
				str = "east";
				break;
			case 2: // south
				self.pos.y -= 1;
				str = "south"
				break;
			case 3: // west
				self.pos.x -= 1;
				str = "west";
				break;
			default:
				str = "error";
				break;
		}

		printConsole("Moved " + str);
	};


	(function () {
		printConsole("Droid online");
		printConsole("At: " + self.pos.x + ", " + self.pos.y + ", " + self.pos.z);
		printConsole("Facing: " + directionStr(self.direction));
		printConsole("Jordan Lord Developments");
		droid_console.breakLine();
	}());

};