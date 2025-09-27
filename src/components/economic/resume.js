/*****
 * 
1.
Achieve real-time streaming response display, optimize the loading experience of long texts, and enhance the smoothness of user interaction.
Design and implement components that support the upload of multiple formats of files, combining chunked upload and progress monitoring mechanisms.
Load and display historical information, ensuring the stability of large file transmission and the user experience.
详情：

2. Full-process development of the ordering function module:
Includes specification selection, dynamic price calculation, ordering confirmation page and information display functions.
Utilizes Vuex for cross-page state management to ensure consistency of user operation data.
Employs dynamic form validation rules to enhance data accuracy, optimize user submission experience, and reduce error rates.
详情：

3. Development of Data Monitoring and Visualization Module:
Based on ECharts, a multi-dimensional data monitoring dashboard is constructed to achieve dynamic rendering of line charts, bar charts, pie charts, etc.;
Support for time range filtering, data drilling, and real-time refreshing;
Package a reusable chart component library to enhance the development efficiency of the team;
Combine WebSocket to achieve real-time data updates of key indicators, enhancing the response capability of the monitoring system.
详情：

4. General Functionality and Experience Optimization:
Led the development of forms for multiple business modules, designing a unified form validation framework.
Integrated regular expression validation, asynchronous validation, and error notification mechanisms to increase the success rate of form submissions.
Optimized page loading performance by using lazy loading, component splitting, and code splitting to reduce the initial page loading time, significantly enhancing the user experience.
详情：

Participated in the front-end development of the Smart City Project in Guanggu, using axios to achieve data interaction with the backend.
Responsible for the linkage between the background interface points and the map page, as well as the display and hiding of map points.
Based on Vue-router, navigation guards were used to control the jumps between various interfaces, and different contents were displayed according to different permissions.
Used Vuex to implement component communication and other functions to ensure good interaction between pages and data communication.
Used Git for version control and cooperated with backend personnel to complete the front-end and back-end integration testing.

Based on methods such as SHAP algorithm for interpretability-based machine learning, the seismic data is analyzed and processed to effectively identify geological fault targets;
Using SQL statements to query the data, and using Python for thermal analysis and interpretability analysis of the data
 * 
 * 
 */
/*
 * 
 This book is for developers who want to learn the React library while learning the
latest techniques currently emerging in the JavaScript language. This is an exciting
time to be a JavaScript developer. The ecosystem is exploding with new tools, syntax,
and best practices that promise to solve many of our development problems. Our aim
with this book is to organize these techniques, so you can get to work with React right
away. We’ll get into Redux, React Router, and build tooling, so we promise not to
introduce only the basics and then throw you to the wolves.
This book does not assume any knowledge of React at all. We’ll introduce all of
React’s basics from scratch. Similarly, we won’t assume that you’ve worked with ES6
or any of the latest JavaScript syntax. This will be introduced in Chapter 2 as founda‐
tion for the rest of the chapters.
You’ll be better prepared for the contents of the book if you’re comfortable with
HTML, CSS, and JavaScript. It’s almost always best to be comfortable with these big
three before diving into a JavaScript library.
Along the way, check out the GitHub repository. All of the examples are there and
will allow you to practice with hands-on examples.

* * * * * * * *

This book is here to help you get your job done. In general, if example code is offered
with this book, you may use it in your programs and documentation. You do not
need to contact us for permission unless you’re reproducing a significant portion of
the code. For example, writing a program that uses several chunks of code from this
book does not require permission. Selling or distributing a CD-ROM of examples
from O’Reilly books does require permission. Answering a question by citing this
book and quoting example code does not require permission. Incorporating a signifi‐
cant amount of example code from this book into your product’s documentation does
require permission.

* * * * * * * *

Our journey with React wouldn’t have started without some good old fashioned luck.
We used YUI when we created the training materials for the full stack JavaScript pro‐
gram that we taught internally at Yahoo. Then in August 2014, development on YUI
ended. We had to change all of our course files, but to what? What were we supposed
to use on the front end now? The answer: React. We didn’t fall in love with React
immediately, it took us couple of hours to get hooked. It looked like React could
potentially change everything. We got in early and got really lucky.
This book would not have been possible without the support of Ally MacDonald who
helped us every step of the way and was monumentally patient with us through sev‐
eral library updates. We’re grateful to Melanie Yarbrough, Colleen Toporek, and
Rachel Head for their amazing attention to detail. Thanks to Sarah Ronau for proof‐
reading this book well before it was ready for human eyes and to Bonnie Eisenman
for her great advice and overall delightfulness. Thanks also to Stoyan Stefanov, who
was nice enough to provide a technical review even though he’s really busy building
cool stuff at Facebook.
There’s also no way this book could have existed without the Sharon Adams and
Marilyn Messineo. They conspired to purchase Alex’s first computer, a Tandy TRS 80
Color Computer. It also wouldn’t have made it to book form without the love, sup‐
port, and encouragement of Jim and Lorri Porcello, and Mike and Sharon Adams.
We’d also like to acknowledge Coffee Connexion in Tahoe City, California for giving
us the coffee we needed to finish this book, and its owner, Robin, who gave us the
timeless advice: “A book on programming? Sounds boring!”
 * 


React is a popular library used to create user interfaces. It was built at Facebook to
address some of the challenges associated with large-scale, data-driven websites.
When React was released in 2013, the project was initially viewed with some skepti‐
cism because the conventions of React are quite unique.
In an attempt to not intimidate new users, the core React team wrote an article called
“Why React?” that recommended that you “Give It [React] Five Minutes.” They
wanted to encourage people to work with React first before thinking that their
approach was too crazy.
Yes, React is a small library that doesn’t come with everything you might need out of
the box to build your application. Give it five minutes.
Yes, in React, you write code that looks like HTML right in your JavaScript. And yes,
those tags require preprocessing to run in a browser. And you’ll probably need a
build tool like webpack for that. Give it five minutes.
If you read that article—as we did—you may have been dazzled by the promise of a
new JavaScript library—a library that would solve all of our problems with the DOM;
a library that would always be easy to work with and would never hurt us.
Then the questions start to arise: how do I convert this JSX? How do I load data?
Where does the CSS go? What is declarative programming? Every path leads to more
questions about how to incorporate this library in your actual day to day work. Every
conversation introduces new terminology, new techniques, and more questions.


This solution is pretty straight forward. It works, and the comments help us under‐
stand what is happening. However, these functions are large and complicated. Each
function does a lot. They are hard to comprehend, they require comments and they
are tough to maintain. Let’s see how a functional approach can produce a more scala‐
ble application.
Our goal will be to break the application logic up into smaller parts, functions. Each
function will be focused on a single task, and we will compose them into larger func‐
tions that we can use to create the clock.
First, let’s create some functions that give us values and manage the console. We’ll
need a function that gives us one second, a function that gives us the current time,
and a couple of functions that will log messages on a console and clear the console. In
functional programs, we should use functions over values wherever possible. We will
invoke the function to obtain the value when needed
 * 
 */