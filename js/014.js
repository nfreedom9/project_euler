console.log("# # # # # # # # # # # # # # # # # # # # 014 # # # # # # # # # # # # # # # # # # # #");

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
	if (n % 2) return 3 * n + 1;
	return n / 2;
}

function getTermCountTo1(n) {
	var result = 1, next = n, repeat = true;
	while(repeat) {
		next = nextSeq(next);
		result++;
		repeat = next !== 1;
	}
	return result;
}

function my(limit) {
	var maxCnt = 1, i, curCnt, result;
	for (i = 1; i < limit; i++) {
		curCnt = getTermCountTo1(i);
		if (curCnt > maxCnt) {
			maxCnt = curCnt;
			result = i;
		}
	}
	return result;
}

(function(time) {
	console.log('m: ' + getTermCountTo1(13) + ' / ' + my(1000000) + ' / ' + (new Date() - time));
})(new Date());