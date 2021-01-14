/**
 * @param {number[]} arr
 * @return {number}
 */
const countElements = (arr) => {
  return arr.reduce((a, c) => a + (arr.indexOf(c + 1) !== -1 ? 1 : 0), 0)
}
