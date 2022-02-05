//Question 10 - Summation of primes
let i = 1;
let primeTally = BigInt(1);
let tally = [];
let isPrime = true;

do {
	for (let k = 1; k <= i / 2; k++) {
		if (tally.length >= 2) {
			isPrime = false;
			break;
		} else if (i % k === 0) {
			tally.push(k);
		}
	}
	isPrime ? (primeTally += BigInt(i)) : (isPrime = true);
	tally.length = 0;
	i += 2;
} while (i < 2000000);
console.log(primeTally);
