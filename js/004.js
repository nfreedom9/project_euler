/*
 A palindromic number reads the same both ways.
 The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

 Find the largest palindrome made from the product of two 3-digit numbers.
 */

var fn = require("./fn"),
	isPalindrome = fn.isPalindrome;

function solve004_1(digit) {
	var min = Math.pow(10, digit - 1), max = Math.pow(10, digit) - 1, a = min, b, m, result = 0, i = 0;
	while (a <= max) {
		b = min;
		while (b <= max) {
			i++;
			m = a * b;
			if (m > result && isPalindrome(m)) result = m;
			b += 1;
		}
		a += 1;
	}
	//console.log(i);
	return result;
}

function solve004_2(digit) {
	var max = Math.pow(10, digit) - 1, a = Math.pow(10, digit - 1), b, m, result = 0, i = 0;
	while (a <= max) {
		b = a;
		while (b <= max) {
			i++;
			m = a * b;
			if (m > result && isPalindrome(m)) result = m;
			b += 1;
		}
		a += 1;
	}
	//console.log(i);
	return result;
}

function solve004_3(digit) {
	var min = Math.pow(10, digit - 1), max = Math.pow(10, digit) - 1, a = max, b, m, result = 0, i = 0;
	while (a >= min) {
		b = max;
		while (b >= a) {
			i++;
			m = a * b;
			if (result >= m) break;
			if (isPalindrome(m)) result = m;
			b -= 1;
		}
		a -= 1;
	}
	//console.log(i);
	return result;
}

function solve004_4(q) {
	var largestPalindrome, x, y, db, m;
	if (q == 2) {
		// P = xyyx = 1000x + 100y + 10y + x = 1001x + 110y = 11 * (91x + 10y)
		largestPalindrome = 0;
		x = 99;
		while (x >= 10) {
			if (x % 11 === 0) {
				y = 99;
				db = 1;
			} else {
				y = 99; //The largest number less than or equal 99 and divisible by 11
				db = 11;
			}
			while (y >= x) {
				m = x * y;
				if (m <= largestPalindrome) break;
				if (isPalindrome(m)) largestPalindrome = m;
				y -= db
			}
			x -= 1
		}
		return largestPalindrome;
	}
	if (q == 3) {
		// P = xyzzyx = 100000x + 10000y + 1000z + 100z + 10y + x = 100001x + 10010y + 1100z
		//   = 11 * (9091x + 910y + 100z)
		largestPalindrome = 0;
		x = 999;
		while (x >= 100) {
			if (x % 11 === 0) {
				y = 999;
				db = 1;
			} else {
				y = 990; //The largest number less than or equal 999 and divisible by 11
				db = 11;
			}
			while (y >= x) {
				m = x * y;
				if (m <= largestPalindrome) break;
				if (isPalindrome(m)) largestPalindrome = m;
				y -= db
			}
			x -= 1
		}
		return largestPalindrome;
	}
}

function solve004_5(q) {
	var x, y, z, P, a;
	if (q == 2) {
		// xyyx = 1000 * x + 100 * y + 10 * y + x = 1001 * x + 110 * y = 11 * (91 * x + 10 * y) = a * b
		for (x = 9; x > 0; x--) {
			for (y = 9; y >= 0; y--) {
				P = 11 * (91 * x + 10 * y);
				for (a = 99; a >= 1; a--) {
					if ((P / a) <= 99 && !(P % a)) {
						return P;
					}
				}
			}
		}
	}
	if (q == 3) {
		// P = 11 * (9091 * x + 910 * y + 100 * z) = a * b
		for (x = 9; x > 0; x--) {
			for (y = 9; y >= 0; y--) {
				for (z = 9; z >= 0; z--) {
					P = 11 * (9091 * x + 910 * y + 100 * z);
					for (a = 999; a >= 10; a--) {
						if ((P / a) <= 999 && !(P % a)) {
							return P;
						}
					}
				}
			}
		}
	}
}

var sample = 2, q = 3;
(function (time) {
	console.log('       # 004_1: ' + solve004_1(sample) + ' / ' + solve004_1(q) + ' / ' + (new Date() - time));
})(new Date());
(function (time) {
	console.log('       # 004_2: ' + solve004_2(sample) + ' / ' + solve004_2(q) + ' / ' + (new Date() - time));
})(new Date());
(function (time) {
	console.log('       # 004_3: ' + solve004_3(sample) + ' / ' + solve004_3(q) + ' / ' + (new Date() - time));
})(new Date());
(function (time) {
	console.log('       # 004_4: ' + solve004_4(sample) + ' / ' + solve004_4(q) + ' / ' + (new Date() - time));
})(new Date());
(function (time) {
	console.log('       # 004_5: ' + solve004_5(sample) + ' / ' + solve004_5(q) + ' / ' + (new Date() - time));
})(new Date());