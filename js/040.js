/*
 An irrational decimal fraction is created by concatenating the positive integers:

 0.123456789101112131415161718192021...

 It can be seen that the 12th digit of the fractional part is 1.

 If d(n) represents the nth digit of the fractional part, find the value of the following expression.

 d(1) × d(10) × d(100) × d(1000) × d(10000) × d(100000) × d(1000000)
 */

function solve040() {
	var d = (function () {
		var str = '';
		for (var i = 0;; i++) {
			str += i;
			if (str.length > 1000000) return str;
		}
	})();

	return d[1] * d[10] * d[100] * d[1000] * d[10000] * d[100000] * d[1000000];
}

(function(time) {
	console.log('     # 040: ' + solve040() + ' / ' + (new Date() - time));
})(new Date());