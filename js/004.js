var fn = require("./fn"),
	isPalindrome = fn.isPalindrome;

/*
 A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

 Find the largest palindrome made from the product of two 3-digit numbers.
 */

(function(time) {
	function solve(digit) {
		var min = Math.pow(10, digit - 1), max = Math.pow(10, digit) - 1, a = min, b, result = 0;
		while (a <= max) {
			b = min;
			while (b <= max) {
				var m = a * b;
				if (isPalindrome(m) && m > result) result = m;
				b += 1;
			}
			a += 1;
		}
		return result;
	}
	console.log('0: ' + solve(2) + ' / ' + solve(3) + ' / ' + (new Date() - time)); // 906609
})(new Date());

(function(time) {
	function solve1(digit) {
		var max = Math.pow(10, digit) - 1, a = Math.pow(10, digit - 1), b, result = 0;
		while (a <= max) {
			b = a;
			while (b <= max) {
				var m = a * b;
				if (isPalindrome(m) && m > result) result = m;
				b += 1;
			}
			a += 1;
		}
		return result;
	}
	console.log('1: ' + solve1(2) + ' / ' + solve1(3) + ' / ' + (new Date() - time)); // 906609
})(new Date());

(function(time) {
	function solve2(digit) {
		var min = Math.pow(10, digit - 1), max = Math.pow(10, digit) - 1, a = max, b, n = 0;
		while (a >= min) {
			b = max;
			while (b >= a) {
				var m = a * b;
				if (m <= n) break;
				if (isPalindrome(m)) n = m;
				b -= 1;
			}
			a -= 1;
		}
		return n;
	}
	console.log('2: ' + solve2(2) + ' / ' + solve2(3) + ' / ' + (new Date() - time)); // 906609
})(new Date());

(function(time) {
	/*
	 P = xyzzyx
	 P = 100000x + 10000y + 1000z + 100z + 10y + x
	 P = 100001x + 10010y + 1100z
	 P = 11 * (9091x + 910y + 100z)
	 */
	function solve3_3() {
		var largestPalindrome = 0, a = 999, b, db;

		while (a >= 100) {
			if (a % 11 === 0) {
				b = 999;
				db = 1;
			} else {
				b = 990; //The largest number less than or equal 999 and divisible by 11
				db = 11;
			}

			while (b >= a) {
				var m = a * b;
				if (m <= largestPalindrome) break;
				if (isPalindrome(m)) largestPalindrome = m;
				b -= db
			}

			a -= 1
		}

		return largestPalindrome;
	}

	function solve3_2() {
		var largestPalindrome = 0, a = 99, b, db;

		while (a >= 10) {
			if (a % 11 === 0) {
				b = 99;
				db = 1;
			} else {
				b = 99;
				db = 11;
			}

			while (b >= a) {
				var m = a * b;
				if (m <= largestPalindrome) break;
				if (isPalindrome(m)) largestPalindrome = m;
				b -= db
			}

			a -= 1
		}

		return largestPalindrome;
	}

	console.log('3: ' + solve3_2() + ' / ' + solve3_3() + ' / ' + (new Date() - time)); // 906609
})(new Date());

(function(time) {
	// P = 11 * (9091 * x + 910 * y + 100 * z) = a * b
	function solve4_3() {
		for (var x = 9; x > 0; x--) {
			for (var y = 9; y >= 0; y--) {
				for (var z = 9; z >= 0; z--) {
					var P = 11 * (9091 * x + 910 * y + 100 * z);
					for (var a = 999; a >= 10; a--) {
						if ((P % a) === 0 && (P / a) <= 999) {
							return P;
						}
					}
				}
			}
		}
	}

	// xyyx = 1000 * x + 100 * y + 10 * y + x = 1001 * x + 110 * y = 11 * (91 * x + 10 * y) = a * b
	function solve4_2() {
		for (var x = 9; x > 0; x--) {
			for (var y = 9; y >= 0; y--) {
				var P = 11 * (91 * x + 10 * y);
				for (var a = 99; a >= 1; a--) {
					if ((P % a) === 0 && (P / a) <= 99) {
						return P;
					}
				}
			}
		}
	}

	console.log('4: ' + solve4_2() + ' / ' + solve4_3() + ' / ' + (new Date() - time)); // 906609
})(new Date());

var q = 600851475143;

(function (time) {
	console.log('       # 004_1: ' + solve004_1(q) + ' / ' + (new Date() - time));
})(new Date());

(function (time) {
	console.log('       # 004_2: ' + solve004_2(q) + ' / ' + (new Date() - time));
})(new Date());

(function (time) {
	console.log('       # 004_3: ' + solve004_3(q) + ' / ' + (new Date() - time));
})(new Date());

(function (time) {
	console.log('       # 004_4: ' + solve004_4(q) + ' / ' + (new Date() - time));
})(new Date());

(function (time) {
	console.log('       # 004_5: ' + solve004_5(q) + ' / ' + (new Date() - time));
})(new Date());