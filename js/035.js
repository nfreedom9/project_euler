console.log("# # # # # # # # # # # # # # # # # # # # 035 # # # # # # # # # # # # # # # # # # # #");

var fn = require("./fn"),
	_ = fn._,
	isPrime = fn.isPrime;

/*
 35.
 The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

 There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

 How many circular primes are there below one million?
 */

function lastToFirst(n) {
	var strArr = ('' + n).split('');
	return parseInt([strArr.pop()].concat(strArr).join(''), 10);
}

function getCircularNumbers(n) {
	var result = [], i = n;
	for (;;) {
		result.push(i);
		i = lastToFirst(i);
		if (i === n) return result;
	}
}

function has0(n) {
	var st = ('' + n).split('');
	return st.indexOf('0') > -1;
}

function isCircularPrime(n) {
	if (has0(n)) return false; // 0이 포함된 경우 조건을 만족하지 못할 뿐 아니라 getCircularNumbers 실행시 문제가 되기도 한다.
	return _.every(getCircularNumbers(n), isPrime);
}

function solve0() {
	var i, result = 1;
	for (i = 3; i < 1000000; i += 2) {
		if (isCircularPrime(i)) result += 1;
	}
	return result;
}

(function(time) {
	console.log('0: ' + solve0() + ' / ' + (new Date() - time));
})(new Date());