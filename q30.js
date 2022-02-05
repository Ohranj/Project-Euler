//Question 30 - Digit fifth powers
const maxVal = Math.pow(9, 5) * 9;
let fithPowersSum = 0;

for (let i = 2; i <= maxVal; i++) {
	const PowerOfDigits = i
		.toString()
		.split("")
		.reduce((acc, c) => (acc += Math.pow(c, 5)), 0);
	i === PowerOfDigits ? (fithPowersSum += i) : false;
}
console.log(fithPowersSum);
