/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const r = parseInt(`${Math.abs(x)}`.split('').reverse().join('')) * Math.sign(x)

  return (r > 2147483647 || r < -2147483648) ? 0 : r
}
