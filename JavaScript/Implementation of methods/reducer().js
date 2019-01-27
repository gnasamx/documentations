'use strict'

Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue === undefined ? undefined : initialValue
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this)
    } else {
      accumulator = this[i]
    }
  }
  return accumulator
}

const numbers = [1, 2, 3, 4]
let sum = numbers.myReduce(function(a, b) {
  return a + b
}, 10)
console.log(sum)
// 20

const newArr = [[1, 2], [3, 4], [5, 6]].myReduce(function(a, b) {
  return a.concat(b)
})

console.log(newArr)
//  [ 1, 2, 3, 4, 5, 6 ]
