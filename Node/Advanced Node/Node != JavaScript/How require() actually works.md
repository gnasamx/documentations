# How `require()` actually works

There are two core modules involved, The `require()` which available on `global` object, but module gets it own require function, and `module` module also available on `global` object, and used to manage all the modules we require with require  function. Requiring a module in node is very simple concept, to execute a require call, Node goes through following sequence of steps:
- Resolving:  To find the absolute file path of module.
- Loading: Loading is determine by the content of the file at the resolved path.
- Wrapping: Wrapping which gives every module it's private scope, and makes require local to every module.
- Evaluating: Evaluating is what the VM eventually does with the code.
- Caching: When require the module again.

### Module object

index.js
```js
console.log(module);
```

```bash
Ganeshs-MacBook-Air:Desktop ganesh$ node index.js 
Module {
  id: '.',
  path: '/Users/ganesh/Desktop',
  exports: {},
  parent: null,
  filename: '/Users/ganesh/Desktop/index.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/ganesh/Desktop/node_modules',
    '/Users/ganesh/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
```

Node will find any module in `paths` array.