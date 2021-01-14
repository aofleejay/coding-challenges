/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = (stones) => {
  while (stones.length > 1) {
    let t = [...stones].sort((a, b) => b - a)
    let y = t[0]
    let x = t[1]

    if (y - x === 0) {
      let yi = stones.indexOf(y)
      stones.splice(yi, 1)
      let xi = stones.indexOf(x)
      stones.splice(xi, 1)
    } else {
      stones[stones.indexOf(y)] = y - x
      let xi = stones.indexOf(x)
      stones.splice(xi, 1)
    }
  }

  return stones.length === 0 ? 0 : stones[0]
}
