var fn = require("./fn"),
	_ = fn._;

console.log("# # # # # # # # # # # # # # # # # # # # 016 # # # # # # # # # # # # # # # # # # # #");

/*
 16.
 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

 What is the sum of the digits of the number 2^1000?
 */

function getSquared2of(K) {
	var intArr = [1], sum = 0, i, j, length, temp;
	for (i = 0; i < K; i++) {
		length = intArr.length; // 숫자 길이

		// intArr 모든 자릿수에 대하여 2배
		for (j = 0; j < length; j++) intArr[j] = 2 * intArr[j];

		// intArr 마지막 요소가 10 이상인 경우 마지막 요소 0 추가, length 도 수정
		if (intArr[length - 1] >= 10) {
			intArr[length] = 0;
			length++;
		}

		// 두번째 배열부터 이전 요소가 10 이상인지 확인하여 요소 수정
		for (j = 1; j < length; j++) {
			temp = intArr[j - 1];
			// 이전 요소가 10 이상인 경우 현재 요소에 += 1, 이전 요소는 %= 10
			if (temp >= 10) {
				intArr[j] += 1;
				intArr[j - 1] %= 10;
			}
		}
	}

	// 모든 자릿수의 합 계산
	for (j = 0; j < intArr.length; j++) sum += intArr[j];
	//console.log(intArr.reverse().join("")); // 해당 숫자
	return _.reduce(intArr, function(acc, n) {
		return acc + n;
	});
}

(function(time) {
	console.log('m: ' + getSquared2of(15) + ' / ' + getSquared2of(1000) + ' / ' + (new Date() - time));
})(new Date());