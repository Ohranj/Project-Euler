//Question 20 - Factorial digit sum
let i = BigInt(100);

do {
	sum *= BigInt(i);
	i--;
} while (i >= 1);

const answer = sum
	.toString()
	.split("")
	.reduce((acc, c) => {
		return (acc += BigInt(c));
	}, BigInt(0));

console.log(answer);
