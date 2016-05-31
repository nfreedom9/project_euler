/*
 34.
 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

 Find the sum of all numbers which are equal to the sum of the factorial of their digits.

 Note: as 1! = 1 and 2! = 2 are not sums they are not included.
 */

var fn = require("./fn"),
	_ = fn._, fac = fn.fac;

function getS(no) {
	var noStr = no + '', result = 0;
	for (var i = 0; i < noStr.length; i++) result += fac(parseInt(noStr[i], 10));
	return result;
}

function isCurious(no) {
	return no == getS(no);
}

function solve034_1() {
	var result = 0, max = 100000; // TODO max 값?!
	for (var i = 3; i <= max; i++) if (isCurious(i)) result += i;
	return result;
}

(function(time) {
	console.log('       # 034_1: ' + solve034_1() + ' / ' + (new Date() - time));
})(new Date());