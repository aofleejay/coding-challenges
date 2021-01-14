/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
const stringShift = (s, shift) => {
  let diff = 0
  shift.map((sh) => {
    if (sh[0] === 0) {
      diff += sh[1]
    } else {
      diff -= sh[1]
    }
    console.log(diff)
  })

  if (diff === 0) {
    return s
  } else if (diff > 0) {
    const arr = s.split('')
    for (let i = 0; i < diff; i++) {
      const c = arr.shift()
      arr.push(c)
    }
    return arr.join('')
  } else {
    const arr = s.split('')
    for (let i = 0; i < Math.abs(diff); i++) {
      const c = arr.pop()
      arr.unshift(c)
    }
    return arr.join('')
  }
}
