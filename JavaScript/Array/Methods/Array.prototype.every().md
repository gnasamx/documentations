:octocat:

### Array.prototype.every()

:racing_car: The `every()` method tests whether all elements in the array pass the test implemented by the provided function.

> **Note**: This method returns `true` for any condition put on an empty array.

```js
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// true
```

---

### :hammer_and_wrench: Syntax

```js
arr.every(callback[, thisArg])
```

**Parameter**

`callback` Function to test each element, taking three arguments:

- `element` The current element being processes in the array.
- `index` [optional] The index of the current element being processed in the array.
- `array` [optional] The array `every` was called upon

**Return value**

`true` If the callback function return a truthy value for every element; otherwise, `false`

---

### :books: Description

The `every` method executes the provided `callback` function once for each element present in the array until it finds one where `callback` return a falsy value. If such an element is found, the `every` method immediately return `false`. Otherwise, if `callback` returns a truthy value for all elements, `every` returns `true`. `callback` is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.

`callback` is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

If a `thisArg` parameter is provided to `every`, it will be used as callback's `this` value. Otherwise, the value `undefined` will be used as its `this` value.

:zap: `every` does not mutate the array on which it is called.

---

### :coffee: Examples

**Testing size of all array elements**

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}

[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

**Testing every object of an array for a value**

```js
[
  { a: 1, b: 2, c: 3, d: 4 },
  { a: 1, x: 2, y: 3, z: 4 },
  { a: 1, x: 2, y: 3, z: 4 }
].every(obj => obj.a === 1); //true
[
  { a: 1, b: 2, c: 3, d: 4 },
  { a: 1, x: 2, y: 3, z: 4 },
  { a: 2, x: 2, y: 3, z: 4 }
].every(obj => obj.a === 1); //false
```

**Using arrow function**

```js
[12, 5, 8, 130, 44].every(x => x >= 10); // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true
```
