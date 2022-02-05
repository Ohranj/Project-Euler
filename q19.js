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
