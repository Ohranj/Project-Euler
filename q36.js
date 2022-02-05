//Question 36 - Double-base palindromes
let tally = 0;

for (let i = 1; i < 1000000; i++) {
	const asStr = i.toString();
	if (asStr[0] != asStr[asStr.length - 1]) {
		continue;
	}
	const asDecimal = Number(i.toString(10).split("").reverse().join(""));
	const asBinary = i.toString(2).split("").reverse().join("");
	i === asDecimal
		? i.toString(2) === asBinary
			? (tally += i)
			: false
		: false;
}

console.log(tally);
