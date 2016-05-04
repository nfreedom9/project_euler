/*
 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 The sum of these multiples is 23.
 Find the sum of all the multiples of 3 or 5 below 1000.
 */

var fn = require("./fn"),
    _ = fn._,
    orify = fn.orify,
    sum = fn.sum;

function canDividedBy(div) {
    return function (number) {
        return number % div === 0;
    };
}

function isOrMultiplesOf(divArr) {
    return orify.apply(null, _.map(divArr, canDividedBy));
}

function sumDivisibleBy(n) {
    var p = parseInt(999 / n);
    return n * (p * (p + 1)) / 2;
}

function solve001_1() {
    var sum = 0;
    for (var i = 1; i < 1000; i++) {
        if (!(i % 3) || !(i % 5)) sum += i;
    }
    return sum;
}

function solve001_2() {
    return _.reduce(_.range(1, 1000), function (total, num) {
        if (isOrMultiplesOf([3, 5])(num)) return total + num;
        return total;
    }, 0);
}

function solve001_3() {
    return sumDivisibleBy(3) + sumDivisibleBy(5) - sumDivisibleBy(15);
}

function solve001_4() {
    return (function tabulateFilterFold(upTo, filterFn, total, foldFn) {
        if (!upTo) return total;
        if (filterFn(upTo)) return tabulateFilterFold(upTo - 1, filterFn, foldFn(total, upTo), foldFn);
        return tabulateFilterFold(upTo - 1, filterFn, total, foldFn);
    })(999, isOrMultiplesOf([3, 5]), 0, sum);
}

function solve001_5() {
    return _.reduce(_.filter(_.range(1, 1000), isOrMultiplesOf([3, 5])), sum, 0);
}

function solve001_6() {
    return _.reduce(_.filter(_.range(1, 1000), function (num) {
        return canDividedBy(3)(num) || canDividedBy(5)(num);
    }), sum, 0);
}

(function (time) {
    console.log(' # 001: ' + solve001_1() + ' / ' + (new Date() - time));
})(new Date());

(function (time) {
    console.log(' # 001: ' + solve001_2() + ' / ' + (new Date() - time));
})(new Date());

(function (time) {
    console.log(' # 001: ' + solve001_3() + ' / ' + (new Date() - time));
})(new Date());

(function (time) {
    console.log(' # 001: ' + solve001_4() + ' / ' + (new Date() - time));
})(new Date());

(function (time) {
    console.log(' # 001: ' + solve001_5() + ' / ' + (new Date() - time));
})(new Date());

(function (time) {
    console.log(' # 001: ' + solve001_6() + ' / ' + (new Date() - time));
})(new Date());