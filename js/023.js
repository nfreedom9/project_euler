/*
 23.
 A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
 For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

 A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

 As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16,
 the smallest number that can be written as the sum of two abundant numbers is 24.
 By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers.
 However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

 Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 */

function sumProperDivisors (n) {
	var result = 0;
	for (var i = 1; i < n; i++) {
		if (!(n % i)) result += i;
	}
	return result;
}

function solve023_1() {
	var abundants = [];
	for (var k = 1; k < 28123; k++) if (sumProperDivisors (k) > k) abundants.push(k);

	var l = abundants.length, sumOfTwoAbundants = {};
	for (var i = 0; i < l; i++) for (var j = 0; j < l; j++) sumOfTwoAbundants[abundants[i]+abundants[j]] = true;

	var result = 0;
	for (var n = 1; n < 28123; n++) if (!sumOfTwoAbundants[n]) result += n;
	return result;
}

(function(time) {
	console.log('     # 023_1: ' + solve023_1() + ' / ' + (new Date() - time));
})(new Date());