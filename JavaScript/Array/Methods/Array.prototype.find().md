:octocat:

### Array.prototype.find()

:racing_car: The `find()` method returns the value of the first element in the
array that satisfies the provided testing function. Otherwise `undefined` is
returned.

```js
const array1 = [5, 12, 8, 130, 44]

let found = array1.find(function(element) {
  return element > 10
})

console.log(found)
// 12
```

See also the `findIndex()` method, which returns the index of a found element in
the array instead of its value.

If you need to find the position of an element or whether an element exists in
an array, use `Array.prototype.indexOf()` or `Array.prototype.includes()`

---

### :hammer_and_wrench: Syntax

```js
arr.find(callback[, thisArg])
```

**Parameters**

`callback` Function to execute on each value in the array, taking three
arguments:

- `element` The current element being processed in the array.
- `index` [Optional] The index of the current element being processed in the
  array.
- `array` [Optional] The array find was called upon.

`thisArg` [Optional] Object to use as `this` when executing `callback`

**Return value**

The value of the first element in the array that satisfies the provides testing
function; otherwise, `undefined` is returned.

---

### :books: Description

The `find` method executes the `callback` function once for each index of the
array until it finds one where `callback` returns a true value. If such an
element is found, `find` immediately returns the value of the element.
Otherwise, `find` returns `undefined`. `callback` is invoked for every index of
the array from `0` to `length-1` and is invoked for all indexes, not just those
have been assigned values. This may mean that it's less efficient for sparse
arrays than other methods that only visit indexes that have been assigned a
value.

`callback` is invoked with three arguments: the value of the element, the index
of the element, and the Array object being traversed.

If a `thisArg` parameter is provided to `find`, it will be used as the `this`
for each invocation of the `callback`. If it is not provided, then `undefined`

`find` does not mutate the array on which it is called.

---

### :coffee: Examples

**Find an object in array by one of it properties**

```js
const inventory = [
{name: 'apples', quantity: 2}
{name: 'bananas', quantity: 0}
{name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries))
//  {name: 'cherries', quantity: 5}
```

**Using arrow function**

```js
const inventory = [
{name: 'apples', quantity: 2}
{name: 'bananas', quantity: 0}
{name: 'cherries', quantity: 5}
];

const result = inventory.find(fruit =>  fruit.name === 'cherries')
console.log(result);
// {name: 'cherries', quantity: 5}
```

**Find a prime number in an array**

```js
function isPrime(element, index, array) {
  let start = 2
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false
    }
  }
  return element > 1
}
console.log([4, 6, 8, 12].find(isPrime);  // undefined, not found
console.log([4, 5, 6, 12].find(isPrime));  // 5
```
