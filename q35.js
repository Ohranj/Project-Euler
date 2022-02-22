//Question 35 - Circular Primes
let tally = 0;

for (let i = 2; i < 1000000; i++) {
    let isPrime = true;
    for (let k = 2; k <= i / 2; k++) {
	if (i % k === 0) {
	    isPrime = false;
	    break;
	}
    }
    if (isPrime) {
	const isCircular = checkRotation(i);
	if (isCircular) {
	    tally++;
	}
    }
}

function checkRotation(value) {
    let isPrime = true;
    let arr = String(value).split("");
    for (let i = 0; i < arr.length - 1; i++) {
	arr = [...arr.slice(1), arr.splice(0, 1)];
	const newOrder = Number(arr.join(""));
	let j = 2;
	while (j <= newOrder / 2) {
	    if (newOrder % j === 0) {
	        isPrime = false;
		break;
	    }
	    j++;
        }
	if (!isPrime) {
	    break;
	}
    }
    return isPrime ? true : false;
}

console.log(tally);
