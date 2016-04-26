var fn = require("./fn"),
	_ = fn._;

console.log("# # # # # # # # # # # # # # # # # # # # 006 # # # # # # # # # # # # # # # # # # # #");

/*
 The sum of the squares of the first ten natural numbers is,

 1^2 + 2^2 + ... + 10^2 = 385
 The square of the sum of the first ten natural numbers is,

 (1 + 2 + ... + 10)^2 = 55^2 = 3025
 Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

 Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

function allSum(/* args */) { return _.reduce(_.toArray(arguments), fn.sum); }
function sqr(n) { return n * n; }
function sumOfIntArr(intArr) { return allSum.apply(null, intArr); }
function the_sum_of_the_square(intArr) { return allSum.apply(null, _.map(intArr, sqr)); }
function the_square_of_the_sum(intArr) { return sqr(sumOfIntArr(intArr)); }
function difference_between(a, b) { return a > b ? a - b : b - a; }
function mySol(intArr) { return difference_between(the_sum_of_the_square(intArr), the_square_of_the_sum(intArr)); }

var sample = 10, question = 100;
(function(time) {
	console.log('0: ' + mySol(_.range(1, sample + 1)) + ' / ' + mySol(_.range(1, question + 1)) + ' / ' + (new Date() - time));
})(new Date());

function solve1(limit) {
	var sum_sq = 0, sum = 0;
	for (var i = 1; i <= limit; i++) {
		sum += i;
		sum_sq += (i * i);
	}
	return difference_between(sum_sq, sum * sum);
}

(function(time) {
	console.log('1: ' + solve1(sample) + ' / ' + solve1(question) + ' / ' + (new Date() - time));
})(new Date());

function solve2(n) {
	var sum = n * (n + 1) / 2, sum_sq = (2 * n + 1) * (n + 1) * n / 6;
	return difference_between(sum_sq, sum * sum);
}

(function(time) {
	console.log('2: ' + solve2(sample) + ' / ' + solve2(question) + ' / ' + (new Date() - time));
})(new Date());