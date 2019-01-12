:racing_car:

### Array

**The JavaScript Array object is a global object that is used in the construction of array; which are high-level like objects.**

### Create an array

```js
const fruits = ["Apple", "Banana"];
console.log(fruits.length);
// 2
```

### Access index into an Array item

```js
let first = fruits[0];
// Apple

let last = fruits[1];
// Banana
```

### Loop over an Array

```js
fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1
```

### Add to the end of an Array

```js
let newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]
```

### Remove from the end of an Array

```js
let last = fruits.pop();
// ["Apple", "Banana"]
```

### Remove from the first of an Array

```js
let first = fruits.shift();
// ["Banana"]
```

### Add to the front of an Array

```js
let newLength = fruits.unshift("Strawberry");
// ["Strawberry", "Banana"]
```

### Find the index of an item in the Array

```js
fruits.push("Mango");
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf("Banana");
// 1
```

### Remove an item by index position

```js
let removedItem = fruits.splice(pos, 1);
// ["Strawberry", "Mango"]
```

### Remove items from an index position

```js
const vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish" ,"Carrot"]

let removedItems = vegetables.splice(1, 2);

console.log(vegetables);
// ["Cabbage", "Carrot"]

console.log(removedItems);
// ["Turnip", "Radish"]
```

### Copy an Array

```js
const shallowCopy = fruits.slice();
// ["Strawberry", "Mango"]
```
