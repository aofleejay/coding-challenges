/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  for (i = 0; i < nums.length; i++) {
    let found = 0
    for (j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        found++
      }
    }

    if (found === 1) {
      return nums[i]
    }
  }
}
