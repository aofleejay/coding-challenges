/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const s = String(x)
  return s.split('').reverse().join('') === s
}
