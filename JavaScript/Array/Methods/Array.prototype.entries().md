:octocat:

### Array.prototype.entries()

:racing_car: The `entries()` method return a new Array Iterator object that contains the key/values pairs for each index in the array.

```js
const array1 = ["a", "b", "c"];
var iterator1 = array1.entries();

console.log(iterator1.next().value);
// output: [0, "a"]

console.log(iterator1.next().value);
// output: [1, "b"]
```

---

### :hammer_and_wrench: Syntax

```js
array.entries();
```

**Return value**

A new Array iterator object

---

### :coffee: Examples

```js
const a = ["a", "b", "c"];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
```
