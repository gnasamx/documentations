# Node CLI and REPL

```bash
Ganeshs-MacBook-Air:/ ganesh$ node
Welcome to Node.js v12.4.0.
Type ".help" for more information.
> 3 === '3'
false
> 
```

One of the most useful feature of Node's REPL is Autocomplete. Just press double `tab` and you will get a big list commands which will be equivalent to `global.<press tab here>`.     

## Special commands
Node has some special commands that begins with `.` (Dot). So `.<press double tab here>` will give you all those commands.

```bash
> .
break   clear   editor  exit    help    load    save  
```

`.help` will list description of the all commands

```bash
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the repl
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press ^C to abort current expression, ^D to exit the repl
```

**Examples of above commands**

- `.break`: Use when you stuck in multiline code and want  to get out of it. 

```bash
> Server.on('request', (req, res) => {
... res.writeHead(200, {'content-type': 'text/plain' });
... res.write('hello\n');
... 
... setTimeout(() => {
... 
... .break
> 
```

- `.load`:  Use to load another script into REPL session

```bash
Ganeshs-MacBook-Air:Desktop ganesh$ touch hello.js
Ganeshs-MacBook-Air:Desktop ganesh$ vim hello.js 
Ganeshs-MacBook-Air:Desktop ganesh$ node
Welcome to Node.js v12.4.0.
Type ".help" for more information.
> .load hello.js
console.log('hello!!');
 
hello!!
undefined
> 
```

- `.save`: Use to save the REPL session into a file

```bash
> .save session.js
Session saved to: session.js
```

- `.editor`: This command will give multiline editor for your REPL commands

```bash
> .editor
// Entering editor mode (^D to finish, ^C to cancel)
function hello(){
  console.log('hello!!');
}

undefined
> hello()
hello!!
undefined
> 
```
