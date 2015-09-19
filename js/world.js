var world = new (function () {
	var self = this;

	var arrayMain = [];
	
	self.seed = "UNIVERSE";


	function getVal(x, y, z) {
		return Math.floor(md5Rand(self.seed + ": " + x + ", " + y + ", " + z) * 256);
	};

	function updateElement(x, y, z) {
		if (!arrayMain[x]) {
			arrayMain[x] = [];
		}

		if (!arrayMain[x][y]) {
			arrayMain[x][y] = [];
		}

		if (!arrayMain[x][y][z]) {
			arrayMain[x][y][z] = getVal(x, y, z);
		}
	}


	self.get = function (x, y, z) {
		updateElement(x, y, z);
		
		return arrayMain[x][y][z];
	};

});