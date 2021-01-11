/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let found = 0
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        found++
      }
    }

    if (found === 1) {
      return nums[i]
    }
  }
}
