/*
 65.
 */

(function() {
	return;
	console.log(Math.sqrt(2)); // => [1;(2)] => 1, 3/2, 7/5, 17/12, 41/29, 99/70, 239/169, 577/408, 1393/985,,,
	console.log(1); // 1
	console.log(1 + (1 / 2)); // 3/2
	console.log(3 / 2);
	console.log(1 + (1 / (2 + 1 / 2))); // 7/5
	console.log(7 / 5);
	console.log(1 + (1 / (2 + 1 / (2 + 1 / 2)))); // 17/12
	console.log(17 / 12);
	console.log(1 + (1 / (2 + 1 / (2 + 1 / (2 + 1 / 2))))); // 41/29
	console.log(41 / 29);
	console.log(1 + (1 / (2 + 1 / (2 + 1 / (2 + 1 / (2 + 1 / 2)))))); // 99/70
	console.log(99 / 70);
	console.log(1 + (1 / (2 + 1 / (2 + 1 / (2 + 1 / (2 + 1 / (2 + 1 / 2))))))); // 239/169
	console.log(239 / 169);
	console.log(1 + (1 / (2 + 1 / (2 + 1 / (2 + 1 / (2 + 1 / (2 + 1 / (2 + 1 / 2)))))))); // 577/408
	console.log(577 / 408);
	console.log(1 + (1 / (2 + 1 / (2 + 1 / (2 + 1 / (2 + 1 / (2 + 1 / (2 + 1 / (2 + 1 / 2))))))))); // 1393/985
	console.log(1393 / 985);
	console.log();
	console.log(Math.sqrt(23)); // => [4;(1,3,1,8)]
	console.log(4);
	console.log(4 + (1 / 1));
	console.log(4 + (1 / (1 + (1 / 3))));
	console.log(4 + (1 / (1 + (1 / (3 + 1 / 1)))));
	console.log(4 + (1 / (1 + (1 / (3 + 1 / (1 + 1 / 8))))));
	console.log(4 + (1 / (1 + (1 / (3 + 1 / (1 + 1 / (8 + 1 / 1)))))));
	console.log(4 + (1 / (1 + (1 / (3 + 1 / (1 + 1 / (8 + 1 / (1 + 1 / 3))))))));
	console.log(4 + (1 / (1 + (1 / (3 + 1 / (1 + 1 / (8 + 1 / (1 + 1 / (3 + 1 / 1)))))))));
	console.log(4 + (1 / (1 + (1 / (3 + 1 / (1 + 1 / (8 + 1 / (1 + 1 / (3 + 1 / (1 + 1 / 8))))))))));
	console.log();
	console.log(Math.E); // => [2; 1,2,1, 1,4,1, 1,6,1, ,,, 1,2k,1,,,]
	console.log(2);
	console.log(2 + (1 / 1));
	console.log(2 + (1 / (1 + 1 / 2)));
	console.log(2 + (1 / (1 + 1 / (2 + 1 / 1))));
	console.log(2 + (1 / (1 + 1 / (2 + 1 / (1 + 1 / 1)))));
	console.log(2 + (1 / (1 + 1 / (2 + 1 / (1 + 1 / (1 + 1 / 4))))));
	console.log(2 + (1 / (1 + 1 / (2 + 1 / (1 + 1 / (1 + 1 / (4 + 1 / 1)))))));
	console.log(2 + (1 / (1 + 1 / (2 + 1 / (1 + 1 / (1 + 1 / (4 + 1 / (1 + 1 / 1))))))));
	console.log(2 + (1 / (1 + 1 / (2 + 1 / (1 + 1 / (1 + 1 / (4 + 1 / (1 + 1 / (1 + 1 / 6)))))))));
	console.log(2 + (1 / (1 + 1 / (2 + 1 / (1 + 1 / (1 + 1 / (4 + 1 / (1 + 1 / (1 + 1 / (6 + 1 / 1))))))))));
	console.log(2 + (1 / (1 + 1 / (2 + 1 / (1 + 1 / (1 + 1 / (4 + 1 / (1 + 1 / (1 + 1 / (6 + 1 / (1 + 1 / 1)))))))))));
	console.log(2 + (1 / (1 + 1 / (2 + 1 / (1 + 1 / (1 + 1 / (4 + 1 / (1 + 1 / (1 + 1 / (6 + 1 / (1 + 1 / (1 + 1 / 8))))))))))));
})();

function Fountain1(denominator, molecular) {
	denominator = denominator || 0;
	molecular = molecular || 1;
	if (this.constructor !== Fountain1) return new Fountain1(denominator, molecular);
	this.denominator = denominator;
	this.molecular = molecular;
}

Fountain1.prototype.toString = function() {
	return this.denominator + '/' + this.molecular;
};

Fountain1.prototype.calculate = function() {
	return this.denominator / this.molecular;
};

Fountain1.prototype.reciprocal = function() {
	var d = this.denominator;
	this.denominator = this.molecular;
	this.molecular = d;
	return this;
};

Fountain1.prototype.add = function(n) {
	this.denominator += this.molecular * n;
	return this;
};

function SquareInfo1(init, fn) {
	if (this.constructor !== SquareInfo1) return new SquareInfo1(init, fn);
	this.init = init;
	this.getMolecularByIdx = fn;
}

