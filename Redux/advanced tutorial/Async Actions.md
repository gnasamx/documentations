:coffee: :star:

### Async Actions

In the basic guide, we built a simple todo application. It was fully synchronous. Every time an actions was dispatched, the state was updated immediately.

In this guide, we will build a different, asynchronous application. It will use the Reddit API to show the current headlines for a selected subreddit. How does asynchronicity fit into Redux flow?

### Actions

When you call an asynchronous API, there are two crucial moments in time: the moment you start the call, and the moment when you receive an answer(or a timeout).

Each of these two moments usually require a change in a application state; to do that, you need to dispatch normal actions that will be processed by reducers synchronously. Usually, for any API request you'll want to dispatch at least three different kinds of actions.

- **An action informing the reducers that the request began.**
  The reducers may handle this actions by toggling an `isFetching` flag in the state. This way the UI knows it's time to show a spinner.

- **An action informing the reducers that request finished successfully.**
  THe reducers may handles this action by merging the new data into the state they manage and resetting `isFetching`. The UI would hide the spinner, and display the fetched data.

- **An action informing the reducers that the request failed**
  The reducers may handle this action by resetting `isFetching`. Additionally, some reducers may want to store the error messages so UI can display it.

You may use a dedicated `status` field in your actions:

```js
{ type: 'FETCH_POSTS' }
{ type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
{ type: 'FETCH_POSTS', status: 'success', response: { ... } }
```

Or you can define separate types for them:

```js
{ type: 'FETCH_POSTS_REQUEST' }
{ type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
{ type: 'FETCH_POSTS_SUCCESS', response: { ... } }
```

### Synchronous Action Creators

Let's start by defining the several synchronous action types and action creators we need in our example app. Here, the use can select a subreddit to display.

actions.js(Synchronous)

```js
export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT";

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  };
}
```

They can also press a "refresh" button to update it:

```js
export const INVALIDATE_SUBREDDIT = "INVALIDATE_SUBREDDIT";

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  };
}
```

These were actions governed by the user interaction, We will also have another kind of action, governed by the network requests, We will see how to dispatch them later,but for now, we just want to define them.

When it's time to fetch the posts for some subreddit, we will dispatch a `REQUEST_POSTS` action:

```js
export const REQUEST_POSTS = "REQUEST_POSTS";

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  };
}
```

It is important for it to be separate from `SELECT_SUBREDDIT` or `INVALIDATE_SUBREDDIT`. While they may occur one after another, as the app grows more complex, you might want to fetch some data independently of the user action(for example, to prefect the most popular subreddits, or to refresh stale data once in while). You may also want to fetch in response to a route change, so it's not wise to couple fetching to some particular UI early on.

Finally, When the network request come through, we will dispatch `RECEIVE_POSTS`:

```js
export const RECEIVE_POSTS = "RECEIVE_POSTS";

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data)
    receivedAt: Data.now()
  };
}
```

### Designing the State Shape

Just like in the basic tutorial, you'll need to design the shape of your application's state before rushing into the implementation. With asynchronous code, there is more state to take care of, so we need to think it through.

This part is often confusing to beginners, because it is not immediately clear what information describes the state fo an asynchronous application, and how to organize it in a single tree.

Here's what the state shape for our 'Reddit headlines' app might look like:

```js
{
  selectedSubreddit: 'frontend',
  postsBySubreddit: {
    frontend: {
      isFetching: true,
      didInvalidate: false,
      items: []
    },
    reactjs: {
      isFetching: false,
      didInvalidate: false,
      lastUpdated: 1439478405547,
      items: [
        {
          id: 42,
          title: 'Confusion about Flux and Relay'
        },
        {
          id: 500,
          title: 'Creating a Simple Application Using React JS and Flux Architecture'
        }
      ]
    }
  }
}
```

There are a few important bit here:

- We store subreddits information separately so we can cache every subreddit. When the use user switches between them the second time, the update will be instant, and we won't need to refetch unless we want to.

- For every list of items, you'll want to store `isFetching` to show a spinner, `didInvalidate` so you can later toggle it when the data is stale, `lastUpdated` so you know when was fetched the last time, and the `items` themselves. In a real app, you'll also want to store pagination state like `fetchedPageCount` and `nextPageUrl`.

