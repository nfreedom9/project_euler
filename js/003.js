console.log("# # # # # # # # # # # # # # # # # # # # 003 # # # # # # # # # # # # # # # # # # # #");

/*
 The prime factors of 13195 are 5, 7, 13 and 29.

 What is the largest prime factor of the number 600851475143 ?
 */

(function(time) {
	function solve1(n) {
		var factor = 2, lastFactor = 1;

		while (n > 1) {
			if (n % factor === 0) { // n을 완전히 나누는 factor 값을 찾으면
				lastFactor = factor; // lastFactor 에 factor 값을 대입
				while (n % factor === 0) n = n / factor; // 동일한 factor 값에 대하여 검색하여 n 값을 다시 조정
			}
			factor += 1;
		}

		return lastFactor;
	}
	console.log('1: ' + solve1(600851475143) + ' / ' + (new Date - time)); // 6857
})(new Date());

(function(time) {
	function solve2(n) {
		var factor = 3, lastFactor = 1;

		if (n % 2 === 0) {
			lastFactor = 2;
			while (n % 2 === 0) n = n / 2;
		}

		while (n > 1) {
			if (n % factor === 0) { // n을 완전히 나누는 factor 값을 찾으면
				lastFactor = factor; // lastFactor 에 factor 값을 대입
				while (n % factor === 0) n = n / factor; // 동일한 factor 값에 대하여 검색하여 n 값을 다시 조정
			}
			factor += 2;
		}

		return lastFactor;
	}
	console.log('2: ' + solve2(600851475143) + ' / ' + (new Date - time)); // 6857
})(new Date());

(function(time) {
	function solve3(n) {
		var factor = 3, lastFactor = 1, maxFactor = Math.sqrt(n);

		if (n % 2 === 0) {
			lastFactor = 2;
			while (n % 2 === 0) n = n / 2;
		}

		while ((n > 1) && (factor <= maxFactor)) {
			if (n % factor === 0) { // n을 완전히 나누는 factor 값을 찾으면
				lastFactor = factor; // lastFactor 에 factor 값을 대입
				while (n % factor === 0) n = n / factor; // n 값을 다시 조정
				maxFactor = Math.sqrt(n);
			}
			factor += 2;
		}

		return n === 1 ? lastFactor : n;
	}
	console.log('3: ' + solve3(600851475143) + ' / ' + (new Date - time)); // 6857
})(new Date());