'use strict'

Array.prototype.myEvery = function(callback, context) {
  for (let i = 0; i < this.length; i++) {
    if (!callback.call(context, this[i], i.this)) {
      return false
    }
  }
  return true
}

console.log([1, 2, 3, 4, NaN].myEvery(num => Number.isInteger(num)))
// false

console.log([1, 2, 3, 4].myEvery(num => Number.isInteger(num)))
//  true

console.log(
  [12, 54, 18, 130, 44].myEvery(function(element) {
    return element >= 10
  }),
)
// true
