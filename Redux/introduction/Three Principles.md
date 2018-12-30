:coffee:

Redux can be described in three fundamentals principles:

### Single source of truth

**The state of your application is stored in an object three within a single store.**

This makes it easy to create universal apps, as the state from your server can be serialized and hydrated into the client with no extra codding effort. A single state tree also makes it easier to debug or inspect an application; it also enables you to persist your app's state in development, for a faster development cycle.

```javascript
console.log(store.getState());

/* Prints
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
*/
```

### State is read-only

**The only way to change the state is to emit an action, an object describing what happened.**

This ensures that neither the views not the network callbacks will ever write directly to the state. instead they express an intent to transform the state. Because all changes are centralized and happen one by one in strict order, there are no subtle race conditions to watch out for. As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.

```javascript
store.dispatch({
  type: "COMPLETE_TODO",
  index: 1
});

store.dispatch({
  type: "SET_VISIBILITY_FILTER",
  filter: "SHOW_COMPLETED"
});
```

### Changes are made with pure functions.

**To specify how the state tree is transformed by actions, you write pure reducers.**

Reducers are just pure functions that take the previous state and an action, and return the next state. Remember to return new state object, instead of mutating the previous state. You can start with single reducer, and as your app grows, split it off in smaller reducers that manages specific parts of the state tree, Because reducers are just functions, you can control the order in which they are called, pass additional data, or even make reusable reducers for common tasks such as pagination.

```javascript
function visibilityFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action, filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case "COMPLETED_TODO":
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: false
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

import { combineReducers, createStore } from "redux";
const reducer = combineReducers({ visibilityFilter, todos });
const store = createStore(reducer);
```

:fire: That's it!
