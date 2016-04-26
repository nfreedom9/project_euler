var fn = require("./fn"),
	isPrime = fn.isPrime;

console.log("# # # # # # # # # # # # # # # # # # # # 010 # # # # # # # # # # # # # # # # # # # #");

/*
 The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

 Find the sum of all the primes below two million.
 */

function my(limit) {
	var result = 2;
	for (var i = 3; i < limit; i = i + 2) if (isPrime(i)) result += i;
	return result;
}

(function(time) {
	console.log('m: ' + my(10) + ' / ' + my(2 * 1000 * 1000) + ' / ' + (new Date() - time));
})(new Date());

function solve(limit) {
	var sum = 5, n = 5;
	while (n <= limit) {
		if (n <= limit && isPrime(n)) sum += n;
		n += 2;
		if (n <= limit && isPrime(n)) sum += n;
		n += 2;
	}
	return sum;
}

(function(time) {
	console.log('1: ' + solve(10) + ' / ' + solve(2 * 1000 * 1000) + ' / ' + (new Date() - time));
})(new Date());

function solve2(limit) {
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

(function(time) {
	console.log('2: ' + solve2(10) + ' / ' + solve2(2 * 1000 * 1000) + ' / ' + (new Date() - time));
})(new Date());