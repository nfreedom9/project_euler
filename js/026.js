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
	var pij = 10, adds = [], pijs = [], result, nam;
	for (;;) {
		result = parseInt(pij / denominator, 10);
		nam = pij % denominator;
		if (!nam) {
			adds.push(result);
			return "0."+adds.join("");
		}
		if (_.contains(pijs, pij)) {
			var _idx = pijs.indexOf(pij);
			return _.reduce(adds, function(r, a, idx) {
					if (idx == _idx) return r + "(" + a;
					return r + a;
				}, "0.") + ")";
		}
		adds.push(result);
		pijs.push(pij);
		pij = nam * 10;
	}
}

//console.log(_.map(_.range(1,20), function(n) { return ['1/'+n, recurringCycle(n), recurringLength(unitFraction(n)), unitFraction(n), 1/n] }));

function recurringLength(f) {
	var i1 = f.indexOf('('), i2 = f.indexOf(')');
	if (i1 === -1) return 0;
	return i2 - i1 - 1;
}

console.log("# # # # # # # # # # # # # # # # # # # # 026 # # # # # # # # # # # # # # # # # # # #");

function recurringCycle(d) {
	return remainders(d, 10, []);
}

function remainders(d, r, rs) {
	if (r === 0) return 0;
	var r2 = r % d;
	var idx = rs.indexOf(r2);
	if (idx < 0) return remainders(d, 10*r2, [r2].concat(rs));
	return idx + 1;
}

function solve0() {
	function getInfo(n) {
		return { n: n, l: recurringLength(unitFraction(n)) };
	}

	var result = _.reduce(_.map(_.range(3,1000), getInfo), function(info, next) {
		return info.l > next.l ? info : next;
	}, getInfo(2));

	return result.n;
}

function solve1() {
	function getInfo(n) {
		return { n: n, l: recurringCycle(n) };
	}

	var result = _.reduce(_.map(_.range(3,1000), getInfo), function(info, next) {
		return info.l > next.l ? info : next;
	}, getInfo(2));

	return result.n;
}

(function(time) {
	console.log('m: ' + solve0() + ' / ' + (new Date() - time));
})(new Date());

(function(time) {
	console.log('1: ' + solve1() + ' / ' + (new Date() - time));
})(new Date());
