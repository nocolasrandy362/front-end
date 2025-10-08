/*****
 * 
CHAPTER 3
Functional Programming with JavaScript
When you start to explore the world of React programming, you’ll notice that the
topic of functional programming comes up a lot. Functional techniques are being
used more and more in JavaScript projects.
You may have already written functional JavaScript code without thinking about it. If
you’ve mapped or reduced an array, then you’re already on your way to becoming a
functional programmer. React, Flux, and Redux all fit within the functional JavaScript
paradigm. Understanding the basic concepts of functional programming will elevate
your knowledge of structuring React applications.
If you are wondering where this functional trend came from, the answer is the 1930s,
with the invention of lambda calculus, or λ-calculus.1
 Functions have been a part of
calculus since it emerged in the 17th century. Functions can be sent to functions as
arguments or returned from functions as results. More complex functions, called
higher-order functions, can manipulate functions and use them as either arguments or
results or both. In the 1930s, Alonzo Church was at Princeton experimenting with
these higher-order functions when he invented lambda calculus.
In the late 1950s, John McCarthy took the concepts derived from λ-calculus and
applied them to a new programming language called Lisp. Lisp implemented the con‐
cept of higher-order functions and functions as first-class members or first-class citi‐
zens. A function is considered a first-class member when it can be declared as a
variable and sent to functions as an argument. These functions can even be returned
from functions.

In this chapter, we are going to go over some of the key concepts of functional pro‐
gramming, and we’ll cover how to implement functional techniques with JavaScript.
What It Means to Be Functional
JavaScript supports functional programming because JavaScript functions are first
class citizens. This means that functions can do the same things that variables can do.
ES6 adds language improvements that can beef up your functional programming
techniques, including arrow functions, promises, and the spread operator (see Chap‐
ter 2).
In JavaScript, functions can represent data in your application. You may have noticed
that you can declare functions with the var keyword the same way you can declare
strings, numbers, or any other variables:
var log = function(message) {
 console.log(message)
};
log("In JavaScript functions are variables")
// In JavaScript, functions are variables
With ES6, we can write the same function using an arrow function. Functional pro‐
grammers write a lot of small functions, and the arrow function syntax makes that
much easier:
const log = message => console.log(message)
Since functions are variables, we can add them to objects:
const obj = {
 message: "They can be added to objects like variables",
 log(message) {
 console.log(message) 
 }
}
obj.log(obj.message)
// They can be added to objects like variables
Both of these statements do the same thing: they store a function in a variable called
log. Additionally, the const keyword was used to declare the second function, which
will prevent it from being overwritten.
We can also add functions to arrays in JavaScript:
const messages = [
 "They can be inserted into arrays",
 message => console.log(message),


 **       **       **         **          **        **

 
 * 
 * 
 * 
 */