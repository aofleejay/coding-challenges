/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let sum = 0,
    i = 0

  while (i < s.length) {
    if (map[s[i]] < map[s[i + 1]]) {
      sum -= map[s[i]]
    } else {
      sum += map[s[i]]
    }

    i++
  }

  return sum
}
