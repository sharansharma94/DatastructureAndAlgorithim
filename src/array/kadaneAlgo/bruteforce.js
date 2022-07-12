// Largest sum of contiguous subarray

function bruteForce(a) {
    let maxSum = a[0];


    for (let i = 1; i < a.length; i++) {
        let tempSum = a[i];
        let sum = a[i];

        for (let j = i + 1; j < a.length; j++) {
            sum += a[j]


            if (sum > tempSum)
                tempSum = sum;
        }

        if (tempSum > maxSum) {
            maxSum = tempSum;
        }

    }

    return maxSum;

}

const a = [-5, 4, 6, -3, 4, -1]

console.log(bruteForce(a))
