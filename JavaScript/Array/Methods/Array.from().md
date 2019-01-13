:octocat:

### Array.from()

:racing_car: The `Array.from` methods creates a new, shallow-copied Array instance from an array like or iterable object.

```js
console.log(Array.from("foo"));
// ['f', 'o', 'o']

console.log(Array.from([1, 2, 3]), x => x + x);
// [2, 4, 6]
```

---

### :hammer_and_wrench: Syntax

```js
Array.from(arrayLike[ , mapFn[ ,thisArg]])
```

**Parameters**

`arrayLike` An arrayLike or iterable object to convert to an array.

`mapFn` [optional] Map function to call on every element of the array.

`thisArg` [optional] Value to use as `this` when executing `mapFn`.

---

### :books: Description

`Array.from()` lets you create _Arrays_ from:

- array-like objects(objects with a length property and indexed elements) or
- iterable objects(objects where you can get its elements, such as `map` and `set`).

`Array.from()` has an optional parameter `mapFn`, which allows you to execute a `map` function on each element of the array that is being created.

---

### :coffee: Examples

**Array from String**

```js
Array.from("apple");
// ["a", "p", "p", "l", "e"]
```

**Array from a Set**

```js
const set = new Set(["strawberry", true, true, 2, undefined]);
Array.from(set);
// ["strawberry", true, 2, undefined ]
```

**Array from a Map**

```js
const map = new Map([[1, 2], [3, 4], [5, 6]]);
Array.from(map);
// [[1, 2], [3, 4],[4, 5]]

const mapper = new Map(["1", "a"], ["2", "b"]);
Array.from(mapper.values());
// ["a", "b"]

Array.from(mapper.keys());
// ["1", "2"]
```

**Array from an array-like object**

```js
function fn1(...args) {
  return Array.from(args);
}

fn1(1, 2, 3);
// [1, 2, 3]

function fn2() {
  return Array.from(arguments); // arguments is Array-like object accessible inside functions that contains the values of the arguments passed to that function
}

fn2(1, 2, 3);
// [1, 2, 3]
```

**Using arrow functions**

```js
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]

Array.from({length: 5}, {ele, i} => i) // Since the array is initialized with 'undefined' on each position, the value of 'ele' will be 'undefined'
// [0, 1, 2, 3, 4, 5]
```
