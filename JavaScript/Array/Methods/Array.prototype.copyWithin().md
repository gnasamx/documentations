:octocat:

### Array.prototype.copyWithin()

:racing_car: The `copyWithin()` method shallow copies part of an array to another location in the same array and returns it, without modifying its size.

```js
const array1 = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element ar index 3
console.log(array1.copyWithin(0, ,3, 4));
// ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to end
console.log(array1,copyWithin(1, 3))
// ["d", "d", "e", "d", "e"]
```

---

### :hammer_and_wrench: Syntax

```js
arr.copyWithin(target[, start[, end]])
```

**Parameter**

`target` Zero based index at which to copy the sequence to. If negative, `target` will be counted from the end.

If `target` is at or greater than `arr.length`, nothing will be copied. If `target` is positioned after `start`, the copied sequence will be trimmed to fit `arr.length`.

`start`[optional] Zero based index at which to start copying elements from. If negative, `start` will be counted from end.

If `start` is omitted, `copyWithin` will copy from start(defaults to 0).

`end`[optional] Zero based index at which to end copying elements from. `copyWithin` copied up to but not including end. If negative, `end` will be counted from end.

If `end` is omitted, `copyWithin` will copy until the end(default to arr.length)

**Return value**

The modified array.

---

### :books: Description

The `copyWithin` method is mutable method. It does not alter the length of `this`, but will change its content and create new properties if necessary.

---

### :coffee: Examples

```js
[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]
```

```js
[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]
```

```js
[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]
```

```js
[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]
```

```js
[].copyWithin.call({ length: 5, 3: 1 }, 0, 3);
// {0: 1, 3: 1, length: 5}
```

i
