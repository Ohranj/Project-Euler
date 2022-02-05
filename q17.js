//Question 17 - Number letter counts
const str = {
	0: 0,
	1: 3,
	2: 3,
	3: 5,
	4: 4,
	5: 4,
	6: 3,
	7: 5,
	8: 5,
	9: 4,
	10: 3,
	11: 6,
	12: 6,
	13: 8,
	14: 8,
	15: 7,
	16: 7,
	17: 9,
	18: 8,
	19: 8,
	20: 6,
	30: 6,
	40: 5,
	50: 5,
	60: 5,
	70: 7,
	80: 6,
	90: 6,
};

const getFirst100 = new Promise((res) => {
	let tally = 0;
	for (let i = 0; i <= 99; i++) {
		if (i <= 20) {
			tally += str[i];
			continue;
		}
		tally += str[i.toString()[0] + "0"];
		i.toString()[1] === "0" ? false : (tally += str[i.toString()[1]]);
	}
	res(tally);
})
	.then((tally) => (tally *= 10))
	.then((tally) => {
		for (let k = 100; k <= 999; k++) {
			tally += str[k.toString()[0]];
			tally += 7;
			k % 100 === 0 ? false : (tally += 3);
		}
		return tally;
	})
	.then((tally) => (tally += 11))
	.then((tally) => console.log(tally));
