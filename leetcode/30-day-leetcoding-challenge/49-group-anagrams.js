/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const t = {}
  strs.map((s) => {
    const k = s.split('').sort().join('')
    if (t[k]) {
      t[k].push(s)
    } else {
      t[k] = [s]
    }
  })
  return Object.keys(t).map((k) => t[k])
}
