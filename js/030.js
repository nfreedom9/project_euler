console.log("# # # # # # # # # # # # # # # # # # # # 030 # # # # # # # # # # # # # # # # # # # #");

var fn = require("./fn"),
	_ = fn._;

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

function p(k) {
	return function(n) {
		return Math.pow(n, k);
	};
}

function power4Of(n) {
	return p(4)(n);
}
function power5Of(n) {
	return p(5)(n);
}

(function() {
	var str, i, j, sum, result = [], l = power4Of(9) * 4;
	for (i = 2; i <= l; i++) {
		str = '' + i;
		sum = 0;
		for (j = 0; j < str.length; j++) {
			sum += power4Of(parseInt(str[j], 10));
		}
		if (i === sum) result.push(i);
	}

	console.log(result);
})();

function solve0() {
	var str, i, j, sum, result = [], l = power5Of(9) * 5;
	for (i = 2; i <= l; i++) {
		str = '' + i;
		sum = 0;
		for (j = 0; j < str.length; j++) {
			sum += power5Of(parseInt(str[j], 10));
		}
		if (i === sum) result.push(i);
	}
	return _.reduce(result, function(a,b) { return a + b; }, 0);
}

(function(time) {
	console.log('0: ' + solve0() + ' / ' + (new Date() - time));
})(new Date());