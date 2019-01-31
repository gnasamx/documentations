:octocat:

### Array.prototype.forEach()

:racing_car: The `for_each()` method executes a provided function once for each
array element.

```js
const array1 = ['a', 'b', 'c', 'd']
array1.forEach(function(element) {
  console.log(element)
})
// 'a'
// 'b'
// 'c'
```

---

### :hammer_and_wrench: Syntax

```js
arr.forEach(callback[, thisArg])
```

**Parameters**

`callback` Function to execute for each element, taking three arguments:

- `currentValue` The value of the current element being processed in the array.

- `index` [Optional] The index of the current element being processed in the
  array.

- `array` [Optional] The array that `forEach()` is being applied to

`thisArg` [Optional] Value to use as `this` when executing `callback`

**Return value**

`undefined`

---

### :books: Description

`forEach()` executes the provided `callback` once for each element present in
the array in ascending order. It is not invoked for index properties that have
been deleted or are uninitialized.

`callback` is invoked with three arguments;

- The element value
- the element index
- the array being traversed

If a `thisArg` parameter is provided to `forEach()`, it will be used as
callback's `this` value. Otherwise, the value `undefined` will be used as its
`this` value. The `this` value ultimately observable by `callback` is determined
according to the usual rules for determining the `this` seen by a function.

`forEach()` executes the `callback` function once for each array element; unlike
`map()` or `reduce()` it always returns the value `undefined` and is not
chainable. The typical use case is to execute side effects ar the end of a
chain.

`forEach()` does not mutate the array on which it is called.

> There is no way to stop or break a `forEach()` loop other than by throwing an
> exception. Early termination may be accomplished with:
>
> - A simple loop
> - A `for...of` loop
> - `Array.prototype.every()`
> - `Array.prototype.some()`
> - `Array.prototype.find()`
> - `Array.prototype.findIndex()`

---

### :coffee: Examples

**Converting a for loop to forEach**

```js
const items = ['apple', 'banana', 'mango']
const copy = []

// before
for (let i = 0; i < items.length; i++) {
  copy.push(items[i])
}

// after
items.forEach(function(items) {
  copy.push(item)
})
```

**Printing content of an array**

```js
function logArrayElements(elements, index, array) {
  console.log('a[' + index + '] = ' + element)
})

[2, 5, , 9].forEach(logArrayElements)
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

**Using `thisArg`**

```js
function Counter() {
  this.sum = 0
  this.count = 0
}

Counter.prototype.add = function(array) {
  array.forEach(function(entry) {
    this.sum += entry
    ++this.count
  }, this)
}

const obj = new Counter()
obj.add([2, 5, 9])
obj.count
//  3
obj.sum
// 16
```

Since the thisArg parameter (this) is provided to forEach(), it is passed to
callback each time it's invoked, for use as its this value.

> If passing the function argument using an arrow function expression the
> `thisArg` parameter can be omitted as arrow functions lexically bind the
> `this` value.

**An object copy function**

```js
function copy() {
  const copy = Object.create(Object.getPrototypeOf(obj))
  const propNames = Object.getOwnPropertyNames(obj)

  propNames.forEach(function(name) {
    const desc = Object.getOwnPropertyDescriptor(obj, name)
    Object.defineProperty(copy, name, desc)
  })
  return copy
}

const obj1 = { a: 1, b: 2 }
const obj2 = copy(obj1)
// {a: 1, b: 2}
```
