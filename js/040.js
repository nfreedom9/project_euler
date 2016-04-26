/*
 40.
 An irrational decimal fraction is created by concatenating the positive integers:

 0.123456789101112131415161718192021...

 It can be seen that the 12th digit of the fractional part is 1.

 If d(n) represents the nth digit of the fractional part, find the value of the following expression.

 d(1) × d(10) × d(100) × d(1000) × d(10000) × d(100000) × d(1000000)
 */

(function() {
	var str = (function () {
		var str = '';
		for (var i = 0;; i++) {
			str += i;
			if (str.length > 1000000) return str;
		}
	})();

	console.log(str[1] * str[10] * str[100] * str[1000] * str[10000] * str[100000] * str[1000000]);
})();