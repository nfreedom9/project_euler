/*
 16.
 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

 What is the sum of the digits of the number 2^1000?
 */

var _ = require("./fn")._;

function solve016_1(K) {
	var intArr = [1], i, j;
	for (i = 0; i < K; i++) {
		for (j = 0; j < intArr.length; j++) intArr[j] *= 2;
		if (intArr[intArr.length - 1] >= 10) intArr.push(0);
		for (j = 1; j < intArr.length; j++) {
			if (intArr[j - 1] >= 10) {
				intArr[j] += 1;
				intArr[j - 1] %= 10;
			}
		}
	}
	return _.reduce(intArr, function(acc, n) {
		return acc + n;
	}, 0);
}

(function(time) {
	console.log(' # 016_1: ' + solve016_1(15) + ' / ' + solve016_1(1000) + ' / ' + (new Date() - time));
})(new Date());