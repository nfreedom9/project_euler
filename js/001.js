var fn = require("./fn"),
	_ = fn._,
	orify = fn.orify;

console.log("# # # # # # # # # # # # # # # # # # # # 001 # # # # # # # # # # # # # # # # # # # #");

/*
 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 The sum of these multiples is 23.
 Find the sum of all the multiples of 3 or 5 below 1000.
 */

function isMultiplesOf(div) {
	return function(number) {
		return number % div == 0;
	};
}

function isOrMultiplesOf(divArr) {
	return orify.apply(null, _.map(divArr, function(div) {
		return isMultiplesOf(div);
	}));
}

(function(time) {
	function sum_multiplesOf(divArr, max) {
		return _.reduce(_.range(1, max), function(total, num) {
			if (isOrMultiplesOf(divArr)(num)) return total + num;
			return total;
		}, 0);
	}
	console.log('m: ' + sum_multiplesOf([ 3, 5 ], 1000) + ' / ' + (new Date() - time));
})(new Date());

(function(time) {
	function solve1() {
		var sum = 0;
		for (var i = 1; i < 1000; i++) {
			if (!(i % 3) || !(i % 5)) sum += i;
		}
		return sum;
	}
	console.log('1: ' + solve1() + ' / ' + (new Date() - time));
})(new Date());

(function(time) {
	function solve2() {
		function sumDivisibleBy(n) {
			var p = parseInt(999 / n);
			return n * (p * (p + 1)) / 2;
		}
		return sumDivisibleBy(3) + sumDivisibleBy(5) - sumDivisibleBy(15);
	}
	console.log('2: ' + solve2() + ' / ' + (new Date() - time));
})(new Date());

(function(time) {
	function solve3() {
		return (function tabulateFilterFold(upTo, filterFn, total, foldFn) {
			if (!upTo) return total;
			if (filterFn(upTo)) return tabulateFilterFold(upTo - 1, filterFn, foldFn(total, upTo), foldFn);
			return tabulateFilterFold(upTo - 1, filterFn, total, foldFn);
		})(999, function(n) {
			return n % 3 === 0 || n % 5 === 0;
		}, 0, function(total, n) {
			return total + n;
		});
	}
	console.log('3: ' + solve3() + ' / ' + (new Date() - time));
})(new Date());

(function(time) {
	function solve4() {
		return _.reduce(_.filter(_.range(1,1000), function(num) {
			//return isOrMultiplesOf([3,5])(num);
			return isMultiplesOf(3)(num) || isMultiplesOf(5)(num);
		}), fn.sum, 0);
	}
	console.log('4: ' + solve4() + ' / ' + (new Date() - time));
})(new Date());