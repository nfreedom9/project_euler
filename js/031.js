console.log("# # # # # # # # # # # # # # # # # # # # 031 # # # # # # # # # # # # # # # # # # # #");

var fn = require("./fn"),
	_ = fn._;

/*
 31.
 In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
 It is possible to make £2 in the following way:

 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
 How many different ways can £2 be made using any number of coins?
 */

function solve0() {
	function ways(arr, n) {
		if (!arr.length) {
			return n === 0 ? 1 : 0;
		}

		var c = arr[0], cs = arr.slice(1), result = 0;

		for (var i = 0; i <= parseInt(n/c,10); i++) {
			result += ways(cs,(n - i * c));
		}
		return result;
	}

	return ways([1, 2, 5, 10, 20, 50, 100, 200], 200);
}

function solve1() {
	function ways(arr, n) {
		if (!arr.length) {
			return n === 0 ? 1 : 0;
		}

		//var cacheStr = "arr"+arr+"n"+n;
		//if (ways.cache[cacheStr]) return ways.cache[cacheStr];

		var c = arr[0], cs = arr.slice(1), result = 0;

		for (var i = 0; i <= parseInt(n/c,10); i++) {
			result += ways(cs,(n - i * c));
		}
		//return ways.cache[cacheStr] = result;
		return result;
	}
	ways.cache = {};

	return ways([1, 2, 5, 10, 20, 50, 100, 200], 200);
}

(function(time) {
	console.log('0: ' + solve0() + ' / ' + (new Date() - time));
})(new Date());

(function(time) {
	console.log('1: ' + solve1() + ' / ' + (new Date() - time));
})(new Date());