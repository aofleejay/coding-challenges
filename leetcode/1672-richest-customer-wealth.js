/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let maxWealth = 0
  for (let i = 0; i < accounts.length; i++) {
    let wealth = 0
    for (let j = 0; j < accounts[i].length; j++) {
      wealth += accounts[i][j]
    }

    if (wealth > maxWealth) {
      maxWealth = wealth
    }
  }

  return maxWealth
}
