var fn = require("./fn"),
	_ = fn._;

/*
 20.
 n! means n × (n − 1) × ... × 3 × 2 × 1

 For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
 and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

 Find the sum of the digits in the number 100!
 */

function multipleBigInt(m, bigIntArr) {
	var arr = bigIntArr.reverse(), len = arr.length, i;
	for (i = 0; i < len; i++) arr[i] = arr[i] * m;

	for (i = 0; i < len; i++) {
		if (arr[i] >= 10) {
			arr[i + 1] = (arr[i + 1] || 0) + parseInt(arr[i] / 10, 10);
			arr[i] = arr[i] % 10;
			len += 1;
		}
	}

	return arr.reverse();
}

//console.log(multipleBigInt(5, [2, 4]));

function factorialArr(n) {
	if (n === 1) return [1];
	return multipleBigInt(n, factorialArr(n - 1));
}

function fac(n) {
	if (!n) return 1;
	return n * fac(n - 1);
}

//for (var i = 10; i < 20; i++) console.log(fac(i), factorialArr(i));

function solve1() {
	return _.reduce(factorialArr(100), function(a, b) {
		return a + b;
	}, 0);
}

console.log("# # # # # # # # # # # # # # # # # # # # 020 # # # # # # # # # # # # # # # # # # # #");

(function(time) {
	console.log('1: ' + solve1() + ' / ' + (new Date() - time));
})(new Date());
