/*
---------------------------
1-38

Welcome to the Ultimate React Course. In this course, you will learn everything you need to know about React, from the basics to more advanced concepts. So, by the end of the course, you'll be able to confidently build fast and scalable apps with React.

If you are looking for a comprehensive, easy-to-follow, well-organized, and practical course that takes you from Zero to Hero, this is the right React course for you. You won't need any prior knowledge of React to get started ——— everything you need to know is right here. 

So, you won't need to jump back and forth between random tutorials.

Now, unlike other courses, we won't be building a dummy app. Instead, we'll be building and deploying a beautiful, production-grade app for discovering video games. This app has all the features and UI patterns you would expect from a modern application.

We can toggle between dark and light modes, search for games, filter them by genre as well as platform.

As we change filters, the page title gets updated dynamically. We can also sort games, and here we see loading skeletons while games are being fetched from the backend. And that's just the start.

In the next part, which I'm currently working on, we'll dive into advanced topics like routing, state management, fetching data with React Query, authentication, error handling, performance optimization, and much more. I've put my heart and soul into creating this course, 

and I'm confident that it's going to be a game-changer for your React skills.

I'm Marsha Madani, a software engineer with over 20 years of experience. I've taught millions of people how to code and become professional software engineers through my YouTube channel and online school, CodeBitMarsh.com. If you're new here, make sure to subscribe, as I upload new videos all the time.

So, if you're ready to master React and build front-end apps with confidence, let's jump in and get started. 

 ---------------------------
 39-125

Prerequisites.  

Before we get started, let's talk about what you will need to know to take this course. First things first, you don't need to know React to take this course. However, you should have a good understanding of HTML, CSS, and JavaScript. If you're comfortable writing code in these languages, you are in a great position to start learning React now.  

Throughout the course, we'll be using TypeScript. TypeScript is a superset of JavaScript that adds static typing to the language. Essentially, it helps us catch errors earlier in the development process, which can save us time and headaches down the road. Now, don't worry if you have never coded in TypeScript before. I'll hold your hand and teach you everything from scratch. With that out of the way, we can dive right into learning React.  

What is React?  

Before we begin coding, let's take a few minutes and discuss what React is and how it helps us create better applications. React is a JavaScript library for building dynamic and interactive user interfaces. It was created at Facebook in 2011 and is currently the most widely used JavaScript library for front-end development. So, if you're looking for a job as a front-end developer, you should know how to confidently build applications with React.  

But why was React created? Well, as you probably know, when a web page is loaded in a browser, the browser takes the HTML code and creates a tree-like structure called the Document Object Model, or the DOM for short. This allows us to use JavaScript and change the page content in response to user actions. For example, we can use JavaScript to hide an element when a button is clicked. 

This is called vanilla JavaScript, meaning plain JavaScript code without any third-party tools.  

Now, as our applications grow, working with the DOM can become quite complex and challenging to manage. This is where React comes into play. With React, we no longer need to worry about querying and updating DOM elements. Instead, we build a web page using small, reusable components, and React will take care of efficiently creating and updating DOM elements. So, components help us write reusable, modular, and better-organized code.  

Now, let's look at a real-world example. Imagine you want to build a web page like this. On this page, we have a navigation bar on the top, a side panel on the left, and a grid of video games in the main area. We can build each of these sections as separate components. Now, in this grid, each game is displayed in a card, which is an independent component. With a like button—that's another component itself. 

We can build all these components individually and then combine them to build this page. Essentially, a React application is a tree of components, with the App being the root, bringing everything together.  

All right, that's enough theory for now. Next, we're going to set up our development environment and get a feel for what it's like to build applications with React.  

Setting Up the Development Environment.  

To take this course, you need to have Node version 16 or higher. Now, to check the version of Node on your machine, open up your command prompt or terminal window and run `node -v`. So, on this machine, I'm running Node version 19. You might be running a newer version—that's totally fine. It's not going to impact the materials in this course. But you need to have Node version 16 or higher. If you don't, head over to nodejs.org and download the latest version on this page.  

Now, in this course—just like my other courses—I'll be using Visual Studio Code, or VS Code, as my editor. You're welcome to use any editor that you prefer. But if you want to use VS Code, I strongly suggest you to use the Prettier extension for formatting your code. So, here's the Extensions panel over here. Search for Prettier and install this extension. Once you do that, on the top, under the Code menu, go to Preferences and Settings. Now, this layout might be different on Windows or Linux—I'm not entirely sure—but find the settings dialog, and on this page, search for "Format on Save". If you check this box, every time you save a file, that file gets automatically reformatted.  

With all that, now we are ready to create our first React application.  

[Music]

 * 
 */

