'use strict'

Array.prototype.myFilter = function(callback, context) {
  const arr = []
  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i])
    }
  }
  return arr
}

const numbers = [1, 10, 15, 18, 20, 34]
const filteredNumbers = numbers.myFilter(function(f) {
  return f < 15
})
console.log(filteredNumbers)
//  [1, 10]

console.log([1, undefined, null, 0, true].myFilter(f => f === true))
// [true]
