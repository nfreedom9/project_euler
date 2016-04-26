/*
 55.
 If we take 47, reverse and add, 47 + 74 = 121, which is palindromic.

 Not all numbers produce palindromes so quickly. For example,

 349 + 943 = 1292,
 1292 + 2921 = 4213
 4213 + 3124 = 7337

 That is, 349 took three iterations to arrive at a palindrome.

 Although no one has proved it yet, it is thought that some numbers, like 196, never produce a palindrome. A number that never forms a palindrome through the reverse and add process is called a Lychrel number. Due to the theoretical nature of these numbers, and for the purpose of this problem, we shall assume that a number is Lychrel until proven otherwise. In addition you are given that for every number below ten-thousand, it will either (i) become a palindrome in less than fifty iterations, or, (ii) no one, with all the computing power that exists, has managed so far to map it to a palindrome. In fact, 10677 is the first number to be shown to require over fifty iterations before producing a palindrome: 4668731596684224866951378664 (53 iterations, 28-digits).

 Surprisingly, there are palindromic numbers that are themselves Lychrel numbers; the first example is 4994.

 How many Lychrel numbers are there below ten-thousand?

 NOTE: Wording was modified slightly on 24 April 2007 to emphasise the theoretical nature of Lychrel numbers.
 */

(function() {
	function isPalindromic(n) {
		return getRevNo(n) === n;
	}

	function getRevNo(n) {
		if (n.constructor !== Number) throw new Error('n.constructor !== Number');
		if (n % 1) throw new Error('n % 1');

		var n_str = '' + n, n_str_rev = '', len = n_str.length, i;

		for (i = len - 1; i >= 0; i--) {
			n_str_rev += n_str[i];
		}

		return parseInt(n_str_rev, 10);
	}

	function getInfoToPalindrome(n, re) {
		getInfoToPalindrome.cache = getInfoToPalindrome.cache || {};
		re = re || 1;

		if (getInfoToPalindrome.cache[n]) return getInfoToPalindrome.cache[n];

		var revNo = getRevNo(n), addRevNo = n + revNo,
				result = [n + ' + ' + revNo + ' = ' + addRevNo];

		if (isPalindromic(addRevNo)) {
			getInfoToPalindrome.cache[n] = result;
			return result;
		}

		if (re > 50) {
			return 'Lychrel No';
		}

		var next = getInfoToPalindrome(addRevNo, re + 1);

		if (next === 'Lychrel No') return 'Lychrel No';

		result = result.concat(next);
		getInfoToPalindrome.cache[n] = result;
		return result;
	}

	var result = 0;
	for (var i = 1; i < 10000; i++) {
		if (getInfoToPalindrome(i) === 'Lychrel No') {
			result += 1;
		}
	}

	console.log(result);
})();



console.log('END');






