```js
{
  selectedSubreddit: 'frontend',
  entities: {
    users: {
      2: {
        id: 2,
        name: 'Andrew'
      }
    },
    posts: {
      42: {
        id: 42,
        title: 'Confusion about Flux and Relay',
        author: 2
      },
      100: {
        id: 100,
        title: 'Creating a Simple Application Using React JS and Flux Architecture',
        author: 2
      }
    }
  },
  postsBySubreddit: {
    frontend: {
      isFetching: true,
      didInvalidate: false,
      items: []
    },
    reactjs: {
      isFetching: false,
      didInvalidate: false,
      lastUpdated: 1439478405547,
      items: [ 42, 100 ]
    }
  }
}
```

### Handling Actions

Before going into the details of dispatching actions together with network requests, we will write the reducers for the actions we defined above.

reducers.js

```js
import { combineReducers } from "redux";
import {
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from "../actions";

function selectedSubreddit(store = "reactjs", action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
}

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubReddit
});

export default rootReducer;
```

In this code, there are two interesting parts:

- We use ES6 computed property syntax so we can update `state[action.subreddit]` with `Object.assign()` in a concise way.This:

```js
return Object.assign({}, state, {
  [action.subreddit]: posts(state[action.subreddit], action)
});
```

is equivalent to this;

```js
let nextState = {};
nextState[action.subreddit] = posts[(state[action.subreddit], action)];
return Object.assign({}, state, nextState);
```

- We extracted `posts(state, action)` that manages the state of a specific post list. This is just reducer composition. It is our choice how to split the reducer into smaller reducers, and in this case, we're delegating updating items inside an object to `posts` reducer.

Remember that reducer are just functions, so you can use functional composition composition and higher order function as much as you feel comfortable.

### Async Action Creators

Finally, how do we use the synchronous action creators ew defined earlier together with network request? The standard way to do it with Redux is to use Redux Thunk middleware. It comes in a separate package called `redux-thunk`. We'll explain how middleware works in general later; for there is just one important thing you need to know; by using this specific middleware, an action creator can return a function instead of an object. This way, the action creators becomes thunk.

When an action creator returns a function, that function will get executed by Redux Thunk middleware. This function doesn't need to be pure; it is thus allowed to have side effects, including executing asynchronous API calls. The function can also dispatch actions-like those synchronous actions we defined earlier.

We can still define these special thunk actions creators inside our `action.js` file:

action.js(Asynchronous)

```js
import fetch from `cross-fetch`;

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit, json) {
  return
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
}

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export function invalidateSubreddit(subreddit) {
  return  {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))
export function fetchPosts(subreddit) {
  return function(dispatch) {
    dispatch(requestPosts(subreddit));

    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receivePosts(subreddit, json))
      )
  }
}
```

index.js

```js
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { selectSubreddit, fetchPosts } from "./actions";
import rootReducer from "./reducers";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

store.dispatch(selectSubreddit("reactjs"));
store.dispatch(fetchPosts("reactjs").then(() => console.log(store.getState())));
```

The nice thing about thunks is that they can dispatch results of each other.

actions.js(with `fetch`)

```js
import fetch from "cross-fetch";

export const REQUEST_POSTS = "REQUEST_POSTS";
function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  };
}

export const RECEIVE_SUBREDDIT = "RECEIVE_SUBREDDIT";
function receiverPosts(subreddit, json) {
  return {
    type: RECEIVE_SUBREDDIT,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
}

export const INVALIDATE_SUBREDDIT = "INVALIDATE_SUBREDDIT";
export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  };
}

function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit));
    return fetch("https://www.reddit.com/r/${subreddit}.json")
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)));
  };
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubReddit[subreddit];
  if (!posts) {
    return true;
  } else if(posts.isFetching) {
    return false;
  } els {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    } else {
      return Promise.resolve()
    }
  }
}
```

This lets us write more sophisticated async flow gradually, while the consuming code can stay pretty much the same:

index.js

```js
store
  .dispatch(fetchPostsIfNeeded("reactjs"))
  .then(() => console.log(store.getState()));
```

> **Note** Server Rendering: Async action creators are especially convenient for server rendering. You can create a store, dispatch async action creator that dispatches other async creators to fetch data for a while section of your app, and only render after Promise it returns, completes. Then your store will already be hydrated with the state you need before.
