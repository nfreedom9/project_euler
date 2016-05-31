/*
 14.
 The following iterative sequence is defined for the set of positive integers:

 n → n/2 (n is even)
 n → 3n + 1 (n is odd)

 Using the rule above and starting with 13, we generate the following sequence:

 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

 It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
 Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

 Which starting number, under one million, produces the longest chain?

 NOTE: Once the chain starts the terms are allowed to go above one million.
 */

function nextSeq(n) {
	return n % 2 ? 3 * n + 1 : n / 2;
}

function solve014_1() {
	var getTermCountTo1 = (function() {
		var cache = { '1': 1 };
		return function(no) {
			return cache[no] || (cache[no] = getTermCountTo1(nextSeq(no)) + 1);
		};
	})();

	var maxCnt = 1, i, curCnt, result;
	for (i = 1; i < 1000000; i++) {
		curCnt = getTermCountTo1(i);
		if (curCnt > maxCnt) {
			maxCnt = curCnt;
			result = i;
		}
	}
	return result;
}

function solve014_2() {
	var indexBuffer = {}, maxCount = 0, result = 0, LIMIT = 1000000;

	for (var i = LIMIT; i > 0; i--) {
		if (indexBuffer[i]) continue;
		var count = 0, num = i;
		indexBuffer[num] = true;
		while (true) {
			num = nextSeq(num);
			if (num < LIMIT) indexBuffer[num] = true;
			count++;
			if (num == 1) break;
		}

		if (maxCount < count) {
			maxCount = count;
			result = i;
		}
	}
	return result;
}

(function(time) {
	console.log('       # 014_1: ' + solve014_1() + ' / ' + (new Date() - time));
})(new Date());
(function(time) {
	console.log('       # 014_2: ' + solve014_2() + ' / ' + (new Date() - time));
})(new Date());