/*
 We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

 What is the largest n-digit pandigital prime that exists?
 */

var fn = require("./fn"), isPrime = fn.isPrime, _ = fn._, getPandigitalArr = fn.getPandigitalArr;

function getPandigitalAndPrimes(limit) {
	return _.filter(_.map(getPandigitalArr(_.range(1, limit + 1)), function(arr) {
		return parseInt(_.reduce(arr, fn.sum, ""), 10);
	}), isPrime);
}

function solve041_1() {
	return _.sortBy(getPandigitalAndPrimes(7), function(n) {
		return -n;
	})[0];
}

(function(time) {
	console.log(' # 041_1: ' + solve041_1() + ' / ' + (new Date() - time));
})(new Date());