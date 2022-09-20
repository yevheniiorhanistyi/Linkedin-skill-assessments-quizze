const questionsJS = [
  {
    question: " Which operator returns true if the two compared values are not equal?",

    answers: [
      `<>`,
      `~`,
      `==!`,
      `!==`],

    correct: 3
  },
  {
    question: " How is a forEach statement different from a for statement?",

    answers: [
      'Only a for statement uses a callback function.',
      'A for statement is generic, but a forEach statement can be used only with an array.',
      'Only a forEach statement lets you specify your own iterator.',
      'A forEach statement is generic, but a for statement can be used only with an array.'],

    correct: 1
  },

  {
    question: " Review the code below. Which statement calls the addTax function and passes 50 as an argument? How would you use this function to find out how much tax should be paid on \$50?",
    multicode:
      `function addTax(total) {
        return total * 1.05;
      }`,

    answers: [
      `addTax = 50;`,
      `return addTax 50;`,
      `addTax(50);`,
      `addTax 50;`],

    correct: 2
  },

  {
    question: " Which statement is the correct way to create a variable called rate and assign it the value 100?",

    answers: [`let rate = 100;`,
      `let 100 = rate;`,
      `100 = let rate;`,
      `rate = 100;`],

    correct: 0
  },

  {
    question: 'Which statement creates a new object using the Person constructor? Which statement creates a new Person object called "student"?',

    answers: [`var student = new Person();`,
      `var student = construct Person;`,
      `var student = Person();`,
      `var student = construct Person();`],

    correct: 0
  },

  {
    question: " When would the final statement in the code shown be logged to the console? When would 'results shown' be logged to the console?",

    multicode:
      `let modal = document.querySelector('#result');
        setTimeout(function () {
          modal.classList.remove('hidden');
       }, 10000);
      console.log('Results shown');`,

    answers: [
      `after 10 second`,
      `after results are received from the HTTP request`,
      `after 10000 seconds`,
      `immediately`],

    correct: 3
  },

  {
    question: ' Which snippet could you add to this code to print "food" to the console?',

    multicode:
      `class Animal {
        static belly = [];
        eat() {
          Animal.belly.push('food');
        }
      }
      let a = new Animal();
      a.eat();
      console.log(/* Snippet Here */); //Prints food`,

    answers: [
      `a.prototype.belly[0]`,
      `Object.getPrototype0f (a).belly[0]`,
      `Animal.belly[0]`,
      -`a.belly[0]`],

    correct: 2
  },

  {
    question: " You've written the code shown to log a set of consecutive values, but it instead results in the value 5, 5, 5, and 5 being logged to the console. Which revised version of the code would result in the value 1, 2, 3 and 4 being logged?",

    multicode:
      `for (var i = 1; i <= 4; i++) {
        setTimeout(function () {
        console.log(i);
        }, i * 10000);
      }`,

    answers: [
      `for (var i = 1; i <= 4; i++) {
        (function (i) {
          setTimeout(function () {
          console.log(j);
          }, j * 1000);
        })(j);
      }`,

      `for (var i = 1; i <= 4; i++) {
        setTimeout(function () {
        console.log(i);
        }, i * 1000);
      }`,

      `for (var i = 1; i <= 4; i++) {
        (function (j) {
          setTimeout(function () {
          console.log(j);
          }, j * 1000);
        })(i);
      }`,

      `for (var j = 1; j <= 4; j++) {
        setTimeout(function () {
          console.log(j);
        }, j * 1000);
      }`,],

    correct: 2
  },

  {
    question: " How does a function create a closure?",

    answers: [
      'It reloads the document whenever the value changes.',
      'It returns a reference to a variable in its parent scope.',
      'It completes execution without returning.',
      'It copies a local variable to the global scope.'],

    correct: 1
  },

  {
    question: " Which statement creates a new function called discountPrice?",

    answers: [
      `let discountPrice = function (price) {
        return price * 0.85;
      };`,

      `let discountPrice(price) {
        return price * 0.85;
      };` ,

      `let function = discountPrice(price) {
        return price * 0.85;
      };`,

      `discountPrice = function (price) {
        return price * 0.85;
      };`],

    correct: 0
  },

  {
    question: " What is the result in the console of running the code shown?",

    multicode:
      `var Storm = function () {};
        Storm.prototype.precip = 'rain';
        var WinterStorm = function () { };
        WinterStorm.prototype = new Storm();
        WinterStorm.prototype.precip = 'snow';
        var bob = new WinterStorm();
        console.log(bob.precip);]`,

    answers: [
      'Storm()',
      'undefined',
      'rain',
      'snow'],

    correct: 3
  },

  {
    question: " You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?",

    answers: [
      `/[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/`,
      `/\d\d:\d\d:\d\d/`,
      `/[0-9]+:[0-9]+:[0-9]+/`,
      `/ : : /`],

    correct: 1
  },

  {
    question: " What is the result in the console of running this code?",

    multicode:
      `'use strict';
  function logThis() {
    this.desc = 'logger';
    console.log(this);
  }
  new logThis();`,

    answers: [`undefined`,
      `window`,
      `{desc: "logger"}`,
      `function`],

    correct: 2
  },

  {
    question: " How would you reference the text 'avenue' in the code shown?",

    multicode:
      `let roadTypes = ['street', 'road', 'avenue', 'circle'];`,

    answers: [
      'roadTypes.2',
      'roadTypes\[3\]',
      'roadTypes.3',
      'roadTypes\[2\]'],

    correct: 3
  },

  {
    question: " What is the result of running this statement?",

    multicode:
      'console.log(typeof 42);',

    answers: [`'float'`,
      `'value'`,
      `'number'`,
      `'integer'`],

    correct: 2
  },

  {
    question: " Which property references the DOM object that dispatched an event?",

    answers: [
      `self`,
      `object`,
      `target`,
      `source`],

    correct: 2
  },

  {
    question: " You're adding error handling to the code shown. Which code would you include within the if statement to specify an error message?",

    multicode:
      `function addNumbers(x, y) {
        if(isNaN(x) || isNaN(y)) {
        }
      } `,

    answers: [
      `exception('One or both parameters are not numbers')`,
      `catch('One or both parameters are not numbers')`,
      `error('One or both parameters are not numbers')`,
      `throw('One or both parameters are not numbers')`],

    correct: 3
  },

  {
    question: " Which method converts JSON data to a JavaScript object?",

    answers: [
      `JSON.fromString();`,
      `JSON.parse()`,
      `JSON.toObject()`,
      `JSON.stringify()`],

    correct: 1
  },

  {
    question: " When would you use a conditional statement?",

    answers: [
      `When you want to reuse a set of statements multiple times.`,
      `When you want your code to choose between multiple options.`,
      `When you want to group data together.`,
      `When you want to loop through a group of statement.`],

    correct: 1
  },

  {
    question: " What would be the result in the console of running this code?",

    multicode:
      `for (var i = 0; i < 5; i++) {
          console.log(i);
        }`,

    answers: [
      '1 2 3 4 5',
      '1 2 3 4',
      '0 1 2 3 4',
      '0 1 2 3 4 5'],

    correct: 2
  },

  {
    question: " Which Object method returns an iterable that can be used to iterate over the properties of an object?",

    answers: [
      `Object.get()`,
      `Object.loop()`,
      `Object.each()`,
      `Object.keys()`],

    correct: 3
  },

  {
    question: " What will be logged to the console?",

    multicode:
      `var a = ['dog', 'cat', 'hen'];
      a[100] = 'fox';
      console.log(a.length);`,

    answers: [
      '101',
      '3',
      '4',
      '100'],

    correct: 0
  },

  {
    question: " What is one difference between collections created with Map and collections created with Object?",

    answers: [
      'You can iterate over values in a Map in their insertion order.',
      'You can count the records in a Map with a single method call.',
      'Keys in Maps can be strings.',
      'You can access values in a Map without iterating over the whole collection.'],

    correct: 1
  },

  {
    question: " What is the value of dessert.type after executing this code?",

    multicode:
      `const dessert = { type: 'pie' };
       dessert.type = 'pudding';`,

    answers: [
      'pie',
      'The code will throw an error.',
      'pudding',
      'undefined'],

    correct: 2
  },

  {
    question: " 0 && hi",

    answers: [
      'ReferenceError',
      'True',
      '0',
      'false'],

    correct: 2
  },

  {
    question: " Which of the following operators can be used to do a short-circuit evaluation?",

    answers: [
      `\++`,
      `\--`,
      `\==`,
      `\|\|`],

    correct: 3
  },

  {
    question: " Which statement sets the Person constructor as the parent of the Student constructor in the prototype chain?",

    answers: [
      `Student.parent = Person;`,
      `Student.prototype = new Person();`,
      `Student.prototype = Person;`,
      `Student.prototype = Person();`],

    correct: 1
  },

  {
    question: ' Why would you include a "use strict" statement in a JavaScript file?',

    answers: [
      'to tell parsers to interpret your JavaScript syntax loosely',
      'to tell parsers to enforce all JavaScript syntax rules when processing your code',
      'to instruct the browser to automatically fix any errors it finds in the code',
      'to enable ES6 features in your code'],

    correct: 1
  },

  {
    question: " Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?",

    answers: [
      'all of them',
      `const`,
      `var`,
      `let`],

    correct: 2
  },

  {
    question: " Which of the following values is not a Boolean false?",

    answers: [
      `Boolean(0)`,
      `Boolean("")`,
      `Boolean(NaN)`,
      `Boolean("false")`],

    correct: 3
  },

  {
    question: " Which of the following is not a keyword in JavaScript?",

    answers: [
      `this`,
      `catch`,
      `function`,
      `array`],

    correct: 3
  },

  {
    question: " Which variable is an implicit parameter for every function in JavaScript?",

    answers: [
      'Arguments',
      'args',
      'argsArray',
      'argumentsList'],

    correct: 0
  },

  {
    question: " For the following class, how do you get the value of 42 from an instance of X?",

    multicode:
      `class X {
        get Y() {
        eturn 42;
        }
      }
      var x = new X();`,

    answers: [
      `x.get('Y')`,
      `x.Y`,
      `x.Y()`,
      `x.get().Y`],

    correct: 1
  },

  {
    question: " What is the result of running this code?",

    multicode:
      `sum(10, 20);
       diff(10, 20);

       function sum(x, y) {
        return x + y;
       }

  let diff = function (x, y) {
    return x - y;
  };`,

    answers: [
      '30, ReferenceError, 30, -10',
      '30, ReferenceError',
      '30, -10',
      'ReferenceError, -10'],

    correct: 1
  },

  {
    question: " Why is it usually better to work with Objects instead of Arrays to store a collection of records?",

    answers: [
      'Objects are more efficient in terms of storage.',
      'Adding a record to an object is significantly faster than pushing a record into an array.',
      'Most operations involve looking up a record, and objects can do that better than arrays.',
      'Working with objects makes the code more readable.'],

    correct: 2
  },

  {
    question: ' Which statement is true about the "async" attribute for the HTML script tag?',

    answers: [
      'It can be used for both internal and external JavaScript code.',
      'It can be used only for internal JavaScript code.',
      'It can be used only for internal or external JavaScript code that exports a promise.',
      'It can be used only for external JavaScript code.'],

    correct: 3
  },

  {
    question: 'How do you import the lodash library making it top-level Api available as the "\_" variable?',

    answers: [
      `import _ from 'lodash';`,
      `import 'lodash' as _;`,
      `import '_' from 'lodash;`,
      `import lodash as _ from 'lodash';`],

    correct: 0
  },

  {
    question: " What does the following expression evaluate to?",

    multicode:
      '[] == [];',

    answers: [
      'True',
      'undefined',
      '[] []',
      'False'],

    correct: 3
  },

  {
    question: " What type of function can have its execution suspended and then resumed at a later point?",

    answers: [
      'Generator function',
      'Arrow function',
      'Async/ Await function',
      'Promise function'],

    correct: 0
  },

  {
    question: " What will this code print?",

    multicode:
      `var v = 1;
       var f1 = function () {
        console.log(v);
      };

    var f2 = function () {
      var v = 2;
      f1();
    };

    f2();`,

    answers: [
      '2',
      '1',
      'Nothing - this code will throw an error.',
      'undefined'],

    correct: 1
  },

  {
    question: " Which statement is true about Functional Programming?",

    answers: [
      'Every object in the program has to be a function.',
      'Code is grouped with the state it modifies.',
      'Date fields and methods are kept in units.',
      'Side effects are not allowed.'],

    correct: 3
  },

  {
    question: " Your code is producing the error: TypeError: Cannot read property 'reduce' of undefined. What does that mean?",

    answers: [
      "You are calling a method named reduce on an object that's declared but has no value.",
      'You are calling a method named reduce on an object that does not exist.',
      'You are calling a method named reduce on an empty array.',
      "You are calling a method named reduce on an object that's has a null value."],

    correct: 0
  },

  {
    question: " How many prototype objects are in the chain for the following array?",
    multicode:
      `let arr = [];`,

    answers: [
      '3',
      '2',
      '0',
      '1'],

    correct: 1
  },

  {
    question: " Which choice is _not_ a unary operator?",

    answers: [
      `typeof`,
      `delete`,
      `instanceof`,
      `void`],

    correct: 2
  },

  {
    question: " What type of scope does the end variable have in the code shown?",

    multicode:
      `var start = 1;
        if(start === 1) {
        let end = 2;
      }`,

    answers: [
      'conditional',
      'block',
      'global',
      'function'],

    correct: 1
  },

  {
    question: " What will the value of y be in this code?",

    multicode:
      `const x = 6 % 2;
      const y = x ? 'One' : 'Two';`,

    answers: [
      'One',
      'undefined',
      'TRUE',
      'Two'],

    correct: 3
  },

  {
    question: " Which keyword is used to create an error?",

    answers: [
      `throw`,
      `exception`,
      `catch`,
      `error`],

    correct: 0
  },

  {
    question: " What's one difference between the async and defer attributes of the HTML script tag?",

    answers: [
      'The defer attribute can work synchronously.',
      'The defer attribute works only with generators.',
      'The defer attribute works only with promises.',
      'The defer attribute will asynchronously load the scripts in order.'],

    correct: 3
  },

  {
    question: " The following program has a problem. What is it?",

    multicode:
      `var a;
       var b = (a = 3) ? true : false;`,

    answers: [
      'The condition in the ternary is using the assignment operator.',
      "You can't define a variable without initializing it.",
      "You can't use a ternary in the right - hand side of an assignment operator.",
      'The code is using the deprecated var keyword.'],

    correct: 0
  },

  {
    question: " Which statement references the DOM node created by the code shown?",

    multicode:
      '&ltp class="pull"&gtlorem ipsum&lt/p&gt',

    answers: [
      `Document.querySelector('class.pull')`,
      `document.querySelector('.pull');`,
      `Document.querySelector('pull')`,
      `Document.querySelector('#pull')`],

    correct: 1
  },

  {
    question: " What value does this code return?",

    multicode:
      `let answer = true;
        if(answer === false) {
        return 0;
        } else {
        return 10;
      }`,

    answers: [
      '10',
      'true',
      'false',
      '0'],

    correct: 0
  },

  {
    question: " What is the result in the console of running the code shown?",

    multicode:
      `var start = 1;
        function setEnd() {
        var end = 10;
        }
      setEnd();
      console.log(end);`,

    answers: [
      '10',
      '0',
      'ReferenceError',
      'undefined'],

    correct: 2
  },

  {
    question: " What will this code log in the console?",

    multicode:
      `function sayHello() {
        console.log('hello');
      }

console.log(sayHello.prototype);`,

    answers: [
      'undefined',
      "hello",
      'an object with a constructor property',
      'an error message'],

    correct: 2
  },

  {
    question: " Which collection object allows unique value to be inserted only once?",

    answers: [
      'Object',
      'Set',
      'Array',
      'Map'],

    correct: 1
  },

  {
    question: " What two values will this code print?",

    multicode:
      `function printA() {
        console.log(answer);
        var answer = 1;
      }
  printA();
  printA();`,

    answers: [
      "`1` then `1`",
      "`1` then `undefined`",
      "`undefined` then `undefined`",
      "`undefined` then `1`"],

    correct: 2
  },

  {
    question: " How does the `forEach()` method differ from a `for` statement?",

    answers: [
      'forEach allows you to specify your own iterator, whereas for does not.',
      'forEach can be used only with strings, whereas for can be used with additional data types.',
      'forEach can be used only with an array, whereas for can be used with additional data types.',
      'for loops can be nested; whereas forEach loops cannot.'],

    correct: 2
  },

  {
    question: " Which choice is an incorrect way to define an arrow function that returns an empty object?",

    answers: [
      '=> ({})',
      '=> {}',
      '=> { return {};}',
      '=> (({}))'],

    correct: 1
  },

  {
    question: " Why might you choose to make your code asynchronous?",

    answers: [
      'to start tasks that might take some time without blocking subsequent tasks from executing immediately',
      'to ensure that tasks further down in your code are not initiated until earlier tasks have completed',
      'to make your code faster',
      'to ensure that the call stack maintains a LIFO (Last in, First Out) structure'],

    correct: 0
  },

  {
    question: " Which expression evaluates to true?",

    answers: [
      `[3] == [3]`,
      `3 == '3'`,
      `3 != '3'`,
      `3 === '3'`],


    correct: 1
  },

  {
    question: " Which of these is a valid variable name?",

    answers: [
      '5thItem',
      'firstName',
      'grand total',
      'function'],

    correct: 1
  },

  {
    question: " Which method cancels event default behavior?",

    answers: [
      `cancel()`,
      `stop()`,
      `preventDefault()`,
      `prevent()`],

    correct: 2
  },

  {
    question: " Which method do you use to attach one DOM node to another?",

    answers: [
      `attachNode()`,
      `getNode()`,
      `querySelector()`,
      `appendChild()`],

    correct: 3
  },

  {
    question: " What statement can be used to skip an iteration in a loop?",

    answers: [
      `break`,
      `pass`,
      `skip`,
      `continue`],

    correct: 3
  },

  {
    question: " Which choice is valid example for an arrow function?",

    answers: [
      `(a,b) => c`,
      `a, b => {return c;}`,
      `a, b => c`,
      `{ a, b } => c`],

    correct: 0
  },

  {
    question: " Which concept is defined as a template that can be used to generate different objects that share some shape and/or behavior?",

    answers: [
      'class',
      'generator function',
      'map',
      'proxy'],

    correct: 0
  },

  {
    question: " How do you add a comment to JavaScript code?",

    answers: [
      `! This is a comment`,
      `# This is a comment`,
      `&#92&#92 This is a comment`,
      `&#47&#47 This is a comment`],

    correct: 3
  },

  {
    question: " If you attempt to call a value as a function but the value is not a function, what kind of error would you get?",

    answers: [
      'TypeError',
      'SystemError',
      'SyntaxError',
      'LogicError'],

    correct: 0
  },

  {
    question: " Which method is called automatically when an object is initialized?",

    answers: [
      'create()',
      'new()',
      'constructor()',
      'init()'],

    correct: 2
  },

  {
    question: " What is the result of running the statement shown?",

    multicode:
      `let a = 5;
    console.log(++a);`,

    answers: [
      '4',
      '10',
      '6',
      '5'],

    correct: 2
  },

  {
    question: " You've written the event listener shown below for a form button, but each time you click the button, the page reloads. Which statement would stop this from happening?",

    multicode:
      `button.addEventListener('click',
        function (e) {
          button.className = 'clicked';
        },
        false,
      );`,

    answers: [
      `e.blockReload();`,
      `button.preventDefault();`,
      `button.blockReload();`,
      `e.preventDefault();`],

    correct: 3
  },

  {
    question: " Which statement represents the starting code converted to an IIFE?",

    answers: [
      `function() { 
        console.log('lorem ipsum'); 
      }()();`,
      `function() { 
        console.log('lorem ipsum'); 
      }();`,
      `(function() { 
        console.log('lorem ipsum'); 
      })();`,
      `function() { 
        console.log('lorem ipsum'); 
      }();`],

    correct: 2
  },

  {
    question: " Which statement selects all img elements in the DOM tree?",

    answers: [
      `Document.querySelector('img')`,
      `Document.querySelectorAll('<img>')`,
      `Document.querySelectorAll('img')`,
      `Document.querySelector('<img>')`],

    correct: 2
  },

  {
    question: " Why would you choose an asynchronous structure for your code?",

    answers: [
      'To use ES6 syntax',
      'To start tasks that might take some time without blocking subsequent tasks from executing immediately',
      'To ensure that parsers enforce all JavaScript syntax rules when processing your code',
      "To ensure that tasks further down in your code aren't initiated until earlier tasks have completed"],

    correct: 1
  },

  {
    question: " What is the HTTP verb to request the contents of an existing resource?",

    answers: [
      'DELETE',
      'GET',
      'PATCH',
      'POST'],

    correct: 1
  },

  {
    question: " Which event is fired on a text field within a form when a user tabs to it, or clicks or touches it?",

    answers: [
      'focus',
      'blur',
      'hover',
      'enter'],

    correct: 0
  },

  {
    question: " What is the result in the console of running this code?",

    multicode:
      `function logThis() {
        console.log(this);
      }
      logThis();`,

    answers: [
      'function',
      'undefined',
      'Function.prototype',
      'window'],

    correct: 3
  },

  {
    question: " Which class-based component is equivalent to this function component?",

    multicode:
      'const Greeting = ({ name }) => <h1>Hello {name}!</h1>;',

    answers: [
      'class Greeting extends React.Component { render() { return <h1>Hello {this.props.name}!</h1>; } }',
      'class Greeting extends React.Component { constructor() { return <h1>Hello {this.props.name}!</h1>; } }',
      'class Greeting extends React.Component { <h>Hello {this.props.name}!</h>; } }',
      'class Greeting extends React.Component { render({ name }) { return <h1>Hello {name}!</h1>; } }'],

    correct: 0
  },

  {
    question: " Which class-based lifecycle method would be called at the same time as this effect Hook?",

    multicode:
      `useEffect(() => {
        // do things
       }, []);`,

    answers: [
      'componentWillUnmount',
      'componentDidUpdate',
      'render',
      'componentDidMount'],

    correct: 3
  },

  {
    question: " What is the output of this code?",

    multicode:
      `var obj;
       console.log(obj);`,

    answers: [
      `ReferenceError: obj is not defined`,
      `{}`,
      `undefined`,
      `null`],

    correct: 2
  },

  {
    question: " How would you use the TaxCalculator to determine the amount of tax on \$50?",

    multicode:
      `class TaxCalculator {
        static calculate(total) {
          return total * 0.05;
        }
       }`,

    answers: [
      'calculate(50);',
      'new TaxCalculator().calculate(\$50);',
      'TaxCalculator.calculate(50);',
      'new TaxCalculator().calculate(50);'],

    correct: 2
  },

  {
    question: " What is wrong with this code?",

    multicode:
      `const foo = {
        bar() {
         console.log('Hello, world!');
        },
        name: 'Albert',
        age: 26,
      };`,

    answers: [
      'The function bar needs to be defined as a key/value pair.',
      'Trailing commas are not allowed in JavaScript.',
      'Functions cannot be declared as properties of objects.',
      'Nothing, there are no errors.'],

    correct: 3
  },

  {
    question: " What will be logged to the console?",

    multicode:
      `console.log('I');
        setTimeout(() => {
        console.log('love');
        }, 0);
      console.log('Javascript!');`,

    answers: [
      `I
Javascript!
love`,

      `
love
I
Javascript!`,

      `The output may change with each execution of code and cannot be determined.`,

      `I
love
Javascript!`],

    correct: 0
  },

  {
    question: " What will this code log to the console?",

    multicode:
      `const foo = [1, 2, 3];
       const [n] = foo;
       console.log(n);`,

    answers: [
      '1',
      'undefined',
      'NaN',
      'Nothing--this is not proper JavaScript syntax and will throw an error.'],

    correct: 0
  },

  {
    question: " How do you remove the property name from this object?",

    multicode:
      `const foo = {
        name: 'Albert',
      };`,

    answers: [
      'delete name from foo;',
      'delete foo.name;',
      'del foo.name;',
      'remove foo.name;'],

    correct: 1
  },

  {
    question: " What is the difference between the `map()` and the `forEach()` methods on the Array prototype?",

    answers: [
      'There is no difference.',
      `The 'forEach()' method returns a single output value, 
      whereas the 'map()' method performs operation on each value in the array.`,
      `The map() methods returns a new array with a transformation applied on each item in the original array, 
      whereas the 'forEach()' method iterates through an array with no return value.`,
      `The 'forEach()' methods returns a new array with a transformation applied on each item in the original 
      array, whereas the 'map()' method iterates through an array with no return value.`],

    correct: 2
  },

  {
    question: " Which concept does this code illustrate?",

    multicode:
      `function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var addFive = makeAdder(5);
console.log(addFive(3));`,

    answers: [
      'overloading',
      'closure',
      'currying',
      'overriding'],

    correct: 2
  },

  {
    question: " Which tag pair is used in HTML to embed JavaScript?",

    answers: [
      '&ltscript>&lt/script&gt',
      '&ltjs&gt&lt/js&gt',
      '&ltjavascript&gt&lt/javascript&gt',
      '&ltcode&gt&lt/code&gt'],

    correct: 0
  },

  {
    question: " If your app receives data from a third-party API, which HTTP response header must the server specify to allow exceptions to the same-origin policy?",

    answers: [
      'Security-Mode',
      'Access-Control-Allow-Origin',
      'Different-Origin',
      'Same-Origin'],

    correct: 1
  },

  {
    question: " What will be logged to the console??",

    multicode:
      `'use strict';
function logThis() {
  this.desc = 'logger';
  console.log(this);
}
new logThis();`,

    answers: [
      'window',
      'undefined',
      'function',
      '{desc: "logger"}'],

    correct: 3
  },

  {
    question: " What is the output of this code?",

    multicode:
      `let rainForests = ['Amazon', 'Borneo', 'Cerrado', 'Congo'];
rainForests.splice(0, 2);
console.log(rainForests);`,

    answers: [
      `["Amazon","Borneo","Cerrado","Congo"]`,
      `["Cerrado", "Congo"]`,
      `["Congo"]`,
      `["Amazon","Borneo"]`],

    correct: 1
  },

  {
    question: " Which missing line would allow you to create five variables(one,two,three,four,five) that correspond to their numerical values (1,2,3,4,5)?",

    multicode:
      `const numbers = [1, 2, 3, 4, 5];
//MISSING LINE`,

    answers: [
      `const [one,two,three,four,five]=numbers`,
      `const {one,two,three,four,five}=numbers`,
      `const [one,two,three,four,five]=[numbers]`,
      `const {one,two,three,four,five}={numbers}`],

    correct: 0
  },

  {
    question: " What will this code print?",

    multicode:
      `const obj = {
      a: 1,
      b: 2,
      c: 3,
    };

    const obj2 = {
      ...obj,
      a: 0,
    };

    console.log(obj2.a, obj2.b);`,

    answers: [
      'Nothing, it will throw an error',
      '0 2',
      'undefined 2',
      'undefined 2'],

    correct: 1
  },

  {
    question: " What line is missing from this code?",

    multicode:
      `//Missing Line
for (var i = 0; i < vowels.length; i++) {
  console.log(vowels[i]);
  //Each letter printed on a separate line as follows;
  //a
  //e
  //i
  //o
  //u
}`,

    answers: [
      `let vowels = "aeiou".toArray();`,
      `let vowels = Array.of("aeiou");`,
      `let vowels = {"a", "e", "i", "o", "u"};`,
      `let vowels = "aeiou";`],

    correct: 3
  },

  {
    question: " What will be logged to the console?",

    multicode:
      `const x = 6 % 2;
const y = x ? 'One' : 'Two';
console.log(y);`,

    answers: [
      'undefined',
      'One',
      'true',
      'Two'],

    correct: 3
  },

  {
    question: " How would you access the word It from this multidimensional array?",

    multicode:
      `let matrix = [["You","Can"],["Do","It"],["!","!","!"]];`,

    answers: [
      `matrix[1[2]]`,
      `matrix[1][1]`,
      `matrix[1,2]`,
      `matrix[1][2]`],

    correct: 1
  },

  {
    question: " What does this code do?",

    multicode:
      `const animals = ['Rabbit', 'Dog', 'Cat'];
animals.unshift('Lizard');`,

    answers: [
      'It adds "Lizard" to the start of the animals array.',
      'It adds "Lizard" to the end of the animals array.',
      'It replaces "Rabbit" with "Lizard" in the animals array.',
      'It replaces "Cat" with "Lizard" in the animals array.'],

    correct: 0
  },

  {
    question: " What is the output of this code?",

    multicode:
      `let x = 6 + 3 + '3';
  console.log(x); `,

    answers: [
      '93',
      '12',
      '66',
      '633'],

    correct: 0
  },

  {
    question: " Which statement can take a single expression as input and then look through a number of choices until one that matches that value is found?",

    answers: [
      'else',
      'when',
      'if',
      'switch'],

    correct: 3
  },

  {
    question: 'Which statement prints "roar" to the console?',

    multicode:
      `var sound = 'grunt';
var bear = { sound: 'roar' };
function roar() {
  console.log(this.sound);
} `,

    answers: [
      `bear.bind(roar); `,
      `roar.bind(bear); `,
      `roar.apply(bear); `,
      `bear[roar](); `],

    correct: 2
  },

  {
    question: " Which choice is a valid example of an arrow function, assuming c is defined in the outer scope?",

    answers: [
      `a, b => { return c; }`,
      `a, b => c`,
      `{ a, b } => c`,
      `(a, b) => c`],

    correct: 3
  },

  {
    question: " Which statement correctly imports this code from some-file.js?",

    multicode:
      `//some-file.js
export const printMe = (str) => console.log(str);`,

    answers: [
      `import printMe from './some-file'; `,
      `import { printMe } from './some-file'; `,
      `import default as printMe from './some-file'; `,
      `const printMe = import './some-file'; `],

    correct: 1
  },

  {
    question: " What will be the output of this code?",

    multicode:
      `const arr1 = [2, 4, 6];
const arr2 = [3, 5, 7];

console.log([...arr1, ...arr2]); `,

    answers: [
      `[2, 3, 4, 5, 6, 7]`,
      `[3, 5, 7, 2, 4, 6]`,
      `[[2, 4, 6], [3, 5, 7]]`,
      `[2, 4, 6, 3, 5, 7]`],

    correct: 3
  },

  {
    question: " Which method call is chained to handle a successful response returned by `fetch()`?",

    answers: [
      `done()`,
      `then()`,
      `finally()`,
      `catch ()`],

    correct: 1
  },

  {
    question: " Which choice is not an array method?",

    answers: [
      `array.slice()`,
      `array.shift()`,
      `array.push()`,
      `array.replace()`],

    correct: 3
  },

  {
    question: " Which JavaScript loop ensures that at least a singular iteration will happen?",

    answers: [
      'do…while',
      'forEach',
      'while',
      'for'],

    correct: 0
  },

  {
    question: " What will be logged to the console?",

    multicode:
      `console.log(typeof 'blueberry');`,

    answers: [
      `string`,
      `array`,
      `Boolean`,
      `object`],

    correct: 0
  },

  {
    question: 'What is the output that is printed when the div containing the text "Click Here" is clicked?',

    multicode:
      `//HTML Markup
    &ltdiv id = "A"&gt
    &ltdiv id="B"&gt
    &ltdiv id="C"&gtClick Here&lt/div&gt
    &lt/div&gt
    &lt/div&gt

  //JavaScript
  document.querySelectorAll('div').forEach((e) => {
    e.onclick = (e) => console.log(e.correctTarget.id);
  }); `,

    answers: [
      'C B A',
      'A',
      'C',
      'A B C'],

    correct: 0
  },

  {
    question: " What will this code log to the console?",

    multicode:
      `const myNumbers = [1, 2, 3, 4, 5, 6, 7];
const myFunction = (arr) => {
  return arr.map((x) => x + 3).filter((x) => x < 7);
};
console.log(myFunction(myNumbers)); `,

    answers: [
      '[4,5,6,7,8,9,10]',
      '[4,5,6,7]',
      '[1,2,3,4,5,6]',
      '[4,5,6]'],

    correct: 3
  },

  {
    question: " What does this code print to the console?",

    multicode:
      `let rainForestAcres = 10;
       let animals = 0;

      while (rainForestAcres < 13 || animals <= 2) {
        rainForestAcres++;
        animals += 2;
      }

console.log(animals); `,

    answers: [
      '2',
      '4',
      '6',
      '8'],

    correct: 3
  },

  {
    question: ' Which snippet could you add to this code to print "YOU GOT THIS" to the console?',

    multicode:
      `let cipherText = [...'YZOGUT QGMORTZ MTRHTILS'];
let plainText = '';

/* Missing Snippet */

console.log(plainText); //Prints YOU GOT THIS`,


    answers: [
      `for (let key of cipherText.keys()) {
  plainText += key % 2 === 0 ? key : ' ';
}`,

      `for (let [index, value] of cipherText.entries()) {
  plainText += index % 2 !== 0 ? value : '';
}`,

      `for (let [index, value] of cipherText.entries()) {
  plainText += index % 2 === 0 ? value : '';
}`,

      `for (let value of cipherText) {
  plainText += value;
}`],

    correct: 2
  },

  {
    question: " Which Pokemon will be logged to the console?",

    multicode:
      `var pokedex = ['Snorlax', 'Jigglypuff', 'Charmander', 'Squirtle'];
pokedex.pop();
console.log(pokedex.pop());`,

    answers: ['Charmander',
      'Jigglypuff',
      'Snorlax',
      'Squirtle'],

    correct: 0
  },

  {
    question: ' Which statement can be used to select the element from the DOM containing the text "The LinkedIn Learning library has great JavaScript courses" from this markup?',

    multicode:
      ` &lth1 class= "content"&gt LinkedIn Learning &lt/h1&gt
    &ltdiv class= "content" &gt
    &ltspan class= "content" &gtThe LinkedIn Learning library has great JavaScript courses! &lt/span&gt
    &lt/div&gt`,

    answers: [`document.querySelector("div.content")`,
      `document.querySelector("span.content")`,
      `document.querySelector(".content")`,
      `document.querySelector("div.span")`],

    correct: 1
  },

  {
    question: " Which value is not falsey?",

    answers: [`[]`,
      `undefined`,
      `0`,
      `null`],

    correct: 0
  },

  {
    question: " What line of code causes this code segment to throw an error?",

    multicode:
      `const lion = 1;
let tiger = 2;
var bear;

++lion;
bear += lion + tiger;
tiger++;`,

    answers: [`line 5, because lion cannot be reassigned a value`,
      `line 6, because the += operator cannot be used with the undefined variable bear`,
      `line 5, because the prefix (++) operator does not exist in JavaScript`,
      `line 3, because the variable bear is left undefined`],

    correct: 0
  },

  {
    question: " What will be the value of `result` after running this code?",

    multicode:
      `const person = { name: 'Dave', age: 40, hairColor: 'blue' };
       const result = Object.keys(person).map((x) => x.toUpperCase());`,

    answers: [`It will throw a TypeError.`,
      `["Name", "Age", "HairColor"]`,
      `["DAVE", 40, "BLUE"]`,
      `["NAME", "AGE", "HAIRCOLOR"]`],

    correct: 3
  },

  {
    question: ' Which snippet could you insert to this code to print "swim" to the console?',

    multicode:
      `let animals = ["eagle", "osprey", "salmon"];
       let key = animal => animal === "salmon";

       if(/* Insert Snippet Here */){
         console.log("swim");
       }`,

    answers: [
      `animals.every(key)`,
      `animals.some(key).length === 1`,
      `animals.filter(key) === true`,
      `animals.some(key)`],

    correct: 3
  },

  {
    question: " What is the output of this code?",

    multicode:
      `class RainForest {
       static minimumRainFall = 60;
      }

      let congo = new RainForest();
      RainForest.minimumRainFall = 80;
      console.log(congo.minimumRainFall);`,

    answers: [
      `undefined`,
      `None of these answers, as static is not a feature in Javascript.`,
      `60`,
      `80`],

    correct: 0
  },

  {
    question: " How can you attempt to access the property `a.b` on `obj` without throwing an error if a is undefined?",

    multicode:
      `let obj = {};`,

    answers: [
      `obj?.a.b`,
      `obj.a?.b`,
      `obj[a][b]`,
      `obj.?a.?b`],

    correct: 1
  },

  {
    question: " What happens when you run this code?",

    multicode:
      `if (true) {
        var x = 5;
        const y = 6;
        let z = 7;
      }
      console.log(x + y + z);`,

    answers: [
      'It will throw a `ReferenceError` about `x`.',
      'It will print `18`.',
      'It will print `undefined`.',
      'It will throw a `ReferenceError` about `y`.'],

    correct: 3
  },

  {
    question: " What does this code print to the console?",

    multicode:
      `const x = [1, 2];
       const y = [5, 7];
       const z = [...x, ...y];
       console.log(z);`,

    answers: [
      `[1,2,5,7]`,
      `[[1, 2], [5, 7]]`,
      `[2,7]`,
      `[2,1,7,5]`],

    correct: 0
  },

  {
    question: " Given this code, which statement will evaluate to false?",

    multicode:
      `const a = { x: 1 };
       const b = { x: 1 };`,

    answers: [
      `a['x'] === b['x']`,
      `a != b`,
      `a === b`,
      `a.x === b.x`],

    correct: 2
  },

  {
    question: " What will this code log to the console?",

    multicode:
      `console.log(typeof 41.1);`,

    answers: [
      `Nothing. It resuults in a ReferenceError.`,
      `decimal`,
      `float`,
      `number`],

    correct: 3
  },

  {
    question: " What is the output of this code?",

    multicode:
      `let scores = [];
       scores.push(1, 2);
       scores.pop();
       scores.push(3, 4);
       scores.pop();
       score = scores.reduce((a, b) => a + b);
       console.log(score);`,

    answers: [
      `3`,
      `4`,
      `6`,
      `7`],

    correct: 1
  },

  {
    question: " What does this code print to the console?",

    multicode:
      `let bear = {
        sound: 'roar',
        roar() {
          console.log(this.sound);
        },
      };

      bear.sound = 'grunt';
      let bearSound = bear.roar;
      bearSound();`,

    answers: [
      `Nothing is printed to the console.`,
      `grunt`,
      `undefined`,
      `roar`],

    correct: 2
  },

  {
    question: " What is the output of this code?",

    multicode:
      `var cat = { name: 'Athena' };

      function swap(feline) {
        feline.name = 'Wild';
        feline = { name: 'Tabby' };
      }

      swap(cat);
      console.log(cat.name);`,

    answers: [
      'undefined',
      'Wild',
      'Tabby',
      'Athena'],

    correct: 1
  },

  {
    question: " What will this code output to the log?",

    multicode:
      `var thing;
       let func = (str = 'no arg') => {
         console.log(str);
       };
       func(thing);
       func(null);`,

    answers: [
      `null no arg`,
      `no arg no arg`,
      `null null`,
      `no arg null`],

    correct: 3
  },

  {
    question: " What will this code print to the console?",

    multicode:
      `const myFunc = () => {
       const a = 2;
       return () => console.log('a is ' + a);
      };
       const a = 1;
       const test = myFunc();
       test();`,

    answers: [
      `a is 1`,
      `a is undefined`,
      `It won't print anything.`,
      `a is 2`],

    correct: 3
  },

  {
    question: " What will this code print to the console?",

    multicode:
      `const myFunc = (num1, num2 = 2, num3 = 2) => {
        return num1 + num2 + num3;
      };
      let values = [1, 5];
      const test = myFunc(2, ...values);
      console.log(test);`,

    answers: [
      '8',
      '6',
      '2',
      '12'],

    correct: 0
  },

  {
    question: " Which code would you use to access the Irish flag?",

    multicode:
      `var flagsJSON =
        '{ "countries" : [' +
        '{ "country":"Ireland" , "flag":"🇮🇪" },' +
        '{ "country":"Serbia" , "flag":"🇷🇸" },' +
        '{ "country":"Peru" , "flag":"🇵🇪" } ]}';

      var flagDatabase = JSON.parse(flagsJSON);`,

    answers: [
      `flagDatabase.countries[1].flag`,
      `flagDatabase.countries[0].flag`,
      `flagDatabase[1].flag`,
      `flagsJSON.countries[0].flag`],

    correct: 1
  },

  {
    question: "Which snippet allows the acresOfRainForest variable to increase?",

    multicode:
      `let conservation = true;
       let deforestation = false;
       let acresOfRainForest = 100;
       if (/* Snipped goes here */){
          ++acresOfRainForest;
       }`,

    answers: [
      `conservation && !deforestation`,
      `!deforestation && !conservation`,
      `!conservation || deforestation`,
      `deforestation && conservation || deforestation`],

    correct: 0
  },

  {
    question: " Which of these evaluate to true?",

    answers: [
      'Boolean("false")',
      'Boolean("")',
      'Boolean(0)',
      'Boolean(NaN)'],

    correct: 0
  }
];

export default questionsJS;