:octocat:

### Array.prototype.pop()

:racing_car: The `pop()` method removes the last element from an array and
returns that element. This method changes the length of the array.

```js
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

console.log(plants.pop())
// "tomato"

console.log(plants)
// ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop()

console.log(plants)
// ["broccoli", "cauliflower", "cabbage"]
```

---

### :hammer_and_wrench: Syntax

```js
arr.pop()
```

**Return value**

The removes element from tha array; `undefined` if the array is empty.

---

### :books: Description

The `pop` method removes the last element from an array and returns that value
to the caller.

If you call `pop()` on an empty array, it returns `undefined`.

---

### :coffee: Examples

**Removing the last element of an array**

```js
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']

const popped = myFish.pop()

console.log(myFish) // ['angel', 'clown', 'mandarin' ]

console.log(popped) // 'sturgeon'
```
