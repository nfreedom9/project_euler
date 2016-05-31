/*
 33.
 The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

 We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

 There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

 If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
 */

var _ = require("./fn")._;

function solve033_1() {
	var result = [];
	for (var mo = 10; mo < 100; mo++) {
		for (var ja = 10; ja < 100; ja++) {
			if (check(ja, mo)) result.push({ ja: ja, mo: mo });
		}
	}

	function removeCommonChar(ja, mo) {
		if (mo[0] == ja[0] || mo[1] == ja[1] || ja > mo) return;
		if (mo[0] == ja[1]) return { mo: mo[1], ja: ja[0], cm: mo[0] };
		if (mo[1] == ja[0]) return { mo: mo[0], ja: ja[1], cm: mo[1] };
	}

	function check(ja, mo) {
		ja += '';
		mo += '';
		var common = removeCommonChar(ja.split(""), mo.split(""));
		if (!common || ja * common.mo != mo * common.ja) return;
		//console.log(ja + ' / ' + mo + '   =   ' + common.ja + ' / ' + common.mo);
		return true;
	}

	var jm = _.reduce(result, function(res, mj) {
		return { m: res.m * mj.mo, j: res.j * mj.ja };
	}, { m: 1, j: 1 });

	for (var i = jm.m; i > 1; i--) {
		if (jm.j % i === 0 && jm.m % i === 0) {
			jm.j /= i;
			jm.m /= i;
			break;
		}
	}

	return jm.m
}

(function(time) {
	console.log('     # 033_1: ' + solve033_1() + ' / ' + (new Date() - time));
})(new Date());