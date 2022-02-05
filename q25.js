//Question 25 - 1000th digit fibonaci number
const f = [0, 1];

const fib = (cb) => {
	let s = BigInt(f[f.length - 1]) + BigInt(f[f.length - 2]);
	f.push(s.toString());
	return f[f.length - 1].toString().length < 1000 ? fib(cb) : cb();
};

fib(() => console.log(f.length - 1));
