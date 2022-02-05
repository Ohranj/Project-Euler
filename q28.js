//Question 28 - Number spiral diagonals
let patternCollect = 2;
let sum = 0;
let valsPerRing = 0;

for (let i = 1; i <= 1001 * 1001; i += patternCollect) {
	if (valsPerRing === 4) {
		valsPerRing = 0;
		patternCollect += 2;
	}
	valsPerRing++;
	sum += i;
}
console.log(sum);
