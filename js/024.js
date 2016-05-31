/*
 24.
 A permutation is an ordered arrangement of objects.
 For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.
 If all of the permutations are listed numerically or alphabetically, we call it lexicographic order.
 The lexicographic permutations of 0, 1 and 2 are:

 012   021   102   120   201   210

 What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */

var _ = require("./fn")._, fac = require("./fn").fac;

function perms(ns, nth) {
	if (!ns.length) return ns;
	var cnt = fac(ns.length - 1), // 하나의 숫자를 제외한 나머지 숫자들의 조합으로 만들 수 있는 경우의 수
		x = ns[parseInt(nth / cnt, 10)], // 계산된 경우의 수에 해당하는 제외할 숫자
		next_ns = _.filter(ns, function(n) {
			return n != x;
		}), // 해당 숫자를 제외한 나머지 숫자 배열
		rest_nth = nth % cnt; // 해당 카운트를 제외한 나머지 카운트
	return [x].concat(perms(next_ns, rest_nth))
}

(function(s) {
	if (!s) return;
	console.log(_.map([0,1,2,3,4,5], function(i) {
		return perms([0, 1, 2], i).join('');
	})); // [ '012', '021', '102', '120', '201', '210' ]
})();

function solve024_1() {
	return perms([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 999999).join('');
}

(function(time) {
	console.log('       # 024_1: ' + solve024_1() + ' / ' + (new Date() - time));
})(new Date());