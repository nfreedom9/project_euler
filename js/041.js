/*
 We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

 What is the largest n-digit pandigital prime that exists?
 */

var fn = require("./fn"), isPrime = fn.isPrime, _ = fn._;

function getPandigitals(limit) {
	function getArrs(arr) {
		if (arr.length == 1) return arr;
		var result = [];
		for (var i = 0; i < arr.length; i++) {
			var head = arr[i], tails = getArrs(_.reject(arr, function(n) {
				return n == arr[i];
			}));

			for (var j = 0; j < tails.length; j++) {
				result.push([head].concat(tails[j]));
			}
		}
		return result;
	}
	var ns = [];
	for (var i = 1; i <= limit; i++) ns.push(i);
	return _.map(getArrs(ns), function(arr) {
		return parseInt(_.reduce(arr, fn.sum, ""), 10);
	});
}

function getPandigitalAndPrimes(limit) {
	return _.filter(getPandigitals(limit), isPrime);
}

function solve041_1() {
	return _.sortBy(getPandigitalAndPrimes(7), function(n) {
		return -n;
	})[0];
}

(function(time) {
	console.log(' # 041_1: ' + solve041_1() + ' / ' + (new Date() - time));
})(new Date());