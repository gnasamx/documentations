:octocat:

### Array.of()

:racing_car: The `Array().of()` method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

The difference between `Array.of()` and the `Array` constructor is in the handling of integer arguments: `Array.of(7)` creates an array with a single element 7, whereas `Array(7) creates an empty array with a`length` property of 7

```js
Array.of(7); // [7]
Array.of(1, 2, 3); // [1, 2, 3]
```

```js
Array(7); // [ , , , , , ,]
Array(1, 2, 3); //[1, 2, 3]
```

---

### :hammer_and_wrench: Syntax

```js
Array.of(element0[ , element1[ , ...[, elementN]]])
```

**Parameters**

`elementN` Elements of which to create the array.

**Return value**

A new Array instance.

---

### :books: Description

This function is part of ECMAScript 2015 standard.

---

### :coffee: Examples

```js
Array.of(1);  / [1]
```

```js
Array.of([:dog:, :panda_face:, :pig:]);  //[:dog:, :panda_face:, :pig:]
```

```js
Array.of([undefined]); // [undefined]
```
