
###Chapter 3
p47  
###Scopes  
[Scopes](imgs/JSNinja/p47a.png)

4 ways to invoke a function:   
■ As a function, in which the function is invoked in a straightforward manner   
■ As a method, which ties the invocation to an object, enabling object-oriented programming   
■ As a constructor, in which a new object is brought into being   
■ Via its apply() or call() methods, which is kind of complicated, so we’ll cover that when we get to it  

####From arguments to function parameters
p.48 
#####If more arguments are supplied than there are parameters, the “excess” argu- ments are simply not assigned to parameter names.   
````
 function whatever(a,b,c) { ... }
````
If we were to call it with ````whatever(1,2,3,4,5)````, the arguments, 1, 2, and 3 would be assigned to a, b, and c, respectively. Arguments 4 and 5 are unassigned to any parameters.  
  
#####If there are more parameters than there are arguments, the parameters that have no corresponding argument are set to undefined.   
if we were to call the ````whatever(a,b,c)```` function with ````whatever(1)````, parameter a would be assigned the value 1, and b and c would be set to undefined.  

####This and Argument  
all function invocations are also passed two implicit parame- ters: **arguments** and **this**.  

#####Arguments parameter  
The arguments parameter is a collection of all of the arguments passed to the function.  
The collection has a property named **length** that contains the count of arguments, 
and the individual argument values can be obtained using array indexing notation;
**arguments[2]** would fetch the third parameter, for example.  

**But arguments it is not an array!!!!**   

#####This parameter
Whenever a function is invoked, in addition to the parameters that represent the explicit arguments that were provided on the function call,  
an implicit parameter named **this** is also passed to the function.   
   
The this parameter refers to an object that’s implicitly associated with the function invocation and is termed the **function context**.  

What the **this** parameter points to isn’t, as in Java, defined by how the function is declared, but by **how it’s invoked.**   


p.49 
####Invocation as a function
This type of invocation occurs when a function is invoked using the () operator, and the expression to which the () operator is applied doesn’t reference the function as a property of an object. (In that case, we’d have a method invocation, but we’ll dis- cuss that next.)   

````
function ninja(){};
ninja();
var samurai = function(){};
samurai();
````

As it turns out, this concept of invoking “a function as a function” is really a special case of the next invocation type we’ll talk about: invoking “as a method.”   

####Invocation as a method
When a function is assigned to a property of an object and the invocation occurs by referencing the function using that property, then the function is invoked as a **method** of that object.  

```` 
var o = {};
o.whatever = function(){};
o.whatever();
````

When we invoke the function as the method of an object, that object becomes the function context and is available within the function via the **this** parameter.   
This is one of the primary means by which JavaScript allows object-oriented code to be written.   


Contrast this with invocation “as a function,” in which the function is defined on the window and called without the need to use a reference to window.
Except for being able to leave off the implicit window reference, it’s the same thing.
The function “belongs” to window, and window is set as the function context, in the same way that object o is the function context in the above example.
Even though these mechanisms look different, they’re really the same.   

[Scopes 2](imgs/JSNinja/p51a.png)   

Note that even though the same function is used throughout all these examples, the function context for each invocation of the function changes depending upon **how the function is invoked**,
 rather than on how it was declared.   

####Invocation as a function
There’s nothing special about a function that’s going to be used as a constructor; 
constructor functions are declared just like any other functions. 
The difference is in how the function is invoked.   

**To invoke the function as a constructor, we precede the function invocation with the new keyword.**

p.52  
#####The superpowers of constructors  
When a constructor is onvoked: 

- A new empty object is created.  
- This object is passed to the constructor as the this parameter, and thus becomes the constructor’s function context.  
- In the absence of any explicit return value, the new object is returned as the constructor’s value.  

[Scopes 3](imgs/JSNinja/p53a.png)   

#####Coding considerations for constructors  
**Functions and methods** are generally named starting with a verb that describes what they do **(skulk(), creep(), sneak(), doSomethingWonderful(), and so on)** and start with a lowercase letter.   
**Constructors**, on the other hand, are usually named as a noun that describes the object that’s being constructed and start with an uppercase character; **Ninja(), Samurai(), Ronin(), KungFuPanda()**, and so on.  

p.52  
#####Invocation with the apply() and call() methods  
JavaScript provides a means for us to invoke a function and to explicitly specify any object we want as the function context. We do this through the use of one of two methods that exist for every function: **apply() and call()**.  

To invoke a function using its apply() method, we pass two parameters to apply():  
- the object to be used as the function context,   
- and an array of values to be used as the invocation arguments.  

The call() method is used in a similar manner, except that the arguments are passed directly in the argument list rather than as an array.  

[Scopes 4](imgs/JSNinja/p55a.png)   

p.57
Let’s consider a concrete example of forcing the function context to be an object of our own choosing. Let’s take a simple function that will perform an operation on every entry of an array.  

[Scopes 5](imgs/JSNinja/p57a.png)   

Our iteration function sports a simple signature that expects the array of objects to be iterated over as the first argument and a callback function as the second (1). The function iterates over the array entries, invoking the callback function (2) for each entry.  
We use the call() method of the callback function, passing the current iteration entry as the first parameter and the loop index as the second. This should cause the current entry to become the function context and the index to be passed as the single parameter to the callback.  
We set up a simple array (3) and then call the forEach() function, passing the test array and a callback within which we test that the expected entry is set as the function context for each invocation of the callback (4). Figure 3.10 (not showed in this sumary)  shows that our function works splendidly.   







