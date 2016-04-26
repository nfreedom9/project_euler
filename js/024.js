var fn = require("./fn"),
	_ = fn._;

/*
 24.
 A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

 012   021   102   120   201   210

 What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */

function fac(n) {
	if (!n) return 1;
	return n * fac(n - 1);
}

console.log(fac(9), fac(8));

function solve1(nth) {
	function perms(xs, n) {
		if (!xs.length) return xs;
		var m = fac(xs.length - 1);
		var y = parseInt(n / m, 10);
		var x = xs[y];
		console.log(xs, m, y, x);
		return [x].concat(perms(_.filter(xs, function(_n) { return _n != x; }), n % m))
	}

	return perms(_.map(_.range(0,10), function(n) { return n; }), nth - 1).join('');
}

console.log("# # # # # # # # # # # # # # # # # # # # 024 # # # # # # # # # # # # # # # # # # # #");

(function(time) {
	console.log('1: ' + solve1(1000000) + ' / ' + (new Date() - time));
})(new Date());
