/*
 18.
 By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

 3
 7 4
 2 4 6
 8 5 9 3

 That is, 3 + 7 + 4 + 9 = 23.

 Find the maximum total from top to bottom of the triangle below:

 75
 95  64
 17  47  82
 18  35  87  10
 20  04  82  47  65
 19  01  23  75  03  34
 88  02  77  73  07  63  67
 99  65  04  28  06  16  70  92
 41  41  26  56  83  40  80  70  33
 41  48  72  33  47  32  37  16  94  29
 53  71  44  65  25  43  91  52  97  51  14
 70  11  33  28  77  73  17  78  39  68  17  57
 91  71  52  38  17  14  91  43  58  50  27  29  48
 63  66  04  68  89  53  67  30  73  16  69  87  40  31
 04  62  98  27  23  09  70  98  73  93  38  53  60  04  23

 NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)
 */

var _ = require("./fn")._;

var S = [
	[3],
	[7, 4],
	[2, 4, 6],
	[8, 5, 9, 3]
];

var P = [
	[75],
	[95, 64],
	[17, 47, 82],
	[18, 35, 87, 10],
	[20, 4, 82, 47, 65],
	[19, 1, 23, 75, 3, 34],
	[88, 2, 77, 73, 7, 63, 67],
	[99, 65, 4, 28, 6, 16, 70, 92],
	[41, 41, 26, 56, 83, 40, 80, 70, 33],
	[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
	[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
	[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
	[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
	[63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
	[4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
];

function solve(arr, getPaths) {
	return _.reduce(getPaths(arr.length), function(result, path) {
		var temp = _.reduce(path, function(acc, p, i) {
			return acc + arr[i][p];
		}, 0);
		return temp > result ? temp : result;
	}, 0);
}

var getPaths1 = (function() {
	var paths = { '1': [[0]] };
	return function(l) {
		return paths[l] ||
			(paths[l] = _.reduce(getPaths1(l - 1), function(acc, path) {
				return acc.concat([
					_.clone(path).concat([path[path.length - 1]]),
					_.clone(path).concat([path[path.length - 1] + 1])
				]);
			}, []));
	}
})();

function getPaths2(len) {
	return _.reduce(_.range(1, len), function(paths) {
		return _.map(paths, function(path) {
			return _.clone(path).concat([path[path.length - 1]]);
		}).concat(_.map(paths, function(path) {
			return _.clone(path).concat([path[path.length - 1] + 1]);
		}));
	}, [[0]]);
}

function solve018_1(arr) {
	return solve(arr, getPaths1);
}

function solve018_2(arr) {
	return solve(arr, getPaths2);
}

(function(time) {
	console.log('     # 018_1: ' + solve018_1(S) + ' / ' + solve018_1(P) + ' / ' + (new Date() - time));
})(new Date());
(function(time) {
	console.log('     # 018_2: ' + solve018_2(S) + ' / ' + solve018_2(P) + ' / ' + (new Date() - time));
})(new Date());