/*
 20.
 n! means n × (n − 1) × ... × 3 × 2 × 1

 For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
 and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

 Find the sum of the digits in the number 100!
 */

var fn = require("./fn"),
	_ = fn._;

function arrIntMultiple(m, arrInt) {
	var arr = arrInt.reverse(), len = arr.length, i;
	for (i = 0; i < len; i++) arr[i] *= m;
	for (i = 0; i < len; i++) {
		if (arr[i] >= 10) {
			arr[i + 1] = (arr[i + 1] || 0) + parseInt(arr[i] / 10, 10);
			arr[i] = arr[i] % 10;
			len += 1;
		}
	}
	return arr.reverse();
}

function arrIntFactorial(n) {
	return n === 1 ? [1] : arrIntMultiple(n, arrIntFactorial(n - 1));
}

function solve020_1(n) {
	return _.reduce(arrIntFactorial(n), fn.sum, 0);
}

(function(time) {
	console.log('         # 020_1: ' + solve020_1(10) + ' / ' + solve020_1(100) + ' / ' + (new Date() - time));
})(new Date());