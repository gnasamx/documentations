'use strict'

Array.prototype.myMap = function(callback) {
  const arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this))
  }
  return arr
}

const fruits = ['Apple', 'Banana', 'Strawberry']

fruits.myMap(function(f) {
  console.log(f)
})
// Apple
// Banana
// Strawberry

console.log([1, 2, 3].myMap(num => num * 2))
// [2, 4, 6]
