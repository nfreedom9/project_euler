/*
 The sum of the squares of the first ten natural numbers is,

 1^2 + 2^2 + ... + 10^2 = 385
 The square of the sum of the first ten natural numbers is,

 (1 + 2 + ... + 10)^2 = 55^2 = 3025
 Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

 Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

var fn = require("./fn"),
	_ = fn._,
	allSum = fn.allSum,
	sqr = fn.sqr,
	sumOfIntArr = fn.sumOfIntArr;

function the_sum_of_the_square(intArr) {
	return allSum.apply(null, _.map(intArr, sqr));
}
function the_square_of_the_sum(intArr) {
	return sqr(sumOfIntArr(intArr));
}
function difference_between(a, b) {
	return a > b ? a - b : b - a;
}
function solve006_1(limit) {
	var intArr = _.range(1, limit + 1); 
	return difference_between(the_sum_of_the_square(intArr), the_square_of_the_sum(intArr));
}

function solve006_2(limit) {
	var sum_sq = 0, sum = 0;
	for (var i = 1; i <= limit; i++) {
		sum += i;
		sum_sq += (i * i);
	}
	return difference_between(sum_sq, sum * sum);
}

function solve006_3(n) {
	var sum = n * (n + 1) / 2, sum_sq = (2 * n + 1) * (n + 1) * n / 6;
	return difference_between(sum_sq, sum * sum);
}

var s = 10, q = 100;
(function(time) {
	console.log(' # 006_1: ' + solve006_1(s) + ' / ' + solve006_1(q) + ' / ' + (new Date() - time));
})(new Date());
(function(time) {
	console.log(' # 006_2: ' + solve006_2(s) + ' / ' + solve006_2(q) + ' / ' + (new Date() - time));
})(new Date());
(function(time) {
	console.log(' # 006_3: ' + solve006_3(s) + ' / ' + solve006_3(q) + ' / ' + (new Date() - time));
})(new Date());