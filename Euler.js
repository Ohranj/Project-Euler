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


//Question 16 - Power digit sum
const sum = BigInt(Math.pow(2, 1000))
    .toString()
    .split("")
    .reduce((t, c) => (t += Number(c)), 0);

console.log(sum);
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

fib(() => {
    console.log(f.length - 1);
});
//////////////////////////////////////////////////////////////////////////////////////////
