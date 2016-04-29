console.log("# # # # # # # # # # # # # # # # # # # # 027 # # # # # # # # # # # # # # # # # # # #");

var fn = require("./fn"),
	_ = fn._,
	isPrime = fn.isPrime;

/*
 27.
 Euler discovered the remarkable quadratic formula:

 n² + n + 41

 It turns out that the formula will produce 40 primes for the consecutive values n = 0 to 39. However, when n = 40, 402 + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when n = 41, 41² + 41 + 41 is clearly divisible by 41.

 The incredible formula  n² − 79n + 1601 was discovered, which produces 80 primes for the consecutive values n = 0 to 79. The product of the coefficients, −79 and 1601, is −126479.

 Considering quadratics of the form:

 n² + an + b, where |a| < 1000 and |b| < 1000

 where |n| is the modulus/absolute value of n
 e.g. |11| = 11 and |−4| = 4
 Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.
 */

function getPrimesCnt(a, b) {
	function getPrime(n) {
		return n * n + (a * n) + b;
	}

	for (var i = 0;;i++) {
		var p = getPrime(i);
		if (p < 0 || !isPrime(p)) return i;
	}
}

console.log(getPrimesCnt(1,41)); // 40
console.log(getPrimesCnt(-79,1601)); // 80

function solve0() {
	var result = [-999,-999], temp = getPrimesCnt(-999,-999);
	var cnt = 0;
	for (var a = -999; a < 1000; a++) {
		for (var b = -999; b < 1000; b++) {
			cnt++;
			var primesCnt = getPrimesCnt(a,b);
			if (primesCnt > temp) {
				temp = primesCnt;
				result = [a,b];
			}
		}
	}
	return result[0] * result[1];
}

(function(time) {
	console.log('0: ' + solve0() + ' / ' + (new Date() - time));
})(new Date());
