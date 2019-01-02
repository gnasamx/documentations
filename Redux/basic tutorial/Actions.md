:coffee: :snowman:

Actions are payloads of information that send data from your application to your state. They are the _only_ source of information for the store. You send them to the store using `store.despatch()`.

Here's an example action which represents adding a new todo item:

```javascript
const ADD_TODO = 'ADD_TODO
```

```javascript
{
  type: ADD_TODO;
  text: "Build my first Redux app";
}
```

:zap: Actions are plain JavaScript objects. Actions must have a `type` property that indicates the type of action being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.

```javascript
import { ADD_TODO, REMOVE_TODO } from "../actionTypes";
```

We'll add one more action type to describe a user ticking off a todo as completed. We refer to a particular todo by `index` because we store them in an array.

```javascript
{
    type: TOGGLE_TODO,
    index: 5
}
```

It's a good idea to pass as little data in each action as possible. For example, it's better to pass `index` that the whole todo object.

Finally, we'll add one more action type for changing the currently visible todos.

```javascript
{
    type: SET_VISIBILITY_FILTER,
    filter: SHOW_COMPLETED
}
```

### Action Creators

:zap: Action creators are exactly that functions that create actions.

In Redux, action creators simply return an action:

```javascript
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}
```

To initiate a dispatch, pass the result to the `dispatch()` function:

```javascript
dispatch(addTodo(text));
dispatch(completeTodo(index));
```

Alternatively, you can create a **bound action creator** that automatically dispatches:

```javascript
const boundAddTodo = text => dispatch(addTodo(text));
const boundCompleteTodo = index => dispatch(completedTodo(index));
```

Now you'll be able to call them directly:

```javascript
boundAddTodo(text);
boundCompleteTodo(index);
```

The `dispatch()` function can be accessed directly from the store as `store.dispatch()`, but more likely you'll access it using helper like `react-redux`s `connect()`. You can use `bindActionCreators()` to automatically bind many action creators to a `dispatch()` function.

Action creators can also be asynchronous and have side-effects.

:star:
### Source code

action.js

```javascript
/*
 * action types
 */

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
```
