/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  let prefixAccum = [1]
  for (let i = 0; i < nums.length; i++) {
    prefixAccum[i + 1] = nums[i] * prefixAccum[i]
  }

  let suffixAccum = []
  suffixAccum[nums.length - 1] = 1
  for (let i = nums.length - 2; i >= 0; i--) {
    suffixAccum[i] = nums[i + 1] * suffixAccum[i + 1]
  }

  return nums.map((n, i) => prefixAccum[i] * suffixAccum[i])
}
