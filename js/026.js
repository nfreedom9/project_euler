var fn = require("./fn"),
	_ = fn._;

/*
 26.
 A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

 1/2	= 	0.5
 1/3	= 	0.(3)
 1/4	= 	0.25
 1/5	= 	0.2
 1/6	= 	0.1(6)
 1/7	= 	0.(142857)
 1/8	= 	0.125
 1/9	= 	0.(1)
 1/10	= 	0.1
 Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

 Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
 */

function unitFraction(denominator) {
	function trans(no) {
		if (!no) return 0;
		for (;;) {
			if (no >= denominator) return no;
			no *= 10;
		}
	}
	var temp = trans(1);
	var info = [];
	for (;;) {
		var add = parseInt(temp / denominator);
		if (!add || _.contains(info, add)) {
			return (function(info, add) {
				if (!add) return "0." + info.join("");
				return _.reduce(info, function(str, n) {
					if (n === add) return str + "(" + n;
					return str + n;
				}, "0.") + ")";
			})(info, add);
		}
		info.push(add);
		temp = trans(temp % denominator);
	}
}

console.log(_.map(_.range(2,100), function(n) { return ['1/'+n, unitFraction(n), 1/n] }));

//console.log(unitFraction(3).indexOf(')') - unitFraction(3).indexOf('('));
//console.log(unitFraction(4).indexOf(')') - unitFraction(4).indexOf('('));
//console.log(unitFraction(5).indexOf(')') - unitFraction(5).indexOf('('));
//console.log(unitFraction(6).indexOf(')') - unitFraction(6).indexOf('('));
//console.log(unitFraction(7).indexOf(')') - unitFraction(7).indexOf('('));

function solve() {
	return _.reduce(_.range(3,1000), function(result, n) {
		//console.log(result);
		var fStr = unitFraction(n);
		var fStr0 = unitFraction(result);
		if (fStr.indexOf(')') - fStr.indexOf('(') > fStr0.indexOf(')') - fStr0.indexOf('(')) return n;
		return result;
	}, 2);
}

console.log("# # # # # # # # # # # # # # # # # # # # 026 # # # # # # # # # # # # # # # # # # # #");

(function(time) {
	console.log('m: ' + solve(1000) + ' / ' + (new Date() - time));
})(new Date());
