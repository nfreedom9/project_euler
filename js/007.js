var fn = require("./fn"),
	_ = fn._,
	isPrime = fn.isPrime,
	partial = fn.partial,
	cat = fn.cat,
	prime_sieve = fn.prime_sieve,
	trampoline = fn.trampoline;

console.log("# # # # # # # # # # # # # # # # # # # # 007 # # # # # # # # # # # # # # # # # # # #");

/*
 By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

 What is the 10 001st prime number?
 */

function getNextPrime(thisPrime) {
	if (thisPrime === 2) return 3;
	for (var nextPrime = thisPrime + 2;;nextPrime += 2) if (isPrime(nextPrime)) return nextPrime;
}

function repeatFun(fn, repeatCnt) {
	return function(arg) {
		if (!repeatCnt) return arg;
		return repeatFun(fn, repeatCnt - 1)(fn(arg));
	};
}

function getNthPrime1(idx) {
	if (idx === 1) return 2;
	return repeatFun(getNextPrime, idx - 1)(2);
}

function getNthPrime2(idx) {
	var i = 0, j = 0;
	while(j < idx) {
		i += 1;
		if (isPrime(i)) j += 1;
	}
	return i;
}

(function(time) {
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
	console.log(genTake(7, generator(2, _.identity, getNextPrime)) + ' / ' + (new Date() - time));
})(new Date());
(function(time) {
	console.log(prime_sieve(19) + ' / ' + (new Date() - time));
})(new Date());
(function(time) {
	console.log(_.map(_.range(1,8), getNthPrime1) + ' / ' + (new Date() - time));
})(new Date());
(function(time) {
	console.log(_.map(_.range(1,8), getNthPrime2) + ' / ' + (new Date() - time));
})(new Date());

(function(time) {
	console.log('m: ' + getNthPrime1(10001) + ' / ' + (new Date() - time));
})(new Date());

(function(time) {
	console.log('s: ' + getNthPrime2(10001) + ' / ' + (new Date() - time));
})(new Date());