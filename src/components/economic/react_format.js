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

But why was React created? Well, as you probably know, when a web page is loaded in a browser, the browser takes the HTML code and creates a tree-like structure called the Document Object Model, or the DOM for short. This allows us to use JavaScript and change the page content in response to user actions. For example, we can use JavaScript to hide an element when a button is clicked. This is called vanilla JavaScript, meaning plain JavaScript code without any third-party tools.  

Now, as our applications grow, working with the DOM can become quite complex and challenging to manage. This is where React comes into play. With React, we no longer need to worry about querying and updating DOM elements. Instead, we build a web page using small, reusable components, and React will take care of efficiently creating and updating DOM elements. So, components help us write reusable, modular, and better-organized code.  

Now, let's look at a real-world example. Imagine you want to build a web page like this. On this page, we have a navigation bar on the top, a side panel on the left, and a grid of video games in the main area. We can build each of these sections as separate components. Now, in this grid, each game is displayed in a card, which is an independent component. With a like button—that's another component itself. We can build all these components individually and then combine them to build this page. Essentially, a React application is a tree of components, with the App being the root, bringing everything together.  

All right, that's enough theory for now. Next, we're going to set up our development environment and get a feel for what it's like to build applications with React.  

Setting Up the Development Environment.  

To take this course, you need to have Node version 16 or higher. Now, to check the version of Node on your machine, open up your command prompt or terminal window and run `node -v`. So, on this machine, I'm running Node version 19. You might be running a newer version—that's totally fine. It's not going to impact the materials in this course. But you need to have Node version 16 or higher. If you don't, head over to nodejs.org and download the latest version on this page.  

Now, in this course—just like my other courses—I'll be using Visual Studio Code, or VS Code, as my editor. You're welcome to use any editor that you prefer. But if you want to use VS Code, I strongly suggest you to use the Prettier extension for formatting your code. So, here's the Extensions panel over here. Search for Prettier and install this extension. Once you do that, on the top, under the Code menu, go to Preferences and Settings. Now, this layout might be different on Windows or Linux—I'm not entirely sure—but find the settings dialog, and on this page, search for "Format on Save". If you check this box, every time you save a file, that file gets automatically reformatted.  

With all that, now we are ready to create our first React application.  

[Music]

 * 
 */