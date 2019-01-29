:octocat:

### Array.prototype.flat()

> This is an experimental method, check the
> [Browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

:racing_car: The `flat()` method creates a new array with all sub-array elements
concatenated into it recursively up to specified depth.

---

### :hammer_and_wrench: Syntax

```js
const newArray = arr.flat([depth])
```

**Parameters**

`depth` [Optional] The depth level specifying how deep a nested structure be
flattened. Defaults to 1.

**Return value**

A new array with the sub-array elements concatenated into it.

---

### :coffee: Examples

**Flattening nested array**

```js
const arr1 = [1, 2, [3, 4]]
arr1.flat()
// [1, 2, 3, 4]
```

```js
const arr2 = [1, 2, [3, 4, [5, 6]]]
arr2.flat()
// [1, 2, 3, 4, [5, 6]]
```

```js
const arr3 = [1, 2, [3, 4, [5, 6]]]
arr3.flat(2)
// [1, 2, 3, 4, 5, 6]
```

**Flattening and array holes**

```js
const arr4 = [1, 2, , 4, 5]
arr4.flat()
// [1, 2, 4, 5]
```

### :100: Alternatives

```js
const arr1 = [1, 2, [3, 4]]

// To flat single level array
arr1.reduce((acc, val) => acc.concat(val))
// [1, 2, 3, 4]

// Or
const flatSingle = arr => [].concat(...arr)
flatSingle(arr1)
// [1, 2, 3, 4]
```

```js
// To enable deep level flatten use recursion with reduce and concat
const arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]]

function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    [],
  )
}

flattenDeep(arr1)
// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
```
