/*
 70.
 Euler's Totient function, φ(n) [sometimes called the phi function], is used to determine the number of positive numbers less than or equal to n which are relatively prime to n.
 For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, φ(9)=6.

 The number 1 is considered to be relatively prime to every positive number, so φ(1)=1.

 Interestingly, φ(87109)=79180, and it can be seen that 87109 is a permutation of 79180.

 Find the value of n, 1 < n < 10^7, for which φ(n) is a permutation of n and the ratio n/φ(n) produces a minimum.
 */

console.log('# pen 70 #');

function getDivisorsExcept1(number) {
	var result1 = [], result2 = [number], sqrt = Math.sqrt(number);
	if (number < 2) return result1;

	for (var i = 2; i < sqrt; i++) {
		if (number % i === 0) {
			result1.push(i);
			result2.push(number / i);
		}
	}
	if (sqrt % 1 === 0) result1.push(sqrt);
	return result1.concat(result2.reverse());
}

function getCoPrimesOf(n) {
	var i, result = [1], primeFactors = getPrimeFactors(n), j, len, _p;
	for (i = 2; i < n; i++) {
		for (j = 0, len = primeFactors.length; j < len; j++) {
			_p = primeFactors[j];

			if (j === len - 1) {
				if (i % _p !== 0) {
					result.push(i);
				}
			}

			if (i % _p === 0) {
				break;
			}
		}
	}

	return result;
}


/**
 * @return {number}
 */
function Totient(n) {
	if (n === 1) return 1;
	return getCoPrimesOf(n).length;
}

function solve(limit) {
	var best = 1;
	var phiBest = 1;
	var bestRatio = 2, p1, p2;

	var primes = prime_sieve(int(1.30 * sqrt(limit)));
	console.log(int(1.30 * sqrt(limit)));
	//var primes = prime_sieve(5000);

	for (var i = 0; i < primes.length; i++) {
		for (var j = i + 1; j < primes.length; j++) {
			var n = primes[i] * primes[j];
			if (n > limit) {
				console.log(n + ' = ' + primes[i] + ' * ' + primes[j]);
				return {
					best: best,
					phiBest: phiBest,
					bestRatio: bestRatio,
					p1: p1,
					p2: p2
				}
			}

			var phi = (primes[i] - 1) * (primes[j] - 1);
			var ratio = n / phi;

			if (is_perm(n, phi) && bestRatio > ratio) {
				best = n;
				phiBest = phi;
				bestRatio = ratio;
				p1 = primes[i];
				p2 = primes[j];
			}
		}
	}
}

(function() {
	console.log(solve(10000000)); // 8319823
})();

(function() {
	return;
	console.log();
	console.log(Totient(1)); // 1
	console.log(Totient(9)); // 6
	console.log(Totient(87109)); // 79180
	console.log();

	var result = [], φ, t, n_φ, res = 10, result0;
	for (var n = 2; n < 100; n++) {
		t = getCoPrimesOf(n);
		φ = t.length;
		n_φ = n / φ;
		if (res > n_φ && is_perm(n, φ)) {
			res = n_φ;
			result0 = n;
			//console.log(t);
			console.log(n + '  is permutation  ' + φ);
			console.log(n + ' : ' + res);
			result.push(n);
		}
	}

	console.log(result);
	console.log(res);
})();

(function() {
	return;
	function delArr(arr, idx) {
		var newArr = [];
		for (var i = idx, len = arr.length; i < len; i++) {
			newArr.push(arr[i]);
		}
		//arr = newArr;
		return newArr;
	}

	//from Euler import prime_sieve, is_perm, sqrt

	var L = Math.pow(10, 7);

	//primes = prime_sieve(int(1.30*sqrt(L)))
	var primes = prime_sieve(int(1.30 * sqrt(L)));

	//del primes[:int(0.6*len(primes))]
	primes = delArr(primes, int(0.6 * len(primes)));

	function pe70(limit) {
		var min_q = 2, min_n = 0, i = 0;
		for (var p1 in primes) {
			i += 1;
			for (var p2 in primes) {
				if ((p1 + p2) % 9 != 1) continue;
				var n = p1 * p2;
				//console.log(n);
				if (n > limit) return min_n;
				var phi = (p1 - 1) * (p2 - 1);
				var q = n / parseInt(phi, 10);
				if (is_perm(phi, n) && min_q > q) {
					min_q = q;
					min_n = n;
				}
			}
		}
		return "NFI!"
	}

	console.log(pe70(L));

	//def pe70(limit):
	//min_q, min_n, i = 2, 0, 0
	//for p1 in primes:
	//i+=1
	//for p2 in primes[i:]:
	//if (p1+p2)%9 != 1: continue
	//n = p1 * p2
	//if n > limit: return min_n
	//phi = (p1-1) * (p2-1)
	//q = n / float(phi)
	//if is_perm(phi, n) and min_q>q: min_q, min_n = q, n
	//return "NFI!"
	//
	//print "Project Euler 70 Solution =",pe70(L)


})();

(function() {
	return;
	console.log();
	var arr = [21, 291, 2817, 2991, 4435, 20617, 45421, 69271, 75841, 162619, 176569, 284029, 400399];

	var result = [], φ, t, n_φ, res = 10, result0, pfs;
	for (var n = 3; n < 100000; n += 2) {

		// 1
		//t = getCoPrimesOf(n);
		//pfs = getPrimeFactors(n);
		//φ = t.length;
		//n_φ = n / φ;
		//if (res > n_φ && is_perm(n, φ)) {
		//	res = n_φ;
		//	result0 = n;
		//	//console.log(t);
		//	console.log(n + '  is permutation  ' + φ);
		//	console.log(pfs);
		//	console.log((pfs[0] - 1) * (pfs[1] - 1));
		//	console.log(getFactors(n));
		//	console.log(n + ' : ' + res);
		//	console.log();
		//	result.push(n);
		//}

		// 2
		pfs = getPrimeFactors(n);
		if (pfs.length === 2) {
			φ = (pfs[0] - 1) * (pfs[1] - 1);
			n_φ = n / φ;
			if (res > n_φ && is_perm(n, φ)) {
				res = n_φ;
				result0 = n;
				console.log(n + '  is permutation  ' + φ);
				console.log((pfs[0] - 1) * (pfs[1] - 1));
				//console.log(getFactors(n));
				console.log(n + ' : ' + res);
				console.log();
				result.push(n);
			}
		}
	}

	console.log(result);
	console.log(getFactors(99993));
	for (var i = 0; i < result.length; i++) {
		console.log('getFactors(' + result[i] + '): ' + getFactors(result[i]));
	}
	//console.log(res);
	console.log(result0); // 8319823
})();

console.log();
console.log('## END ##');
