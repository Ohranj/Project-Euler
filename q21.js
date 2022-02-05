//Question 21 - Amicable numbers
let fva = [];
let sva = [];
let fv = 0;
let sv = 0;
let ap = 0;

for (let i = 1; i < 10000; i++) {
	for (let k = 1; k <= i / 2; k++) {
		fv = i % k === 0 ? (fv += k) : fv;
	}
	for (let j = 1; j <= fv / 2; j++) {
		sv = fv % j === 0 ? (sv += j) : sv;
	}
	ap = i === sv && fv != sv ? (ap += i) : ap;
	reset();
}

function reset() {
	fva.length = 0;
	sva.length = 0;
	fv = 0;
	sv = 0;
}

console.log(ap);
