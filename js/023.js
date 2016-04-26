var fn = require("./fn"),
	_ = fn._;

/*
 23.
 A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

 A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

 As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

 Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 */

function getProperDivisors(n) {
	var result = [];
	for (var i = 1; i < n; i++) if (!(n % i)) result.push(i);
	return result;
}

function sumDivs_n(n) {
	return (_.reduce(getProperDivisors(n), function(a,b) {
			return a + b;
		}, -n));
}

console.log(_.map(_.range(1,29), function(n) {
	return [n, sumDivs_n(n)]
}));

function solve1() {

}

console.log("# # # # # # # # # # # # # # # # # # # # 023 # # # # # # # # # # # # # # # # # # # #");

(function(time) {
	console.log('1: ' + solve1() + ' / ' + (new Date() - time));
})(new Date());