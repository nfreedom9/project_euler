console.log("# # # # # # # # # # # # # # # # # # # # 015 # # # # # # # # # # # # # # # # # # # #");

/*
 15.
 Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
 there are exactly 6 routes to the bottom right corner.

 How many such routes are there through a 20×20 grid?
 */

/**
 * 왼쪽 위 모서리를 (0,0) 으로 하여 오른쪽 방향을 x 좌표, 아래 방향을 y 좌표로 할 때 (x,y) 로 이동하는 경우의 수
 * @param x
 * @param y
 * @returns {*}
 */
function my(x, y) {
	var arr = [];
	function f(x) {
		arr[x] = arr[x] || [];
		return function(y) {
			if (arr[x][y]) return arr[x][y];
			if (x === 0 || y === 0) {
				return arr[x][y] = 1;
			}
			return arr[x][y] = f(x - 1)(y) + f(x)(y - 1);
		}
	}
	return f(x)(y);
}

(function(time) {
	console.log('m: ' + my(2,2) + ' / ' + my(20,20) + ' / ' + (new Date() - time));
})(new Date());

function solve1(m,n) {
	solve1.cache = solve1.cache || {};
	if (n === 0 || m === 0) return 1;
	if (solve1.cache[m] && solve1.cache[m][n]) return solve1.cache[m][n];
	if (!solve1.cache[m]) solve1.cache[m] = {};
	return solve1.cache[m][n] = solve1(m - 1, n) + solve1(m, n - 1);
}

(function(time) {
	console.log('1: ' + solve1(2,2) + ' / ' + solve1(20,20) + ' / ' + (new Date() - time));
})(new Date());

function solve2(m,n) {
	var arr = [], i, j;
	for (i = 0; i <= m; i++) {
		arr[i] = [1];
	}
	for (j = 0; j <= n; j++) {
		arr[0][j] = 1;
	}
	for (i = 1; i <= m; i++) {
		for (j = 1; j <= n; j++) {
			arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
		}
	}
	return arr[m][n];
}

(function(time) {
	console.log('2: ' + solve2(2,2) + ' / ' + solve2(20,20) + ' / ' + (new Date() - time));
})(new Date());

function solve3(n) {
	var result = 1;
	for (var i = 1; i <= n; i++) {
		result = parseInt(result * (n + i) / i, 10);
	}
	return result;
}

(function(time) {
	console.log('3: ' + solve3(2,2) + ' / ' + solve3(20,20) + ' / ' + (new Date() - time));
})(new Date());