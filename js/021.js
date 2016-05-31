/*
 21.
 Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
 If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

 For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284.
 The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

 Evaluate the sum of all the amicable numbers under 10000.
 */

var fn = require("./fn"),
	_ = fn._;

function d(n) {
	var result = 0;
	for (var i = 1; i < n; i++) {
		if (n % i === 0) result += i;
	}
	return result;
}

function isAmicable(n) {
	var _d = d(n);
	return d(_d) == n && _d != n;
}

function solve021_1() {
	var result = 0;
	for (var n = 2; n < 10000; n++) {
		if (isAmicable(n)) result += n;
	}
	return result;
}

(function(time) {
	console.log(' # 021_1: ' + solve021_1() + ' / ' + (new Date() - time));
})(new Date());