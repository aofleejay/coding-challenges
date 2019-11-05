/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const t = {}
  for (i = 0; i < nums.length; i++) {
    t[nums[i]] = i
  }

  for (i = 0; i < nums.length; i++) {
    a = target - nums[i]
    if (t[a] !== undefined && t[a] !== i) {
      return [i, t[a]]
    }
  }
}
