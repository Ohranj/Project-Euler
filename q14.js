//Question 14 - Longest collatz sequence
const sequenceVals = [];
let countTally = 0;
let ans = 0;

for (let i = 999999; i >= 13; i--) {
	sequenceVals.length = 0;
	let val = i;
	sequenceVals.push(val);
	do {
		val % 2 !== 0 ? (val = 3 * val + 1) : (val = val / 2);
		sequenceVals.push(val);
	} while (val > 1);
	if (sequenceVals.length > countTally) {
		countTally = sequenceVals.length;
		ans = i;
	}
}
console.log(ans);
