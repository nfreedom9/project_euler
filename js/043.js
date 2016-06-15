/*
 The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

 Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

 d2  d3  d4 = 406 is divisible by 2
 d3  d4  d5 = 063 is divisible by 3
 d4  d5  d6 = 635 is divisible by 5
 d5  d6  d7 = 357 is divisible by 7
 d6  d7  d8 = 572 is divisible by 11
 d7  d8  d9 = 728 is divisible by 13
 d8  d9 d10 = 289 is divisible by 17
 Find the sum of all 0 to 9 pandigital numbers with this property.
 */

var fn = require("./fn"), _ = fn._, removeByIdx = fn.removeByIdx;

function solve043_1() {
	var getFilteredPandigital = function(arr) {
		var result = [];
		_.each(arr, function(d1, idx, arr) {
			_.each(removeByIdx(arr, idx), function(d2, idx, arr) {
				_.each(removeByIdx(arr, idx), function(d3, idx, arr) {
					_.each(removeByIdx(arr, idx), function(d4, idx, arr) {
						if (parseInt("" + d2 + d3 + d4, 10) % 2) return;
						_.each(removeByIdx(arr, idx), function(d5, idx, arr) {
							if (parseInt("" + d3 + d4 + d5, 10) % 3) return;
							_.each(removeByIdx(arr, idx), function(d6, idx, arr) {
								if (parseInt("" + d4 + d5 + d6, 10) % 5) return;
								_.each(removeByIdx(arr, idx), function(d7, idx, arr) {
									if (parseInt("" + d5 + d6 + d7, 10) % 7) return;
									_.each(removeByIdx(arr, idx), function(d8, idx, arr) {
										if (parseInt("" + d6 + d7 + d8, 10) % 11) return;
										_.each(removeByIdx(arr, idx), function(d9, idx, arr) {
											if (parseInt("" + d7 + d8 + d9, 10) % 13) return;
											_.each(removeByIdx(arr, idx), function(d10) {
												if (parseInt("" + d8 + d9 + d10, 10) % 17) return;
												//console.log("" + d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10);
												result.push(parseInt("" + d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10, 10));
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
		return result;
	};
	return fn.sumOfIntArr(getFilteredPandigital(_.range(0, 10)));
}

function solve043_2() {
	var ps = [2, 3, 5, 7, 11, 13, 17];

	function run_front_rear(front, rear, last) {
		if (!rear.length) {
			//console.log(front.join(""));
			return last(parseInt(front.join(""), 10));
		}

		_.each(rear, function(head, idx, arr) {
			var _front = front.concat([head]), _rear = removeByIdx(arr, idx);
			for (var i = 0; i < 7; i++) {
				if (!_front[i + 3] && _front[i + 3] != 0) continue;
				if (parseInt("" + _front[i + 1] + _front[i + 2] + _front[i + 3], 10) % ps[i]) return;
			}
			run_front_rear(_front, _rear, last);
		});
	}

	var getFilteredPandigital = function(arr) {
		var result = [];
		run_front_rear([], arr, function(n) {
			result.push(n);
		});
		return result;
	};
	return fn.sumOfIntArr(getFilteredPandigital(_.range(0, 10)));
}

(function(time) {
	console.log('     # 043_1: ' + solve043_1() + ' / ' + (new Date() - time));
})(new Date());
(function(time) {
	console.log('     # 043_2: ' + solve043_2() + ' / ' + (new Date() - time));
})(new Date());