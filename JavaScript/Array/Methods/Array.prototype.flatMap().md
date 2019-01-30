:octocat:

### Array.prototype.flatMap()

This is an experimental method, check the

> [Browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

:racing_car: The flatMap() method first maps each element using a mapping
function, then flattens the result into a new array. It is identical to a `map`
followed by a flat of depth 1, but `flatMap` is often quite useful, as merging
both into one method is slightly more efficient.

---

### :hammer_and_wrench: Syntax

const new_array = arr.flatMap(function callback(currentValue[, index[, array]])
{

  <!-- return element for new_array -->

}, [, thisArg])

**Parameters**

`callback` Function that produces an element of the new Array, taking three
arguments:

- `currentValue` The current element being processed in the array.
- `index` [Optional] The index of an current element being processed in the
  array.
- `array` [Optional] The array `map` was called upon.

`ThisArg` [Optional] Value to use as `this` when executing `callback`

**Return value**

A new array with each element being the result of the callback function and
flattened toa depth of 1.

---

### :books: Description

The callback function of `flatMap` works similar like `Array.prototype.map()`. The
`flatMap` method is identical to a `map` followed by a call to `flat` of
depth 1.

---

### :coffee: Examples

**`map` and `flatMap`**

```js
let arr1 = [1, 2, 3, 4]
arr1.map(x => [x * 2])
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2])
// [2, 4, 6, 8]

// Only one level is flattened
arr1.flatMap(x => [[x * 2]])
// [[2], [4], [6], [8]]
```

While the above code have been achieved by using map itself, here is an example
showing use-case of `flatMap` better.

```js
let arr1 = ["it's Sunny in", '', 'California']
arr1.map(x => x.split(' '))
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x => x.split(' '))
// ["it's","Sunny","in", "", "California"]
```

Notice, the output list length can be different from the input list length.

---

### :100: Alternatives

**`reduce` and `concat`**

```js
const arr1 = [1, 2, 3, 4]

arr1.flatMap(x => [x * 2])
// [2, 4, 6, 8]

arr1.reduce((acc, x) => acc.concat([x * 2]))
// [2, 4, 6, 8]
```
