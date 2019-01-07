:coffee:

### Store

In the previous sections, we defined the actions that represents the fact about _what happened_ and the reducers that _update the state according to these actions_.

The Store is the object that brings them together. The store has the following responsibilities:

- Holds application state
- Allows access to state via `getState()`
- Allows state to be updated via `dispatch(action)`
- Registers listeners via `subscribe(listener)`
- Handles unregisterting of listeners via the function returned by `subscribe(listener)`

It's important to note that you'll only have a single store in a Redux application. When you want to split your data handling logic, you'll use [reducer composition][1] instead of many stores.

It's easy to create a store if you have a reducer. In the previous section, we used `combineReducers()` to combine several reducers into one. We will now import it, and pass it to `createStore()`.

```js
import { createStore } from "redux";
import todoApp from "./reducers";
const store = createStore(todoApp);
```

### Dispatching Actions

Now that we have created a sore. let's verify our program works! Even without UI, we can already test the update logic.

```js
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from "./actions";

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
store.dispatch(addTodo("Learn about actions"));
store.dispatch(addTodo("Learn about reducers"));
store.dispatch(addTodo("Learn about store"));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// Stop listening to state updates
unsubscribe();
```

You can see how this causes the state held by the store to change:

![](https://i.imgur.com/zMMtoMz.png)

:star:

### Source Code

index.js

```js
import { createStore } from "redux";
import todoApp from "./reducers";

const store = createStore(todoApp);
```

[1]: https://github.com/gnasamx/Documentations/blob/master/Redux/basic%20tutorial/Reducers.md#splitting-reducers
