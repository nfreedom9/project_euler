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

var _ = require("./fn")._;

// 해당 년도가 윤년이면 true, 아니면 false 리턴
function isLeapYear(year) {
	return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
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

// 1900년 1월 1일로부터 dateArr 까지의 날짜 수
function from1900_01_01(year, month, day) {
	return _.reduce(_.range(1900, year), function(days, y) {
			return days + (isLeapYear(y) ? 366 : 365);
		}, 0) + _.reduce(_.range(1, month), function(days, m) {
			return days + getDaysOfMonth(m, year);
		}, 0) + (day - 1);
}

var getDate_1900_01_01_after = (function() {
	// 주어진 dateArr 다음날의 dateArr
	function next(date) {
		var thisYear = date.y, thisMonth = date.m, thisDay = date.d;
		// 오늘이 이 달의 말일이 아니면 날짜만 +1
		if (thisDay !== getDaysOfMonth(thisMonth, thisYear)) return { y: thisYear, m: thisMonth, d: thisDay + 1 };
		// 오늘이 이달의 말일이고 12월이 아니면 다음달 1일
		if (thisMonth !== 12) return { y: thisYear, m: thisMonth + 1, d: 1 };
		// 오늘이 이달의 말일이고 12월이면 다음년 1월 1일
		return { y: thisYear + 1, m: 1, d: 1 };
	}

	var dateFrom_1900_01_01 = { '0': { y: 1900, m: 1, d: 1 } };
	return function(days) {
		return dateFrom_1900_01_01[days] || (dateFrom_1900_01_01[days] = next(getDate_1900_01_01_after(days - 1)));
	};
})();

function solve019_1() {
	return _.reduce(_.range(from1900_01_01(1901, 1, 1), from1900_01_01(2000, 12, 31)), function(acc, i) {
		return i % 7 === 6 && getDate_1900_01_01_after(i).d === 1 ? acc + 1 : acc;
	}, 0);
}

function solve019_2() {
	var date = new Date('1901-01-01'), result = date.getDay() % 7 === 0 ? 1 : 0;
	while (true) {
		date.setMonth(date.getMonth() + 1);
		if (date.getDay() % 7 === 0) result += 1;
		if (date.getFullYear() == 2000 && date.getMonth() == (12 - 1)) return result;
	}
}

(function(time) {
	console.log('       # 019_1: ' + solve019_1() + ' / ' + (new Date() - time));
})(new Date());
(function(time) {
	console.log('       # 019_2: ' + solve019_2() + ' / ' + (new Date() - time));
})(new Date());