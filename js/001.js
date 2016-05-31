/*
 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 The sum of these multiples is 23.
 Find the sum of all the multiples of 3 or 5 below 1000.
 */

var fn = require("./fn"),
    _ = fn._,
    sum = fn.sum;

function solve001_1(limit) {
    var sum = 0;
    for (var i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
    return sum;
}

function solve001_2(limit) {
	function sumDivisibleBy(n) {
		var p = parseInt((limit - 1) / n);
		return n * (p * (p + 1)) / 2;
	}
	return sumDivisibleBy(3) + sumDivisibleBy(5) - sumDivisibleBy(15);
}

function solve001_3(limit) {
	return _.reduce(_.range(1, limit), function (total, num) {
		return num % 3 === 0 || num % 5 === 0 ? total + num : total;
	}, 0);
}

function solve001_4(limit) {
	return _.reduce(_.filter(_.range(1, limit), function (num) {
		return num % 3 === 0 || num % 5 === 0;
	}), sum, 0);
}

function solve001_5(limit) {
    return (function tabulateFilterFold(upTo, filterFn, total, foldFn) {
		return !upTo ? total : tabulateFilterFold(upTo - 1, filterFn, filterFn(upTo) ? foldFn(total, upTo) : total, foldFn);
    })(limit - 1, function(num) {
		return num % 3 === 0 || num % 5 === 0;
	}, 0, sum);
}

var s = 10, q = 1000;
(function (time) {
	console.log(' # 001_1: ' + solve001_1(s) + ' / ' + solve001_1(q) + ' / ' + (new Date() - time));
})(new Date());
(function (time) {
	console.log(' # 001_1: ' + solve001_2(s) + ' / ' + solve001_2(q) + ' / ' + (new Date() - time));
})(new Date());
(function (time) {
	console.log(' # 001_1: ' + solve001_3(s) + ' / ' + solve001_3(q) + ' / ' + (new Date() - time));
})(new Date());
(function (time) {
	console.log(' # 001_1: ' + solve001_4(s) + ' / ' + solve001_4(q) + ' / ' + (new Date() - time));
})(new Date());
(function (time) {
	console.log(' # 001_1: ' + solve001_5(s) + ' / ' + solve001_5(q) + ' / ' + (new Date() - time));
})(new Date());