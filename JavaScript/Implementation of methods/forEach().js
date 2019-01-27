'use strict'

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

const fruits = ['Apple', 'Banana', 'Strawberry']
fruits.myEach(function(f) {
  console.log(f)
})

// Apple
// Banana
// Strawberry
