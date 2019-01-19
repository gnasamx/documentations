:octocat:

### Array.prototype.fill()

:racing_car: The `fill()` method fills all the elements of an array from a start index to an end index with a static value. The end index is not included.

```js
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// [1, 5 ,5, 5]

console.log(array1.fill(6));
// [6, 6, 6, 6]
```

---

### :hammer_and_wrench: Syntax

```js
arr.fill(value[, start[, end]])
```

**Parameter**

`value` Value to fill array.

`start` [optional] Start index, default to 0

`end` [optional] End index, default to `this.length`

**Return value**

The modified array

---

### :books: Description

The `fill` method takes up to three arguments `value`, `start` and `end`, The `start` and `end` arguments are optional with default value of 0 and the `length` of `this` object.

If `start` is negative, it is treated as `length+start` where `length` is the length of the array. If `end` is negative, it is treated as `length+end`

`fill` is intentionally generic, it does not require that its `this` value be an Array object.

`fill` is a mutable method, it will change `this` object itself, and it, not just return a copy of it.

When `fill` gets passed an object, it will copy the reference and fill the array with references to that object.

---

### :coffee: Examples

```js
[1, 2, 3].fill(4); // [4, 4, 4]
```

```js
[1, 2, 3].fill(4, 1); // [1, 4, 4]
```

```js
[1, 2, 3].fill(4, 1, 2); // [1, 4, 3]
```

```js
[1, 2, 3].fill(4, 1, 1); // [1, 2, 3]
```

```js
[1, 2, 3].fill(4, 3, 3); // [1, 2, 3]
```

```js
[1, 2, 3].fill(4, -3, -2); // [4, 2, 3]
```

```js
[1, 2, 3].fill(4, NaN, NaN); // [1, 2, 3]
```

```js
[1, 2, 3].fill(4, 3, 5); // [1, 2, 3]
```

```js
Array(3).fill(4); // [4, 4, 4]
```

```js
[].fill.call({ length: 3 }, 4); // {0: 4, 1: 4, 2: 4, length: 3}
```

```js
// Object by reference
const arr = Array(3).fill({});
// [{}, {}, {}]
```
