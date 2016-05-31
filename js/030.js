/*
 30.
 Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

 1634 = 1^4 + 6^4 + 3^4 + 4^4
 8208 = 8^4 + 2^4 + 0^4 + 8^4
 9474 = 9^4 + 4^4 + 7^4 + 4^4
 As 1 = 1^4 is not a sum it is not included.

 The sum of these numbers is 1634 + 8208 + 9474 = 19316.

 Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
 */

var _ = require("./fn")._;

function solve030_1(q) {
	var noStr, sum, result = 0, max = Math.pow(9, q) * q;
	for (var no = 2; no <= max; no++) {
		noStr = '' + no;
		sum = 0;
		for (var j = 0; j < noStr.length; j++) sum += Math.pow(parseInt(noStr[j], 10), q);
		if (no === sum) result += no;
	}
	return result;
}

(function(time) {
	console.log('         # 030_1: ' + solve030_1(4) + ' / ' + solve030_1(5) + ' / ' + (new Date() - time));
})(new Date());