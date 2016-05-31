/*
 15.
 Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
 there are exactly 6 routes to the bottom right corner.

 How many such routes are there through a 20×20 grid?
 */

function solve015_1(x, y) {
	var cache = {};
	return (function f(x) {
		cache[x] = cache[x] || [];
		return function(y) {
			return cache[x][y] || (cache[x][y] = (!x || !y) ? 1 : f(x - 1)(y) + f(x)(y - 1));
		}
	})(x)(y);
}

function solve015_2(m, n) {
	var arr = [], i, j;
	for (i = 0; i <= m; i++) arr[i] = [1];
	for (j = 0; j <= n; j++) arr[0][j] = 1;
	for (i = 1; i <= m; i++) {
		for (j = 1; j <= n; j++) {
			arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
		}
	}
	return arr[m][n];
}

function solve015_3(n) {
	var result = 1;
	for (var i = 1; i <= n; i++) {
		result = result * (n + i) / i;
	}
	return result;
}

(function(time) {
	console.log('         # 015_1: ' + solve015_1(2,2) + ' / ' + solve015_1(20,20) + ' / ' + (new Date() - time));
})(new Date());
(function(time) {
	console.log('         # 015_2: ' + solve015_2(2,2) + ' / ' + solve015_2(20,20) + ' / ' + (new Date() - time));
})(new Date());
(function(time) {
	console.log('         # 015_3: ' + solve015_3(2,2) + ' / ' + solve015_3(20,20) + ' / ' + (new Date() - time));
})(new Date());