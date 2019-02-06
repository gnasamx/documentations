:octocat:

### Array.prototype.indexOf()

:racing_car: The `indexOf()` method returns the first index at which a given
element can be found in the array, or -1 if it not present.

> Note: For the String method, see String.prototype.indexOf().

```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

console.log(beasts.indexOf('bison')) // 1

console.log(beasts.indexOf('bison', 2)) // 2

console.log(beasts.indexOf('giraffe')) // -1
```

---

### :hammer_and_wrench: Syntax

```js
arr.indexOf(searchElement[, fromIndex])
```

**Parameters**

`searchElement` Element to locate in the array.

`fromIndex` [Optional] The index to start the search at. If the index is greater
than or equal to the array's length. -1 is returned, which means the array will
not be searched. If the provided index value is a negative number, it is taken
as the offset from the end of the array. If the provided index is 0 which is
default value then the whole array will be searched.

**Return value**

The first index of the element in the array; -1 if not found.

### :books: Description

`indexOf()` compares `searchElement` to elements of the Array using strict
equality.

### Examples

\*\*Using `indexOf`

```js
const array = [2, 9, 9]
array.indexOf(2) // 0
array.indexOf(7) // -1
array.indexOf(9, 2) // 2
array.indexOf(2, -1) // -1
array.indexOf(2, -3) // 0
```

**Finding all the occurrences of an element**

```js
const indices = []
const array = ['a', 'b', 'a', 'c', 'a', 'd']
let element = 'a'
let idx = array.indexOf(element)
while (idx !== -1) {
  indices.push(idx)
  idx = array.indexOf(element, idx + 1)
}

console.log(indices)
// [0, 2, 4]
```


**Finding if an element exists in the array or not and updating the array**
```js
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach'); 
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach'); 
// spinach already exists in the veggies collection.
```