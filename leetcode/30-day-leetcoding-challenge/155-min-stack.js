const MinStack = function () {
  this.stack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let min = this.stack[0]
  for (let i = 1; i < this.stack.length; i++) {
    if (this.stack[i] < min) {
      min = this.stack[i]
    }
  }

  return min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * const obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * const param_3 = obj.top()
 * const param_4 = obj.getMin()
 */
