/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const t = {}
  for (let i = 0; i < nums.length; i++) {
    let a = target - nums[i]
    if (t[a] !== undefined && t[a] !== i) {
      return [i, t[a]]
    }
    t[nums[i]] = i
  }
}
