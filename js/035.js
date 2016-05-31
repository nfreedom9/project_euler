/*
 35.
 The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

 There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

 How many circular primes are there below one million?
 */

var fn = require("./fn"),
	isPrime = fn.isPrime;

function lastToFirst(n) {
	var strArr = ('' + n).split('');
	return parseInt([strArr.pop()].concat(strArr).join(''), 10);
}

function isCircularPrime(n) {
	// 0이 포함된 경우 조건을 만족하지 못할 뿐 아니라 getCircularNumbers 실행시 문제가 되기도 한다.
	if (('' + n).split('').indexOf('0') > -1) return false;
	var i = n;
	for (; ;) {
		if (!isPrime(i)) return false;
		i = lastToFirst(i);
		if (i === n) return true;
	}
}

function solve035_1() {
	var result = 1, max = 1000000;
	for (var n = 3; n < max; n += 2) {
		if (isCircularPrime(n)) result += 1;
	}
	return result;
}

(function(time) {
	console.log('         # 035_1: ' + solve035_1() + ' / ' + (new Date() - time));
})(new Date());