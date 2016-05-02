console.log("# # # # # # # # # # # # # # # # # # # # 033 # # # # # # # # # # # # # # # # # # # #");

var fn = require("./fn"),
	_ = fn._,
	getCommonElem = fn.getCommonElem;

/*
 33.
 The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

 We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

 There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

 If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
 */

function solve0() {
	var As = [], Bs = [], Cs = [];
	for (var a = 10; a < 100; a++) {
		for (var b = 10; b < 100; b++) {
			check(a,b,As,Bs,Cs);
		}
	}

	function check(a,b,As,Bs,Cs) {
		var a_str = ""+a, b_str = ""+b, common = getCommonElem(a_str, b_str);
		if (!common) return;
		As.push(a);
		Bs.push(b);
		Cs.push([a,b]);
	}

	// console.log(As);
	// console.log(Bs);
	console.log(Cs);
	return;
}

(function(time) {
	console.log('0: ' + solve0() + ' / ' + (new Date() - time));
})(new Date());
