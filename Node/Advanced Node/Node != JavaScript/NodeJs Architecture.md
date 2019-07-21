# Node's Architecture

- NodeJs code
- V8
- Core modules
- C++ bindings
- Libuv
- http-parser, c-ares, OpenSSL, zlib
- Operating system

### V8 engine

Node uses V8 via V8's C++ Api. Node itself has an API which we can use in JavaScript, and it allows us to interact with file system, networks timers and others. The Node API eventually executes C++ code using V8 object and function templates, But it is not part of V8 itself. Node also handles the waiting for asynchronous event for us using libuv. When Node is done waiting for I/O operations or timers, it usually has callback functions to invoke, and when it's time to invoke these callbacks, Node simply pass the control into the V8 engine. When V8 is done with the callback, The control is pass back to Node. This is important to understand when the control is with V8 and since V8 is single-threaded Node can not execute anymore JavaScript code, no matter how many callbacks have been registered Node will wait until V8 can handle more operations. This is actually makes programming in Node easy. We don't have to worry about locking or race condition. There's only one thread where our JavaScript code runs. 

### Libuv

Libuv is c library developed for Node, but it's now use by languages like Rust, Julia, and others. It is used to abstract non-blocking I/O operations to a consistent interface across many operating systems. It's what handel operation on the file system, TCP/UDP sockets, child process , and others. Libuv included a thread pool to handle what can't be done asynchronously at the operating system level. Libuv is also what provides Node with the event-loop.

### Node dependencies

**http-parser**: http-parser is small c library used for parsing HTTP messages. It works for both request and response and it's designed to have a very small pre-request memory footprint.

**c-ares**: c-ares what enables performing asynchronous DNS queries.

**OpenSSL**: OpenSSL is used mostly in the tls and crypto module. It provides implementation for many cryptographic functions.

**Zlib**: Zlib is used for its fast async and streaming compression and decompression interfaces.