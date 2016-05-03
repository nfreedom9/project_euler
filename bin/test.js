var i;

for (i = 1; i <= 5; i++) {
	require(i < 10 ? "../js/00" + i : "../js/0" + i);
}

console.log("# # # # # # # # # # # # # # # # # # # # END # # # # # # # # # # # # # # # # # # # #");