//Question 34 - Digit Factorials
let sumOfAll = 0;
for (let i = 3; i <= 362880; i++) {
	let tallyOfI = 0;
	for (let k of i.toString()) {
		let innerTally = 1;
		for (let j = k; j > 0; j--) {
			innerTally *= j;
		}
		tallyOfI += innerTally;
		innerTally = 0;
	}
	tallyOfI === i ? (sumOfAll += i) : false;
}
console.log(sumOfAll);
