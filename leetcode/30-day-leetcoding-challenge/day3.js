/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0]
  for (i = 0; i < nums.length; i++) {
    let sum = 0
    for (j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum > max) max = sum
    }
  }
  return max
}
