:octocat:

### Array.prototype.filter()

:racing_car: The `filter()` method creates a new array with all elements that
pass the test implemented by the provided function.

```js
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const result = words.filter(word => word.length > 6)

console.log(result)
// Array ["exuberant", "destruction", "present"]
const words = ['spray', 'limit', 'elite', 'exvberant']
```

---

### :hammer_and_wrench: Syntax

```js
const newArray=arr.filter(callback(element, [, index[, array]])[, thisArg])
```

---

**Parameters**

`callback` Function is a predicate, to test each element of the array. Return
`true` to keep the element, `false` otherwise. It accepts three arguments:

- `element` The current element being processed in the array.
- `index` [optional] The index of the current element being processed in the
  array.
- `array` [optional] The array `filter` was called upon.
- `thisArg` [optional] Value to use as `this` when executing `callback`.

**Return value** A new array with the elements that pass the test. If no
elements pass with the test, an empty array will be returned.

---

### :books: Description

`filter()` calls a provided `callback` function once for each element in an
array, and constructs a new array of all the values for which `callback` returns
a value that coerces to true. `callback` is invoked only for indexes of array
which have assigned values; it is not invoked for indexes which have been
deleted or which have never been assigned values. Array elements which do not
pass the `callback` test are simply skipped, and are not included in the new
array.

`callback` is invoked with three arguments:

1. the value of the element.
1. the index of the element.
1. the Array object being traversed.

If `thisArg` parameter is provided to `filter`, it will be used as the callback
`this` value. Otherwise, the value `undefined` will be used as its `this` value.
The `this` value ultimately observable by `callback` is determined according to
the usual rules for determining the `this` seen by a function.

`filter()` does not mutate the array on which it is called.

---

### :coffee: Examples

**Filtering out small values**

```js
function isBigEnough(value) {
  return value >= 10
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
// [12, 130, 44]
```

**Filtering invalid entries from JSON**

```js
const arr = [
  {id: 15},
  {id: -1},
  {id: 0},
  {id: 3},
  {id: 12.2},
  {},
  {id: null},
  {id: NaN},
  {id: 'undefined'},
]

const invalidEntries = 0

function isNumber(obj) {
  return obj !== undefined && typeof obj === 'number' && !isNaN(obj)
}

function filterByID(item) {
  if (isNumber(item.id) && item.id !== 0) {
    return true
  }
  invalidEntries++
  return false
}

var arrByID = arr.filter(filterByID)

console.log('Filtered Array\n', arrByID)
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries)
// Number of Invalid Entries = 5
```

**Searching in array**

```js
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Array filters items based on search criteria (query)
 */
function filterItems(query)   return fruits.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1
  })
}

console.log(filterItems('ap')) // ['apple', 'grapes']
console.log(filterItems('an')) // ['banana', 'mango', 'orange']
```
