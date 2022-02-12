module.exports = class List {
	static of() {
		let target = new List();

		for (let i in arguments) {
			target[i] = arguments[i];
		}

		return target;
	}

	forEach(fn) {
		for (let i = 0; i < this.length; i++) {
			fn(this[i], i);
		}
	}

	get length() {
		let highestIndex = -1;

		for (let key in this) {
			let index = parseInt(key);
			if (index > highestIndex) {
				highestIndex = index;
			}
		}

		return highestIndex + 1;
	}
};
