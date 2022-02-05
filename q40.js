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
