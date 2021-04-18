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
