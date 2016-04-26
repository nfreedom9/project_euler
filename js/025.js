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

function F(n) {
	if (F.cache[n]) return F.cache[n];

	var result = sumArr(F(n - 1), F(n - 2));
	F.cache[n] = result;

	return result;
}

F.cache = {
	'1': [1],
	'2': [1]
};

function sumArr(arr1, arr2) {
	var len1 = arr1.length, len2 = arr2.length, arr = [], i, len = len1 > len2 ? len1 : len2;

	for (i = 0; i < len; i++) {
		arr.push((arr1[i] || 0) + (arr2[i] || 0));
	}

	if (arr[len - 1] >= 10) {
		arr.push(0);
		len += 1;
	}

	for (i = 1; i < len; i++) {
		temp = arr[i - 1];
		if (temp >= 10) {
			arr[i] += 1;
			arr[i - 1] %= 10;
		}
	}

	return arr;
}

function solve(digit) {
	for (var i = 1; ; i++) {
		var f = F(i);
		if (f.length >= digit) return i;
	}
}

console.log(solve(3)); // 12
console.log(solve(1000)); // 4782


(function(digit) {
	var prevTerm = [1];
	var currTerm = [1];
	var currIndex = 2;
	do {
		var nextTerm = [];
		var carry = 0;
		for (var i = 0; i < currTerm.length; i++) {
			var sum = currTerm[i] +
				(
					prevTerm[i] === undefined ?
						0 :
						prevTerm[i]
				) +
				carry;
			nextTerm[i] = sum % 10;
			carry = Math.floor(sum / 10);
		}
		if (carry) {
			nextTerm[nextTerm.length] = carry;
		}
		prevTerm = currTerm;
		currTerm = nextTerm;
		currIndex++;
		//console.log([currIndex, '/', currTerm].join(' '));
	} while (currTerm.length < digit);
	console.log('Answer: ' + currIndex);
})(1000);

