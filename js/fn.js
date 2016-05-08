var fn = {};

var _ = fn._ = require("underscore");

fn.orify = function(/* predicates */) {
	var predicates = _.toArray(arguments);
	return function(/* args */) {
		var args = _.toArray(arguments),
			something = function(predicates, truth) {
				if (_.isEmpty(predicates)) return truth;
				return _.some(args, _.first(predicates)) || something(_.rest(predicates), truth);
			};
		return something(predicates, false);
	};
};

/**
 * @param index
 * @returns {*} 피보나치 수열 index 해당 요소
 */
var fibonacci = fn.fibonacci = function(index) {
	var a = 0, b = 1, c;
	for (var i = 0; i <= index; i++) {
		c = a + b;
		a = b;
		b = c;
	}
	return c;
};

/**
 * @param size
 * @returns {Array} size 에 해당하는 피보나치 수열
 */
fn.fibonacciSet = function(size) {
	var result = [], i;
	for (i = 0; i < size; i++) {
		result.push(fibonacci(i));
	}
	return result;
};

/**
 * @param number
 * @returns {boolean} 거꾸로 읽어도 같은지 여부
 */
fn.isPalindrome = function(number) {
	var str = '' + number;
	return str == str.split('').reverse().join('');
};

/**
 * @param number
 * @param arr - 재귀함수를 위한 배열. 최초실행시 입력 X
 * @returns {*|Array} - number 소인수와 그 각각의 지수
 * (ex) getPrimeFactorsWithCnt(2*2*3*3) => [ [ 2, 2 ], [ 3, 2 ] ]
 */
var getPrimeFactorsWithCnt = fn.getPrimeFactorsWithCnt = function(number, arr) {
	arr = arr || []; // arr 초기화
	var cnt;
	if (number === 1) return arr;
	if (number % 2 === 0) {
		cnt = 0;
		while (number % 2 === 0) {
			cnt++;
			number /= 2;
		}
		arr.push([2, cnt]);
		return getPrimeFactorsWithCnt(number, arr);
	}

	for (var i = 3; i <= number; i += 2) {
		if (number % i === 0) {
			cnt = 0;
			while (number % i === 0) {
				cnt++;
				number /= i;
			}
			arr.push([i, cnt]);
			return getPrimeFactorsWithCnt(number, arr);
		}
	}
};

/**
 * @param limit
 * @returns {Array} - limit 미만의 소수 배열
 */
fn.prime_sieve = function(limit) {
	if (limit <= 2) return [];
	var result = [2];
	for (var i = 3; ; i += 2) {
		if (i > limit) return result;
		if (isPrime(i)) result.push(i);
	}
};

/**
 * @param n
 * @returns {boolean} - n이 소수인지 아닌지
 */
var isPrime = fn.isPrime = function(n) {
	if (n == 1) return false; // 1,
	if (n < 4) return true; // 2, 3,
	if (n % 2 == 0) return false; // 4, 6, 8, 10, 12,,,2(k+1),,, k:1~
	if (n < 9) return true; // 5, 7,
	if (n % 3 == 0) return false; // 9, 15, 21, 27,,,3(2k+1),,, k:1~
	var r = Math.sqrt(n); // n rounded to the greatest integer r so that r * r <= n
	var f = 5;
	while (f <= r) {
		//console.log(['r:', r, '/ n:', n, '/ f:', f, '/ d1:', n % f, '/ d2:', n % (f + 2)].join(' '));
		if (n % f === 0) return false; // 25, 35, 55, 65, 85, 95,,,
		if (n % (f + 2) === 0) return false; // 49, 77, 91,,,
		f = f + 6;
	}
	return true; // 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
};

/**
 * @param n1
 * @param n2
 * @returns {number} n1 과 n2 의 최소공배수
 */
fn.lcm = function(n1, n2) {
	for (var i = 1; ; i++) {
		//console.log('n1: '+n1+' * i: '+i+' = ' + n1 * i);
		if ((n1 * i) % n2 === 0) {
			return n1 * i;
		}
	}
};

/**
 * (a+b) 의 n 제곱의 계수 배열 구하기
 * @param n
 * @returns {number[]}
 */
fn.getSquaredCoefficients = function(n) {
	var result = [1,1];
	for (var i = 1; i < n; i++) {
		result = arrSum(result.concat([0]), [0].concat(result));
	}
	return result;
};

fn.trampoline = function(fun /*, args */) {
	var result = fun.apply(fun, _.rest(arguments));
	while (_.isFunction(result)) {
		result = result();
	}
	return result;
};

fn.sum = function(a, b) { return a + b; };

var existy = function(x) { return x != null; };

var cat = fn.cat = function() {
	var head = _.first(arguments);
	if (existy(head)) return head.concat.apply(head, _.rest(arguments));
	return [];
};

fn.partial = function(fun /*, preArgs */) {
	var preArgs = _.rest(arguments);
	return function(/* arguments */) {
		return fun.apply(fun, cat(preArgs, _.toArray(arguments)));
	};
};

var isSquared = fn.isSquared = function(num) {
	var sqrt = Math.sqrt(num);
	return sqrt === parseInt(sqrt, 10);
};

/**
 * @param number
 * @returns {number} - number 인수 갯수
 */
fn.getFactorsCount = function(number) {
	//return getFactors(number).length;
	var result = 0, sqrt = Math.sqrt(number);
	for (var i = 1; i < sqrt; i++) if (number % i === 0) result += 2;
	return isSquared(number) ? result + 1 : result;
};

fn.getTriangleNumbers = function(length) {
	var result = [], triNo = 0;
	for (var i = 1; i <= length; i++) {
		triNo += i;
		result.push(triNo);
	}
	return result;
};
/**
 * @param limit
 * @returns {Array} - limit 이하의 소수 배열
 */
fn.getPrimes = function(limit) {
	var result = [];
	for (var i = 1; i <= limit; i++) {
		if (isPrime(i)) result.push(i);
	}
	return result;
};

/**
 * @param arr1
 * @param arr2
 * @returns {boolean} 두 배열의 공동 요소가 있는지 여부
 */
fn.hasCommonElem = function(arr1, arr2) {
	var i1, i2, l1 = arr1.length, l2 = arr2.length;
	for (i1 = 0; i1 < l1; i1++) {
		for (i2 = 0; i2 < l2; i2++) {
			if (arr1[i1] === arr2[i2]) {
				//console.log('arr1['+i1+'] === arr2['+i2+'] : ' + arr1[i1]);
				return true;
			}
		}
	}
	return false;
};

fn.getCommonElem = function(arr1, arr2) {
	var i1, i2, l1 = arr1.length, l2 = arr2.length;
	for (i1 = 0; i1 < l1; i1++) {
		for (i2 = 0; i2 < l2; i2++) {
			if (arr1[i1] === arr2[i2]) {
				//console.log('arr1['+i1+'] === arr2['+i2+'] : ' + arr1[i1]);
				return arr1[i1];
			}
		}
	}
	return false;
};

fn.sumOfIntArr = function(intArr) {
	return _.reduce(intArr, function(a,b) {
		return a + b;
	}, 0);
};

module.exports = fn;