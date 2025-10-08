/*****
 * 
CHAPTER 3
Functional Programming with JavaScript

1. When you start to explore the world of React programming, you’ll notice that the topic of functional programming comes up a lot. 
2. Functional techniques are being used more and more in JavaScript projects.
3. You may have already written functional JavaScript code without thinking about it. 
4. If you’ve mapped or reduced an array, then you’re already on your way to becoming a functional programmer. 
5. React, Flux, and Redux all fit within the functional JavaScript paradigm. 
6. Understanding the basic concepts of functional programming will elevate your knowledge of structuring React applications.
7. If you are wondering where this functional trend came from, the answer is the 1930s,with the invention of lambda calculus, or λ-calculus.
8. Functions have been a part of calculus since it emerged in the 17th century. 
9. Functions can be sent to functions as arguments or returned from functions as results. 
10. More complex functions, called higher-order functions, can manipulate functions and use them as either arguments or results or both. 
11. In the 1930s, Alonzo Church was at Princeton experimenting with these higher-order functions when he invented lambda calculus.
12. In the late 1950s, John McCarthy took the concepts derived from λ-calculus and applied them to a new programming language called Lisp. 
Lisp implemented the concept of higher-order functions and functions as first-class members or first-class citizens. 
14. A function is considered a first-class member when it can be declared as a variable and sent to functions as an argument. 
These functions can even be returned from functions.

1.当你开始探索 React 编程的世界时，你会注意到函数式编程这个话题出现得非常频繁。
2.函数式技术正在 JavaScript 项目中被越来越多地使用。
3.你可能已经编写过函数式 JavaScript 代码，而没有意识到这一点。
4.如果你已经映射或归约过一个数组，那么你已经在成为函数式程序员的路上了。
5.React、Flux 和 Redux 都符合函数式 JavaScript 范式。
6.理解函数式编程的基本概念将提升你对构建 React 应用程序的知识。
7.如果你想知道（疑惑）这种函数式趋势的来源，答案是 1930 年代，λ-演算的发明。
8.函数 「自17世纪微积分出现以来」 一直是微积分的一部分。
9.函数可以作为参数传递给函数，也可以作为结果从函数返回。
10. 更复杂的函数，称为高阶函数，可以操纵函数 并将它们用作参数或结果，或者两者兼而有之。
11. 在 1930 年代，Alonzo Church 在普林斯顿实验这些高阶函数时 发明了 λ-演算。
12. 在 1950 年代末期，John McCarthy 将从 λ-演算中得出的概念 应用于一种名为 Lisp 的新编程语言。
Lisp 实现了高阶函数和作为一等成员或一等公民的函数的概念。
14.当一个函数可以被声明为变量并作为参数传递给函数时，它被认为是一个一等成员。
15.这些函数甚至可以从函数中返回。




1. In this chapter, we are going to go over some of the key concepts of functional programming, and we’ll cover how to implement functional techniques with JavaScript.
2. What It Means to Be Functional。 JavaScript supports functional programming because JavaScript functions are first class citizens. 
3. This means that functions can do the same things that variables can do.
4. ES6 adds language improvements that can beef up your functional programming techniques, including arrow functions, promises, and the spread operator (see Chapter 2).
5. In JavaScript, functions can represent data in your application. You may have noticed that you can declare functions with the var keyword the same way you can declare strings, numbers, or any other variables:

1.在本章中，我们将回顾函数式编程的一些关键概念，并且我们将涵盖如何用 JavaScript 实现函数式技术。
2.什么是函数式的含义。JavaScript 支持函数式编程，因为 JavaScript 函数是一等公民。
3.这意味着函数可以做变量能做的同样的事情。
4.ES6 添加了可以增强（enhance）你的函数式编程技术的语言改进，包括箭头函数、Promise 和扩展运算符（参见第 2 章）。
5.在 JavaScript 中，函数可以在你的应用程序中表示数据。你可能已经注意到，你可以使用 var 关键字来声明函数，就像你可以声明字符串、数字或任何其他变量一样


var log = function(message) {
 console.log(message)
};
log("In JavaScript functions are variables")
// In JavaScript, functions are variables


With ES6, we can write the same function using an arrow function. 
Functional programmers write a lot of small functions, and the arrow function syntax makes that much easier:
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
Both of these statements do the same thing: they store a function in a variable called log. 
Additionally, the const keyword was used to declare the second function, which will prevent it from being overwritten.
We can also add functions to arrays in JavaScript:

const messages = [
 "They can be inserted into arrays",
 message => console.log(message),


 **       **       **         **          **        **

CHAPTER 4
Pure React
In order to understand how React runs in the browser, we will be working purely with React in this chapter. 
We will not introduce JSX, or JavaScript as XML, until the next chapter. 
You may have worked with React in the past without ever looking at the pure React code that is generated when we transpile JSX into React. 
You can successfully use React without looking at pure React. 
However, if you take the time to understand what is going on behind the scenes, you will be more efficient, especially when it comes time to debug. 
That is our goal in this chapter: to look under the hood and understand how React works.
Page Setup
In order to work with React in the browser, we need to include two libraries: React and ReactDOM. React is the library for creating views. 
ReactDOM is the library used to actually render the UI in the browser.
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
React is a library that is designed to update the browser DOM for us. We no longer have to be concerned with the complexities associated with building performant SPAs because React can do that for us. 
With React, we do not interact with the DOM API directly. 
Instead, we interact with a virtual DOM, or set of instructions that React will use to construct the UI and interact with the browser.
The virtual DOM is made up of React elements, which conceptually seem similar to HTML elements, but are actually JavaScript objects. 
It is much faster to work directly with JavaScript objects than it is to work with the DOM API. 
We make changes to a JavaScript object, the virtual DOM, and React renders those changes for us using the DOM API as efficiently as possible.
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
children, any nodes that are inserted between the opening and closing tag. 
The second argument represents the element’s properties. This h1 currently does not have any properties.
During rendering, React will convert this element to an actual DOM element:
<h1>Baked Salmon</h1>
When an element has attributes, they can be described with properties. Here is a sample of an HTML h1 tag that has id and data-type attributes:



 * 
 * 
 * 
 */