/*
 By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

 What is the 10001st prime number?
 */

var fn = require("./fn"),
	_ = fn._,
	partial = fn.partial,
	cat = fn.cat,
	trampoline = fn.trampoline,
	getNextPrime = fn.getNextPrime,
	getNthPrime1 = fn.getNthPrime1,
	getNthPrime2 = fn.getNthPrime2;

function genHead(gen) { return gen.head; }
function genTail(gen) { return gen.tail(); }
function genTake(n, gen) {
	function doTake(x, g, ret) {
		if (x === 0) return ret;
		return partial(doTake, x - 1, genTail(g), cat(ret, genHead(g)));
	}

	return trampoline(doTake, n, gen, []);
}

function generator(seed, current, step) {
	return {
		head: current(seed),
		tail: function() {
			return generator(step(seed), current, step);
		}
	};
}

//console.log(genTake(7, generator(2, _.identity, getNextPrime)));
//console.log(_.map(_.range(1,8), getNthPrime1));
//console.log(_.map(_.range(1,8), getNthPrime2));

var solve007_1 = getNthPrime1, solve007_2 = getNthPrime2;
var s = 6, q = 10001;
(function(time) {
	console.log('   # 007_1: ' + solve007_1(s) + ' / ' + solve007_1(q) + ' / ' + (new Date() - time));
})(new Date());
(function(time) {
	console.log('   # 007_2: ' + solve007_2(s) + ' / ' + solve007_2(q) + ' / ' + (new Date() - time));
})(new Date());