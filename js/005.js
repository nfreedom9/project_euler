/*
 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

 What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

/*
 [ 1, 2, 3,   4, 5,   6, 7,     8,   9,  10 ]
 [ 1, 2, 3, 2*2, 5, 2*3, 7, 2*2*2, 3*3, 2*5 ]
 2*2*2 * 3*3 * 5 * 7 = 2520
 */

var fn = require("./fn"),
	_ = fn._,
	getPrimeFactorsWithCnt = fn.getPrimeFactorsWithCnt,
	prime_sieve = fn.prime_sieve,
	lcm = fn.lcm;

(function() {
	if (!s) return;
	_.each(_.range(2,11), function(i) {
		console.log(i, getPrimeFactorsWithCnt(i));
	});
})();

function solve005_1(k) {
	var factorCount = {}, result = 1, i, factorWithCounts, factor, count, j, intArr = _.range(1, k + 1);
	for (i = 0; i < intArr.length; i++) {
		factorWithCounts = getPrimeFactorsWithCnt(intArr[i]);
		for (j = 0; j < factorWithCounts.length; j++) {
			factor = factorWithCounts[j].factor;
			count = factorWithCounts[j].count;
			factorCount[factor] = !factorCount[factor] ? count
				: factorCount[factor] > count ? factorCount[factor]
				: count;
		}
	}
	_.each(factorCount, function(v, k) {
		//console.log('result: ' + result + ' *= Math.pow(k: ' + k + ', v: ' + v + ')');
		result *= Math.pow(k, v);
	});

	return result;
}

function solve005_2(K) {
	var result = 1, i = 0, check = true, LIMIT = Math.sqrt(K), // K 의 제곱근
		primes = prime_sieve(K), // K 이하의 소수 집합
		countOfPRIME;
	while (primes[i]) {
		countOfPRIME = 1; // 해당 prime 기본 지수 = 1
		if (check) {
			if (primes[i] <= LIMIT) { // 해당 prime 이 K 제곱근 이하이면 해당 prime 의 최대 지수를 구하고
				countOfPRIME = parseInt(Math.log(K) / Math.log(primes[i]), 10);
			} else { // 해당 prime 이 K 제곱근보다 크면 이후의 prime 에 대해선 해당 prime 의 최대 지수가 무조건 1
				check = false;
			}
		}
		result *= Math.pow(primes[i], countOfPRIME);
		i += 1;
	}
	return result;
}

function solve005_3(k) {
	return _.reduce(_.range(1, k + 1), lcm, 1)
}

var s = 10, q = 20;
(function(time) {
	console.log('         # 005_1: ' + solve005_1(s) + ' / ' + solve005_1(q) + ' / ' + (new Date() - time));
})(new Date());
(function(time) {
	console.log('         # 005_2: ' + solve005_2(s) + ' / ' + solve005_2(q) + ' / ' + (new Date() - time));
})(new Date());
(function(time) {
	console.log('         # 005_3: ' + solve005_3(s) + ' / ' + solve005_3(q) + ' / ' + (new Date() - time));
})(new Date());