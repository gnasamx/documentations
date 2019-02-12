:octocat:

### Array.prototype.lastIndexOf

:racing_car: The `lastIndexOf()` method returns the last index at which a given
element can be found in the array, or -1 if it not present. The array is
searched backwards, starting at `fromIndex`.

```js
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo']

console.log(animals.lastIndexOf('Dodo'))
// 3

console.log(animals.lastIndexOf('Tiger'))
// 1
```

---

### :hammer_and_wrench: Syntax

```js
arr.lastIndexOf(searchElement[, fromIndex]
```

**Parameter**

`searchElement` Element to locate in the array.

`fromIndex` [Optional] The index at which to start searching backwards. Defaults
to the array's length minus one (arr.length - 1) i.e the whole array will be
searched. If the index is greater than or equal to the length of the array, the
whole array will be searched. If negative, it is taken as the offset from the
end of the array. Note that even when the index is negative, the array is still
searched from back to front.

**Return value**

The last index of the element in tha array; -1 if not found.

---

### :books: Description

`lastIndexOf` compares `searchElement` to elements of the array using strict
equality.

---

### :coffee: Examples

**Using `lastIndexOf`**

```js
const numbers = [2, 5, 9, 2]
numbers.lastIndexOf(2) // 3
numbers.lastIndexOf(7) // -1
numbers.lastIndexOf(2, 3) // 3
numbers.lastIndexOf(2, 2) // 0
numbers.lastIndexOf(2, -2) // 0
numbers.lastIndexOf(2, -1) // 3
```

**Finding all the occurrences of an element**

```js
const indices = [] const array = ['a', 'b', 'a', 'c', 'a', 'd']
let element = 'a'
let idx = array.lastIndexOf(element)
while(idx != -1) {
  indices.push(idx)
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1)
}

console.log(indices)
// [4, 2, 0]
```
