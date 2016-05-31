/*
 31.
 In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
 It is possible to make £2 in the following way:

 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
 How many different ways can £2 be made using any number of coins?
 */

function solve031_1() {
	return (function ways(coins, val) {
		if (!coins.length) return val === 0 ? 1 : 0;

		var thisCoin = coins[0], maxCoinCnt = Math.floor(val / thisCoin), result = 0;
		for (var thisCoinCnt = 0; thisCoinCnt <= maxCoinCnt; thisCoinCnt++) {
			result += ways(coins.slice(1), (val - thisCoin * thisCoinCnt));
		}
		return result;
	})([1, 2, 5, 10, 20, 50, 100, 200], 200);
}

(function(time) {
	console.log(' # 031_1: ' + solve031_1() + ' / ' + (new Date() - time));
})(new Date());