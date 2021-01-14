/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => b - a)
  let l = 0,
    r = people.length - 1,
    boat = 0

  while (l <= r) {
    if (people[l] + people[r] <= limit) {
      r--
      l++
    } else {
      l++
    }
    boat++
  }

  return boat
}
