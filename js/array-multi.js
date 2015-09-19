function ArrayMulti() {
	var arrayMain = [];


	function updateElement(x, y, z) {
		if (!arrayMain[x]) {
			arrayMain[x] = [];
		}

		if (!arrayMain[x][y]) {
			arrayMain[x][y] = [];
		}

		if (!arrayMain[x][y][z]) {
			arrayMain[x][y][z] = true;
		}
	}


	this.get = function (x, y, z) {
		updateElement(x, y, z);

		return arrayMain[x][y][z];
	};

	this.set = function (value, x, y, z) {
		updateElement(x, y, z);

		arrayMain[x][y][z] = value;
	};
}