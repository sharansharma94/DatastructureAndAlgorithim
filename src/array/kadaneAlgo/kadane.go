package main

import "fmt"

// MAXIMUM SUM OF SUBARRAY
// USE KADANE ALGORITHIM

func main() {

	arr := []int{-5, 4, 6, -3, 4, -1}

	maxSum := arr[0]
	sum := 0

	for _, x := range arr {

		sum += x

		if maxSum < sum {
			maxSum = sum
		}

		if sum < 0 {
			sum = 0
		}
	}
	fmt.Printf("Maximum sum can be obtained is %d \n", maxSum)
}
