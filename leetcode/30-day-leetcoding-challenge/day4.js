/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var countZero = 0
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      countZero++
      nums.splice(i, 1)
      i--
    }
  }

  ;[...Array(countZero)].map(() => nums.push(0))
}
