:octocat:

### Array.prototype.keys()

:racing_car: The `keys()` method returns a new **Array Iterator** object that
contains the keys for each index in the array.

```js
var array1 = ['a', 'b', 'c']
var iterator = array1.keys()

for (let key of iterator) {
  console.log(key) // expected output: 0 1 2
}
```

---

### :hammer_and_wrench: Syntax

```js
arr.keys()
```

**Return value**

A new Array iterator object.

---

### :coffee: Examples

```js
var arr = ['a', , 'c']
var sparseKeys = Object.keys(arr)
var denseKeys = [...arr.keys()]
console.log(sparseKeys) // ['0', '2']
console.log(denseKeys) // [0, 1, 2]
```
