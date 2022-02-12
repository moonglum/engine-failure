let baretest = require("baretest");
let assert = require("assert").strict;
let List = require(".");

let suiteFor = (Subject) => {
	let test = baretest(Subject.name);

	test("positional access", function () {
		let list = Subject.of("hello", "bye");
		list[0] = "hi";

		assert.equal(list[0], "hi");
		assert.equal(list[1], "bye");
		assert.equal(2, list.length, "list should have length 2");
	});

	test("forEach", function () {
		let list = Subject.of("a", "b");
		let result = new Subject();
		list.forEach((item, i) => {
			result[i] = item;
		});

		assert.deepEqual(Subject.of("a", "b"), result);
	});

	test.skip("push", function () {
		let list = new Subject();
		list.push("a");
		list.push("b");

		assert.deepEqual(Subject.of("a", "b"), list);
	});

	test.skip("pop", function () {
		let list = Subject.of("a", "b", "c");
		let popped = list.pop();

		assert.deepEqual(Subject.of("a", "b"), list);
		assert.equal("c", popped);
	});

	test("of", function () {
		let list = Subject.of(1, 2, 3);

		assert.deepEqual(Subject.of(1, 2, 3), list);
	});

	test.skip("join", function () {
		let list = Subject.of(1, 2, 3);

		assert.deepEqual("1,2,3", list.join());
		assert.deepEqual("1 2 3", list.join(" "));
	});

	test.skip("toString", function () {
		let list = Subject.of(1, 2, 3);

		assert.deepEqual("1,2,3", list.toString());
	});

	test.skip("shift");

	test.skip("unshift");

	return test;
};

(async function () {
	await suiteFor(Array).run();
	await suiteFor(List).run();
})();
