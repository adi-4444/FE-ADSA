// https://leetcode.com/problems/min-stack/

var MinStack = function () {
  this.stack = [];
  this.currentMin = Infinity;
};
/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.stack.length == 0) {
    this.stack.push(val);
    this.currentMin = val;
  } else {
    if (val < this.currentMin) {
      this.stack.push(val - this.currentMin);
      this.currentMin = val;
    } else {
      this.stack.push(val - this.currentMin);
    }
  }
};
/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length > 0) {
    if (this.stack[this.stack.length - 1] >= 0) this.stack.pop();
    else {
      this.currentMin = this.currentMin - this.stack[this.stack.length - 1];
      this.stack.pop();
    }
  }
};
/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length == 1) {
    return this.stack[0];
  }
  if (this.stack[this.stack.length - 1] >= 0) {
    return this.currentMin + this.stack[this.stack.length - 1];
  } else {
    return this.currentMin;
  }
};
/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.stack.length == 1) return this.stack[0];
  return this.currentMin;
};
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
