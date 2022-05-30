// const bits = "1 0 0 1 0".split(' ').map(num => parseInt(num))
// const bits = "1 0 0 0 0 1 0 0".split(' ').map(num => parseInt(num))


function maxOnesAfterFlip(bits) {
	let maxZero = 0;
	let zero = 0;
	let ones = 0;

	for (let i = 0; i < bits.length; i++) {

		if (bits[i] === 0) {
			zero++;
		} else {
			zero--;
			ones++;
		}

		if (zero > maxZero) {
			maxZero = zero;
		}

		if (zero < 0) {
			zero = 0;
		}


	}

	// console.log(maxZero)
	// console.log(ones);
	// console.log(`max zeros in subarray is ${maxZero}`);
	// console.log(`max ones in subarray is ${overallOnes}`);



	return maxZero + ones

}

// input = "0 0 1 0 0 1 0 0 0 0 0 1 1 0 0 1 1 1 1 0 1 0 0 0 0 1 1 1 0 1 0 1 0 1 1 0 0 1 0 0 0 0 0 1 1 0 0 0 1 1 1 0 1 1 1 0 0 0 1 1 1 1 0 1 0 1 1"
// input = "0 0 1 0 0 1 0 1 1 0 0 0 0 1 1 1 0 0 1 0 0 1 1 1 0 1 1 1 0 0 1 1 0 0 1 1 1 1 0 0 0 0 1 0 1 0 1 1 0 1 0 0 0 1 1 0 1 0 1 1 1 1 0 1 1 0 0 1 1 1 1 1 1 0 1 1 0 1 0 0 0 0 0 0 0 0 0 "

let input = `0 0 1 0 0 1 0 0 0 0 0 1 1 0 0 1 1 1 1 0 1 0 0 0 0 1 1 1 0 1 0 1 0 1 1 0 0 1 0 0 0 0 0 1 1 0 0 0 1 1 1 0 1 1 1 0 0 0 1 1 1 1 0 1 0 1 1
0 0 1 0 0 1 0 1 1 0 0 0 0 1 1 1 0 0 1 0 0 1 1 1 0 1 1 1 0 0 1 1 0 0 1 1 1 1 0 0 0 0 1 0 1 0 1 1 0 1 0 0 0 1 1 0 1 0 1 1 1 1 0 1 1 0 0 1 1 1 1 1 1 0 1 1 0 1 0 0 0 0 0 0 0 0 0
0 0 0 1 1 1 1 0 1 1 1 0 0 1 0 0
1 1 0 0 1 0 0 0 1 0 0 1 1 1 1 1 1 1 0 0 0 0 1 1 0 0 0 1 0 0 0 1 1 0 0 0
0 0 0 1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 1 0 0 0 1 1 0 0 1 1 0 1 0 1 0 1 0 1 1 1 0 0 1 1 1 1 0 0 0 1 0 0 1 0 0 0 1 1 0
0 0 0 0 1 0 0 1 1 1 1 0 1 0 1 0 1 0 0 0 1 0 0 0 0 0
0 1 1 1 0 0 1 0 1 1 0 1 0 1 0 0 0 0 0 0 1 0 0 1 1 0 1 1 1 0 0 1 1 0 0 1 0 1 0 1 0 0 0 0 0 0 1 0 0 1 1 0 1 1 1 0 0 1 1 1 1 0 0 0 0 0 0 0 1 0 1 1 0 0 1 0 0 0
1 1 0 1 0 1 0 0 1 1 0 0 0 0 0 1 0 0 1 0 1 1 1 0
1 0 0 0 0 1 1 0 1 0 0 0 0 1 0 0 1 0 0 1 1 1 1 1 0 1 1 1 0 1 1 0 1 1 0 0 0 1 0 1 1 0 1 1 1 1 1 0 0 0 1 1 1 0 0 0 1 1 1 0`



input = input.split("\n");

for (let x of input) {
	const arr = x.replace(/\s+$/g, '').split(' ');
	console.log(maxOnesAfterFlip(arr.map(num => parseInt(num))));
}


// let T = parseInt('3');

// for (let i = 0; i < T; i++) {
// 	let n = parseInt('5');

// 	console.log(maxOnesAfterFlip(arr));
// }