/******
126- 217

**Creating a React App**

There are two ways to create a React app. We can use the official tool provided by the React team. It's called Create React App, or CRA. But we also have another tool called Vite that's getting increasingly popular these days because it's much faster and gives us smaller bundle sizes.

So, here in the terminal window, I'm currently on my desktop. To create a new app using Vite, all you have to do is run `npm create vite@latest`. Or, if you want to use the exact same version as me—which is what I recommend you do, because I want to make sure you have the exact same experience—then you need to specify the version, that is, 4.1.0.

Okay. Now, npm is asking if you want to install this package. Let's proceed.

Next, we need to specify our project name, which is "Vite project" by default, but we can change that to anything, like "react-app". Next, we need to select a framework. So, using Vite, we can create any kind of JavaScript project. We can use vanilla JavaScript, which is JavaScript without any third-party tools. We can also create a Vue project, a React project, and so on. So, using up and down arrows, we can move down this list. Let's select React.

Next, we need to select a language. So, here we have JavaScript and TypeScript. We're going to use TypeScript in this course. Good. So now we have a new project.

Next, we need to go into this folder, install all the third-party dependencies, and run our web server. So, let's `cd` into the react-app folder and type `npm install`, or `npm i`—that is shorter—and with this, we can install all the third-party libraries.

All right. Now we need to open this project in VS Code. To do that, we type `code .`. If this doesn't work on your machine, simply drag and drop that folder into VS Code.

Now, here in VS Code, we can open an embedded terminal by pressing Ctrl and backtick. If this doesn't work on your machine, just go to the terminal window and open a new terminal. You can also see the shortcut right here. So, this is our embedded terminal. It's much easier to use this than switch back and forth between VS Code and a different terminal window.

Now, to run our web server, we type `npm run dev`. Now, this launched a web server at this address: localhost:5173. This might be different on your machine, so don't worry about that. Just open this address in your browser, and this is our first React application.

Next, we're going to create our first React component.

---

**Project Structure**

So, this is our project loaded in VS Code. Now, let me give you a brief overview of the key files and folders in this project.

Here, we have the `node_modules` folder. This is where all the third-party libraries, like React and other tools, are installed. You'll never have to touch this.

Next, we have the `public` folder. This is where the public assets of our website exist, like images, video files, and so on.

Next, we have the `src` folder. This is the source code of our application. In this folder, currently, we have a component called the App component. Don't worry about any of the code here. We're going to rewrite everything from scratch. All I want you to note here is that currently in this application, we have a single component called the App component.

Now, outside of the `src` folder, we have `index.html`, which is a very basic HTML template. In this template, we have a `div` with the ID of `root`—that is the container for our application. Below that, we have a script element referencing `src/main.tsx`. This is the entry point to our application.

Next, we have `package.json`. In this file, you can find information about this project. So, we have the name of the project, its version, a bunch of scripts, and the list of dependencies. So, currently, we're dependent on two libraries: React and React DOM, version 18. We also have a bunch of development dependencies. These are only used for development; they're not going to be deployed with our application in the future.

Next, we have a TypeScript configuration file. Here, we have a bunch of settings for telling the TypeScript compiler how to compile our code to JavaScript. Now, for the most part, you never have to touch this file unless you're an advanced user.

And finally, we also have a configuration file for Vite. Again, for the most part, you don't have to touch this file.

[Music]
 * 
 */

