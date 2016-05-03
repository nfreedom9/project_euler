/*
 The number 3797 has an interesting property.
 Being prime itself, it is possible to continuously remove digits from left to right,
                                  and remain prime at each stage: 3797, 797, 97, and 7.
 Similarly we can work from right to left: 3797, 379, 37, and 3.

 Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

 NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
 */

var fn = require("./fn"),
	isPrime = fn.isPrime,
	sumOfIntArr = fn.sumOfIntArr;

function isTruncatable(n) {
	if (!isPrime(n)) return false;
	var strN = n+"";
	for (var i = 1, l = strN.length; i < l; i++) {
		if (!isPrime(parseInt(strN.slice(0,i)))) return false;
		if (!isPrime(parseInt(strN.slice(i,l)))) return false;
	}
	return true;
}

function solve037() {
	var resultArr = [];
	for (var i = 23; ; i += 2) {
		if (isTruncatable(i)) {
			resultArr.push(i);
			if (resultArr.length === 11) return sumOfIntArr(resultArr);
		}
	}
}

(function(time) {
	console.log('  # 037: ' + solve037() + ' / ' + (new Date() - time));
})(new Date());