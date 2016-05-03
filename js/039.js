/*
 If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

 {20,48,52}, {24,45,51}, {30,40,50}

 For which value of p ≤ 1000, is the number of solutions maximised?
 */

function getSet(length) {
	var result = [];
	for (var a = 1; a < length; a++) {
		for (var b = a + 1; b < length; b++) {
			var c = length - a - b;
			if (c * c == a * a + b * b) result.push([a,b,c]);
		}
	}
	return result;
}

function solve039() {
	var result = 0;
	for (var i = 120; i <= 1000; i++) {
		if (getSet(i).length > getSet(result).length) result = i;
	}
	return result;
}

(function(time) {
	console.log('    # 039: ' + solve039() + ' / ' + (new Date() - time));
})(new Date());