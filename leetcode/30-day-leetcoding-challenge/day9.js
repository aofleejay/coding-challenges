/**
 * @param {string} str
 * @return {string}
 */
const remove = (str) => {
  let count = 0
  let n = []
  str
    .split('')
    .reverse()
    .map((c, i, s) => {
      if (c === '#') {
        count++
      } else {
        if (count === 0) {
          n.push(c)
        } else {
          count--
        }
      }
    })
  return n.join('')
}

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = (S, T) => {
  const s = remove(S)
  const t = remove(T)

  return s === t
}
