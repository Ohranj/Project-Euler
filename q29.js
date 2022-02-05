//Question 29 - Distinct Powers
const allVals = [];

for (let i = 2; i <= 100; i++) {
	for (let k = 2; k <= 100; k++) {
		allVals.push(Math.pow(i, k));
	}
}

const uniqueVals = [...new Set(allVals)].length;
console.log(uniqueVals);
