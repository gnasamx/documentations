:octocat:

### Array.prototype.findIndex()

:racing_car: The `findIndex()` method returns the index of the first element in
the array that satisfies the provided testing function. Otherwise, it returns -1,
including no element passed the test.

```js
const array1 = [5, 12, 8, 130, 44]

function isLargeNumber(element) {
  return element > 13
}

console.log(array1.findIndex(isLargeNumber))
// 3
```

See also `find()` method, which returns the value of an array element. instead
of that element's index.

---

### :hammer_and_wrench: Syntax

```js
arr.findIndex(callback(element[, index[, array]]), [, thisArg])
```

**Parameters**

`callback` A function to execute on each value in the array until the function
returns `true`, indicating the desired element was found. It takes 3 argument:

- `element` The current element being processed in the array.

- `index` [Optional] The index of the current element being processed in the
  array.

- `array` [Optional] The array `findIndex` was called upon.

`thisArg` [Optional] Object to use as `this` when executing `callback`.

**Return value**

An index in the array if an element passes the test, Otherwise -1

---

### :books: Description

The `findIndex` method executes the `callback` function once for every array
index `0` to `length-1`(inclusive) in the array until it finds one where
`callback` returns a truthy value.

If such an element is found, `findIndex` immediately returns that found
element's index. If the callback never returns a truthy value or the array's
`length` is 0, `findIndex` returns -1. Unlike some other array methods such as
`Array.some`, in sparse arrays the `callback` is called even for indexes of
entries not present in the array.

`callback` is invoked with 3 arguments;

1.  The value of the element.
1.  The index of the element.
1.  The Array object being traversed.

If a `thisArg` parameter is passed to `findIndex`, it will be used as the `this`
inside each invocation of the `callback`. It is not provided, then `undefined`
is used.

---

### :coffee: Examples

**Find the index of a prime number in an array**

```js
function isPrime(element, index, array) {
  let start = 2
  while (start <= Math.sqrt(element)) {
    if (element % start < 1) {
      return false
    } else {
      start++
    }
  }
  return element > 1
}
console.log([4, 6, 8, 12].findIndex(isPrime))
// -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime))
// 2
```

**Find index using arrow function**

```js
const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit']

const index = fruits.findIndex(fruit => fruit === 'blueberries')

console.log(index)
// 3
console.log(fruits[index])
// blueberries
```
