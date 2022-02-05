//Question 12 - Highly divisible triangular number
const factors = [];
let triNum = 0;

for (let i = 0; factors.length <= 501; i++) {
	factors.length = 0;
	triNum += i;
	for (let k = 0; k <= triNum; k++) {
		if (factors.length < 250 && triNum / k <= 2) {
			break;
		}
		if (triNum % k === 0) {
			factors.push(k);
		}
	}
}
console.log(triNum);
