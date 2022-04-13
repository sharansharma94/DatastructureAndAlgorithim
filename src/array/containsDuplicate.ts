//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

function containsDuplicate(nums: number[]): boolean {
  let unique = new Set();

  for (let num of nums) {
    if (unique.has(num)) return true;
    unique.add(num);
  }
  return false;
}

//time O(n)
//space O(n)

// function containsDuplicate(nums: number[]): boolean {

//     for (let i=0 ; i< nums.length;i++) {
//         for (let j=i+1; j< nums.length;j++){
//             if (nums[i] === nums[j] )return true
//         }
//     }
//     return false
// }

// time O(n^2)
// space O(1)

// function containsDuplicate(nums: number[]): boolean {
//     nums.sort()

//     for (let i = 1 ; i< nums.length;i++) {
//         if (nums[i-1]=== nums[i]) return true;
//     }
//     return false
// }

// // time O(nlogn)
// // space O(1)
