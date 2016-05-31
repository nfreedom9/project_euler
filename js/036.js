/*
 The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

 Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

 (Please note that the palindromic number, in either base, may not include leading zeros.)
 */

var fn = require("./fn"),
	isPalindrome = fn.isPalindrome;

function solve036_1() {
	var result = 0;
	for (var i = 1; i < 1000000; i++) if (isPalindrome(i) && isPalindrome(i.toString(2))) result += i;
	return result;
}

(function(time) {
	console.log(' # 036_1: ' + solve036_1() + ' / ' + (new Date() - time));
})(new Date());