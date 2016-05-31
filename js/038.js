/*
 Take the number 192 and multiply it by each of 1, 2, and 3:

 192 × 1 = 192
 192 × 2 = 384
 192 × 3 = 576
 By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

 The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

 What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?
 */

function isPandigital(n) {
	var strN = n + "";
	if (strN.length !== 9) return false;
	for (var i = 1; i < 10; i++) if (strN.indexOf(i+"") < 0) return false;
	return true;
}

function concatenatedProduct(N) {
	var result = "";
	for (var i = 1; ; i++) {
		if (result.length > 8) return result;
		result += N * i;
	}
}

function solve038_1() {
	var result = 0;
	for (var i = 1; i < 9999 ; i++) {
		var cp = concatenatedProduct(i);
		if (isPandigital(cp) && cp > result) result = cp;
	}
	return result;
}

(function(time) {
	console.log('     # 038_1: ' + solve038_1() + ' / ' + (new Date() - time));
})(new Date());