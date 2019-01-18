:octocat:

### Array.prototype.concat()

:racing_car: The `concat()` method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

```js
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

console.log(array1.concat(array2));
// ["a", "b", "c", "d", "e", "f"]
```

---

### :hammer_and_wrench: Syntax

```js
const new_array = old_array.concat([value[, value2[,...[, valueN]]]])
```

**Parameters**

`valueN` Arrays and/or values to concatenate into a new array. If `valueN` is `undefined`, `concat` returns a shallow copy of existing array on which it is called.

**Return value**

A new Array instance.

---

### :books: Description

The `concat` method creates a new array consisting of the elements in the object on which it is called, followed in order by, for each argument, the elements of that arguments(if the argument is an array) or the argument itself(if the argument is not an array). It does not recurse into nested array arguments.

:zap: The `concat` method does not alter `this` or any of the arrays provided as argument but instead returns a shallow copy that contains copies of the same elements combined from the original arrays. Elements of the original arrays are copied into the new array as follow:

- Object references(and not the actual object): `concat` copies object references into the new array. Both the original and new array refer to the same object. That is, if a referenced object is modified, the changes are visible to both the new and original arrays. This includes elements of the array arguments that are also arrays.

> **Note**: Concatenating array(s)/value(s) will leave the original untouched. Furthermore, any operation on the new array(except operations on elements which are object references) will have no effect on the original arrays, and vice vers.

### :coffee: Examples

**Concatenating two arrays**

```js
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

letters.concat(numbers);
// ['a', 'b', 'c', 1, 2, 3]
```

**Concatenating three arrays**

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);
console.log(numbers);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

**Concatenating values to an array**

```js
const letters = ["a", "b", "c"];

const alphanumeric = letters.concat(1, [2, 3]);
console.log(alphanumeric);
// ['a', 'b', 'c', 1, 2, 3]
```

**Concatenating nested arrays**

```js
const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// [[1], 2 ,[3]]

// Modify the first element in num1
num1[0].push(4);

console.log([1, 4], 2, [3]);
```
