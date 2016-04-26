/*
 60.
 The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes and concatenating them in any order the result will always be prime. For example, taking 7 and 109, both 7109 and 1097 are prime. The sum of these four primes, 792, represents the lowest sum for a set of four primes with this property.

 Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime.
 */



function concatenate(n1, n2) {
	return parseInt('' + n1 + n2, 10);
}

function isAllPrimeConcatenated(p1, p2) {
	return !(!isPrime(concatenate(p1, p2)) || !isPrime(concatenate(p2, p1)));
}

/**
 * arr 의 모든 요소가 소수인지 확인
 * @param arr
 * @returns {boolean}
 */
function isPrimesArr(arr) {
	if (!Array.isArray(arr) || !arr.length)
		return false;

	var i, len = arr.length;
	for (i = 0; i < len; i++) {
		if (!isPrime(arr[i])) {
			return false;
		}
	}
	return true;
}

function all_prime(arr) {
	// arr 모든 요소에 대하여 소수인지 확인
	if (!isPrimesArr(arr)) return false;

	var i, j, len = arr.length;
	for (i = 0; i < len; i++) {
		for (j = i + 1; j < len; j++) {
			if (!isAllPrimeConcatenated(arr[i], arr[j])) {
				//console.log('!isAllPrimeConcatenated(' + arr[i] + ', ' + arr[j] + ')');
				return false;
			}
			//console.log('isAllPrimeConcatenated(' + arr[i] + ', ' + arr[j] + ')');
		}
	}
	return _.reduce(arr, function(a, b) {
		return a + b;
	}, 0);
}

function nextPrime(n) {
	if (n === 2) return 3;
	for (var i = n % 2 ? n + 2 : n + 1; ; i += 2) {
		if (isPrime(i)) return i;
	}
}

// cnt 개의 소수들
function getPrimes2(cnt) {
	if (!cnt) return [];
	if (cnt === 1) return [2];
	var result = [2];
	for (var i = 3; ; i += 2) {
		if (result.length >= cnt) return result;
		if (isPrime(i)) result.push(i);
	}
}

(function(set_size) {
	return;
	var time = new Date();
	function solve(initNo) {
		console.log('solve(' + initNo + ')');
		var primes = getPrimes2(initNo);

		function make_chain(chain) {
			if (chain.length === set_size)
				return chain;

			for (var i = 0, len = primes.length; i < len; i++) {
				var p = primes[i];
				if (p > chain[chain.length - 1]) {
					var chain_p = chain.concat([p]);
					if (all_prime(chain_p)) {
						var new_chain = make_chain(chain_p);
						if (new_chain) return new_chain;
					}
				}
			}

			return false;
		}

		var chain = 0;
		while (!chain) {
			if (!primes.length) {
				return solve(initNo + 1);
			}
			var p = primes.shift();
			chain = make_chain([p]);
		}

		return chain;
	}

	var info = solve(0);
	console.log(info);
	console.log(all_prime(info));
	console.log(new Date() - time);
})(5);

//console.log(all_prime([3, 7, 109, 673])); // 792
//console.log(all_prime([13, 5197, 5701, 6733, 8389])); // 26033
console.log('END');