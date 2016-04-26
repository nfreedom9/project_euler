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
	//return;
	var str, i, j, sum, result = 0;
	for (i = 2; i < 10000000; i++) {
		str = '' + i;
		sum = 0;
		for (j = 0; j < str.length; j++) {
			sum += power5Of(str[j]);
		}
		if (i === sum) {
			console.log(i);
			result += i;
		}
	}

	console.log(result);
})();

console.log('## END ##');















