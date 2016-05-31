/*
 25.
 The Fibonacci sequence is defined by the recurrence relation:

 F(n) = F(n−1) + F(n−2), where F(1) = 1 and F(2) = 1.
 Hence the first 12 terms will be:

 F(1) = 1
 F(2) = 1
 F(3) = 2	1
 F(4) = 3	1
 F(5) = 5	2
 F(6) = 8	3
 F(7) = 13	5
 F(8) = 21	8
 F(9) = 34
 F(10) = 55
 F(11) = 89
 F(12) = 144
 The 12th term, F12, is the first term to contain three digits.

 What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
 */

var F = (function() {
	var cache = { '1': [1], '2': [1] };
	return function(n) {
		return cache[n] || (cache[n] = sumArrInt(F(n - 1), F(n - 2)));
	};
})();

function sumArrInt(currTerm, prevTerm) {
	var nextTerm = [], carry = 0;
	for (var i = 0; i < currTerm.length; i++) {
		var sum = currTerm[i] + (prevTerm[i] || 0) + carry;
		nextTerm[i] = sum % 10;
		carry = Math.floor(sum / 10);
	}
	if (carry) nextTerm[nextTerm.length] = carry;
	return nextTerm;
}

function solve025_1(digit) {
	for (var i = 1; ; i++) if (F(i).length >= digit) return i;
}

function solve025_2(digit) {
	var prevTerm = [1], currTerm = [1], currIndex = 2;
	do {
		var nextTerm = [];
		var carry = 0;
		for (var i = 0; i < currTerm.length; i++) {
			var sum = currTerm[i] + (prevTerm[i] || 0) + carry;
			nextTerm[i] = sum % 10;
			carry = Math.floor(sum / 10);
		}
		if (carry) nextTerm[nextTerm.length] = carry;
		prevTerm = currTerm;
		currTerm = nextTerm;
		currIndex++;
	} while (currTerm.length < digit);
	return currIndex;
}

(function(time) {
	console.log('         # 025_1: ' + solve025_1(1000) + ' / ' + (new Date() - time));
})(new Date());
(function(time) {
	console.log('         # 025_2: ' + solve025_2(1000) + ' / ' + (new Date() - time));
})(new Date());