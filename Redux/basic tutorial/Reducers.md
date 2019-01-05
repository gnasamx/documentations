:coffee: :star2:

Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what _happened_, but don't describe how the application's state changes.

### Designing the state shape

In Redux, all the application state is stored in single object. It's a good idea to think of its shape before writing any code. What's the minimal representation of your app's state as an object?

For the todo app, we want to store two different things:

- The currently selected visibility filter.
- The actual list of todos.

You'll often find that you need to store some data, as well as some UI state, in the state tree. This is fine, :zap: but try to keep the data separate from the UI state.

```javascript
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
```

### Handling Actions

Now that we've decided what our state object looks like, we're ready to write a reducer for it. The reducer is pure function that takes the previous state and an action, and returns the next state.

```javascript
(previousState, action) => newState;
```

### Things you should never do inside a reducer

- Mutate its arguments.
- Perform side effects like API calls and routing transitions.
- Call non-pure function, eg. `Date.now()` or `Math.random()`.

It's very important that the reducer stays pure. :fire: **Given the same arguments, is should calculate the next state and return it. No surprises. No side effects. No API calls.**

With this out of the way, let's start writing our reducer by gradually teaching it to understand the actions we defined earlier.

We'll start by specifying the initial state. Redux will call our reducer with an `undefined` state for the first time. This is our chance to return the initial state of our app:

```javascript
import { VisibilityFilters } from "./actions";

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function todoApp(state, action) {
  if (typeof state === "undefined") {
    return initialState;
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state;
}
```

One neat trick is to use the ES6 default arguments syntax to write this in a more compact way:

```javascript
function todoApp(state = initialState, action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  return state;
}
```

Now let's handle `SET_VISIBILITY_FILTER`. All it needs to do is to change `visibilityFilter` on the state, Easy:

```js
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    default:
      return state;
  }
}
```

Note that:

1. **We don't mutate the `state`.** we create a copy with `Object.assign()`. `Object.assign(state, { visibilityFilter: action.filter })` is also wrong: it will mutate the first argument. You **must** supply an empty object as first parameter. You can also enable the object spread operator proposal to write { ...state, ...newState } instead.

2. **We return the previous `state` in the `default` case.** It's important to return the previous `state` for any unknown action.

### Handling more Actions

We have two more actions to handle! Just like we did with `SET_VISIBILITY_FILTER`, we'll import the `ADD_TODO` and `TOGGLE_TODO` actions and then extends out reducer to handle `ADD_TODO`.

```js
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'

...

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    default:
      return state
  }
}
```

Just like before, we never write directly to `state` or its fields, and instead we return new objects. The new `todos` is equal to the old `todos` concatenated with single new item at the end. The fresh todo was constructed using the data from the action.

Finally, the implementation of `TOGGLE_TODO` handle shouldn't come as a complete surprise:

```js
case TOGGLE_TODO:
  return Object.assign({}, state, {
    todos: state.todos.map((todo, index) => {
      if (index === action.index) {
        return Object.assign({}, todo, {
          completed: !todo.completed
        })
      }
      return todo
    })
  })
```

Because we want to update a specific item in the array without resorting to mutations, we have to create a new array with the same items except the item at the index.

### Splitting Reducers

Here is our code so far It is rather verbose:

```js
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          }
          return todo;
        })
      });
    default:
      return state;
  }
}
```

Is there a way to make it easier to comprehend? It seems like `todos` and `visibilityFilter` are updated completely independently. Sometimes state fields depend on one another and more consideration is required, but in our case we can easily split updating `todos` into a separate function:

```js
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: todos(state.todos, action)
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: todos(state.todos, action)
      });
    default:
      return state;
  }
}
```

Note that `todos` also accepts `state` but `state` is an array! Now `todoApp` gives todos a slice of the state to manage, and `todos` knows how to update just that slice. **This is called _reducer composition_, and it's the fundamental pattern of building Redux apps.**

Let's explore reducer composition more. can we also extract reducer managing just `visibilityFilter`? We can.

Below our imports, let's use ES6 Object Destructing to declare `SHOW_ALL`;

```js
const { SHOW_ALL } = VisibilityFilters``;
```

Then:

```js
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
```

Now we can rewrite the main reducer as function that calls the reducers managing parts of the state, and combines them into a single object. It also doesn't need to know the complete initial state anymore. It's enough that the child reducers return their state when given `undefined` at first.

```js
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
}
```

:zap: **Note that each of the reducers is managing its own part of the global state. The `state` parameter is different for every reducer, and corresponds to the part of the state i manages.**

This is already looking good! When the app is larger, we can split the reducer into separate files and keep them completely independent and managing different data domains.

Finally, Redux a utility called `combineReducers()` that does the same boilerplate logic that the `todoApp` above currently does. With its help, we can rewrite `todoApp` like this:

```js
import { combineReducers } from "redux";

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
```

Note that this is equivalent to:

```js
export default function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
}
```

You could also give them different keys, or call functions differently. These two ways to write a combined reducer are equivalent:

```js
const reducer = combineReducers({
  a: doSomethingWithA,
  b: processB,
  c: c
});
```

```js
function reducer(state = {}, action) {
  return {
    a: doSomethingWithA(state.a, action),
    b: processB(state.b, action),
    c: c(state.c, action)
  };
}
```

All `combineReducers()` does is generate a function that calls your reducers **with the slices of state selected according to their keys**, and combines their results into single object again. :worried: And like other reducers, `combineReducers()` does not create a new object if all of the reducers provided to it do not change state.

> Note for ES6 Users :neckbeard:
> Because `combineReducers` expects an object, we can put all top-level reducer into separate file, `export` each reducer function, and use `import * as reducers` to get >them as an object with their names as the keys:
>
> ```js
> import { combineReducers } from "redux";
> import * as reducers from "./reducers";
>
> const todoApp = combineReducers(reducers);
> ```

:star:

### Source code

```js
import { combineReducers } from "redux";
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from "./actions";
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
```
