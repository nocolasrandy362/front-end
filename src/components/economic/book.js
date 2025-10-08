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

CHAPTER 4
Pure React
In order to understand how React runs in the browser, we will be working purely
with React in this chapter. We will not introduce JSX, or JavaScript as XML, until the
next chapter. You may have worked with React in the past without ever looking at the
pure React code that is generated when we transpile JSX into React. You can success‐
fully use React without looking at pure React. However, if you take the time to under‐
stand what is going on behind the scenes, you will be more efficient, especially when
it comes time to debug. That is our goal in this chapter: to look under the hood and
understand how React works.
Page Setup
In order to work with React in the browser, we need to include two libraries: React
and ReactDOM. React is the library for creating views. ReactDOM is the library used
to actually render the UI in the browser.
ReactDOM
React and ReactDOM were split into two packages for version 0.14. The release notes
state: “The beauty and the essence of React has nothing to do with browsers or the
DOM... This [splitting into two packages] paves the way to writing components that
can be shared between the web version of React and React Native.”
Instead of assuming that React will render only in the browser, future releases will aim to support rendering for a variety of platforms.


We also need an HTML element that ReactDOM will use to render the UI. You can
see how the scripts and HTML elements are added in Example 4-1. Both libraries are
available as scripts from the Facebook CDN.
Example 4-1. HTML document setup with React
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Pure React Samples</title>
</head>
<body>
 
 <!-- Target container -->
 <div id="react-container"></div>
 
 <!-- React library & ReactDOM-->
 <script src="https://unpkg.com/react@15.4.2/dist/react.js"></script>
 <script src="https://unpkg.com/react-dom@15.4.2/dist/react-dom.js"></script>
 <script>
 // Pure React and JavaScript code
 </script>
</body>
</html>
These are the minimum requirements for working with React in the browser. You can
place your JavaScript in a separate file, but it must be loaded somewhere in the page
after React has been loaded.
The Virtual DOM
HTML is simply a set of instructions that a browser follows when constructing the
document object model, or DOM. The elements that make up an HTML document
become DOM elements when the browser loads HTML and renders the user inter‐
face.
Let’s say that you have to construct an HTML hierarchy for a recipe. A possible solution for such a task might look something like this:



In HTML, elements relate to each other in a hierarchy that resembles a family tree.
We could say that the root element has three children: a heading, an unordered list of
ingredients, and a section for the instructions.
Traditionally, websites have consisted of independent HTML pages. When the user
navigated these pages, the browser would request and load different HTML docu‐
ments. The invention of AJAX brought us the single-page application, or SPA. Since
browsers could request and load tiny bits of data using AJAX, entire web applications
could now run out of a single page and rely on JavaScript to update the user interface.
In an SPA, the browser initially loads one HTML document. As users navigate
through the site, they actually stay on the same page. JavaScript destroys and creates a
new user interface as the user interacts with the application. It may feel as though you
are jumping from page to page, but you are actually still on the same HTML page and
JavaScript is doing the heavy lifting.
The DOM API is a collection of objects that JavaScript can use to interact with the
browser to modify the DOM. If you have used document.createElement or
document.appendChild, you have worked with the DOM API. Updating or chang‐
ing rendered DOM elements in JavaScript is relatively easy.2
 However, the process of
inserting new elements is painfully slow.3
 This means if web developers are meticu‐
lous about how they make changes to UI, they can improve the performance of their
applications.
Managing DOM changes with JavaScript efficiently can become very complicated
and time-consuming. From a coding perspective, it is easier to clear all the children
of a particular element and reconstruct them than it would be to leave those child elements in place and attempt to efficiently update them.4
 The problem is that we may
not have the time or the advanced knowledge of JavaScript to work efficiently with
the DOM API every time we build a new application. The solution is React.
React is a library that is designed to update the browser DOM for us. We no longer
have to be concerned with the complexities associated with building performant SPAs
because React can do that for us. With React, we do not interact with the DOM API
directly. Instead, we interact with a virtual DOM, or set of instructions that React will
use to construct the UI and interact with the browser.5
The virtual DOM is made up of React elements, which conceptually seem similar to
HTML elements, but are actually JavaScript objects. It is much faster to work directly
with JavaScript objects than it is to work with the DOM API. We make changes to a
JavaScript object, the virtual DOM, and React renders those changes for us using the
DOM API as efficiently as possible.
React Elements
The browser DOM is made up of DOM elements. Similarly, the React DOM is made
up of React elements. DOM elements and React elements may look the same, but
they are actually quite different. A React element is a description of what the actual
DOM element should look like. In other words, React elements are the instructions
for how the browser DOM should be created.
We can create a React element to represent an h1 using React.createElement:
React.createElement("h1", null, "Baked Salmon")
The first argument defines the type of element that we wish to create. In this case, we
want to create a heading-one element. The third argument represents the element’s
children, any nodes that are inserted between the opening and closing tag. The sec‐
ond argument represents the element’s properties. This h1 currently does not have
any properties.
During rendering, React will convert this element to an actual DOM element:
<h1>Baked Salmon</h1>
When an element has attributes, they can be described with properties. Here is a sam‐
ple of an HTML h1 tag that has id and data-type attributes:



 * 
 * 
 * 
 */