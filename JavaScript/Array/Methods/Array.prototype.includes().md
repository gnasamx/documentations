:octocat:

### Array.prototype.includes()

:racing_car: The `includes()` method determines whether an array includes a
certain value among its entries, returning `true` or `false` as appropriate.

```js
const array1 = [1, 2, 3]

console.log(array1.includes(2)) // true

const pets = ['cat', 'dog', 'bat']
console.log(pets.includes('cat')) // true

console.log(pet.includes('at')) // false
```

---

### :hammer_and_wrench: Syntax

```js
arr.includes(valueToFind[, fromIndex])
```

**Parameters**

`valueToFind` The value to search for.

> When comparing strings and characters, `includes()` is **case-sensitive**

`fromIndex` [Optional] The position in this array at which begin searching for
`valueToFind`; The first character to be searched is found at `fromIndex` for
positive values of `fromIndex`, or at `array.length + fromIndex` for negative
values of `fromIndex`. Defaults to 0

**Return values**

A `Boolean` which is `true` if the `valueToFind` is found within the array, else
`false`.

---

### :coffee: Examples

```js
const arr = [1, 2, 3]

arr.includes(2) // true
arr.includes(4) // false
arr.includes(3, 3) // false
arr.includes(3, -1) // true
arr.includes(NaN) // true
```

**`fromIndex` is greater than or equal to array length**

```js
const arr = ['a', 'b', 'c']

arr.includes('c', 3) // false
arr.includes('c', 100) // false
```

**Computed index less than 0**

```js
var arr = ['a', 'b', 'c']

arr.includes('a', -100) // true
arr.includes('b', -100) // true
arr.includes('c', -100) // true
arr.includes('a', -2) // false
```

**`includes()` used as a generic method**

```js
(function() {
  console.log([].includes.call(arguments, 'a')) // true
  console.log([].includes.call(arguments, 'd')) // false
})('a', 'b', 'c')
```
