//Quetion 37 - Truncatable Primes
let tallyCount = 0;
let tallySum = 0;
let i = 9;

const notPrimes = ["1", "2", "4", "5", "6", "8"];

while (tallyCount < 11) {
	i += 2;
	const arr = String(i).split("");
	if (notPrimes.includes(arr.reverse()[0]) || arr.reverse()[0] == "1") {
		continue;
	}
	let isPrime = true;
	for (let k = 2; k <= i / 2; k++) {
		if (i % k === 0) {
			isPrime = false;
			break;
		}
	}
	if (isPrime) {
		const isTruncate = checkLeftToRight(arr, () => checkRightToLeft(arr));
		if (isTruncate) {
			tallyCount++;
			tallySum += i;
		}
	}
}

function checkLeftToRight(valueArr, cb) {
	let isPrime = true;
	for (let i = 1; i < valueArr.length; i++) {
		const number = Number(valueArr.slice(i).join(""));
		let j = 2;
		while (j <= number / 2) {
			if (number % j === 0) {
				isPrime = false;
				break;
			}
			j++;
		}
		if (!isPrime) {
			break;
		}
	}
	return isPrime ? cb() : false;
}

function checkRightToLeft(valueArr) {
	let isPrime = true;
	for (let i = 1; i < valueArr.length; i++) {
		const number = Number(valueArr.slice(0, -i).join(""));
		let j = 2;
		while (j <= number / 2) {
			if (number % j === 0) {
				isPrime = false;
				break;
			}
			j++;
		}
		if (!isPrime) {
			break;
		}
	}
	return isPrime;
}

console.log(tallySum);
