//Question 16 - Power digit sum
const sum = BigInt(Math.pow(2, 1000))
	.toString()
	.split("")
	.reduce((t, c) => (t += Number(c)), 0);

console.log(sum);
