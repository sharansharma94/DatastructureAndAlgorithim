function kadane(a) {


    // sum till positive numbers
    // if negative number comes try to calculate and see if overall value becomes nagative if yes then discard else 
    // stay with the values


    let maxSum = 0;

    let sum = 0;

    for (let i = 0; i < a.length; i++) {

        sum += parseInt(a[i])

        if (sum > maxSum) {
            maxSum = sum;
        }


        maxSum = Math.max(sum, maxSum)

    }

    return maxSum;

}

// const a = [-5, 4, 6, -3, 4, -1] // 11
// const a = [-5, -4, -2, -6, -1]

// const a = [1, 2, 7, -4, 3, 2, -10, 9, 1]
const a = "-7 -8 -16 -4 -8 -5 -7 -11 -10 -12 -4 -6 -4 -16 -10".split(' ')

console.log(kadane(a))