SquareInfo1.prototype.getApproxValue = function(cnt) {
	//console.log();
	//console.log('getApproxValue(' + cnt + ') 실행');
	var fountain = this.getFountain1(cnt - 1);
	//console.log('this.getFountain1(' + (cnt - 1) + '): ' + fountain);
	return fountain.add(this.init);
};

SquareInfo1.prototype.getFountain1 = function(cnt) {
	//console.log('getFountain1(' + cnt + ')');
	if (cnt === 0) return Fountain1(0);
	var result = Fountain1(this.getMolecularByIdx(cnt - 1)).reciprocal(), i;
	for (i = cnt - 2; i >= 0; i--) {
		result = result.add(this.getMolecularByIdx(i)).reciprocal();
	}
	return result;
};

function SquareInfo2(init, fn) {
	if (this.constructor !== SquareInfo2) return new SquareInfo2(init, fn);
	this.init = init;
	this.getMolecularByIdx = fn;
}

SquareInfo2.prototype.getApproxValue = function(cnt) {
	//console.log();
	//console.log('getApproxValue(' + cnt + ') 실행');
	var fountain = this.getFountain2(cnt - 1);
	//console.log('this.getFountain2(' + (cnt - 1) + '): ' + fountain);
	return fountain.add(this.init);
};

SquareInfo2.prototype.getFountain2 = function(cnt) {
	//console.log('getFountain2(' + cnt + ')');
	if (cnt === 0) return Fountain2(0);
	var result = Fountain2(this.getMolecularByIdx(cnt - 1)).reciprocal(), i;
	for (i = cnt - 2; i >= 0; i--) {
		//console.log('@@@@@@@@@@@@@@ ' + result);
		result = result.add(this.getMolecularByIdx(i)).reciprocal();
	}
	//console.log('@@@@@@@@@@@@@@ ' + result);
	return result;
};

function Fountain2(denominator, molecular) {
	denominator = denominator || 0;
	molecular = molecular || 1;
	if (this.constructor !== Fountain2) return new Fountain2(denominator, molecular);

	//this.denominator = denominator;
	//this.molecular = molecular;
	// TODO
	this.denominator = '' + denominator;
	this.molecular = '' + molecular;
}

Fountain2.prototype.toString = function() {
	return this.denominator + '/' + this.molecular;
};

Fountain2.prototype.calculate = function() {
	return this.denominator / this.molecular;
};

Fountain2.prototype.reciprocal = function() {
	var d = this.denominator;
	this.denominator = this.molecular;
	this.molecular = d;
	return this;
};

Fountain2.prototype.add = function(n) {
	this.denominator = pl(this.denominator, (mul(this.molecular, n)));
	return this;
};

Fountain2.prototype.sumDenominatorDigit = function() {
	return _.reduce(this.denominator, function(a, b) {
		return a + int(b);
	}, 0);
};

function int(ns) {
	return parseInt(ns, 10);
}

function pl(ns1, ns2) {
	var n_s1 = ns1.split('').reverse(),
		n_s2 = ns2.split('').reverse(),
		len = n_s1.length > n_s2.length ? n_s1.length : n_s2.length,
		i, ol, n_s = [], result;

	for (i = 0; i < len; i++) {
		n_s[i] = parseInt(n_s1[i] || 0, 10) + parseInt(n_s2[i] || 0, 10);
	}

	for (i = 0; ; i++) {
		if (n_s[i + 1] !== 0 && !n_s[i + 1]) {
			result = n_s.reverse().join('');
			//console.log('pl("'+ns1+'", "'+ns2+'") return ' + result + ' == ' + (int(ns1) + int(ns2)));
			//console.log();
			return result;
		}
		ol = parseInt(n_s[i] / 10, 10);
		if (ol) {
			n_s[i + 1] += ol;
			n_s[i] %= 10;
		}
	}
}

function mul(ns, m) {
	if (!m) return '0';
	var n_s = ns.split('').reverse(), i, len = n_s.length, ol, result;

	for (i = 0; i < len; i++) {
		n_s[i] *= m;
	}

	for (i = 0; ; i++) {
		if (n_s[i + 1] !== 0 && !n_s[i + 1]) {
			result = n_s.reverse().join('');
			//console.log('mul("' + ns + '", ' + m + ') return ' + result + ' == ' + (int(ns) * m));
			//console.log();
			return result;
		}

		ol = parseInt(n_s[i] / 10, 10);
		if (ol) {
			n_s[i + 1] += ol;
			n_s[i] %= 10;
		}
	}
}

console.log();

(function() {
	var squareInfo2 = SquareInfo2(2, function(n) {
			if (n % 3 !== 1) return 1;
			return 2 * ((n + 2) / 3);
		});

	console.log('결과!!!!');
	console.log(squareInfo2.getApproxValue(100).denominator);
	console.log(squareInfo2.getApproxValue(100).sumDenominatorDigit());
})();

console.log('END');


// 2/1, 3/1, 8/3, 11/4, 19/7, 87/32, 106/39, 193/71, 1264/465, 1457/536,
// 2/1, 2/1, 6/3,  8/4, 14/7, 64/32,  78/39, 141/71,  930/465, 1072/536,
// 0/1, 1/1, 2/3,  3/4,  5/7, 23/32,  28/39,  51/71,  334/465,  385/536, 719/1001,

