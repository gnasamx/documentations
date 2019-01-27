'use strict'

Array.prototype.mySome = function(callback, context) {
  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      return true
    }
  }
  return false
}

console.log(
  [10, 2, 1, 88, 414].mySome(function(element) {
    return element < 0
  }),
)
//  false

console.log(
  [10, 2, 1, 88, 414].mySome(function(element) {
    return element < 40
  }),
)
//  true
