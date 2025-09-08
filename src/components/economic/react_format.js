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

[Music]*/

/*****
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
 * **/