/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0,
    l = 0,
    r = height.length - 1

  while (l < r) {
    max = Math.max(max, Math.min(height[l], height[r]) * (r - l))
    height[l] < height[r] ? l++ : r--
  }

  return max
}
