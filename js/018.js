var fn = require("./fn"),
	_ = fn._;

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

var Sample = [
	[3],
	[7, 4],
	[2, 4, 6],
	[8, 5, 9, 3]
];

var Problem = [
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

(function() {
	function getSum(arr, path) {
		var result = 0, i, len = path.length;
		for (i = 0; i < len; i++) {
			result += arr[i][path[i]];
		}
		return result;
	}

	function solve(arr) {
		function getPaths(l) {
			if (getPaths.cache[l]) return getPaths.cache[l];

			var result = [], _path = getPaths(l - 1), i, len = _path.length;

			function cloneArr(arr) {
				var result = [], i, len = arr.length;
				for (i = 0; i < len; i++) {
					result.push(arr[i]);
				}
				return result;
			}

			function next1(arr) {
				var result = cloneArr(arr);
				result.push(arr[arr.length - 1]);
				return result;
			}

			function next2(arr) {
				var result = cloneArr(arr);
				result.push(arr[arr.length - 1] + 1);
				return result;
			}

			for (i = 0; i < len; i++) {
				result.push(next1(_path[i]));
				result.push(next2(_path[i]));
			}
			return getPaths.cache[l] = result;
		}
		getPaths.cache = { '1': [ [ 0 ] ] };
		var result = 0, paths = getPaths(arr.length), i, len = paths.length, temp;
		for (i = 0; i < len; i++) {
			temp = getSum(arr, paths[i]);
			if (temp > result) result = temp;
		}
		return result;
	}

	function solve2(arr) {
		function getPaths2(len) {
			var seed = [ [ 0 ] ];
			for (var i = 1; i < len; i++) {
				seed = _.map(seed, function(arr) {
					return _.map(arr, function(n) {
						return n;
					}).concat([arr[arr.length - 1]]);
				}).concat(_.map(seed, function(arr) {
					return _.map(arr, function(n) {
						return n;
					}).concat([arr[arr.length - 1] + 1]);
				}));
			}
			return seed;
		}
		var result = 0, paths = getPaths2(arr.length), i, len = paths.length, temp;
		for (i = 0; i < len; i++) {
			temp = getSum(arr, paths[i]);
			if (temp > result) result = temp;
		}
		return result;
	}

	console.log("# # # # # # # # # # # # # # # # # # # # 018 # # # # # # # # # # # # # # # # # # # #");

	(function(time) {
		console.log('m: ' + solve(Sample) + ' / ' + solve(Problem) + ' / ' + (new Date() - time));
	})(new Date());

	(function(time) {
		console.log('2: ' + solve2(Sample) + ' / ' + solve2(Problem) + ' / ' + (new Date() - time));
	})(new Date());
})();