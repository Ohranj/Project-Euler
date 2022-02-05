//Question 41 - Pandigital Prime
let primes = 0;
let isPan = true;

for (let i = 1; i <= 987654321; i += 2) {
	const str = i.toString();
	if (str[str.length - 1] == 5) {
		continue;
	}
	isPandigital(str);
	if (!isPan) {
		isPan = true;
		continue;
	}
	if (checkIsPrime(i)) {
		if (i < primes) {
			return;
		} else {
			primes = i;
		}
	}
}

function isPandigital(val) {
	let j = 1;
	do {
		const indx = val.split("").findIndex((x) => x == j);
		if (indx < 0) {
			isPan = false;
			return;
		}
		j++;
	} while (j <= val.length);
}

function checkIsPrime(i) {
	for (let k = 2; k <= i / 2; k++) {
		if (i % k === 0) {
			return false;
		}
	}
	return true;
}

console.log(primes);
