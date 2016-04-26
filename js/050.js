/*
 50.
 The prime 41, can be written as the sum of six consecutive primes:

 41 = 2 + 3 + 5 + 7 + 11 + 13
 This is the longest sum of consecutive primes that adds to a prime below one-hundred.

 The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

 Which prime, below one-million, can be written as the sum of the most consecutive primes?
 */



//prime.cache = {
//	'1': 2
//};
//prime.recache = {
//	'2': 1
//};
//function prime(n) {
//	if (prime.cache[n])
//		return prime.cache[n];
//
//	for (var i = prime(n - 1) + 1; ; i++) {
//		if (isPrime(i)) {
//			prime.cache[n] = i;
//			prime.recache[i] = n;
//			return i;
//		}
//	}
//}
//
//sumPrimes.cache = {
//	'0': 0,
//	'1': 2
//};
//function sumPrimes(n) {
//	if (sumPrimes.cache[n]) return sumPrimes.cache[n];
//
//	var result = sumPrimes(n - 1) + prime(n);
//	sumPrimes.cache[n] = result;
//	return result;
//}

function getPrimes(start, limit) {
	var primeSet = [];
	for (var i = start; i < limit; i++) {
		if (isPrime(i)) primeSet.push(i);
	}
	return primeSet;
}

function my2(limit) {
	var result = 0; // 연속된 소수의 합
	var countOfPrimes = 0; // 연속된 소수의 합에 사용된 소수의 개수
	var primes = getPrimes(2, limit); // limit 보다 작은 소수 배열
	var primeSum = []; // 소수의 합 배열
	var i, j, temp;

	primeSum[0] = 0;
	for (i = 0; i < primes.length; i++) {
		primeSum[i + 1] = primeSum[i] + primes[i];
	}

	for (i = countOfPrimes; i < primeSum.length; i++) {
		// 이전의 countOfPrimes 보다 큰 수를 찾아야 하므로 그에 맞는 j 값 설정
		for (j = i - (countOfPrimes + 1); j >= 0; j--) {
			temp = primeSum[i] - primeSum[j];

			// j 값의 감소에 따라 temp 값은 커지므로 temp > limit 이면 j에 대한 for 루프 break
			if (temp > limit) break;

			// 해당 temp 값이 소수이면 이 때의 countOfPrimes 와 result 저장
			if (isPrime(temp)) {
				result = temp;
				countOfPrimes = i - j;
			}
		}
	}

	return [result, countOfPrimes].join(' / ');
}

console.log(my2(100)); // 41 = 2 + 3 + 5 + 7 + 11 + 13 = sumPrimes(6) - sumPrimes(0)
console.log();
console.log(my2(1000)); // 953 = 21개 모두 홀수
console.log();
console.log(my2(1000000)); // ?