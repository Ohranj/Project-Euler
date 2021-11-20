// Question 8 - Largest product in a series
const n =
    "73167176531330624919225119674426574742355349194934698352031277450632623957831801698480186947885184385861560789112949495459501737958331952853208805111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";

let ans = 0;
let count = 0;
do {
    const p = n.substr(count, 13).split("");
    const s = p.reduce((t, c) => (t *= parseInt(c)), 1);
    ans < s ? (ans = s) : false;
    n.split("").splice(count, 0, p.join(""));
    count++;
} while (count < 1000);
console.log(ans);
//////////////////////////////////////////////////////////////////////////////////////////


//Question 9 - Special pythagorian triplet
for (let i = 1; i < 500; i++) {
    for (let k = i + 1; k < 500; k++) {
	for (let j = k + 1; j < 500; j++) {
	    if (i + k + j === 1000)
		Math.pow(i, 2) + Math.pow(k, 2) === Math.pow(j, 2)
		    ? console.log(i * k * j)
		    : false;
	}
    }
}
//////////////////////////////////////////////////////////////////////////////////////////


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
/////////////////////////////////////////////////////////////////////////////////////////


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
/////////////////////////////////////////////////////////////////////////////////////////


//Question 14 - Longest collatz sequence
const sequenceVals = [];
let countTally = 0;
let ans = 0;

for (let i = 999999; i >= 13; i--) {
    sequenceVals.length = 0;
    let val = i;
    sequenceVals.push(val);
    do {
	val % 2 !== 0 ? (val = 3 * val + 1) : (val = val / 2);
	sequenceVals.push(val);
    } while (val > 1);
    if (sequenceVals.length > countTally) {
	countTally = sequenceVals.length;
	ans = i;
    }
}
console.log(ans);
/////////////////////////////////////////////////////////////////////////////////////////


//Question 16 - Power digit sum
const sum = BigInt(Math.pow(2, 1000))
    .toString()
    .split("")
    .reduce((t, c) => (t += Number(c)), 0);

console.log(sum);
/////////////////////////////////////////////////////////////////////////////////////////


//Question 17 - Number letter counts
const str = {
    0: 0, 1: 3, 2: 3, 3: 5, 4: 4, 5: 4, 6: 3, 7: 5, 8: 5, 9: 4, 10: 3, 11: 6, 12: 6, 13: 8, 14: 8, 15: 7, 16: 7, 17: 9, 18: 8, 19: 8,
    20: 6, 30: 6, 40: 5, 50: 5, 60: 5, 70: 7, 80: 6, 90: 6,
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
/////////////////////////////////////////////////////////////////////////////////////////


//Question 19 - Counting Sundays
const months = [31, 28, 31, 30, 31, 30, 31, 31, 20, 31, 30, 31];
let sundays = 1;
let monthStartPos = 1;

for (let i = 0; i <= 100; i++) {
    for (let k = 0; k < 12; k++) {
        do {
	    if (monthStartPos === 1) {
	        sundays++;
	    }
	    monthStartPos += 7;
	} while (monthStartPos < months[k]);
	if (monthStartPos > months[k]) {
	    const nextMonthFirstMon = monthStartPos - months[k];
	    monthStartPos = nextMonthFirstMon;
	}
    }
}
console.log(sundays);
/////////////////////////////////////////////////////////////////////////////////////////


//Question 20 - Factorial digit sum
let i = BigInt(100);

do {
    sum *= BigInt(i);
    i--;
} while (i >= 1);

const answer = sum
    .toString()
    .split("")
    .reduce((acc, c) => {
	return (acc += BigInt(c));
    }, BigInt(0));

console.log(answer);
/////////////////////////////////////////////////////////////////////////////////////////


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
/////////////////////////////////////////////////////////////////////////////////////////


//Question 25 - 1000th digit fibonaci number
const f = [0, 1];

const fib = (cb) => {
    let s = BigInt(f[f.length - 1]) + BigInt(f[f.length - 2]);
    f.push(s.toString());
    return f[f.length - 1].toString().length < 1000 ? fib(cb) : cb();
};

fib(() => console.log(f.length - 1));
//////////////////////////////////////////////////////////////////////////////////////////


//Question 28 - Number spiral diagonals
let patternCollect = 2;
let sum = 0;
let valsPerRing = 0;

for (let i = 1; i <= 1001 * 1001; i += patternCollect) {
    if (valsPerRing === 4) {
	valsPerRing = 0;
	patternCollect += 2;
    }
    valsPerRing++;
    sum += i;
}
console.log(sum);
////////////////////////////////////////////////////////////////////////////////////////////


//Question 29 - Distinct Powers
const allVals = [];

for (let i = 2; i <= 100; i++) {
    for (let k = 2; k <= 100; k++) {
	allVals.push(Math.pow(i, k));
    }
}

const uniqueVals = [...new Set(allVals)].length;
console.log(uniqueVals);
////////////////////////////////////////////////////////////////////////////////////////////


//Question 30 - Digit fifth powers
const maxVal = Math.pow(9, 5) * 9;
let fithPowersSum = 0;

for (let i = 2; i <= maxVal; i++) {
    const PowerOfDigits = i
	.toString()
	.split("")
	.reduce((acc, c) => (acc += Math.pow(c, 5)), 0);
    i === PowerOfDigits ? (fithPowersSum += i) : false;
}
console.log(fithPowersSum);
////////////////////////////////////////////////////////////////////////////////////////////


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
////////////////////////////////////////////////////////////////////////////////////////////


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
////////////////////////////////////////////////////////////////////////////////////////////


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
////////////////////////////////////////////////////////////////////////////////////////////


//Question 36 - Double-base palindromes
let tally = 0;

for (let i = 1; i < 1000000; i++) {
    const asStr = i.toString();
    if (asStr[0] != asStr[asStr.length - 1]) {
	continue;
    }
    const asDecimal = Number(i.toString(10).split("").reverse().join(""));
    const asBinary = i.toString(2).split("").reverse().join("");
    i === asDecimal
	? i.toString(2) === asBinary
	    ? (tally += i)
	    : false
        : false;
}

console.log(tally);
////////////////////////////////////////////////////////////////////////////////////////////


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
///////////////////////////////////////////////////////////////////////////////////////////


//Question 40 - Champernowne's constant
let longStr = "";
let ans = 1;
let refPoint = 1;

for (let i = 0; i <= 1000000; i++) {
    longStr += i;
    if (i / 10 === refPoint) {
	refPoint *= 10;
	ans *= longStr.split("")[i];
    }
}

console.log(ans);
////////////////////////////////////////////////////////////////////////////////////////////


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
////////////////////////////////////////////////////////////////////////////////////////////
