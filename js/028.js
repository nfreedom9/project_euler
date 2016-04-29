console.log("# # # # # # # # # # # # # # # # # # # # 028 # # # # # # # # # # # # # # # # # # # #");

var fn = require("./fn"),
	_ = fn._,
	isPrime = fn.isPrime;

/*
 28.
 Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

 (21) 22  23  24 (25)
  20  (7)  8  (9) 10
  19   6  (1)  2  11
  18  (5)  4  (3) 12
 (17) 16  15  14 (13)

 It can be verified that the sum of the numbers on the diagonals is 101.

 What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
 */

function solve0(_n) {
	var n = (_n - 1) / 2;
	var sum = 1, last = 1;
	for (var i = 1; i <= n; i++) {
		var d = 2 * i;
		sum += (last += d);
		sum += (last += d);
		sum += (last += d);
		sum += (last += d);
	}
	return sum;
}

console.log(1+3+5+7+9+13+17+21+25);
console.log(_.map([1,3,5], solve0)); // 101

(function(time) {
	console.log('0: ' + solve0(1001) + ' / ' + (new Date() - time));
})(new Date());