/***
 * 
219-368

Now to create a react component we right click on the source folder and add a new file called message.tsx. So the extension of typescript files should be either TS or TSX. Quite often we use Ts for plain typescript files and TSX for react components.

Now there are two ways to create a react component. We can use a JavaScript class or a function. These days function based components have become more popular because they are more concise and easier to write. So that's what we'll use in this course. 

But if you're maintaining an older react project that is built with class components you can look at my previous react course to learn about them. But function based components are the recommended approach for new projects. So here we declare a function called message. That pay attention to how I have named this function. 

This convention is called Pascal casing. With Pascal casing we should capitalize the first letter of every word. In this case p and C. It's really important to follow this convention because this is the convention that both react and other developers expect us to follow. 

So in react application whenever we want to create a function component we should always follow Pascal casing. Now here we should describe what the UI is going to look like where we use this component. So let's say wherever we use this component we want to render an H1 element with a message like hello work. 

So here we return an H1 element with hello world. Now this syntax might make you a little bit confused. You might be thinking that you're writing HTML code in the middle of JavaScript code. But that is not correct. This syntax you see here is called jsx which is short for JavaScript XML. 

So this code under the hood is going to get compiled down to JavaScript. If you head over to babblejs.io repo that is repl you can see how this code gets converted to JavaScript. Let me show you. So on the left side we can write jsx code like H1 hello world and on the right side we can see the equivalent JavaScript code. 

So this piece of code gets eventually converted to react.createelement the type of element is H1 and the message inside the element is hello world. So this is a very basic component. Now to use this first we need to export it as a default object from this module. 

Now let's go to the app component and use this new component. So back to our project here's the app component. Now we're going to delete everything in this file. Now let's create a new component called app. 

Now in this component let's say we want to have a div and inside the div we want to have our message component. 

So first we need to import our message component from period slash message. So period means the current folder. Now we can use this component just like regular HTML elements. So we add the opening tag and close it. It's really important to close it. We should always close our react components or we'll get a compilation error. 

Now here we can also use the self-closing syntax that is more concise. Now just like the message component we should export the app component so it can be used somewhere else. Now here in the terminal you can see our web server is still running and here we have HMR which is short for hot module replacement. 

So read under the hood monitors our files for changes. Whenever we make any changes it will automatically refresh our page in the browser. So now you can see our message component rendered on the screen. Now this is a very simple example. In a real world application a component can have Behavior. So here we can have a button. 

When the button gets clicked perhaps we can change the message. We can do all sorts of things. So with jsx we can easily describe the user interface of our application with HTML and JavaScript. Now the great thing about jsx is that it allows us to easily create Dynamic content. For example here we can declare a constant Cod name I set it to my name Marsh. 

Now we can replace this word with my name dynamically. So here we add braces and inside the braces we can write any JavaScript expression. An expression is a piece of code that produces a value. So here we can reference the name constant. We can also call a function like get name. Basically any piece of code that returns a value. So here we can add my name dynamically. 

We can also write if statement. So we can say if name is true theme return this markup otherwise return a different markup like Hello World. Now back to the browser you can see my name is rendered on the screen. However if I change the name to an empty string we see Hello World. So this is the beauty of jsx. 

Using this syntax we can easily describe the user interface of our applications. [Music]  

How React Works.  

So currently we have a component tree with the app being the root or top level component and the message being a child. When our application starts react takes this component tree and builds a JavaScript data structure called the virtual Dom. This virtual Dom is different from the actual Dom in the browser. 

It's a lightweight in-memory representation of our component tree where each node represents a component and its properties. When the state or the data of a component changes react updates the corresponding node in the virtual Dom to reflect the new state. Then it compares the current version of virtual Dom with the previous version to identify the nodes that should be updated. 

It will then update those nodes in the actual Dom. Now technically updating the Dom is not done by react itself. It's done by companion Library called react Dom. So earlier we talked about package.json. In this file we can see the dependencies of our application. So currently our application is dependent on two libraries react and react on. Let me show you how these work together. 

So in index.html I told you that we have a div with the idea of root and this is the container of our application. Below that we have a script element referencing main.tsx. Now if you look at this file you can see that here we're using react Dom to render this component tree inside an element with the ID of root. So this is our component tree. 

Here is our app component that is wrapped by another component called strict mode. This is one of the built-in components in react. It doesn't have a visual representation. Its purpose is to identify potential problems. So we're taking this component tree and rendering or displaying it inside an element with the idea of root. And to do that we're using the react on library. 

But we can also render this component Tree in a mobile app using a different Library called react native. So react itself is not tied to a particular platform like web or mobile. It's platform agnostic and we can use it to build apps for web mobile and desktop devices.  
React Ecosystem
 * 

369-525

So you have learned that React is a JavaScript library for creating user interfaces. In contrast to React, we have other tools like Angular and Vue, which are frameworks. But what is the difference between a library and a framework? 

A library is a tool that provides specific functionality, while a framework provides a set of tools and guidelines for building applications. So a library is like a tool, while a framework is like a tool set. Now, React is just a library or a tool for building user interfaces, so the only thing that it does and is good at is creating dynamic and interactive user interfaces. 

But we hardly use only React to build modern applications — we often need additional tools for concerns such as routing, which means allowing the user to go from one page to another, making HTTP calls, managing the application state, internationalization, form validation, animations, and so on.

Now, the great thing about React is that it doesn't have an opinion about the additional tools we should use for these concerns, so we can pick the right tools for the job. In this part of the course, our focus is entirely on React and no third-party libraries. Once you master React, in the next part, we'll explore some additional useful libraries in the React ecosystem.

Hey guys, Mosh here. Before we dive back into the tutorial, I just wanted to say that this tutorial is actually the first hour of my complete React course. The full course includes eight hours of content, jam-packed with the latest techniques and best practices. 

It's got everything you need to become a React Pro, including exercises, summary notes, cheat sheets, and even the project I showed you at the beginning of this tutorial. And the best part is, it comes with a 30-day money-back guarantee. 

So if you're loving this tutorial and want to take your react skills to the next level, I highly recommend checking out the complete course using the link below this video. Thanks for watching, and now let's get back to the tutorial.

So you got a taste of building applications with React. In this section, we'll be covering the fundamental concepts in React applications — this is the most important section in this course, you don't want to miss the materials I've covered here, as they help you build a strong foundation in React. We'll talk about building components, rendering markup with JSX, managing state, passing input to components via props, and debugging React applications. So let's jump in and get started.

All right, in this lesson, we're going to create a basic ListGroup component. First, we're going to install Bootstrap to give our application a modern look and feel. Now, in case you are not familiar with Bootstrap, it's a very popular CSS library that gives us a bunch of CSS classes for styling our applications. 

So here, we open up our terminal window — you can see our web server is running, so we open a new terminal window and run `npm install bootstrap`. The version that I'm using in this video is 5.2.3. Let's go ahead — good.

Now, we need to import it in one of our CSS files. So here in the source folder, we have a couple of CSS files: one is `app.css`, this file contains all the styles for our App component — we don't need any of this stuff anymore, delete. We also have `index.css`, where we have global styles for our application — again, we don't need any of these styles here because all of them were generated by Create React App, so we can delete this file entirely. 

Now let's go to `main.tsx` — you can see that our `index.css` file was imported here. We're going to replace this line with `import 'bootstrap/dist/css/bootstrap.css'`.

Okay, now to make sure that Bootstrap is imported properly, we go back to the browser. So previously, "Hello World" was in the middle of the page and we had a different font — now it's up here and it has a different font. Beautiful.

So now let's create a ListGroup component. So back to our project — here in the source folder, we add a new folder called `components`. This is not necessary, but by convention, we put all of our components in a folder called `components`. 

Now here we add a new file called `ListGroup.tsx`. Again, pay attention to how I have named this file — here we're following the Pascal convention, so we're capitalizing the first letter of each word. Now in this file, we declare a function called `ListGroup`. For now, let's just return an `h1` element: "List Group", and export this from this module.

Next, we need to import this in our App component. So if you're on Mac, press Command+P; if you are on Windows, press Ctrl+P. Here we can search for files like `app.tsx`. Okay, now we don't need the Message component anymore, so let's remove it — instead, we're going to import our ListGroup component. Okay, and we're going to use that right here.

Okay, let's make sure everything is working up to this point — so here in the browser, we have our ListGroup component. Beautiful.

Now finally, we need to display a list of items here, and for that, we're going to borrow some code from Bootstrap. So head over to getbootstrap.com, go to the docs, and on the left side under the Components section, you should find List Group. This is a list group component in Bootstrap. To create a list like this, we need to use this markup — so we need a `ul` with this class and a bunch of list items with these classes. So we copy this, we go back to our ListGroup component, and return this markup.

Now here we get a bunch of errors because `class` is a reserved keyword in JavaScript or TypeScript, so here we need to rename all these classes to `className`. Now let me show you another shortcut — let's rewrite this back, we select the `class` keyword. Now if you're on Mac, press Command+D; if you're on Windows, press Ctrl+D — and with this, we select the next occurrence of the selected keyword. So now we have multiple cursors, we can press Command+D one more time, and again, and again, and again. 

Now all of these are selected, so we delete them and type `className`, then we press Escape a couple of times to disable multi-cursor editing.

Okay, now finally I save the changes, but my code is not reformatted — so let's investigate why this is happening. On the top, under the View menu, we go to the Command Palette — note the shortcut, on Mac it's Shift+Command+P — and here we search for "Format Document". 

Okay, here we have an error saying there are multiple formatters for TypeScript JSX files, so let's click on "Configure", and here we're going to use Prettier as our default code formatter. Good, now this file is formatted — beautiful.

Just note that Prettier automatically wrapped our JSX markup in parentheses — this is necessary to break the markup into multiple lines. So if you're not using VS Code with Prettier, be sure to add the left parenthesis in front of the return keyword so you can spread your JSX into multiple lines. So now back to the browser — here's our ListGroup component, but this is pretty boring — this doesn't have any functionality, and it doesn't allow us to render or display these items dynamically. So we're going to solve these issues one by one over the next few lessons.

528-641

Now what if we want to add a heading here? Well, if we add another element here like an H1, we get a bunch of errors because in React a component cannot return more than one element. So earlier I told you that this H1 expression that we have here eventually gets compiled to JavaScript. 

So this line gets translated to something like `React.createElement` with H1 being the type of the element.

The same thing will happen for the second element. So in this function, we are returning multiple elements, and this is not allowed in React. Now, to solve this problem we have a couple of different ways. One simple way is to wrap this entire expression inside a div or another element.

So let me show you another shortcut. We select all this code, then we bring up the command palette. So we go to the View menu and bring up the command palette, or better, we use the shortcut. And here we search for “wrap with abbreviation.” Now we press enter, and here we specify the type of element that we want to use to wrap this entire code. So div, enter, done.

Okay, so that's one way, but we're adding one extra element in the DOM purely for making React happy. This is unnecessary. A better way is to use a fragment. So on the top, we import Fragment from React. Make sure to put it in braces. Now we replace the div with a Fragment.

So just like before, I've selected the div element. Now we can press Command and D to select the other div, and now with multiple cursors we can edit both of them in one go. Okay, now with this change, when this component is rendered on the screen, we're not going to have an additional element like a div in the DOM.

Okay, now there is even a better way to achieve the same result. We have a shorter syntax. We don't have to import the Fragment component from React. So let's delete this line, and we select the Fragment tags, both of them, and remove them. So if you add empty angle brackets, we're telling React to use a Fragment to wrap all these children.

Now back to the browser. So here's our heading and our items. Beautiful.

---

Now this list is kind of useless because we have hard-coded these items in our markup. What if you want to render a list of items dynamically? Well, let's declare a constant called `items` and set it to an array of strings. Here we can use the name of cities like New York, San Francisco, Tokyo, London, and Paris.

Now in JSX we don't have a for loop, so we cannot write code like “for item in items render whatever.” It doesn't work that way. So we have to use a different technique. In JavaScript, as you probably know, arrays have a method called `map` for mapping or converting each item to an item of a different type.

So if you type `items.map`, here we can pass an arrow function. We can say, take each item and convert it to an item of a different type. So here we want to convert each item to an `li` element. So here we type `li`, and inside the tags we want to render or display the item itself.

Earlier I told you that in JSX we use curly braces to render data dynamically. So here we render the item itself. Okay, now we're going to delete all these list items, and instead we're going to bring down this piece of code.

However, we get a compilation error because this expression is not allowed in the middle of a JSX markup. In JSX we can only use HTML elements or other React components. So to render data dynamically, we need to wrap this expression in braces.

Okay, now save the changes. Our code got reformatted, so Prettier plugin broke down our code into multiple lines and added parentheses to wrap them. Now back to the browser, here's our list of cities. Beautiful.

While reviewing this video, I just realized that I made a mistake earlier and forgot to apply a CSS class to our list items. That's why we have lost styling here. But don't worry, I'll fix that in a later video.

However, if we right click anywhere on this page and go to Inspect, this is Chrome Developer Tools, you should probably be familiar with it. Here on the console tab we have a warning saying each child in a list should have a unique key prop.

What does this mean? Well, back to our code, this is where we are mapping each item to a list item. Here the warning is saying that each list item should have a key prop or key property that uniquely identifies that item. React needs this to keep track of our items, so later when we add or remove items dynamically React knows what part of the page should be updated.

So when rendering a list of items using the `map` method, we should give each item a unique key. Now in this case, each item has a unique string, so we can use the item itself as a unique key. But in a real-world application where we retrieve items from an API, quite often each item has a property like ID. We don't have that in this case, so we don't have to worry about it.

Now back to the browser, let's refresh. The warning is gone, and here's our list. Beautiful.

 645 - 747
 
Sometimes we want to render different content based on certain conditions. For example, here we can add an if statement and say, if items' length equals zero, perhaps we want to show the user a different message. 

So here we can return a completely different markup. For example, we can add a paragraph, and here we say "no item found." Now, to make sure this works, I'm going to change the constant to a variable so we can reassign this on the next line.

Okay, now back in the browser — so here we have "no item found." Beautiful, but our heading is gone. So we can come back here and add our heading as well: list. And now we need to wrap this entire expression inside a fragment. So let's add a fragment. Okay, now if I save the changes, Predator reformats our code, and here once again we have parentheses for spreading this code over multiple lines. With this, our heading is back.

But I don't like this implementation because we have a bit of duplication, and generally speaking, duplication in code is not considered a good practice. So let me show you a different way to achieve the same result. We're going to get rid of the if statement. Instead, we're going to render things conditionally inside our JSX expression.
 
However, inside this JSX expression, we cannot write an if statement because, as I told you earlier, here we can only use HTML elements or other React components. The only exception is braces—with braces, we can render anything dynamically. So here we can use the ternary operator in JavaScript. So we start with our condition: items' length equals zero. Then we type a question mark. 

If this condition is true, we're going to return a paragraph with this message; otherwise, we're going to return null, meaning nothing will be rendered. With this, we have the same result as before, and our implementation is a little bit more concise.
 
Now, sometimes this logic can get a little bit too complicated, and it can pollute our JSX markup. In those cases, we can always extract this logic and store it in a separate variable or constant. For example, here we can declare a constant called message. Now we move this expression right here, and then we can simply render our message constant in our JSX markup. So now our JSX markup is a little bit cleaner.

Now we can also move this logic inside a function. For example, we can declare a function called get message, and here I'm using the arrow function syntax. Now we move this logic right here. And now we don't need this constant anymore. So here we have a function, and we can call that function to get the right message. Now, the benefit of using a function in this case is that our functions can have parameters. 

So perhaps we can get different messages depending on different conditions. So here we can pass different arguments, like one or whatever, and get a different message. If you don't have that scenario, it's better to use a constant in this case.
 
Now, let me revert this code back to the previous state. I'm going to move this expression right here, so I can show you a more concise way to write the same code. So let's remove this function. Okay, look—this piece of code is fine and it works, but the part that bugs me a little bit is the second part returning null. Here, let me show you a better way to write this code.

We start with our condition: items' length equals zero. Now, instead of using the ternary operator, instead of using a question mark, we do a logical AND between this condition and the value that we want to return if this condition is true—that is, the paragraph element. Okay, with this implementation, we don't have the null keyword, and our code is a little bit more concise.

But how does this work? Well, let's go back to the browser and open up Chrome Developer Tools. Here in the Console tab, this is going to be our JavaScript playground. If you have a Boolean value like true and perform a logical AND with another value, like one—see what happened? 

The result of this entire expression is equal to the second value. What if we type true AND Mosh? The result of the expression is Mosh. Now, what if you have false AND Mosh? The result is false.
 
So what does this mean? Well, that means if our condition is true, the result of this entire expression will be our paragraph element. But if the condition is false, the result of the entire expression will be false, and nothing will be rendered on the screen. 

So this is a very common technique React developers use to render content dynamically. Okay, with this, we can remove the slide, and this is our final implementation. Foreign. [Music]

748 - 865

Now, let's see how we can handle click events in a component. First, I'm going to remove this line so we bring back our items. Good. Now, I just realized that earlier I made a mistake and forgot to apply one of the Bootstrap classes to these items. So, back to our code: this is where we're rendering a list item; we should give this a class of list-group-item.

Okay, that's better. Now, we want to be able to click on each item and see it on the console. In React, each element has a property, or a prop, called onClick. So, here, I'm going to add that onClick to braces. Now, inside the braces, we can write an arrow function — a function with no parameters — and here, we can just say `console.log("clicked")`. As simple as that.

Now, I'm going to save the changes, so the code is reformatted — so now each property, or each prop, is on a separate line. Okay. Now, back to the browser: we had an internal server error from this web server. Don't worry about it; just refresh — error is gone.

Now, if we click on each item, we see this message. Beautiful. But what if you want to see the actual item that was clicked? Well, look: this is where we are mapping each item to a list item. So, when creating this list item, we have access to each item, because we are using that item as the key of each list item, right?

So, instead of logging "clicked", we can simply log `item`. Now, if we click on each item, we see it on the console. Beautiful.

And by the way, when mapping items, we can optionally add a second parameter as an index, and with this, we can see the index of the item that was clicked. So, let me show you. I'm going to clear the console. Now, if we click on each item, we can also see its index in the array. Lovely.

Now, this arrow function can optionally have a parameter that represents the browser event. We can call that `e` or `event`, whatever we prefer. Now, let's log this on the console and see what we get.

So, clear, click. Look: the type of this object is SyntheticBaseEvent. I know it's a fancy term. This is one of the built-in classes in React, because different browsers have different implementations of event objects. 

So, to make this cross-browser, the React team has created a class called SyntheticBaseEvent, that is a wrapper around the native browser event object.

Now, if you look at the properties of this object, you see properties that you're probably familiar with. For example, we have `clientX` and `clientY`, which represent the position where we clicked. We also have `type`, which represents the type of event. We have `target`, which is the element where I clicked — that was a list item with this class.

Now, our event handling logic here is very simple — it's just a one-liner — so writing a function here is totally fine. But if our logic gets more complex, we don't want to write that logic here in the middle of a JSX markup. Instead, we should move that logic into a separate function.

So, in this component, we declare a function. By convention, we start with the word "handle", and then we specify the type of event — in this case, "click".

Now, we set this to... Let's grab this piece of code and paste it here.

Now, we have a warning from the TypeScript compiler saying parameter 'event' implicitly has an 'any' type. So, the reason I know this is a TypeScript issue is that here we have "TS" — that is short for TypeScript.

But why are we getting this warning? Well, the reason we're getting this error is that the TypeScript compiler doesn't know: the type of this parameter — is it an event? Is it a number? Is it a string? Is it an object? What is it?

So, if we use the dot operator, we cannot see any properties of this event object. This is where we need to specify the type of our parameter, so we get auto-completion and type safety.

So, let's hover our mouse over this event parameter. Look: the type of this parameter is `React.MouseEvent`. So, when we pass an inline function here, the TypeScript compiler knows the type of our parameter — that is why we didn't get a warning earlier.

But in this case, we're declaring a brand new function. The TypeScript compiler doesn't know where we're going to use this, so it doesn't know the type of this parameter.

So, we should go on the top, add `import { MouseEvent } from 'react'`, and then after the parameter, we type a colon followed by its type. This is called type annotation in TypeScript.

With type annotation, we can specify the type of variables, parameters, and so on. Now, with this annotation, if we use the dot operator, we can see all the properties of this `MouseEvent` object.

This is one of the beauties of TypeScript: we get auto-completion, we get type safety, and it's easier to refactor or restructure our code. You'll see more examples as we go through the course.

So, let's finish this example. Now, we have a function here. This function is called an event handler, because its job is handling an event — in this case, the click event.

Now, over here, we're going to remove this inline function and simply reference our `handleClick` function. Note that I'm not calling this function — we don't want to call it — we just want to pass a reference. So, you're telling React that whenever the user clicks on this event, this function should be called.

Calling this function will be done later at runtime. Now, let's make sure everything is working. So, let's click on one of these items. Beautiful.

865-1131

All right. Now, the next step: when we click on an item, we want to highlight it. To do that, we have a CSS class in Bootstrap called `active`.

So, back to our code: this is where we are rendering a list item. I'm going to give this a second class called `active`. Now, look — all of them are highlighted or activated. This is not what we want; we want to highlight one item at a time.

To do that, we need a variable to keep track of the index of the selected item. So, back to our component: let's declare a variable called `selectedIndex`. We can initialize this to negative one — that means no item is selected. If we set this to zero, that means the first item should be selected.

Now, down here, we can render this `active` class dynamically. So, we're going to use the same technique you learned in the conditional rendering lesson. I'm going to remove the quotations here; we add braces so we render content dynamically. Here, we can check the `selectedIndex`: if it equals the index of the current item, that means that item should be active. So, we're going to give it two classes: `list-group-item` and `active`. Otherwise, we should only give it the `list-group-item` class.

This is a very simple way to add classes dynamically. There are other more advanced techniques — let's not worry about them at this stage. Let's just see if this works or not. So, back to the browser: now the first item is selected. Beautiful.

Now, when we click on an item, we should change the `selectedIndex`. So, this is very good handling the click event. Now, in this case, we need a simple arrow function to update the `selectedIndex`. So, I'm going to get rid of this `handleClick` function, so we delete it from here as well as here. We should also delete the `MouseEvent` import on the top.

Okay, so always pay attention to cleaning up your code. So, here we write a simple arrow function, and here we set `selectedIndex` to the index of the current item. Okay, now back to the browser: let's click on an item. Nothing is happening. Why is that?

Well, this variable we have declared here is local to this function component, so React is not aware of it. It's like a little secret inside this component. To solve this problem, we should tell React that this component is going to have data, or state, that might change over time. To do that, we have to use one of the built-in functions in React called `useState`. So, when we type this here and press Enter, it gets imported on the top.

Okay, now this function is called a hook. A hook is a function that allows us to tap into built-in features in React. So, this is called the state hook. We have other hooks that you will learn about as we go through this course. Using the state hook, we can tell React that this component can have data, or state, that will change over time.

So, instead of declaring a variable this way, we're going to call this function that we're going to initialize our variable. We can give it the initial value of negative one. Now, this returns an array. In this array, we're going to have two elements: the first element is going to be a variable — like our `selectedIndex` variable — and the second element is going to be an updater function. Using that updater function, we can update this variable, and at that point React will be notified so it knows that the state of our component has changed, and then it will re-render our component, which causes the DOM to be updated under the hood.

So, as I told you earlier in the course, with React we almost never have to touch the DOM directly. We think in terms of components that have state. When the state of a component changes, React will update the DOM to match the new component state.

Okay, now let's see how we can use this. So, instead of working with two individual elements here, it's easier to destructure this array into two elements. So, the first element is going to be `selectedIndex`, and the second element is going to be a function which we call `setSelectedIndex`. This is a convention we follow in React applications.

So, here we have a state variable called `selectedIndex`, and here we have a function called `setSelectedIndex`. Now, as another example, we can use the state hook to declare another variable called `name`. So, we call `useState`; we can initialize the name to an empty string. This returns an array which we can destructure into two elements: `name` and `setName`.

That's the idea. Now, in this case we don't need a name variable, so let's delete this line and the comment and the slide. So, here we have a state variable called `selectedIndex`. Now, down here, to update this variable, we're going to call `setSelectedIndex` and give it the new index. With this, when we click on an item, it gets selected. Beautiful.

So, this is how we tell React that our component can have state that will change over time. Now, one thing you need to know about component state is that each component is going to have its own state. So, if we go back to our app component and add another instance of our list group here, each list group is going to have its own state.

So, in our first list group, Paris is selected, but in our second list group, nothing is selected because this component has its own state. So, they will be independent of each other. Okay, now we don't need two list groups here, so I'm going to remove the second one.

**Passing Data Via Props**

We're showing a list of cities here, but what if we want to show a list of names or a list of colors? We don't want to recreate a separate component for each type of list, right? So, how can we make this component reusable? This is where we use props, or properties. Props are the inputs to our components.

So, back to our code: instead of defining these items here, we should be able to pass them as an input to this component, just like how we can call a function and give it an argument. Now, the same principle applies to this heading. Instead of hard coding this label here, it would be nicer if you could pass different labels, like cities, names, colors, and so on.

So, how can we do that? Well, first we need to decide the shape of the input to this component. So, we should be able to pass an object with two properties: `items`, which is going to be an array, and `heading`, which is going to be a string. To do that, we use one of the TypeScript features called an interface. Using an interface, we can define the shape or the interface of an object.

So, you start with the `interface` keyword, give this a name. By convention, you use `Props`, but some people prefer to prefix it with the name of the component, so `ListGroupProps`. Either way, it works. I prefer a shorter name. That in braces would define various properties and their types. So, we want to have `items`, which is going to be an array of strings — so `string[]` — and `heading`, which is going to be a string.

So once again, we're using type annotation to specify the type of various properties. Okay, now we don't need this comment anymore. Next, we give this function a parameter called `props` of type `Props`.

Now, if we go back to our app component, we have two compilation errors saying type is missing the following properties from type `Props`: `items` and `heading`. So, the TypeScript compiler is saying that this component expects two properties, which are `items` and `heading`; we have not specified them. This is yet another benefit of using TypeScript: the TypeScript compiler is reminding us that we have forgotten to pass these props, so it's helping us to catch a bunch of potential errors at compile time before running our application.

So, back to our list group: I'm going to grab the list of items and move it to the app component. Now we can pass this just like how we set the attributes of an HTML element. So, we set `items` to — we add braces so we can reference this variable. Now, similarly, we should also set the `heading` to “Cities”. In this case, I'm using quotation marks, but we could also wrap this in braces, but this is unnecessary because we're passing a static value. So, let's rewrite it — that's better.

Now, the compilation error is gone. So, back to our list group component: now there are a couple of issues here. We don't have the `items` variable anymore, so we have to prefix it with `props.`. Okay, but we have to do the same thing here. This looks a little bit repetitive and ugly. A better solution is to destructure this parameter right here. So, we remove the name and add braces and pick the two properties: `items` and `heading`. Now we have access to these properties anywhere in this function, so we can remove `props.` and our code is cleaner.

Now, the final part is to replace the list with the heading dynamically. Okay, back to the browser: our app is still working. So, using props, we can pass data to our components.

**Passing Functions Via Props**

Our list group component is in fairly good shape: when we click an item, it gets selected. But in a real-world application, quite often something should happen after an item is selected. Perhaps we want to filter a list of objects, or maybe we want to redirect the user to a different page. So, something should happen after an item is selected.

Now, what happens is different from one application to another. There is no one-size-fits-all, so we don't want to implement that piece of logic inside our list group component, because then it's not going to be a reusable component anymore. So, we need a mechanism to notify the consumer or the parent of this component that an item is selected.

In this case, the consumer or the parent of this component is our app component — this is where we are using the list group. So, when an item is selected, we should notify the app component that an item is selected. But how can we implement this? Well, that's very easy.

So, look at our `props` object: currently we have two properties, and we are using these to pass data to our list group component. Now, we can add a third property, which is going to be a function. Now, down here, when we select an item, we're going to call that function. With this, our app component will be notified. Let me show you how this works — it's really simple.

So, first, let's define the signature of that function. Let's imagine that we want a function that takes a parameter called `item` of type `string` — that is, the selected item — and returns `void`, so it doesn't return a value. So, here we have a property. By convention, we start with the word `on`, and then we specify the type of event — in this case, `SelectItem`. This is just like the `onClick` prop that you saw earlier, but here we have `onSelectItem`.

So, we have a property called `onSelectItem`. The type of this property is a function that has a parameter of type `string` and returns `void`. Okay. With that, now we have a compilation error in our app component. How can I tell? Look — it turned red. Also, we can go to the top, under View, open up the Problems panel. So, the TypeScript compiler is telling us that in the app component we have forgotten to pass this prop.

So once again, the TypeScript compiler is helping us catch a lot of potential problems early on. So, let's go back to our app component. Now, here we set `onSelectItem`. We can write an inline function here, just like how we handled the click event earlier, or we can write a separate event handler.

If you want to write a separate event handler, again, just like before, by convention we start with the word `handle`, and then we specify the type of event: `SelectItem`. Now, we set this to a function with a signature that we just defined: so, `item: string` → nothing. Now, here we can just do a `console.log` and print the item on the console.

Now, we can pass that down here: `handleSelectItem`. Now, the last step: back to our list group. Over here, when destructuring the props, we should pick the `onSelectItem` property. And then, when selecting an item, we should call this function. So, we call this and pass the selected item, which is this `item` variable here.

Now, back to the browser: when we select an item, the app component is notified, and it's now printing the name of the selected city on the console.




1134 - 1257
Here’s the text converted into an English report with timestamps removed and proper paragraph breaks/punctuation added. The original wording is kept exactly as it is:

Now let's talk about the differences and similarities between props and state. As you have seen, props or properties are the inputs or arguments passed to a component. State, on the other hand, is the internal data managed by a component that can change over time. So, props are like functional arguments, and state is like local variables inside a function.

Now, one thing you need to know about props is that we should treat them as immutable. What does this mean in English? To “mute” something means to change it, so mutable means changeable, and immutable means unchangeable. So when we say something is immutable, it means it's read-only. In our list group component, here are our props. 

We should not change any of them here. We should not set the heading to a new value. If we do so, nothing is going to happen. Nobody is going to yell at us, but this is an anti-pattern in React. You will understand the philosophy behind this as we go through the course. This is based on functional programming principles. So we should treat props as immutable or unchangeable.
State, on the other hand, is mutable, and that's the whole purpose of using state variables. We want to tell React that this component has data that can change over time. So these were the differences between state and props. But one thing they both have in common is that anytime they change, React will re-render our component and update the DOM accordingly.
Passing Children

Sometimes we want to pass children to a component, just like how we are passing a list group to this div element here. So, in this lesson, I'm going to show you how to create a component that can accept children.

Back to our components folder: let's add a new file called alert.tsx. Now let me show you a shortcut. Instead of defining a function here and then exporting it, we can use a shortcut. So, here in the extensions panel, if you search for ES7 Plus, you will find this extension. It's called ES7 Plus React, Redux, and React Native. It's a very popular extension — look at how many times it's been downloaded.

So once you install this, you can type rafce. Now it's not coming up. I don't know why, so let's close this file and open it one more time. Now let's try again — good. So this is short for “React Arrow Function Component Export.” If you press Enter, we get this code snippet — lovely. Now here we have multi-cursor editing, so we can change the name of the component if you made a mistake, but in this case, no. So let's go back to Alert, and then we press Escape to exit multi-cursor editing. Good. Now we don't need to import React on the top, so here's our Alert component.

Now let's add this to our app component and test our application up to this point. So we go to the app component. We're done with our list group for now, so let's delete all the code here. Now inside this div, we want to add an Alert. So let's add Alert. Good. Now back to the browser: so here's our Alert component — lovely.

Now, to display an alert, we're going to borrow some code from Bootstrap. So head over to the Bootstrap website, go to the docs, and here on the left side under Components, you should find Alerts. So let's find out the markup we need to render an alert like this. That is very straightforward: we need a div with two classes. The base class is alert that all of these have. The second class is a class that determines the color. So if you use alert-primary, we get this blue alert by default.

Back to our Alert component: let's give this div a couple of classes — alert and alert-primary. All right, this is what we get — lovely. Now we need to make this dynamic, so we want to pass the text as a prop. To do that, first we need to use an interface to define the shape of props. So, in Props here, we need a property called text of type string. Then we add a parameter here of type props. In fact, it's better to destructure this and grab the text property and render it right here.

Okay, now back to our app component. Here we should set the text to something like “Hello World.” Before going further, let's test our implementation. Okay, it's working — lovely.

Now, while this works, this way of passing text to this component is kind of ugly. What if the text is a bit too long? What if you want to pass HTML content? Passing HTML content as a prop like this is kind of ugly. Wouldn't it be nicer if you could pass text as a child to this component? Let me show you how. We want to be able to use this component like this — this is better.

To do that, we go back to our component. Now there is a special prop that all components support, and it's called children. So if you simply rename text to children, now we can pass our text as a child to this component. But we have a couple of errors because we need to rename these two references to text. So I'm going to rename them both in one go — good. There is our component, and our application is still working — lovely.

Now, what if you want to pass HTML content? Here we get a compilation error because we told the TypeScript compiler that the children prop is a string, but in this case, we are not passing a string. We are passing a more complex structure. To solve this problem, we need to change the type of children from string to ReactNode. Now here, in the auto-completion box, we have two ReactNodes. The first one is an abbreviation, so if you press Enter here, we get this markup — this is not what we want. We want the second item — this is the ReactNode class defined in the React module. So let's import it on the top like this, and with that, we can pass HTML content to our Alert component.

So, to recap: using the children prop, we can pass children to a component.
Inspecting Components with React Dev Tools
1258 - 1540



* **/