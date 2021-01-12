/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = {},
    sum = 0,
    max = 0

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      sum = Math.min(i - map[s[i]], sum + 1)
    } else {
      sum++
    }

    map[s[i]] = i
    if (sum > max) max = sum
  }

  return max
}
