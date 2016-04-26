/*
 17.
 If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

 If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


 NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
 */

function sol() {
	function getLetters(n) {
		if (getLetters.cache[n]) return getLetters.cache[n];
		if (n > 20 && n < 100) return getLetters.cache[n] = getLetters(n - (n % 10)) + getLetters(n % 10);
		if (n >= 100 && n < 1000) {
			if (n % 100 === 0) return getLetters.cache[n] = getLetters(parseInt(n / 100, 10)) + 'Hundred';
			return getLetters.cache[n] = getLetters(parseInt(n / 100, 10)) + 'Hundred' + 'And' + getLetters(n % 100);
		}
	}
	getLetters.cache = {
		'1': 'One',
		'2': 'Two',
		'3': 'Three',
		'4': 'Four',
		'5': 'Five',
		'6': 'Six',
		'7': 'Seven',
		'8': 'Eight',
		'9': 'Nine',
		'10': 'Ten',
		'11': 'Eleven',
		'12': 'Twelve',
		'13': 'Thirteen',
		'14': 'Fourteen',
		'15': 'Fifteen',
		'16': 'Sixteen',
		'17': 'Seventeen',
		'18': 'Eighteen',
		'19': 'Nineteen',
		'20': 'Twenty',
		'30': 'Thirty',
		'40': 'Forty',
		'50': 'Fifty',
		'60': 'Sixty',
		'70': 'Seventy',
		'80': 'Eighty',
		'90': 'Ninety',
		'1000': 'OneThousand'
	};

	var result = 0;
	for (var i = 1; i <= 1000; i++) {
		result += getLetters(i).length;
	}
	return result;
}

console.log("# # # # # # # # # # # # # # # # # # # # 017 # # # # # # # # # # # # # # # # # # # #");

(function(time) {
	console.log('m: ' + sol() + ' / ' + sol() + ' / ' + (new Date() - time));
})(new Date());