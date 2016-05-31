/*
 32.
 We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

 The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

 Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

 HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
 */

var _ = require("./fn")._;

function solve032_1() {
	function isPandigital(str) {
		for (var i = 1; i < 10; i++) if (str.indexOf("" + i) < 0) return false;
		return true;
	}

	function getPandigital(a) {
		for (var b = 1; ; b++) {
			var c = a * b, str = "" + a + b + c;
			if (str.length > 9) return;
			if (!isPandigital(str)) continue;
			//console.log(a + " * " + b + " = " + c, "    "+str.split("").sort());
			return c;
		}
	}

	var pandigitals = [], result = 0;
	for (var a = 1; a < 31624; a++) {
		var pandigital = getPandigital(a);
		if (!pandigital || pandigitals.indexOf(pandigital) >= 0) continue;
		pandigitals.push(pandigital);
		result += pandigital;
	}
	return result;
}

(function(time) {
	console.log('   # 032_1: ' + solve032_1() + ' / ' + (new Date() - time));
})(new Date());