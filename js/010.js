/*
 The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

 Find the sum of all the primes below two million.
 */

var fn = require("./fn"),
	isPrime = fn.isPrime;

function solve010_1(limit) {
	var result = 2;
	for (var i = 3; i < limit; i = i + 2) {
		if (isPrime(i)) result += i;
	}
	return result;
}

function solve010_2(limit) {
	var sum = 5, n = 5;
	while (n <= limit) {
		if (n <= limit && isPrime(n)) sum += n;
		n += 2;
		if (n <= limit && isPrime(n)) sum += n;
		n += 2;
		if (n <= limit && isPrime(n)) sum += n;
		n += 2;
		if (n <= limit && isPrime(n)) sum += n;
		n += 2;
		if (n <= limit && isPrime(n)) sum += n;
		n += 2;
	}
	return sum;
}

var s = 10, q = 2 * 1000 * 1000;
(function(time) {
	console.log('         # 010_1: ' + solve010_1(s) + ' / ' + solve010_1(q) + ' / ' + (new Date() - time));
})(new Date());
(function(time) {
	console.log('         # 010_2: ' + solve010_2(s) + ' / ' + solve010_2(q) + ' / ' + (new Date() - time));
})(new Date());