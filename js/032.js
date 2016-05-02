console.log("# # # # # # # # # # # # # # # # # # # # 032 # # # # # # # # # # # # # # # # # # # #");

var fn = require("./fn"),
	_ = fn._;

/*
 32.
 We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

 The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

 Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

 HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
 */

function solve0() {
	function isPandigital(str) {
		var arr = ['1','2','3','4','5','6','7','8','9'];
		for (var i = 0; i < 9; i++) {
			if (str.indexOf(arr[i]) < 0) return false;
		}
		return true;
	}

	function checkB(a, As, Bs, Cs) {
		for (var b = 1;; b++) {
			var c = a * b, str = ""+a+b+c;
			if (str.length < 9) continue;
			if (str.length === 9 && isPandigital(str) && Cs.indexOf(c) < 0) {
				// console.log(""+a+" * "+b+" = "+c);
				As.push(a);
				Bs.push(b);
				Cs.push(c);
			}
			if (str.length > 9) return;
		}
	}
	var As = [], Bs = [], Cs = [];
	for (var a = 1; a < 31624; a++) {
		checkB(a, As, Bs, Cs);
	}
	return _.reduce(Cs, function(a,b) {
		return a + b;
	}, 0);
}

(function(time) {
	console.log('0: ' + solve0() + ' / ' + (new Date() - time));
})(new Date());
