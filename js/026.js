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
			info.push(0);
			no *= 10;
		}
	}
	var info = [];
	var temp = trans(10);
	for (;;) {
		var add = parseInt(temp / denominator);
		if (_.contains(info, add)) {
			return (function(info, add) {
				if (!add) return "0." + info.join("");
				return _.reduce(info, function(str, n) {
					if (n === add) return str + "(" + n;
					return str + n;
				}, "0.") + ")";
			})(info, add);
		}
		info.push(add);
		temp = trans(10 * (temp % denominator));
	}
}

console.log(_.map(_.range(2,20), function(n) { return ['1/'+n, recurringLength(unitFraction(n)), unitFraction(n), 1/n] }));

//console.log(unitFraction(3).indexOf(')') - unitFraction(3).indexOf('('));
//console.log(unitFraction(4).indexOf(')') - unitFraction(4).indexOf('('));
//console.log(unitFraction(5).indexOf(')') - unitFraction(5).indexOf('('));
//console.log(unitFraction(6).indexOf(')') - unitFraction(6).indexOf('('));
//console.log(unitFraction(7).indexOf(')') - unitFraction(7).indexOf('('));

function recurringLength(f) {
	var i1 = f.indexOf('('), i2 = f.indexOf(')');
	if (i1 === -1) return 0;
	return i2 - i1 - 1;
}

function solve() {
	function getInfo(n) {
		var f = unitFraction(n), l = recurringLength(f);
		return { n: n, f: f, l: l };
	}

	var result = _.reduce(_.map(_.range(3,1000), getInfo), function(info, next) {
		return info.l > next.l ? info : next;
	}, getInfo(2));

	return ["1/"+result.n, result.l, result.f, 1/result.n];
}

console.log("# # # # # # # # # # # # # # # # # # # # 026 # # # # # # # # # # # # # # # # # # # #");

(function(time) {
	console.log('m: ' + solve(1000) + ' / ' + (new Date() - time));
})(new Date());
