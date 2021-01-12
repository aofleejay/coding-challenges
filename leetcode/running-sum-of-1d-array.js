/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const sumList = []
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    sumList.push(sum)
  }

  return sumList
}
