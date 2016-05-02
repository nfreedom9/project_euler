var printN = 1;
function printR(s,r) {
	var R = r || s, S = r ? (s + ": ") : "";
	print(printN++ + "> " + S + R);
}



/**
 * @param number - 2 이상의 자연수
 * @returns {Array} - number 인수 배열
 */
function getFactors(number) {
	var result1 = [1], result2 = [number], sqrt = Math.sqrt(number);
	if (number < 2) return result1;

	for (var i = 2; i < sqrt; i++) {
		if (number % i === 0) {
			result1.push(i);
			result2.push(number / i);
		}
	}
	if (sqrt % 1 === 0) result1.push(sqrt);
	return result1.concat(result2.reverse());
}

/**
 * @param number
 * @param arr - 재귀함수를 위한 배열. 최초실행시 입력 X
 * @returns {*|Array} - number 소인수 배열
 */
function getPrimeFactors(number, arr) {
	arr = arr || []; // arr 초기화
	//console.log('getPrimeFactors(number: ' + number + ', arr: [' + arr + '])');
	if (!number || number === 1) return arr;
	for (var i = 2; i <= number; i++) {
		if (number % i === 0) {
			arr.push(i);
			for (; ;) {
				if (number % i !== 0) break;
				number /= i;
			}
			return getPrimeFactors(number, arr);
		}
	}

	arr.push(number);
	return arr;
}

/**
 * @param n
 * @returns {Number} 10 진수 자연수
 */
function int(n) {
	return parseInt(n, 10);
}
/**
 * @param n
 * @returns {number} n 의 제곱근
 */
function sqrt(n) {
	return Math.sqrt(n);
}


/**
 * @param n1
 * @param n2
 * @returns {boolean} n1과 n2가 같은 숫자의 조합인지 여부
 */
function is_perm(n1, n2) {
	return sorted('' + n1) == sorted('' + n2);
}
/**
 * @param str
 * @returns {string} 정렬된 스트링
 */
function sorted(str) {
	//console.log(str.split('').sort());
	return str.split('').sort().join('');
}
/**
 *
 * @param o
 * @returns {*}
 */
function len(o) {
	return o.length;
}
