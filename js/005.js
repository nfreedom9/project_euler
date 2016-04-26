var fn = require("./fn"),
	_ = fn._,
	getPrimeFactorsWithCnt = fn.getPrimeFactorsWithCnt,
	prime_sieve = fn.prime_sieve,
	lcm = fn.lcm;

console.log("# # # # # # # # # # # # # # # # # # # # 005 # # # # # # # # # # # # # # # # # # # #");

/*
 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

 What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

/*
 [ 1, 2, 3,   4, 5,   6, 7,     8,   9,  10 ]
 [ 1, 2, 3, 2*2, 5, 2*3, 7, 2*2*2, 3*3, 2*5 ]
 2*2*2 * 3*3 * 5 * 7 = 2520
 */

var sample = 10, q = 20;

(function(time) {
	function solve(k) {
		var factorCount = {}, result = 1, i, factorWithCounts, f, c, j, intArr = _.range(1, k + 1);
		for (i = 0; i < intArr.length; i++) {
			factorWithCounts = getPrimeFactorsWithCnt(intArr[i]);
			for (j = 0; j < factorWithCounts.length; j++) {
				f = factorWithCounts[j][0];
				c = factorWithCounts[j][1];
				factorCount[f] = !factorCount[f] ? c : factorCount[f] > c ? factorCount[f] : c;
			}
		}
		_.each(factorCount, function(v, k) {
			//console.log('result: ' + result + ' *= Math.pow(k: ' + k + ', v: ' + v + ')');
			result *= Math.pow(k, v);
		});

		return result;
	}
	console.log('0: ' + solve(sample) + ' / ' + solve(q) + ' / ' + (new Date() - time)); // 232792560
})(new Date());

(function(time) {
	function solve1(K) {
		var result = 1, i = 0, check = true, LIMIT = Math.sqrt(K), // K 의 제곱근
			primes = prime_sieve(K), // K 이하의 소수 집합
			countOfPRIMES = [];
		while (primes[i] <= K) {
			countOfPRIMES[i] = 1; // 해당 prime 기본 지수 = 1
			if (check) {
				if (primes[i] <= LIMIT) { // 해당 prime 이 K 제곱근 이하이면 해당 prime 의 최대 지수를 구하고
					countOfPRIMES[i] = parseInt(Math.log(K) / Math.log(primes[i]));
				} else { // 해당 prime 이 K 제곱근보다 크면 이후의 prime 에 대해선 해당 prime 의 최대 지수가 무조건 1
					check = false;
				}
			}
			result *= Math.pow(primes[i], countOfPRIMES[i]);
			i += 1;
		}
		return result;
	}
	console.log('1: ' + solve1(sample) + ' / ' + solve1(q) + ' / ' + (new Date() - time)); // 232792560
})(new Date());

(function(time) {
	function solve2(k) {
		return _.reduce(_.range(1, k + 1), function(a, b) {
			return lcm(a, b);
		}, 1)
	}
	console.log('2: ' + solve2(sample) + ' / ' + solve2(q) + ' / ' + (new Date() - time)); // 232792560
})(new Date());
