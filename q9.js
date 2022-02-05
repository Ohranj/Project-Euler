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
