/*
 A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

 a^2 + b^2 = c^2
 For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

 There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 Find the product abc.
 */

/*
 c = 1000 - a - b

 a^2 + b^2 = c^2 = (1000 - a - b)^2 = 1000^2 + a^2 + b^2 + 2(ab - 1000a - 1000b)

 1000^2 + 2(ab - 1000a - 1000b) = 0

 2(1000(a+b)) = 1000^2 + 2ab

 1000(a+b) = 1000*500 + ab
 */

function solve009_1() {
	var sum = 1000, a, b, c;
	for (a = 1; a <= sum - 2; a++) {
		for (b = a + 1; b <= sum - 1; b++) {
			c = sum - a - b;
			if (c * c == a * a + b * b) {
				return "a("+a+") * b("+b+") * c("+c+") = " + (a*b*c);
			}
		}
	}
}

(function(time) {
	console.log('       # 009_1: ' + solve009_1(5) + ' / ' + (new Date() - time));
})(new Date());