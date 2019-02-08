:octocat:

### Array.prototype.join()

:racing_car: The `join()` method creates and returns a new string by
concatenating all of the elements in an array(or an array-like object),
separated by commas or a specified separator string. If the array has only one
item, then that item will be returned without using the separator.

```js
const elements = ['Fire', 'Wind', 'Rain']
console.log(elements.join())
// "Fire,Wind,Rain"

console.log(elements.join(''))
// "FireWindRain"

console.log(elements.join('-'))
// "Fire-Wind-Rain"
```

---

### :hammer_and_wrench: Syntax

```js
arr.join([separator])
```

**Parameter**

`separator` [Optional] Specifies a string to separator each pair of adjacent
elements of the array. The separator is converted to s string if necessary. If
omitted, the array elements are separated with a comma(","). If separator is an
empty string, all elements are joined without any characters in between them.

**Return value** A string with all array elements joined. If `arr.length` is 0,
the empty string is returned.

---

### :books: Description

The string conversions of all array elements are joined into one string.

---

### :coffee: Examples

**Joining an array four different ways**

```js
var a = ['Wind', 'Rain', 'Fire']
a.join() // 'Wind,Rain,Fire'
a.join(', ') // 'Wind, Rain, Fire'
a.join(' + ') // 'Wind + Rain + Fire'
a.join('') // 'WindRainFire'
```

**Joining an array-like object**

```js
function f(a, b, c) {
  let s = Array.prototype.join.call(arguments)
  console.log(s)
}

f(1, 'a', true)
// "1,a,true"
```
