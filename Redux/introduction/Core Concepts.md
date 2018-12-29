:coffee: :headphones:

Imagine your app's state is describe as a plain object. For example, the state of todo app might look like this:

```javascript
{
  todos: [{
    text: 'Eat food',
    completed: true
  }, {
    text: 'Exercise',
    completed: false
  }],
  visibilityFilter: 'SHOW_COMPLETED'
}
```

This object is like a "model" except that there are no setters. This is so that different parts of code can't change the state arbitrarily, causing hard-to-reproduce bugs.

To change something in the state, you need to dispatch an action. An action is plain JavaScript object.

```javascript
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

Enforcing that every change is described as an action lets us have a clear understanding of what's going on in app. If something changed, we know why it is changed. Actions are like breadcrumbs of what has happened. Finally, to tie state and actions together, we write a function called reducer. :zap: Reducer is a function that takes state and action as arguments, and next state of the app. It would be hard to write such a function for big app, so we write smaller functions parts of the state.

```javascript
function visibilityFilter(state = "SHOW_ALL", action) {
  if (action.type === "SET_VISIBILITY_FILTER") {
    return action.filter;
  } else {
    return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([{ text: action.text, completed: false }]);
    case "TOGGLE_TODO":
      return state.map((todo, index) =>
        action.index === index
          ? { text: todo.text, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}
```

And we write another reducer that manages the complete state of our app by calling those two reducers for the corresspoing state keys:

```javascript
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
}
```

This is basically the whole :blub: idea of Redux. The main idea is that you describe how your state is updated over time in response to action objects.
