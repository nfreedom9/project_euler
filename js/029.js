console.log("# # # # # # # # # # # # # # # # # # # # 029 # # # # # # # # # # # # # # # # # # # #");

var fn = require("./fn"),
	_ = fn._,
	isPrime = fn.isPrime,
	getPrimeFactorsWithCnt = fn.getPrimeFactorsWithCnt;

/*
 29.
 Consider all integer combinations of ab for 2 ≤ a ≤ 5 and 2 ≤ b ≤ 5:

 22=4, 23=8, 24=16, 25=32
 32=9, 33=27, 34=81, 35=243
 42=16, 43=64, 44=256, 45=1024
 52=25, 53=125, 54=625, 55=3125
 If they are then placed in numerical order, with any repeats removed, we get the following sequence of 15 distinct terms:

 4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125

 How many distinct terms are in the sequence generated by ab for 2 ≤ a ≤ 100 and 2 ≤ b ≤ 100?
 */

function pFun(a,b) {
	return _.map(getPrimeFactorsWithCnt(a), function(FwC) {
		return FwC[0] + "^" + FwC[1] * b;
	}).join("*");
}

function solve0() {
	var arr = [];
	for (var a = 2; a <= 100; a++) {
		for (var b = 2; b <= 100; b++) {
			var p = pFun(a,b);
			if (arr.indexOf(p) < 0) arr.push(p);
		}
	}
	return arr.length;
}

(function(time) {
	console.log('0: ' + solve0() + ' / ' + (new Date() - time));
})(new Date());