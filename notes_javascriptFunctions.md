Expert Javascript book

###defaultParameters (ECMAScript 6)
(Chapter 2 Functions)

Many languages allow you to choose default values for arguments in the method signature. Finally, in ECMAScript 6
(ES 6), JavaScript will be one of those languages.
``` 
var join = function (foo = 'foo', baz = (foo === 'foo') ? join(foo + "!") : 'baz') {
return foo + ":" + baz;
}
 
// => hi:there
console.log(join("hi", "there"));
 
// Use the default parameter when not supplied
// => hi:baz
console.log(join("hi"));
 
// Use the default parameter when undefined is supplied
// => foo:there
console.log(join(undefined, "there"));
 
// Use an expression which has access to the current set of arguments
// => foo:foo!:baz
console.log(join('foo')); 
``` 

###rest (ECMAScript 6)
Sometimes it’s useful, even necessary, to design functions that take an arbitrary number of arguments. This can be
tricky because of the wonkiness of the argument object, however.
``` 
var dispatcher = {
join: function (before, after) {
return before + ':' + after
},
sum: function () {
var args = Array.prototype.slice.call(arguments);
return args.reduce(function (previousValue, currentValue, index, array) {
return previousValue + currentValue;
});
}
};
var proxy = {
relay: function (method) {
var args;
args = Array.prototype.splice.call(arguments, 1);
return dispatcher[method].apply(dispatcher, args);
}
};
 
// => bar:baz
console.log(proxy.relay('join', 'bar', 'baz'));
 
// => 28
console.log(proxy.relay('sum', 1, 2, 3, 4, 5, 6, 7));
``` 

In the previous example, our proxy object expects a single argument that is the method to call on dispatcher.  
It has no clue how many other arguments are needed by the function it is calling. As you know, the argument object
is not an array and therefore doesn’t have useful methods such as splice, map, or reduce. In order to send the
remaining arbitrary number of arguments to the dispatcher, you must process them with an array.   
The rest parameters get rid of the nerdy secret handshake between functions. Here is the previous method
rewritten using the rest parameters:  
``` 
var dispatcher = {
  join: function (before, after) {
    return before + ':' + after
  },
  sum: function (...rest) {
    return rest.reduce(function (previousValue, currentValue, index, array) {
     return previousValue + currentValue;
   });
  }
};
var proxy = {
  relay: function (method, ...goodies) {
    return dispatcher[method].apply(dispatcher, goodies);
  }
};
 
// => bar:baz
console.log(proxy.relay('join', 'bar', 'baz'));
 
// => 28
console.log(proxy.relay('sum', 1, 2, 3, 4, 5, 6, 7));
``` 

###Function types  
```
// Function Declaration
function isLie(cake){
  return cake === true;
}
 
// Function Expression
var isLie = function(cake){
  return cake === true;
}
```

The only real difference between the two is when they are evaluated. A function declaration can be accessed by
the interpreter as it is being parsed. The function expression, on the other hand, is part of an assignment expression,
which prevents JavaScript from evaluating it until the program has completed the assignment. This difference may
seem minor, but implications are huge; consider the following example:  

``` 
// => Hi, I'm a function declaration!
declaration();
 
function declaration() {
  console.log("Hi, I'm a function declaration!");
}
 
// => Uncaught TypeError: undefined is not a function
expression();
 
var expression = function () {
  console.log("Hi, I'm a function expression!");
}
``` 
Another example
```
var sayHo
 
// => function
console.log(typeof (sayHey))
 
// => undefined
console.log(typeof (sayHo))
 
if (true) {
  function sayHey() {
    console.log("hey");
  }
 
  sayHo = function sayHo() {
    console.log("ho");
  }
 
} else {
  function sayHey() {
   console.log("no");
  }
 
  sayHo = function sayHo() {
   console.log("no");
  }
 
}
 
// => no
sayHey();
 
// => ho
sayHo();
```
 
In the previous example, you saw that functions of the same name were considered differently if one was an
expression and the other was a declaration. In this example, I am attempting to conditionally define the function
based on how the program executes. Reading the script’s control flow, you’d expect sayHey to return “hey” because
the conditional statement evaluates true. Instead, it returns “no”, meaning the second version of the sayHey function
clobbered the first. Even more confusing is that the sayHo function behaves the opposite way! Again, the difference
comes down to parse time versus runtime.

You already learned that when JavaScript parses the script, it collects all the function declarations and hoists
them to the top of the current scope. When this happens it clobbers the first version of sayHey with the second
because they exist in the same scope. This explains why it returns “no.” You also know that function expressions are
ignored by the parser until the assignment process completes. Assignment happens during runtime, which is also
when the conditional statement is evaluated. That explains why the sayHo function could be conditionally defined.  

**The key to remember here is that function declarations cannot be conditionally defined. If you need conditional
definition use a function expression. Furthermore, function declarations should never be made inside a control flow
statement, due to the different ways interpreters handle it.**   

###Functions scopes

Unlike many other languages that are scoped to the block, JavaScript is scoped to the function. In Ruby (version 1.9.X),
you can write this:  
``` 
x = 20
10.times do |x|
  # => 0..9
  puts x
end

# => 20
puts x
``` 
What this demonstrates is that each block gets its own scope. Conversely, you can write a similar code in JavaScript:   

``` 
var x = 20;
// Functions have their own scope
;!function() {
  var x = "foo";
  // => "foo"
  console.log(x);
}();

// => 20
console.log(x);
for (x = 0; x < 10; x++) {
  // => 0..9
  console.log(x);
}
// => 10
console.log(x);
``` 

### Arrow Prone (ECMAScript 6)

As of ES 5, JavaScript only supports function level scope. This means that this always references the scope inside
the function body. This quality of function level scope has always been an awkward fact of life for developers who
are used to block level scope. Many developers resort to routing around this behavior by using free variables or using
bound functions.  

```
// Option 1: Use a local free variable to bypass the need to reference this.  
var VendingMachine = function () {
  this.stock = ["Sgt. Pepper", "Choke", "Spite"];
  var that = this;
  return {
      dispense: function () {
      if (that.stock.length > 0) {
        return that.stock.pop();
      }
    }
  };
}
var popMachine = new VendingMachine();
 
// => 'Spite'
console.log(popMachine.dispense());
 
// Option 2: Use a bound function to reference this.
var VendingMachine = function () {
  this.stock = ["Sgt. Pepper", "Choke", "Spite"];
  var dispense = function () {
   if (this.stock.length > 0) {
     return this.stock.pop();
   }
  };
  return {
   dispense: dispense.bind(this)
  };
};
 
var popMachine = new VendingMachine();
 
// => 'Spite'
console.log(popMachine.dispense());;
```

Fortunately, one of the major new features of ES 6 is meant to clear up the ambiguities of lexical this—through the
use of the so-called fat arrow. The fat arrow is a new shorter way to write functions using `=>` instead of `function()
{}`, and will look familiar to anyone who has used CoffeeScript. As with any change, some developers bemoan what
they see as unnecessary complexity in how functions work. However, when used for the correct problem, the fat arrow
does have its advantages. Here is how you might rewrite the VendingMachine function using the fat arrow:   

```
// Option 3: Use a fat arrow to supply the lexical this.
var VendingMachine = function () {
  this.stock = ["Sgt. Pepper", "Choke", "Spite"];
  return {
   dispense: () => {
     if (this.stock.length > 0) {
       return this.stock.pop();
     }
    }
  };
};
 
var popMachine = new VendingMachine();
 
// => 'Spite'
console.log(popMachine.dispense());
```

