/**
 * @param {number} n
 * @return {number}
 */
var squareAndSum = function (n) {
  return `${n}`
    .split('')
    .reduce((p, c) => parseInt(p) + parseInt(c) * parseInt(c), 0)
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const visited = []

  while (true) {
    if (n === 1) {
      return true
    } else {
      n = squareAndSum(n)
      if (visited.indexOf(n) !== -1) {
        return false
      }
      visited.push(n)
    }
  }
}
