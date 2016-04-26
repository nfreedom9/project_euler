//var fn = require("./fn"),
//	_ = fn._;

/*
 19.
 You are given the following information, but you may prefer to do some research for yourself.

 1 Jan 1900 was a Monday.
 Thirty days has September, April, June and November.
 All the rest have thirty-one,
 Saving February alone,
 Which has twenty-eight, rain or shine.
 And on leap years, twenty-nine.
 A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

 How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */

// 해당 년도가 윤년이면 true, 아니면 false 리턴
function isLeapYear(year) {
	return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}

// 1900년부터 year년까지의 윤년을 고려한 날짜수
function getDaysByYearFrom1900(year) {
	var result = 0, i;
	for (i = 1900; ; i++) {
		if (i === year) return result;
		result += (isLeapYear(i) ? 366 : 365);
	}
}

// 윤년(y)을 고려한 각 달(m)의 날짜 수
function getDaysOfMonth(m, y) {
	if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) return 31;
	if (m === 4 || m === 6 || m === 9 || m === 11) return 30;
	if (m === 2) {
		if (isLeapYear(y)) return 29;
		return 28;
	}
	throw new Error("check month!!");
}

// y년이 윤년인지 아닌지에 따라 1월부터 m월 까지의 날짜 수
function getDaysByMonthYearFromJan(m, y) {
	var result = 0;

	for (var i = 1; i < m; i++) {
		result += getDaysOfMonth(i, y);
	}

	return result;
}

// 1900년 1월 1일로부터 dateArr 까지의 날짜 수
function getDaysByDateArrFrom1900_01_01(dateArr) {
	return getDaysByYearFrom1900(dateArr[0])
		+ getDaysByMonthYearFromJan(dateArr[1], dateArr[0])
		+ (dateArr[2] - 1);
}
//console.log(_.map([[1900,1,1],[1900,1,31],[1901,1,1],[1902,1,1],[1903,1,1],[1904,1,1]], getDaysByDateArrFrom1900_01_01));
//// [ 0, 30, 365, 730, 1095, 1460 ]

// 주어진 dateArr 다음날의 dateArr
function getNextDate(dateArr) {
	var thisYear = dateArr[0], thisMonth = dateArr[1], thisDay = dateArr[2];
	// 오늘이 이 달의 말일이 아니면 날짜만 +1
	if (thisDay !== getDaysOfMonth(thisMonth, thisYear)) return [thisYear, thisMonth, thisDay + 1];
	// 오늘이 이달의 말일이고 12월이 아니면 다음달 1일
	if (thisMonth !== 12) return [thisYear, thisMonth + 1, 1];
	// 오늘이 이달의 말일이고 12월이면 다음년 1월 1일
	return [thisYear + 1, 1, 1];
}
//console.log(_.map([[1900,1,1],[1900,1,31],[1900,12,31]], getNextDate)); // [ [ 1900, 1, 2 ], [ 1900, 2, 1 ], [ 1901, 1, 1 ] ]

// [1900, 1, 1] 로부터 days 지난 날짜의 dateArr
function getDateArrFrom1900_01_01After(days) {
	if (getDateArrFrom1900_01_01After.cache[days]) return getDateArrFrom1900_01_01After.cache[days];
	return getDateArrFrom1900_01_01After.cache[days] = getNextDate(getDateArrFrom1900_01_01After(days - 1));
}
getDateArrFrom1900_01_01After.cache = { '0': [ 1900, 1, 1 ] };
//console.log(_.map([[1900,1,1],[1900,1,31],[1901,1,1],[1902,1,1],[1903,1,1],[1904,1,1]], function(dateArr) {
//	return getDateArrFrom1900_01_01After(getDaysByDateArrFrom1900_01_01(dateArr));
//})); // [ [ 1900, 1, 1 ], [ 1900, 1, 31 ], [ 1901, 1, 1 ], [ 1902, 1, 1 ], [ 1903, 1, 1 ], [ 1904, 1, 1 ] ]

function solve1(startArr, lastArr) {
	var result = 0, l = getDaysByDateArrFrom1900_01_01(lastArr);

	for (var i = getDaysByDateArrFrom1900_01_01(startArr); i <= l; i++) {
		if (i % 7 === 6 && getDateArrFrom1900_01_01After(i)[2] === 1) result += 1;
	}

	return result;
}

function solve2(startArr, lastArr) {
	var i, result = 0, date = new Date(startArr[0] + '-' + startArr[1] + '-' + startArr[2]);

	for (i = 0; ; i++) {
		date.setMonth(date.getMonth() + 1);
		if (date.getDay() % 7 === 0) result += 1;
		if (date.getFullYear() == lastArr[0] && date.getMonth() == (lastArr[1] - 1)) break;
	}

	return result;
}

console.log("# # # # # # # # # # # # # # # # # # # # 019 # # # # # # # # # # # # # # # # # # # #");

(function(time) {
	console.log('1: ' + solve1([1901, 1, 1], [2000, 12, 31]) + ' / ' + (new Date() - time));
})(new Date());

(function(time) {
	console.log('2: ' + solve2([1901, 1, 1], [2000, 12, 31]) + ' / ' + (new Date() - time));
})(new Date());
