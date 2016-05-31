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

function solve028_1(n) {
	var repeatCnt = (n - 1) / 2, sum = 1, last = 1;
	for (var i = 1; i <= repeatCnt; i++) {
		var d = 2 * i;
		sum += (last += d) + (last += d) + (last += d) + (last += d);
	}
	return sum;
}

(function(time) {
	console.log('     # 028_1: ' + solve028_1(5) + ' / ' + solve028_1(1001) + ' / ' + (new Date() - time));
})(new Date());