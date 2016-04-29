console.log("# # # # # # # # # # # # # # # # # # # # 031 # # # # # # # # # # # # # # # # # # # #");

var fn = require("./fn"),
	_ = fn._;

/*
 31.
 In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
 It is possible to make £2 in the following way:

 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
 How many different ways can £2 be made using any number of coins?
 */

var dongs = [ 1, 2, 5, 10, 20, 50, 100, 200 ];

function h(iArr, addArr) {
	//console.log('1111111111');
	//console.log(iArr);
	//console.log(addArr);
	//console.log('1111111111');
	var result = _.map(info[iArr[0]].slice(1,info[iArr[0]].length), function(arr) {
		return arr.concat(addArr).sort().reverse();
	});
	if (iArr.length == 1) {
		console.log(result);
		return result;
	}

	return h(iArr.slice(1, iArr.length), h([iArr[0]], addArr));
}

var info = {};
info[1] = [[1]];
info[2] = [[2],[1,1]];
info[5] = [[5],[2,2,1]].concat(h([2],[2,1])).concat(h([2,2],[1]));
info[10] = [[10],[5,5]].concat(h([5],[5])).concat(h([5,5],[]));

console.log(info);

function solve0(n) {

}

_.each(dongs, function(dong) {
	console.log(solve0(dong));
});

var result = [
	[200],

	[100,100], [100,50,50], []];

(function(time) {
	console.log('0: ' + solve0() + ' / ' + (new Date() - time));
})(new Date());