//Question 32 - Pandigital Primes
let tally = 0;
const vals = [];

for (let i = 1; i <= 9876 / 2; i++) {
	for (let k = 1; k < i / 2; k++) {
		const val = k * i;
		const strToArr = [...(String(val) + String(k) + String(i))];
		if (strToArr.length == 9) {
			for (let j = 1; j <= 9; j++) {
				const indx = strToArr.indexOf(String(j));
				if (indx >= 0) {
					strToArr.splice(indx, 1);
				} else {
					break;
				}
			}
			if (!strToArr.length) {
				if (vals.indexOf(val) === -1) {
					vals.push(val);
					tally += val;
				}
			}
		}
	}
}

console.log(tally);
