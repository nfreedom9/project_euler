var fn = require("./fn"),
	_ = fn._;

/*
 22.
 Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

 For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

 What is the total of all the name scores in the file?
 */

var Problem = _.map(require('fs').readFileSync(__dirname + '/022.txt', "utf8").split(","), function(row) {
	return row.replace('"','').replace('"','');
}).sort();

var strInt = {};
_.each("ABCDEFGHIJKLMNOPQRSTUVWXYZ", function(ch, idx) {
	strInt[ch] = idx + 1;
});
//console.log(strInt);

function solve1() {
	var result = 0;
	_.each(Problem, function(str, idx) {
		var _res = 0;
		_.map(str, function(a) {
			_res += strInt[a];
		});
		result += _res * (idx + 1);
	});
	return result;
}

console.log("# # # # # # # # # # # # # # # # # # # # 022 # # # # # # # # # # # # # # # # # # # #");

(function(time) {
	console.log('1: ' + solve1() + ' / ' + (new Date() - time));
})(new Date());
