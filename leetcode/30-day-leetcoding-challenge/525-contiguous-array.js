/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = (nums) => {
  const diff = [0]
  let sum = 0
  let ans = 0
  nums.map((n) => {
    sum += n === 0 ? -1 : 1
    diff.push(sum)
  })

  const t = {}
  diff.map((d, i) => {
    if (t[d] === undefined) {
      t[d] = i
    } else {
      ans = Math.max(ans, i - t[d])
    }
  })
  return ans
}
