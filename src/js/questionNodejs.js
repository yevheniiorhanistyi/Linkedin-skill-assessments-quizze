const nodeJS = [

  {

    question: ` When a javaScript function is invoked (called) in Node, where is a new frame placed?`,


    answers: [
      'the call stack',
      'the event loop',
      'the poll phase',
      'the events queue'],

    correct: 0,

  },

  {
    question: `Which of the following is a core module in Node?`,

    answers: [
      'webpack',
      'crypt',
      'request',
      'chalk'],

    correct: 1,
  },

  {
    question: `Which of the following Buffer class methods returns an uninitialized buffer?`,

    answers: [
      'allocUnsafe',
      'concat',
      'from',
      'alloc'],

    correct: 0,
  },

  {
    question: `Which of the following modules is NOT a built-in module in Node ?`,

    answers: [
      'ftp',
      'events',
      'dgram',
      'http2'],

    correct: 0,
  },

  {
    question: 'Which fs module method can be used to read the content of a file without buffering it in memory?',

    answers: [
      'read',
      'readFile',
      'createReadStream',
      'readFileSync'],

    correct: 2,
  },

  {
    question: 'Which of the following DNS module methods uses the underlying OS facilities and does not necessarily perform any network communication?',

    answers: [
      'lookup',
      'resolve',
      'resolve4',
      'reverse'],

    correct: 0,
  },

  {
    question: 'How do you check that a value is a date object in Node?',

    answers: [
      'util.types.isDate(value)',
      'assert.isDate(value)',
      'console.isDate(value)',
      'util.date(value)'],
    correct: 0,
  },
  {
    question: 'Can you create an https web server with Node.js ?',

    answers: [
      'no, there are no modules supporting it yet',
      'yes, with the https or http2 modules',
      'yes, through the path module',
      'yes, with the http module'],
    correct: 1,
  },
  {
    question: 'What is the Api that is designed to insulate Addons from changes in the underlying JavaScript engine?',

    answers: [
      'A-API',
      'Z-API',
      'N-API',
      'X-API'],
    correct: 2,
  },
  {
    question: 'Which CLI option can you use to debug a node script in Chrome DevTools?',

    answers: [
      '--dev-tools',
      '--inspect',
      '--chrome',
      '--debug'],
    correct: 1,
  },

  {
    question: 'How can you count the number of logical CPUs on the machine that is running Node?',

    answers: [
      'node -p "process.cpus"',
      'node -p "util.cpus().size"',
      'node -p "process.os.cpus"',
      'node -p "os.cpus().length"'],
    correct: 3,
  },
  {
    question: 'Which of the following is a method on the console object?',

    answers: [
      'exit',
      'test',
      'time',
      'print'],
    correct: 2,
  },
  {
    question: 'Which object is used to manage the cache of required modules?',

    answers: [
      'global.cache',
      'module.cache',
      'process.cache',
      'require.cache'],
    correct: 3,
  },
  {
    question: 'What is the command to silence all process warnings?',

    answers: [
      'node index.js --trace-warnings',
      'node --no-warnings',
      'node -trace-warnings',
      'node index.js --no-warnings'],
    correct: 1,
  },
  {
    question: 'How can you use the promise API with a callback- based function such as child_process.exec?',


    answers: [
      'new Promise(child_process.exec())',
      'util.promisify(child_process.exec())',
      'util.promisify(child_process.exec)',
      'new Promise(child_process.exec)'],
    correct: 2,
  },
  {
    question: 'Which of the following is NOT a Node repl command?',

    answers: [
      '.break',
      '.history',
      '.editor',
      '.save'],
    correct: 1,
  },
  {
    question: 'Which statement is true when you run the code shown below?',

    multicode: `require('child_process').fork('script.js');`,

    answers: [
      'The forked process shares the event loop with the parent process',
      'A new VM instance is created and the two VM instances will be shared between the forked process and the parent process.',
      'The forked process will have its own VM instance.',
      'The forked process shares the same VM thread with the parent process.'],
    correct: 2,
  },
  {
    question: 'If EventEmitter is in scope, which of the following lines of code will have an event emitter emitting a change event?',

    answers: [
      `EventEmitter.emit('change');`,
      `EventEmitter.new().emit('change');`,
      `(new EventEmitter()).emit('change');`,
      `new EventEmitter('change');`],
    correct: 0,
  },
  {
    question: `.Which of the following objects is a stream?`,

    answers: [
      'process.uptime',
      'process.stdout',
      'process',
      'Buffer'],
    correct: 1,
  },
  {
    question: 'Which module variable holds the resolved absolute path of the current module file?',

    answers: [
      `__pathname`,
      `__location`,
      `__flder`,
      `__filename`],
    correct: 3,
  },
  {
    question: 'If the child_process module methods are in scope, what is a current way to execute the command ps - ef using a child process?',

    answers: [
      'spawn("ps -ef")',
      'exec("ps -ef")',
      'exec("ps", "-ef")',
      'fork("ps -ef")'],
    correct: 1,
  },
  {
    question: 'Which console method can be used to print the stack trace to the point of its execution?',

    answers: [
      'stack',
      'trace',
      'debug',
      'print'],
    correct: 1,
  },
  {
    question: 'When you run JavaScript in a Node.js application, which of the following elements in a Node.js stack actually executes that JavaScript?',

    answers: [
      'the libuv library',
      'the c-ares library',
      'the VM (like VS or Chakra)',
      'the repl module'],
    correct: 2,
  },
  {
    question: 'Looking at the code below, what does the console show?',

    multicode:
      `const http = require("http");
       const hostname = "127.0.0.1"; const port = 3000;
       const server = http.createServer((req, res) => {
       res.statusCode = 200;  res.setHeader("Content-Type", "text/plain");  res.end("Hello World\n");
      });
      server.listen(port, hostname, () => { console.log("server running at http://\${hostname}:\${port}/); "});`,


    answers: [
      'server running at http://localhost:3000/',
      'server running at port 3000',
      'server running at http://localhost:4000/',
      'server running at http://127.0.0.1:3000/'],
    correct: 3,
  },

  {
    question: ' What is the purpose of the path module?',

    answers: [
      'to provide utilities to play with file and directory paths',
      'to provide utilities to add and remove files',
      'It is a retiring module.',
      'to provide utilities to test files'],
    correct: 0,
  },

  {
    question: ' How do you make an HTTP server object active and listen to requests on certain ports?',

    answers: [
      'server. start',
      'server.activate',
      'server.listen',
      'server. run'],
    correct: 2,
  },

  {
    question: ' What does the code shown below do?',

    multicode:
      `const fs = require('fs'); const os = require('os');
       const system = os.platform(); const user = os.userInfo().username;
       fs.appendFile('hello.txt', \`Hello \${ user } on \${ system }\`, (err) => { if (err) throw err; console.log('The data was appended to file!'); }
       );`,

    answers: [
      'creates a text file hello.txt and appends customized text',
      'creates an image file',
      'console logs system information',
      'creates a file named data and append numbers'],
    correct: 0,
  },
  {
    question: ' How do you start a Node application, if the entry file is indexjs?',

    answers: [
      'nodemon start',
      'start index.js',
      'node index.js',
      'node start'],
    correct: 2,
  },

  {
    question: ' What is the purpose of the file system (fs) module?',

    answers: [
      'to provide methods to work with requests and responses',
      'to provide methods to work with files',
      'to provide methods to work with databases',
      'to find new file systems'],
    correct: 1,
  },
  {
    question: ' What is the Node LTS version?',

    answers: [
      'It is the current unstable version and is to be avoided.',
      'It is the version that will be retired soon.',
      'It is the version with the latest features.',
      'It is the safest version for long-term support.'],
    correct: 3,
  },
  {
    question: ' Which of the following is NOT a valid stream in Node?',

    answers: [
      'process. stdinfo',
      'process. stdin',
      'process. stdout',
      'process. stderr'],
    correct: 0,
  },
  {
    question: ' You have a script.js file with the single line of code shown here. What will be the output of executing script.js with the node command?',

    multicode: `console.log(arguments); `,

    answers: [
      'ReferenceError: arguments is not defined',
      'an empty string',
      'undefined',
      'an object representing an array that has five elements'],
    correct: 3,
  },
  {
    question: ' Which choice is not a valid method on event emitters?',

    answers: [
      'start',
      'on',
      'once',
      'off'],
    correct: 0,
  },
  {
    question: ' Which special object is an instance of EventEmitter?Which special object is an instance of null?',

    answers: [
      'process',
      'Buffer',
      'root',
      'require'],
    correct: 0,
  },
  {
    question: ' What is the command to get a list of available commands for Node.js?What is the command to get a list of available commands for Node.js?',

    answers: [
      'node index.js -x',
      'node -v',
      'node -h',
      'node index.js -h'],
    correct: 2,
  },
  {
    question: ' When a request event is received in the HTTP module, what is the type of the first argument passed to that event, usually named req?',

    answers: [
      'http.IncomingMessage',
      'http.ServerRequest',
      'http.ClientRequest',
      'http.ServerResponse'],
    correct: 0,
  },
  {
    question: ' What are the arguments passed to the module wrapper function?',

    answers: [
      `exports, __filename, __dirname`,
      `exports, process, require, module, __filename, __dirname`,
      `exports, module, __filename, __dirname`,
      `exports, require, module, __filename, __dirname`],
    correct: 3,
  },
  {
    question: ' Which library provides Node.js with the event loop?',

    answers: [
      'V8',
      'c-ares',
      'libuv',
      'events'],
    correct: 2,
  },
  {
    question: ' What does the .node file extension represent?',

    answers: [
      'a C++ file that can have a .node extension and that Node will be able to execute directly.',
      'a C++ Addon file that is built with node-gyp',
      'a JSON file that can have a .node extension as well as the .json extension',
      'a JavaScript file that can have a .node extension as well as the .js extension'],
    correct: 1,
  },
  {
    question: ' What can you export with module.exports?',

    answers: [
      'only objects.',
      'only functions',
      'only variables and arrays',
      'functions, objects, arrays, or anything you assign to the module'],
    correct: 3,
  },
  {
    question: ' Which core module in Node can you use to take advantage of multicore systems?',

    answers: [
      'os',
      'util',
      'cluster',
      'net'],
    correct: 2,
  },
  {
    question: ' Which core Node module has wrappers for OpenSSL methods?',

    answers: [
      'SSL',
      'hash',
      'crypto',
      'TLS'],
    correct: 2,
  },
  {
    question: ' Which line imports a promise-based version of the readFile method?',

    answers: [
      'const { readFile } = require(fs).promises',
      'const { readFile } = require(fs)',
      'const { readFilePromises: readFile } = require(fs)',
      'const { readFile } = require(promises)'],
    correct: 0,
  },
  {
    question: ' According to the rules of semantic versioning, what does a release incrementing the third number in an npm version string communicate to users about the release changes?',

    answers: [
      'Changes are not backwards compatible.',
      'Changes might not be backward compatible and might break existing code.',
      'Changes are just bug fixes and no new features were added.',
      'Changes will add new functionality but will not break any existing code.'],
    correct: 2,
  },
  {
    question: ' What does REPL stand for?',

    answers: [
      'run, examine, put, loop',
      'read, eval, print, loop',
      'run, edit, print, loop',
      'read, extend, print, loop'],
    correct: 1,
  },
  {
    question: ' Which file does node-gyp use to read the build configuration of a module?',

    answers: [
      '.gyprc',
      'binding.gyp',
      'gyp.json',
      'package.gyp'],
    correct: 1,
  },
  {
    question: ' Which core module in Node can you use for testing?',

    answers: [
      'chai',
      'jest',
      'assert',
      'mocha'],
    correct: 2,
  },
  {
    question: ' Which core module in Node provides an API to register callbacks to track asynchronous resources created inside a Node.js application?',

    answers: [
      'cluster',
      'async_hooks',
      'dgram',
      'inspector'],
    correct: 1,
  },
  {
    question: ' Which Node.js module should you use when you need to decode raw data into strings?',

    answers: [
      'buffer',
      'util',
      'string_decoder',
      'string_buffer'],
    correct: 2,
  },
  {
    question: ' Which global object acts like a bridge between a Node script and the host operating system?',

    answers: [
      'v8',
      'env',
      'process',
      'child_process'],
    correct: 2,
  },
  {
    question: ' Which statement is true about Node.js and threads?',

    answers: [
      'Every Node process runs in a single thread, and all the I/O work is run in that same thread.',
      'Every Node process gets four threads that it can share between its JavaScript VM and the event loop.',
      'The event loop is single-threaded, but a JavaScript VM can use multiple threads.',
      'JavaScript execution in Node.js is single-threaded, but I/O operations are executed using multiple threads.'],
    correct: 2,
  },
  {
    question: ' Which statement about event emitters is false?',

    answers: [
      'Event names must be camelCase strings.',
      'The emit method allows a arbitrary set of arguments to be passed to the listener functions.',
      'Any values returned by the listeners for an emitted events are ignored.',
      'When an event emitter object emits an event, all of the functions attached to that specific event are called synchronously.'],
    correct: 0,
  },
  {
    question: ' Which core module in Node can you use to compile and run JavaScript code in a sandbox environment?',

    answers: [
      'sandbox',
      'buffer',
      'vm',
      'v8'],
    correct: 2,
  },

  {
    question: ' How would you determine the number of cluster instances to start when using the cluster module?',

    answers: [
      'const numInstances = cluster.instances().length;',
      'const numInstances = cluster.instances();',
      'const numInstances = require("os").cpus().length;',
      'const numInstances = process.cpus().length;'],
    correct: 2,
  },

  {
    question: ' You have to read a large text file, replace some words in it, and write it back to a new file. You know that the memory on your target system is limited. What should you do?',

    answers: [
      'Use regular expressions directly on the file.',
      'Use Promises and async/await to offload the task to libuv.',
      'Copy the file into a database and perform the operations there.',
      'Use readline together with streams to read and transform and write the file contents line by line.'],
    correct: 3,
  },
  {
    question: ' Which choice is `not` a Node global object?',

    answers: [
      'process',
      'exports',
      'setTimeout',
      'Buffer'],
    correct: 3,
  },

  {
    question: ' What is the correct way to pipe a readable stream and a writable stream?',

    answers: [
      'readableStream.pipe(writableStream)',
      'readableStream.on(pipe, writableStream)',
      'writableStream.pipe(readableStream)',
      'writableStream.on(pipe, readableStream)'],
    correct: 0,
  },

  {
    question: ' How can you convert path segments into a string using the platform-specific separator as a delimiter?',

    answers: [
      'path.concat',
      'path.join',
      'path.format',
      'path.parse'],
    correct: 1,
  },
  {
    question: ' What is the purpose of N-API?',

    answers: [
      'to allow users to make requests to the server',
      'to insulate Addons from changes in the underlying JavaScript engine',
      'to execute multi-threaded code in the Node environment',
      'to provide a quick way for users to create REST APIs'],
    correct: 1,
  },

  {
    question: ' What is a process object and its role?',

    answers: [
      'a locally scoped object that provides information about the current node process',
      'a global object that provides information about files',
      'a global object that provides information about the database',
      'a global object that provides information about the current node process'],
    correct: 3,
  },
  {
    question: ' What will this code log to the console?',

    multicode:
      `// File: person.js
      exports.name = "Jane";

      // File: index.js
      const person = require('./person.js');
      console.log(person);`,


    answers: [
      `{ 'Jane' } `,
      `{ name: 'Jane' } `,
      `{ } `,
      `Jane`],
    correct: 1,
  },

  {
    question: ' What will this code log to the console?',

    multicode:
      `// File: person.js
      exports = "John";

      // File: index.js
      const person = require('./person.js');
      console.log(person);`,

    answers: [
      `John`,
      `Undefined`,
      `{ 'John' } `,
      `{ } `],
    correct: 3,
  },

  {
    question: ' Is it possible to write tests in Node.js without an external library?',

    answers: [
      'yes, through the assert module',
      'yes, through the debugger module',
      'yes, through the console module',
      'no'],
    correct: 0,
  },

  {
    question: ' Which assert module method is usually used to test the error-first argument in callbacks?',

    answers: [
      'fail',
      'doesNotThrow',
      'deepStrictEqual',
      'ifError'],
    correct: 3,
  },

  {
    question: ' Which choice is not a method on the util module?',

    answers: [
      'promisify',
      'asyncify',
      'types',
      'callbackify'],
    correct: 1,
  },

  {
    question: ' Which choice is not a subclass of the Error class?',

    answers: [
      'GlobalError',
      'TypeError',
      'RangeError',
      'AssertionError'],
    correct: 0,
  },
  {
    question: ' What is Node built on?',

    answers: [
      'Python',
      'V8 JavaScript engine',
      'PHP',
      'c'],
    correct: 1,
  },
  {
    question: ' How does it affect the performance of a web application when an execution path contains a CPU-heavy operation, such as calculating a long Fibonacci sequence?',

    answers: [
      `As Node.js is asynchronous, this is handled by a libuv and a threadpool. 
      The performance will not notably degrade.`,
      `As the application code runs asynchronously within a single thread, 
      the execution will block, accepting no more requests until the operation is completed.`,
      `As Node.js is asynchronous, this is handled by a threadpool and 
      the performance will not notably degrade.`,
      `The current thread will block until the execution is completed and the operating system 
      will spawn new threads to handle incoming requests. 
      This can exhaust the number of allowed threads (255) and degrade performance over time.`],
    correct: 3,
  },
  {
    question: ' What is used for parsing and running Javascript in Node.js?',

    answers: [
      'EventLoop',
      'Libuv',
      'Google V8',
      'Express.js'],
    correct: 2,
  },
  {
    question: ' What is the importance of having good practices around status code in your response?',

    answers: [
      'It indicates success or failure to the client and helps with testing.',
      'It is not important to have good practices regarding status codes',
      'Response codes are the only way you can tell what is happening on the server.',
      'It contains information about the current performance of the server.'],
    correct: 0,
  },

  {
    question: ' How can ECMAScript modules be used natively in Node?',

    answers: [
      'ECMAScript modules cannot be used natively in Node.',
      'ECMAScript modules can be used natively in Node with the .mjs file extension',
      'ECMAScript modules can be used natively in Node only by using a compiler like Babel.',
      'ECMAScript modules can be used natively in Node only by using a bundle like webpack.'],
    correct: 0,
  },

  {
    question: `. When exploring the Node documentation's features, what are the stability ratings?`,

    answers: [
      'They are an indication of the stability of Nodejs modules and usage recommendations.',
      'They tell if a feature is ES6 compliant.',
      'They are a Node command to validate stability of your code.',
      'They tell if a feature is LTS (Long Term Supported).'],
    correct: 0,
  },

  {
    question: 'Which choice is a core module in Node?',

    answers: [
      'crypto',
      'chalk',
      'webpack',
      'request'],
    correct: 0,
  },

  {
    question: ' Which DNS module method uses the underlying OS facilities and does not necessarily perform any network communication?',

    answers: [
      'resolve',
      'reverse',
      'lookup',
      'resolve4'],
    correct: 2,
  },

  {
    question: ' What is one way to check that a value is a date object in Node?',

    answers: [
      'console.isDate(value)',
      'util.date(value)',
      'assert.isDate(value)',
      'util.types.isDate(value)'],
    correct: 3,
  }
];

export default nodeJS;