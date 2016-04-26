var fn = require("./fn"),
	_ = fn._;

/*
 21.
 Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
 If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

 For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284.
 The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

 Evaluate the sum of all the amicable numbers under 10000.
 */

function getProperDivisors(n) {
	var result = [];
	for (var i = 1; i < n; i++) if (!(n % i)) result.push(i);
	return result;
}

//console.log(_.map([10,24,25], getProperDivisors)); // [ [ 1, 2, 5 ], [ 1, 2, 3, 4, 6, 8, 12 ], [ 1, 5 ] ]

function d(n) {
	return _.reduce(getProperDivisors(n), function(a, b) {
		return a + b;
	});
}

function isAmicable(n) {
	return d(d(n)) == n && d(n) != n;
}

//console.log(getProperDivisors(220)); // [ 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110 ]
//console.log(d(220)); // 284
//console.log(d(284)); // 220
//console.log(isAmicable(220)); // true
//console.log(isAmicable(221)); // false

function solve1() {
	return _.reduce(_.range(1,10001), function(a, b) {
		if (isAmicable(b)) return a + b;
		return a;
	}, 0);
}

console.log("# # # # # # # # # # # # # # # # # # # # 021 # # # # # # # # # # # # # # # # # # # #");

(function(time) {
	console.log('1: ' + solve1() + ' / ' + (new Date() - time));
})(new Date());
