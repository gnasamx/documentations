:octocat:

### Array.isArray()

:racing_car: The `Array.isArray()` method determines whether the passed value is an Array.

```js
Array.isArray([1, 2, 3]); // true
Array.isArray({ foo: 123 }); // false
Array.isArray("foobar"); // false
Array.isArray(undefined); // false
```

---

### :hammer_and_wrench: Syntax

```js
Array.isArray(value);
```

**Parameters**

`value` The value to be checked

**Return value**

`true` is the value is an Array; otherwise. `false`.

---

### :books: Description

If the value is an `Array`, `true` is returned; otherwise, `false` is.

---

### :coffee: Examples

**All following calls return true**

```js
Array.isArray([]);
```

```js
Array.isArray([1]);
```

```js
Array.isArray(new Array[]);
```

```js
Array.isArray(new Array[("a", "b", "c")]());
```

```js
Array.isArray(new Array(3));
```

```js
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);
```

**All following calls return false**

```js
Array.isArray();
```

```js
Array.isArray({});
```

```js
Array.isArray(null);
```

```js
Array.isArray(undefined);
```

```js
Array.isArray(12);
```

```js
Array.isArray("Array");
```

```js
Array.isArray(new Uint8Array(32));
```

```js
Array.isArray({ __proto__: Array.prototype });
```

**`instanceof` vs `isArray`**

When checking for `Array` instance, `Array.isArray` preferred over `instanceof`.
