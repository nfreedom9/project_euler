/*
 26.
 A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

 1/2	= 	0.5
 1/3	= 	0.(3)
 1/4	= 	0.25
 1/5	= 	0.2
 1/6	= 	0.1(6)
 1/7	= 	0.(142857)
 1/8	= 	0.125
 1/9	= 	0.(1)
 1/10	= 	0.1
 Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

 Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
 */

var fn = require("./fn"), _ = fn._;

function solve026_1() {
	var result, recurringCycleLength = 0;
	function getRecurringCycleLength(denominator) {
		var seed = 10, seeds = [];
		while (true) {
			var rest = seed % denominator, idx = seeds.indexOf(seed);
			if (!rest) return 0; // 유한 소수
			if (idx >= 0) return seeds.length - idx;
			seeds.push(seed);
			seed = rest * 10;
		}
	}
	for (var denominator = 2; denominator <= 1000; denominator++) {
		var thisRecurringCycleLength = getRecurringCycleLength(denominator);
		if (thisRecurringCycleLength > recurringCycleLength) {
			recurringCycleLength = thisRecurringCycleLength;
			result = denominator;
		}
	}
	return result;
}

(function(time) {
	console.log(' # 026_1: ' + solve026_1() + ' / ' + (new Date() - time));
})(new Date());