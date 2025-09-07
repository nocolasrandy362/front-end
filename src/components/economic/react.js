[Music] welcome to the ultimate react course in this course you will learn everything
0:06
you need to know about react from the basics to more advanced concepts so by the end of the course you'll be able to
0:12
confidently build fast and scalable apps with react if you are looking for a comprehensive easy to follow
0:18
well-organized and practical course that takes you from Zero to Hero this is the right react course for you you won't
0:24
need any prior knowledge of react to get started everything you need to know is right here so you won't need to jump
0:29
back and forth between random tutorials now unlike other courses we won't be building a dummy App instead we'll be
0:37
building and deploying a beautiful production grade app for discovering video games this app has all the
0:43
features and UI patterns you would expect from a modern application we can toggle within the dark and light modes
0:50
we can search for games filter them by genre as well as platform now as we
0:55
change filters the page title gets updated dynamically we can also sort games and here we see loading skeletons
1:02
while games are being fetched from the back end and that's just the start in the next part which I'm currently
1:07
working on we'll dive into advanced topics like routing State Management fetching data with react query
1:14
authentication error handling performance optimization and much much more I've put my heart and soul into
1:20
creating this course and I'm confident that it's going to be a game changer for your react skills I'm Marsha madani I'm
1:27
a software engineer with over 20 years of experience and I've taught millions of people how to code and become
1:32
professional software Engineers through my YouTube channel and online school codebitmarsh.com if you're new here make
1:39
sure to subscribe as I upload new videos all the time so if you're ready to master react and build front-end apps
1:46
with confidence let's jump in and get started [Music]
1:52
thank you [Music]
 Prerequisites
2:01
before we get started let's talk about what you will need to know to take this course first things first you don't need
2:07
to know react to take this course however you should have a good understanding of HTML CSS and JavaScript
2:14
if you're comfortable writing code in these languages you are in a great position to start learning react now
2:20
throughout the course we'll be using typescript typescript is a superset of JavaScript that adds static typing to
2:26
the language essentially it helps us catch errors earlier in the development process which can save us time and
2:32
headaches down the road now don't worry if you have never coded in typescript before I'll hold your hands and teach
2:38
you everything from scratch with that out of the way we can dive right into learning react
 What is React?
2:45
before we begin coding let's take a few minutes and discuss what reacting is and
2:51
how it helps us create better applications react is a JavaScript library for building Dynamic and
2:57
interactive user interfaces it was created at Facebook in 2011 and is currently the most widely used
3:04
JavaScript library for front-end development so if you're looking for a job as a front-end developer you should
3:10
know how to confidently build applications with react but why was react created well as you probably know
3:17
when a web page is loaded in a browser the browser takes the HTML code and creates a tree like structure called the
3:25
document object model or the Dom for short this allows us to use JavaScript
3:30
and change the page content in response to user actions for example we can use
3:35
JavaScript to hide an element when a button is clicked this is called vanilla JavaScript meaning plain JavaScript code
3:42
without any third part tools now as our applications grow working with a Dom can
3:47
become quite complex and challenging to manage this is where react comes into play with react we no longer need to
3:54
worry about querying and updating Dom elements instead with this grab a web page using small reusable components and
4:02
react will take care of efficiently creating and updating Dom elements so
4:08
components help us write reusable modular and better organized code now
4:13
let's look at a real word example imagine you want to build a web page like this on this page we have a
4:19
navigation bar on the top a side panel on the left and a grid of video games in
4:24
the main area we can build each of these sections as separate components now in
4:29
this grid each game is displayed in a cart which is an independent component with a like button that's another
4:35
component itself we can build all these components individually and then combine them to build this page essentially a
4:42
react application is a tree of components with the app being the root bringing everything together all right
4:49
that's enough theory for now next we're going to set up our development environment and get a feel for what it's
4:54
like to build applications with react foreign
 Setting Up the Development Environment
5:02
foreign to take this course you need to have node version 16 or higher now to check
5:08
the version of node on your machine open up your command prompt or terminal window and run node Dash V so on this
5:15
machine I'm running node version 19. you might be running a newer version that's totally fine it's not going to impact
5:21
the materials in this course but you need to have node version 16 or higher if you don't head over to
5:28
nodejs.org and download the latest version on this page now in this course just like my other courses I'll be using
5:35
visual studio code or vs code as my editor you're welcome to use any editor
5:40
that you prefer but if you want to use vs code I strongly suggest you to use the printer extension for formatting
5:47
your code so here's the extensions panel over here search for prettier
5:53
and install this extension once you do that on the top under the code menu go
6:01
to preferences and settings now this layout might be different on Windows or Linux I'm not entirely sure but find the
6:08
settings dialog and on this page search for format on Save
6:14
if you take this box every time you save a file that file gets automatically reformatted with all that now we are
6:21
ready to create our first react application [Music]
 Creating a React App
6:30
there are two ways to create a react app we can use the official tool provided by the react team it's called create react
6:37
app or CRA but we also have another tool called Veet that's getting increasingly
6:42
popular these days because it's much faster and gives us smaller bundle sizes
6:48
so here in the terminal window I'm currently on my desktop to create a new app using Veet all you have to do is run
6:55
npm create Veet at latest or if you want
7:00
to use the exact same version as me which is what I recommend you because I want to make sure you have the exact
7:05
same experience then you need to specify the version that is 4.1.0
7:12
okay now npm is asking if you want to install this package let's proceed
7:19
next we need to specify our project name which is Veet project by default but we
7:24
can change that to anything like react app next we need to select a framework so
7:30
using meet we can create any kind of JavaScript project we can use vanilla JavaScript which is Javascript without
7:36
any third-party tools we can also create a view project a react project and so on so using up and down arrows we can move
7:43
down this list let's select react next we need to select a language so
7:49
here we have JavaScript and typescript we're going to use typescript in this course good so now we have a new project next
7:56
we need to go into this folder install all the third party dependencies and run
8:01
our web server so let's set it into the react app folder and type npm install or
8:09
npmi that is shorter and with this we can install all the third-party libraries
8:19
all right now we need to open this project in vs code to do that we type code period if this doesn't work on your
8:27
machine simply drag and drop that folder into vs code now here in vs code we can open an
8:34
embedded terminal by pressing Ctrl and backtick if this doesn't work on your machine just go to the terminal window
8:40
and open a new terminal you can also see the shortcut right here so this is our embedded terminal it's
8:48
much easier to use this than switch back and forth between vs code and a different terminal window now to run our
8:54
web server we type npm run Dev now this launched a web server at this
9:01
address localhost Port 5173 this might be different on your machine so don't
9:07
worry about that just open this address in your browser and this is our first
9:12
react application next we're going to create our first react component
 Project Structure
9:23
so this is our project loaded in vs code now let me give you a brief overview of
9:28
the key files and folders in this project here we have the node modules folder this is where all the third-party
9:36
libraries like react and other tools are installed you'll never have to touch this
9:41
next we have the public folder this is where the public assets of our website
9:46
exist like images video files and so on next we have the source folder this is
9:51
the source code of our application in this folder currently we have a component called the app component don't
9:59
worry about any of the code here we're going to rewrite everything from scratch all I want you to note here is that
10:04
currently in this application we have a single component called the app component
10:10
now outside of the source folder we have index.html which is a very basic HTML
10:17
template in this template we have a div with the idea of root that is the
10:22
container for our application below that we have a script element referencing Source slash main.tsx this
10:30
is the entry point to our application next we have package.json in this file you can find
10:37
information about this project so we have the name of the project its version a bunch of script
10:44
the list of dependencies So currently we're dependent on two libraries react and react on version 18. we also have a
10:52
bunch of development dependencies these are only used for development they're not going to be deployed with our
10:57
application in the future next we have a typescript configuration file here we have a bunch of settings
11:04
for telling the typescript compiler how to compile our code to JavaScript now for the most part you never have to
11:10
touch this file unless you're an advanced user and finally we also have a configuration file for Veet again for
11:17
the most part you don't have to touch this file [Music]
 Creating a React Component
11:26
Now to create a react component we right click on the source folder and add a new
11:31
file called message.tsx so the extension of typescript files should be either TS or
11:38
TSX quite often we use Ts for plain typescript files and TSX for react
11:44
components now there are two ways to create a react component we can use a JavaScript class
11:49
or a function these days function based components have become more popular because they are more concise and easier
11:56
to write so that's what we'll use in this course but if you're maintaining an older react project that is built with
12:03
class components you can look at my previous react course to learn about them but function based components are the
12:09
recommended approach for new projects so here we declare a function called message
12:15
that pay attention to how I have named this function this convention is called Pascal casing with Pascal casing we
12:22
should capitalize the first letter of every word in this case p and C it's
12:28
really important to follow this convention because this is the convention that both react and other developers expect us to follow so in
12:35
react application whenever we want to create a function component we should always follow Pascal casing now here we
12:43
should describe what the UI is going to look like where we use this component so let's say wherever we use this component
12:49
we want to render an H1 element with a message like hello work so here we
12:54
return an H1 element with hello world now this syntax might make you a little
13:00
bit confused you might be thinking that you're writing HTML code in the middle of JavaScript code but that is not
13:05
correct this syntax you see here is called jsx which is short for JavaScript
13:11
XML so this code under the hood is going to get compiled down to JavaScript
13:18
if you head over to babblejs.io repo that is repl you can
13:24
see how this code gets converted to JavaScript let me show you so on the left side we can write jsx
13:30
code like H1 hello world and on the right side we can see the
13:36
equivalent JavaScript code so this piece of code gets eventually converted to
13:41
react.createelement the type of element is H1 and the message inside the element is hello world
13:48
so this is a very basic component now to use this first we need to export it as a
13:54
default object from this module now let's go to the app component and
13:59
use this new component so back to our project here's the app component
14:04
now we're going to delete everything in this file now let's create a new component called
14:10
app now in this component let's say we want to have a div and inside the div we want
14:16
to have our message component so first we need to import our message component
14:22
from period slash message so period means the current folder now we can use this component just like
14:29
regular HTML elements so we add the opening tag and close it it's really
14:36
important to close it we should always close our react components or we'll get a compilation error now here we can also
14:42
use the self-closing syntax that is more concise now just like the message component we
14:48
should export the app component so it can be used somewhere
14:53
else now here in the terminal you can see our web server is still running and here we
14:58
have HMR which is short for hot module replacement so read under the hood
15:03
monitors our files for changes whenever we make any changes it will automatically refresh our page in the
15:09
browser so now you can see our message component rendered on the screen now this is a
15:16
very simple example in a real world application a component can have Behavior so here we can have a button
15:22
when the button gets clicked perhaps we can change the message we can do all sorts of things
15:27
so with jsx we can easily describe the user interface of our application with
15:32
HTML and JavaScript now the great thing about jsx is that it allows us to easily
15:37
create Dynamic content for example here we can declare a constant Cod name I set
15:43
it to my name Marsh now we can replace this word with my name dynamically so
15:49
here we add braces and inside the braces we can write any JavaScript expression
15:55
an expression is a piece of code that produces a value so here we can reference the name constant we can also
16:02
call a function like get name basically any piece of code that returns a value
16:08
so here we can add my name dynamically we can also write if statement so we can
16:15
say if name is true theme return this markup otherwise return a different
16:21
markup like Hello World now back to the browser you can see my
16:26
name is rendered on the screen however if I change the name to an empty string
16:32
we see Hello World so this is the beauty of jsx using this syntax we can easily
16:38
describe the user interface of our applications [Music]
 How React Works
16:47
So currently we have a component tree with the app being the root or top level component and the message being a child
16:54
when our application starts react takes this component tree and builds a JavaScript data structure called the
17:01
virtual Dom this virtual Dom is different from the actual Dom in the browser it's a lightweight in-memory
17:07
representation of our component tree where each node represents a component and its properties when the state or the
17:15
data of a component changes react updates the corresponding node in the virtual Dom to reflect the new state
17:22
then it compares the current version of virtual Dom with the previous version to identify the nodes that should be
17:28
updated it will then update those nodes in the actual Dom now technically updating the Dom is not done by react
17:35
itself it's done by companion Library called react Dom so earlier we talked
17:40
about package.json in this file we can see the dependencies of our application so currently our application is
17:47
dependent on two libraries react and react on let me show you how these work
17:52
together so in index.html I told you that we have
17:58
a div with the idea of root and this is the container of our application below that we have a script element
18:03
referencing main.tsx now if you look at this file you can see that here we're using react
18:10
Dom to render this component tree inside an element with the ID of root
18:17
so this is our component tree here is our app component that is wrapped by another component called strict mode
18:24
this is one of the built-in components in react it doesn't have a visual representation its purpose is to
18:30
identify potential problems so we're taking this component tree and rendering
18:35
or displaying it inside an element with the idea of root and to do that we're using the react on library but we can
18:43
also render this component Tree in a mobile app using a different Library called react native so react itself is
18:50
not tied to a particular platform like web or mobile it's platform agnostic and
18:55
we can use it to build apps for web mobile and desktop devices
 React Ecosystem
19:01
[Music]
19:06
so you have learned that react is a JavaScript library for creating user interfaces in contrast to react we have
19:13
other tools like angular and view which are Frameworks but what is the difference between a library and a
19:19
framework a library is a tool that provides specific functionality while a
19:24
framework provides a set of tools and guidelines for building applications so
19:29
a library is like a tool while a framework is like a tool set now react is just a library or a tool for building
19:36
user interfaces so the only thing that it does and is good at is creating Dynamic and interactive user interfaces
19:43
but we hardly use only react to build modern applications we often need additional tools for concerns such as
19:50
routing which means allowing the user to go from one page to another making HTTP calls managing the application State
19:57
internationalization form validation animations and so now the great thing
20:02
about react is that it doesn't have an opinion about the additional tools we should use for these concerns so we can
20:08
pick the right tools for the job in this part of the course our focus is entirely on react and no third-party libraries
20:15
once you master react in the next part we'll explore some additional useful libraries in the react ecosystem
20:23
hey guys Marsh here before we dive back into the tutorial I just wanted to say that this tutorial is actually the first
20:30
hour of my complete react course the full course includes eight hours of content jam-packed with the latest
20:37
techniques and best practices it's got everything you need to become a react Pro including exercises summary notes
20:44
cheat sheets and even the project I showed you at the beginning of this tutorial and the best part is it comes
20:50
with a 30 day money back guarantee so if you're loving this tutorial and want to take your react skills to the next level
20:56
I highly recommend checking out the complete course using the link below this video thanks for watching and now
21:03
let's get back to the tutorial so you got a taste of building
 Building Components
21:08
applications with react in this section we'll be covering the fundamental concepts in react applications this is
21:15
the most important section in this course you don't want to miss the materials I've covered here help you
21:20
build a strong foundation in react we'll talk about building components rendering
21:25
markup with jsx managing State passing input to components where props and
21:31
debugging react applications so let's jump in and get started
21:37
[Music]
 Creating a ListGroup Component
21:45
all right in this lesson we're going to create a basic list group component first we're going to install bootstrap
21:51
to give our application a modern look and feel now in case you are not familiar with bootstrap it's a very
21:58
popular CSS library that gives us a bunch of CSS classes for styling our applications
22:04
so here we open up our terminal window you can see our web server is running so
22:09
we open a new terminal window and run npm install bootstrap the version that
22:16
I'm using in this video is 5.2.3 let's go ahead
22:21
good now we need to import it in one of our CSS files so here in the source
22:27
folder we have a couple of CSS files one is app.css this file contains all the styles for
22:34
our app component we don't need any of this stuff anymore delete we also have
22:41
index.css where we have Global styles for our application again we don't need
22:46
any of these Styles here because all of them were generated by wheat so we can delete this file entirely
22:53
now let's go to main.tsx you can see that our index.css file was
22:59
imported here we're going to replace this line with import bootstrap slash
23:05
dist slash CSS slash bootstrap.css
23:11
okay now to make sure that bootstrap is imported properly we go back to the
23:16
browser so previously hello world was in the middle of the page and we had a different font now it's up here and it
23:23
has a different font beautiful so now let's create a list group component so back to our project here in the
23:30
source folder we add a new folder called components this is not necessary but by
23:36
convention we put all of our components in a folder called components now here we add a new file
23:43
called list group dot TSX again pay attention to how I have named this file
23:49
here we're following the Pascal convention so we're capitalizing the first letter of each word
23:55
now in this file with declare a function called list group for now let's just return an H1 element
24:03
list group and Export this from this module
24:09
next we need to import this in our app component so if you're on Mac press command and P if you are on Windows
24:16
press Ctrl NP here we can search for files like app.tsx okay now we don't
24:23
need the message component anymore so let's remove the slide instead we're going to import our list group com
24:29
component okay and we're going to use that right here
24:34
okay let's make sure everything is working up to this point so here in the browser we have our list group component
24:41
beautiful now finally we need to display a list of items here and for that we're
24:46
going to borrow some code from bootstrap so head over to getboosttrap.com go to the docs
24:54
and on the left side under component section you should find list group so
25:03
this is a list group component in bootstrap to create a list like this we need to
25:09
use this markup so we need a UL with this class and a bunch of list items with
25:15
these classes so we copy this we go back to our list group component and return
25:22
this markup now here we get a bunch of Errors because class is a reserved
25:27
keyword in JavaScript or typescript so here we need to rename all these classes to class name now let me show you
25:34
another shortcut let's rewrite this back we select the class keyword now if
25:40
you're on Mac press command and D if you're on Windows press Ctrl and d and with this we select the next occurrence
25:47
of the selected keyword so now we have multiple cursors we can press command and d one more time and again and again
25:54
and again now all of these are selected so we delete them and type class name
26:00
then we press escape a couple of times to disable multi-cursor editing okay now
26:06
finally I save the changes but my code is not reformatted so let's investigate
26:12
why this is happening on the top Under The View menu we go to the command palette note the
26:18
shortcut on Mac it's shift command and P and here we search for format document
26:25
okay here we have an error saying there are multiple formatters for typescript jsx files so let's click on configure
26:34
and here we're going to use prettier as our default code formatter good now this
26:40
file is formatted Beautiful Just note that prelayer automatically wrapped our jsx markup in parenthesis this is
26:47
necessary to break the markup into multiple lines so if you're not using vs code with prettier be sure to add the
26:54
left bracket in front of the return keyword so you can spread your jsx into multiple lines so now back to the
27:00
browser here's our list group component but this is pretty boring this doesn't have any functionality and it doesn't
27:07
allow us to render or display these items dynamically so we're going to solve these issues one by one over the
27:13
next few lessons [Music]
 Fragments
27:21
now what if we want to add a heading here well if we add another element here like an H1
27:28
we get a bunch of Errors because in react a component cannot return more than one element so earlier I told you
27:34
that this H1 expression that we have here eventually gets compiled to JavaScript so this line gets translated
27:42
to something like react.createelement with H1 being the type of the element
27:48
the same thing will happen for the second element so in this function we are returning multiple elements and this
27:54
is not allowed in react now to solve this problem we have a couple of different ways one simple way is to wrap
28:01
this entire expression inside a div or another element so let me show you another shortcut we
28:07
select all this code then we bring up the command palette so we go to the view menu and bring up the
28:14
command palette or better we use the shortcut and here we search for wrap with
28:20
abbreviation now we press enter and here we specify the type of element
28:25
that we want to use to wrap this entire code so div enter done okay so that's one way but
28:33
we're adding one extra element in the Dom purely for making react happy this is unnecessary a better way is to use a
28:40
fragment so on the top we import fragment
28:46
from react make sure to put it in braces now we replace the div with a fragment
28:52
so just like before I've selected the div element now we can press command and
28:58
D to select the other div and now with multiple cursors we can edit both of
29:03
them in one go okay now with this change when this component
29:09
is rendered on the screen we're not going to have an additional element like a div in the Dom okay now there is even
29:15
a better way to achieve the same result we have a shorter syntax we don't have to import the fragment component from
29:21
react so let's delete this line and we select the fragment tags both of
29:28
them and remove them so if you add empty angle brackets we're telling react to use a fragment to wrap
29:35
all these children now back to the browser so here's our heading and our items beautiful
 Rendering Lists
29:43
[Music]
29:48
now this list is kind of useless because we have hard-coded these items in our
29:53
markup what if you want to render a list of items dynamically well let's declare
29:58
a constant called items and set it to an array of strings here we can use the name of
30:04
series like New York San Francisco Tokyo
30:10
London and Paris now in jsx we don't have a for Loop so
30:17
we cannot write code like four item in items render whatever it doesn't work
30:23
that way so we have to use a different technique in JavaScript as you probably
30:28
know arrays have a method called map for mapping or converting each item to an
30:34
item of a different type so if you type items dot map
30:39
here we can pass an arrow function we can say take each item and convert it to
30:44
an item of a different type so here we want to convert each item to an Li element so here we type Li and
30:53
inside the tags we want to render or display the item itself earlier I told you that in jsx we use curly braces to
31:01
render data dynamically so here we render the item itself okay now
31:07
we're going to delete all these list items and instead we're going to bring down
31:13
this piece of code however we get a compilation error because this expression is not allowed
31:20
in the middle of a jsx markup in jsx we can only use HTML elements or other
31:27
react components so to render data dynamically we need to wrap this
31:32
expression in braces okay now save the changes
31:38
our code got reformatted so Predator plugin broke down our code into multiple
31:43
lines and added parentheses to wrap them now back to the browser here's our list
31:48
of cities beautiful while reviewing this video I just realized that I made a mistake earlier and forgot to apply a
31:55
CSS class to our list items that's why we have lost styling here but don't worry I'll fix that in a later video
32:02
however if we right click anywhere on this page and go to inspect
32:08
this is Chrome developer tools you should probably be familiar with it here on the console tab we have a warning
32:14
saying eat child in a list should have a unique key prop what does this mean well
32:19
back to our code this is where we are mapping each item to a list item
32:25
here the warning is saying that each list item should have a key prop or key property that uniquely identifies that
32:32
item react needs this to keep track of our items so later when we add or remove
32:37
items dynamically react knows what part of the page should be updated so when
32:42
rendering a list of items using the map method we should give each item a unique key now in this case each item has a
32:50
unique string so we can use the item itself as a unique key but in a real world application where we retrieve
32:57
items from an API quite often each item has a property like ID we don't have that in this case so we
33:04
don't have to worry about it now back to the browser let's refresh the warning is gone and here's our list beautiful
 Conditional Rendering
33:11
[Music]
33:17
sometimes we want to render different content based on certain conditions for
33:22
example here we can add an if statement and say if items the length equals zero
33:28
perhaps we want to show the user a different message so here we can return a completely different markup for
33:35
example we can add a paragraph and here we say no item found now to make sure this works I'm going to
33:41
change the constant to a variable so we can reassign this on the next line
33:48
okay now back in the browser so here we have no item found beautiful but our
33:53
heading is gone so we can come back here and add our heading as well
33:59
list and now we need to wrap this entire expression inside a fragment so let's
34:05
add a fragment okay now if I save the changes Predator
34:11
reformats our code and here once again we have parenthesis for spreading this
34:16
code over multiple lines with this our heading is back but I don't like this implementation because
34:23
we have a bit of duplication and generally speaking duplication in code is not considered a good practice so let
34:29
me show you a different way to achieve the same result we're going to get rid of the if statement
34:35
instead we're going to render things conditionally inside our jsx expression
34:41
however inside this jsx expression we cannot write an if statement because as
34:47
I told you earlier here we can only use HTML elements or other react components
34:53
The Only Exception is braces with braces we can render
34:58
anything dynamically so here we can use the ternary operator in JavaScript so we
35:03
start with our condition items the length equals zero then we type a
35:09
question mark if this condition is true we're going to return a paragraph with
35:14
this message otherwise we're going to return null meaning nothing will be rendered with this
35:22
we have the same result as before and our implementation is a little bit more concise now sometimes this logic can get a
35:30
little bit too complicated and it can pollute our jsx markup in those cases we
35:35
can always extract this logic and store it in a separate variable or constant for example here we can declare a
35:42
constant called message Now we move this expression
35:47
right here and then we can simply render our message constant in our jsx markup so
35:55
now our j6 markup is a little bit cleaner now we can also move this logic inside a function for example we can
36:02
declare a function called get message and here I'm using the arrow function syntax
36:08
now we can move this logic right here
36:13
and now we don't need this constant anymore so here we have a function and we can call that function to get the right
36:20
message now the benefit of using F function in this case is that our functions can have parameters so perhaps
36:27
we can get different messages depending on different conditions so here we can pass different arguments like one or
36:33
whatever and get a different message if you don't have that scenario it's better to use a constant in this case
36:40
now let me revert this code back to the previous state
36:45
I'm going to move this expression right here so I can show you a more concise way to
36:52
write the same code so let's remove this function okay look this piece of code is fine and
36:59
it works but the part that bugs me a little bit is the second part returning null here let me show you a better way
37:05
to write this code we start with our condition items that length we call zero
37:12
now instead of using the ternary operator instead of using a question mark we do a logical and between this
37:19
condition and the value that we want to return if this condition is true that is
37:24
the paragraph element okay with this implementation we don't have
37:30
the null keyword and our code is a little bit more concise but how does this work well let's go back to the
37:36
browser and open up Chrome developer tools here in the console tab this is going to
37:43
be our JavaScript playground if you have a Boolean value like true and perform a logical and with another
37:50
value like one see what happened the result of this entire expression is equal to the second
37:57
value what if we type true and mosh the result of the expression is mosh now
38:04
what if you have false and mush the result is false so what does this
38:10
mean well that means if our condition is true the result of this entire
38:15
expression will be our paragraph element but if the condition is false the result
38:20
of the entire expression will be false and nothing will be rendered on the screen so this is a very common
38:26
technique react developers use to render content dynamically okay with this we can remove the slide and this is our
38:33
final implementation foreign [Music]
 Handling Events
38:41
now let's see how we can handle click events in a component first I'm going to remove this line so we bring back our
38:48
items good now I just realized that earlier I made a mistake and forgot to
38:53
apply one of the Boost trap classes to these items so back to our code this is
38:59
where we're rendering a list item we should give this a class of list Dash group Dash item
39:07
okay that's better now we want to be able to click on each item and see it on
39:13
the console in react each element has a property or a prop called on click
39:20
so here is that on click to braces now inside the braces we can write an arrow
39:27
function so a function with no parameters and here we can just say console.log
39:32
clicked as simple as that now I'm going to save the changes so the code is
39:38
reformatted so now each property or each prop is on a separate line okay now back
39:45
to the browser we had an internal server error from this web server don't worry about it just refresh error is gone now
39:52
if we click on each item we see this message beautiful but what if you want to see the actual item that was clicked
39:58
well look this is where we are mapping each item to a list item so when creating
40:05
this list item we have access to each item because we are using that item as
40:10
the key of each list item right so instead of logging clicked we can simply
40:16
log item now if we click on each item we see it
40:21
on the console beautiful and by the way when mapping items we can optionally add
40:28
a second parameter as an index and with this we can see the index of the item
40:34
that was clicked so let me show you I'm going to clear the console now if we
40:40
click on each item we can also see its index in the array lovely
40:45
now this Arrow function can optionally have a parameter that represents the browser event we can call that e or
40:52
event whatever we prefer now let's log this on the console and see what we get
41:00
so clear click look the type of this object is synthetic base event I know
41:07
it's a fancy term this is one of the built-in classes in react because different browsers have different
41:12
implementations of event objects so to make this cross browser react team have
41:17
created a class called synthetic bass event that is a wrapper around the
41:22
native browser event object now if you look at the properties of this object you see properties that you're probably
41:28
familiar with for example we have client X and client Y which represent the
41:33
position where we clicked we also have type which represents the
41:39
type of event we have Target which is the element where I clicked that was a list item with this class
41:46
now our event handling logic here is very simple it's just a one-liner so writing a function here is totally fine
41:52
but if our logic gets more complex we don't want to write that logic here in the middle of a jsx markup instead we
41:59
should move that logic into a separate function so in this component we declare a function
42:06
by convention we start with the word handle and then we specify the type of event in this case click
42:13
now we set this to let's grab this piece of code
42:20
and paste it here now we have a warning from the typescript compiler saying parameter
42:26
event implicitly has an any type so the reason I know this is a typescript issue
42:31
is that here we have Ts that is short for typescript but why are we getting this warning well the reason we're
42:38
getting this error is that the typescript compiler doesn't know the type of this parameter is event a number
42:43
is it a string is it an object what is it so if we use the dot operator we
42:49
cannot see any properties of this event object this is where we need to specify the type of our parameter so we get Auto
42:55
completion and type safety so let's hover our Mouse over this event parameter look the type of this
43:02
parameter is react.mouse event so when we pass an inline function here the
43:08
typescript compiler knows the type of our parameter that is why we didn't get a warning earlier but in this case we're
43:15
declaring a brand new function the typescript compiler doesn't know where we're going to use this so it doesn't
43:20
know the type of this parameter so we should go on the top add import
43:25
mouse event from react and then after the parameter we type a
43:31
colon followed by its type this is called type annotation in typescript so
43:37
we type annotation we can specify the type of variables parameters and so on now with this annotation
43:44
if we use the dot operator we can see all the properties of this mouse event object this is one of the beauties of
43:50
typescript we get Auto completion we get type safety and it's easier to refactor
43:56
or restructure our code you'll see more examples as we go through the quest so let's finish this example
44:04
so now we have a function here this function is called an event handler
44:09
because its job is handling an event in this case The Click event now over here
44:16
we're going to remove this inline function and simply reference our handle click function note that I'm not calling
44:24
this function we don't want to call it we just want to pass a reference so you're telling react that whenever the
44:29
user clicks on this event this function should be caught so calling this function will be done later at runtime
44:36
now let's make sure everything is working so let's click on one of these items beautiful
44:42
[Music]
 Managing State
44:48
all right now the next step when we click on an item we want to highlight it to do that we have a CSS class in
44:54
bootstrap called active so back to our code this is where we are rendering a
45:00
list item I'm going to give this a second class called active now look all of them are highlighted or
45:07
activated this is not what we want we want to highlight one item at a time to
45:12
do that we need a variable to keep track of the index of the selected item so
45:17
back to our component let's declare a variable called selected index we can initialize
45:26
this to negative one that means no item is selected if we set this to zero that
45:31
means the first item should be selected now down here we can render this active class
45:38
dynamically so we're going to use the same technique you learned in the conditional rendering lesson so I'm
45:45
going to remove the quotations here we add braces so we render content dynamically here we can
45:51
check the selected index if it equals the index of the current item
45:57
that means that items should be active so we're going to give it two classes list group item and active
46:05
otherwise we should only give it the list group item class
46:10
this is a very simple way to add classes dynamically there are other more Advanced Techniques let's not worry
46:16
about them at this stage let's just see if this works or not so back to the browser now the first item is selected
46:23
beautiful now when we click on an item we should change the selected index so
46:29
this is very good handling the click event now in this case we need a simple error function to update the selected
46:35
index so I'm going to get rid of this handle click function so we deleted from here
46:41
as well as here we should also delete the mouse event import on the top okay
46:48
so always pay attention to cleaning up your code so here we write a simple
46:54
arrow function and here we set selected index to the index of the current item
46:59
okay now back to the browser let's click on item nothing is happening why is that well
47:07
this variable we have declared here is local to this function component so react is not aware of it it's like a
47:13
little secret inside this component to solve this problem we should tell react that this component is going to have
47:20
data or state that might change over time and to do that we have to use one of the built-in functions in react
47:27
called use state so when we type this here and press enter it gets imported on
47:33
the top okay now this function is called a hook a hook is a function that allows us to
47:41
tap into built-in features in react so this is called the statehook we have other hooks that you will learn about as
47:47
we go through this course using the state hook we can tell react that this component can have data or state that
47:53
will change over time so instead of declaring a variable this way we're going to call this function
48:00
that we're going to initialize our variable we can give it the initial value of negative one
48:05
now this returns an array in this array we're going to have two elements the first element is going to
48:13
be a variable like our selected index variable and the second element is going to be an
48:20
updater function using that updater function we can update this variable and
48:26
at that point react will be notified so it knows that the state of our component is changed and then it will re-render
48:33
our component which causes the Dom to be updated under the hood so as I told you
48:38
earlier in the course with react we almost never have to touch the Dom directly we think in terms of components
48:44
that have state when the state of a component changes react will update the Dom to match the new component State
48:51
okay now let's see how we can use this so instead of working with two individual elements here it's easier to
48:58
destructure this array into two elements so the first element is going to be
49:03
select an index and the second element is going to be a function which we call set selected Index this is a convention
49:11
we follow in react applications so here we have a state variable called selected
49:16
index and here we have a function called set selected index now as another
49:21
example we can use the state hook to declare another variable called name so
49:27
we call view state we can initialize the name to an empty string this returns an array which we
49:33
can destructure into two elements name and set name
49:38
that's the idea now in this case we don't need a name variable so let's delete this line
49:43
and the comment and the slide so here we have a state variable called
49:49
selected index now down here to update this variable we're going to
49:54
call set selected index and give it the new index
50:00
with this when we click on an item it gets selected beautiful
50:05
so this is how we tell react that our component can have state that will change over time now one thing you need
50:11
to know about component state is that each component is going to have its own state so if we go back to our app
50:18
component and add another instance of our list group here each list group is going to have its own
50:25
state so in our first list group Paris is selected but in our second list group
50:30
nothing is selected because this component has its own state so there will be independent of each other okay
50:38
now we don't need to list groups here so I'm going to remove the second one
 Passing Data Via Props
50:44
[Music]
50:49
so we're showing a list of cities here but what if we want to show a list of names or a list of colors we don't want
50:56
to recreate a separate component for each type of list right so how can we make this component reusable this is
51:03
where we use props or properties props are the inputs to our components so back
51:09
to our code instead of defining these items here we should be able to pass them as an input
51:15
to this component just like how we can call a function and give it an argument now the same principle applies to this
51:22
heading instead of hard coding this label here it would be nicer if you could pass different labels like cities
51:28
names colors and so on so how can we do that well first we need to decide the
51:34
shape of the input to this component so we should be able to pass an object with
51:39
two properties items which is going to be an array and heading which is going
51:45
to be a string to do that we use one of the typescript features called an interface using an interface we can
51:52
Define the shape or the interface of an object so you start with the interface keyword give this a name by conventional
52:00
use props but some people prefer to prefix it with the name of the component so list group props either way it works
52:09
I prefer a shorter name that he Embraces would define various
52:14
properties and their types so we want to have items which is going to be an array
52:19
of strings so string array and heading which is going to be a string
52:26
so once again we're using type annotation to specify the type of various properties okay
52:31
now we don't need this comment anymore next we give this function a parameter called props of type props
52:40
now if we go back to our app component we have two compilation errors saying
52:45
type is missing the following properties from type props items and heading so the
52:52
typescript compiler is saying that this component expects two properties which are items and heading we have not
52:58
specified them this is yet another benefit of using typescript so the typescript compiler is reminding us that
53:04
we have forgotten to pass these props so it's helping us to catch a bunch of potential errors at compile time before
53:11
running our application so back to our list group I'm going to grab the list of items and
53:17
move it to the app component now we can pass this just like how we
53:24
said the attributes of HTML element so we set items to we add braces so we can
53:29
reference this variable now similarly we should also set the heading to
53:35
series now in this case I'm using quotation marks but we could also wrap this in braces but this is unnecessary because
53:42
we're passing a static value so let's rewrite it that's better now
53:48
the compilation error is gone so back to our list group component now there are a couple of issues here we
53:55
don't have the items variable anymore so we have to prefix it with props dot okay
54:01
but we have to do the same thing here this looks a little bit repetitive and
54:06
ugly a better solution is to destructure this parameter right here so we remove
54:11
the name and add braces and pick the two properties items and heading now we have
54:18
access to these properties anywhere in this function so we can remove props Dot
54:24
and our code is cleaner now the final part is to replace the
54:30
list with The Heading dynamically okay back to the browser our app still
54:37
working so using props we can pass data to our components
 Passing Functions Via Props
54:43
foreign our list group component is in a fairly
54:50
good shape when we click an item it gets selected but in a real world application quite often something should happen
54:57
after an item is selected perhaps we want to filter a list of objects or maybe we want to redirect the user to a
55:03
different page so something should happen after an item is selected now what happens is different from one
55:09
application to another there is no one-size-fits all so we don't want to implement that piece of logic inside our
55:16
list group component because then it's not going to be a reusable component anymore so we need a mechanism to notify
55:23
the consumer or the parent of this component that an item is selected in
55:28
this case the consumer or the parent of this component is our app component this
55:33
is where we are using the list group so when an item is selected we should notify the app component that an item is
55:39
selected but how can we implement this well that's very easy so look at our props object currently we have two
55:46
properties and we are using these to pass data to our list group component
55:51
now we can add a third property which is going to be a function now down here
55:57
when we select an item we're going to call that function with this our app component will be notified let me show
56:03
you how this works it's really simple so first let's define the signature of that function let's imagine that we want
56:10
a function that takes a parameter called item of type string that is the selected
56:16
item and returns void so it doesn't return a value so here we have a property by
56:22
convention we start with the word on and then we specify the type of event in
56:27
this case select item this is just like the on click prop that you saw earlier
56:33
but here we have on select item so we have a property called unselect item the type of this property is a
56:40
function that has a parameter of type string and returns void okay
56:47
with that now we have a compilation error in our app component how can I tell look it turned red also we can go
56:54
to the top under View open up the problems panel so the typescript compiler is telling us
57:01
that in the app component we have forgotten to pass this prop so once again the typescript compiler is helping
57:08
us catch a lot of potential problems early on so let's go back to our app
57:13
component now here we set on select item we can
57:19
write an inline function here just like how we handled the click event earlier or we can write a separate event handler
57:26
if you want to write a separate event handler again just like before by convention we
57:32
start with the word handle and then we specify the type of event select item
57:38
now we set this to a function with a signature that we just defined so item of type string goes to nothing now here
57:46
we can just do a console.log and print the item on the console now we
57:52
can pass that down here handle select item now the last step
57:59
back to our list group over here when destructuring the props we should pick the on select item property
58:07
and then When selecting an item we should call this function
58:12
so we call this and pass the selected item which is this item variable here
58:18
now back to the browser when we select an item the app component is notified and it's now printing the name of the
58:24
selected City on the console [Music]
 State Vs Props
58:32
now let's talk about the differences and similarities between props and state as
58:38
you have seen props or properties are the inputs or arguments passed to a component State on the other hand is the
58:45
internal data managed by a component that can change over time so Props are like functional arguments and state is
58:52
like local variables inside a function now one thing you need to know about props is that we should treat them as
58:58
immutable what does this mean in English to mute it something means to change it so mutable means changeable and
59:06
immutable means unchangeable so when we say something is immutable it means it's read only so in our list group component
59:14
here are our props we should not change any of them here we should not set the heading to a new value if we do so
59:21
nothing is going to happen nobody is going to yell at us but this is an anti-pattern in react you will
59:26
understand the philosophy behind this as we go through the course this is based on functional programming principles so
59:33
we should treat props as immutable or unchangeable State on the other hand is
59:39
mutable and that's the whole purpose of using State variables we want to tell react that this component has data that
59:45
can change over time right so these were the differences between State and props but one thing they both have in common
59:52
is that anytime they change react will re-render our component and update the
59:57
Dom accordingly [Music]
 Passing Children
1:00:05
sometimes we want to pass children to a component just like how we are passing a list group to this div element here so
1:00:12
in this lesson I'm going to show you how to create a component that can accept children so
1:00:19
back to our components folder let's add a new file called alert.tsx
1:00:25
now let me show you a shortcut instead of defining a function here and then exporting it
1:00:32
we can use a shortcut so here in the extensions panel if you search for es7 plus you will find this
1:00:39
extension it's called es7 plus react Redux and react native it's a very popular
1:00:46
extension look at how many times it's been downloaded so once you install this
1:00:51
you can type RAF CE now it's not coming up I don't know why so let's close this
1:00:57
file and open it one more time now let's try again good so this is
1:01:02
short for react Arrow function component export so if you press enter we get this
1:01:08
code snippet lovely now here we have multi-cursor editing so we can change the name of the component
1:01:15
if you made a mistake but in this case no so let's go back to alert and then we press escape to exit multi-cursor
1:01:22
editing good now we don't need to import react on the top so here's our alert component now let's
1:01:29
add this to our app component and test our application up to this point so we go to the app component
1:01:35
that we're done with our list group for now so let's delete all the code here
1:01:43
now inside this div we want to add an alert so let's add alert good now back to the browser so here's
1:01:51
our alert component lovely now to display an alert we're going to borrow some code from bootstrap
1:01:57
so head over to bootstrap website go to the docs and here on the left side under
1:02:03
components you should find alerts so let's find out
1:02:08
the markup we need to render an alert like this so that is very straightforward we need a div with two
1:02:15
classes the base class is alert that all of these have the second class is a
1:02:20
class that determines the color so if you use alert primary we get this Blue
1:02:25
Alert by default so back to our alert component let's give this div a couple of classes alert
1:02:32
and alert primary all right this is what we get lovely now
1:02:37
we need to make this Dynamic so we want to pass the text as a prop to do that
1:02:43
first we need to use an interface to define the shape of props so Props here
1:02:49
we need a property called text of type string then we add a parameter here of type
1:02:55
props in fact it's better to de-structure this and grab the text property
1:03:01
and render it right here okay now back to our app component
1:03:08
here we should set the text to something like hello world before going further Let's test our
1:03:15
implementation okay it's working lovely now while this works this way of passing
1:03:21
text to this component is kind of ugly what if the text is a bit too long what if you want to pass HTML content passing
1:03:28
HTML content has a prop like this is kind of ugly wouldn't that be nicer if you could pass text as a child to this
1:03:35
component let me show you how so we want to be able to use this component like
1:03:41
this this is better so to do that we go back to our component
1:03:47
now there is a special prop that all components support and it's called children so if you simply rename text to
1:03:54
children now we can pass our text as a child to this component but we have a couple of Errors because we need to
1:04:01
rename these two references to text so I'm going to rename them both in one go
1:04:06
good there is our con and our application is still working lovely now
1:04:12
what if you want to pass HTML content here we get a compilation error because we
1:04:19
told the typescript compiler that the children prop is a string but in this case we are not passing a string
1:04:26
we are passing a more complex structure to solve this problem we need to change the type of children
1:04:33
from string to react node now here in order completion box we have two react
1:04:38
nodes the first one is an abbreviation so if you press enter here we get this markup this is not what we want we want
1:04:45
the second item this is the react node class defined in the react module so
1:04:51
let's import it on the top like this and with that we can pass HTML content to
1:04:57
our alert component so to recap using the children prop we can pass children to a component
 Inspecting Components with React Dev Tools
1:05:06
[Music] all right the last thing we're going to
1:05:12
cover in this section is react Dev tools which is a very useful browser extension for inspecting and analyzing our react
1:05:19
applications it's available for Chrome Firefox and Microsoft Edge so simply
1:05:25
Google reactive upper tools or reactive tools and install it in your browser
1:05:30
once you do that then go back to this page here in the dev tools you will see
1:05:36
a couple of new tabs one is components the other is profiler now look at the components tab here we can see the
1:05:43
hierarchy of our components so on the top we have the app component and below that we have the alert component so this
1:05:50
is the component tree that react takes and renders in the actual Dom now down
1:05:55
here you can see the props of this component so here we have the children prop which is set to an array of two
1:06:02
objects the first element is a string the second element is a span object
1:06:07
below that you can see how this component was rendered so it was rendered by the app component now
1:06:13
finally down here you can see where this component is implemented in this case in app.tsx but that is not visible in my
1:06:21
recording window now in a large application with a lot of components finding the right component might be a
1:06:27
little bit tedious so we can always search for them here also here we have a couple more useful features for example
1:06:33
we can select a component and inspect the matching Dom element so if you click
1:06:39
this and then go to the elements tab we can see the matching Dom element that
1:06:44
represents this component now back to the components tab there's also another useful feature here
1:06:51
so we can select the component and click on this icon to see its source code so
1:06:56
in this case this is our alert component so it's pretty straightforward it
1:07:02
doesn't really need more explanation as you're building applications if you want to better understand your components and
1:07:08
how they work if you want to inspect their props and state use reactive tools
 Exercise: Building a Button Component
1:07:14
[Music] all right now it's your turn I want you
1:07:22
to create a bootstrap button component so here on bootstrap website if you look
1:07:28
at the buttons page you can see we have different types of buttons now for this exercise I want you to only focus on
1:07:35
this set of buttons because here we have other flavors don't worry about them don't worry about the sizes or outline
1:07:41
buttons just simple bootstrap buttons now the markup is really simple each
1:07:46
button has two classes one is BTN which is a base class and the other is a class
1:07:51
that identifies the color so by default primary buttons are blue secondary
1:07:57
buttons are gray and so on so I want you to encapsulate this markup inside a reusable react component so span a few
1:08:04
minutes on this then be sure to come back and see my solution as I'll be showing you a really cool typescript
1:08:10
technique all right here in the components folder
1:08:17
we add a new file called button.tsx now we use our shortcut rough C
1:08:24
good next we rename div to button and
1:08:29
give it a couple of classes now I'm typing a little bit too fast because I'm assuming you have already done your
1:08:34
exercise so I'm not expecting you to code along with me okay so here we have two classes for now let's just stick to
1:08:41
primary buttons and then we make this Dynamic so this is the approach I want you to take while building applications
1:08:48
one step at a time don't try to do too many things together okay so for now I
1:08:53
just want to render a basic button I don't even want to make the text Dynamic let's see if our application works up to
1:08:59
this point so we go to our app component and in this div we add a button
1:09:07
component okay now back to the browser here's our button beautiful so the first step is
1:09:14
done now the next step is to make the text or label Dynamic so back to our
1:09:20
button component here we need to use an interface to define the shape of props
1:09:25
now I want to use the children prop here so we can pass the text just like HTML
1:09:31
buttons so I'm going to set the type of children to string we could also use react node but I
1:09:36
prefer to use a string in this case next we add the props parameter and
1:09:42
de-structure it and finally we render children right
1:09:49
here good now we go back to our app component and give this button a label like my
1:09:55
button let's see if our application is working good again don't worry about these
1:10:01
errors everything is good so far next we need to handle the click event because in a real run application when this
1:10:08
button is clicked we have to do something what happens next should not be implemented in our button component
1:10:13
otherwise it's not going to be reusable okay so back to the button component
1:10:19
here in the props object we need to add a new prop called on click and this is going to be a function with
1:10:26
no parameters that returns void next we added here on click and finally
1:10:33
we set the on click prop of the HTML button to the function that is passed
1:10:38
from the outside so on click is going to be a function that is passed from the outside so the parent of this component
1:10:44
is going to pass that function we get that function and simply pass it to this HTML button okay now in our app
1:10:51
component we have an arrow because we haven't set the unclick prop for now I just want to add a simple
1:10:57
inline function and log clicked on the console
1:11:02
let's see if our application is working so click click click beautiful now the
1:11:08
final step is implementing the color so we want to be able to pass the color of
1:11:13
this button from the outside like this so we can set it to primary or secondary
1:11:18
or whatever so let's add a new prop called color
1:11:24
of type string I prefer to sort these props in alphabetical order it makes our
1:11:30
code a little bit easier to read That's nicer next we add the color prop here and we
1:11:36
use that to add the second CSS class dynamically so we wrap the codes in
1:11:42
braces we terminate our string here and then append the color right after okay we
1:11:50
have a compilation error because this quotation mark is unnecessary good now
1:11:56
in our app component we have set the color to secondary let's see if it's working good if we change it to primary
1:12:06
it's still working great now what if you want to give this a default value so we don't have to specify the color every
1:12:12
single time to do that we go to our button class and give this color prop that default value
1:12:19
of primary with that we get this blue button beautiful however we have a compilation
1:12:26
error in the app component saying property color is missing in type so
1:12:32
even though we gave this prop a default value the typescript compiler still expects us to
1:12:39
set the color prop when using the button component to solve this problem we have
1:12:45
to tell the typescript compiler that this property is optional so we add a question mark after and now
1:12:52
the area is gone okay now what if we pass an invalid color here like let's
1:12:58
say react what happens well there are no errors or Warnings but
1:13:03
this is not how a button supposed to look like this is where we can use typescript to catch this kind of bugs
1:13:09
early on before we deploy our application let me show you how so back to our button component instead of
1:13:16
setting the type of color to string we can set it to a string literal like primary and with this we can only set
1:13:23
this property to the value of primary so if you set it to something else we get a
1:13:29
compilation error now we don't want to be limited to primary we want to support other colors so here we can use the
1:13:36
union operator and add a second string literal so we can add secondary we can
1:13:42
also add danger success and other bootstrap colors with this
1:13:47
implementation we can only set this property to one of these values and nothing else so if we set it to react
1:13:54
for example the typescript compiler is yelling at us we can see this file turned red and also if we go to the view
1:14:01
menu and look at the problems panel we can see that we have a problem in this file so now if we change this back to
1:14:08
primary or secondary or one of the supported values the arrow goes away
 Exercise: Showing an Alert
1:14:15
[Music]
1:14:20
all right here's the next exercise I want you to write the necessary code so when we click this button we see an
1:14:27
alert and here we have a close button when we click it the alert disappears this is a great exercise for you to
1:14:33
practice pretty much everything you have learned in this section now let me give you a hint on bootstrap website
1:14:39
look at the alerts component on the right side you will find a link called dismissing now
1:14:46
down here you can see that to make an alert dismissable you need to add a class here
1:14:51
called alert dismissable you should also add a button this is the close button with
1:14:57
this class and other stuff so spend a few minutes on this then come back see my solution
1:15:06
all right this is so much fun so here in the app component right above our button
1:15:12
we're going to add an alert and here let's say my alert now before
1:15:18
going any further I just want to test our implementation up to this point I don't want to show or hide anything I just want to make sure if we can see an
1:15:25
alert beautiful now we don't want to show this at all times we want to show this only when this button is clicked to
1:15:33
do that we need a state variable here in the app component that determines the visibility of the alert
1:15:39
so we want to render this part only if that variable is true so here we need to use the state hook
1:15:49
to declare a state variable we initialize it to false so our alert is initially hidden now this returns an
1:15:55
array that we can de-structure into two elements we can call the first one alert
1:16:00
visible and the second one set alert visibility you could call them anything whatever
1:16:07
you prefer now we want to render the alert only if alert is visible alert
1:16:14
visible is true sober wrap is Embraces and perform a logical and between alert visible and
1:16:22
this expression so alert visible and okay
1:16:28
now when we click the button instead of logging something on the console we simply call set alert visibility to true
1:16:37
so set alert visibility to true let's see if our implementation is
1:16:43
working all right now we click and here's our alert beautiful let me explain how this
1:16:49
works so when we click on this button this function is called at this point we set
1:16:55
our state variable to true so the state of this component is changed and react will re-render this component and all
1:17:01
its children this is why we see the alert now we need to add the close button to the alert so here on bootstrap
1:17:08
website I'm going to copy some code I'm going to grab this class so there are no typos let's add that
1:17:16
to our alert component okay we also need a close button
1:17:23
I'm going to copy that from this website as well paste it here
1:17:29
we just need to rename class to class name good now once again before we implement
1:17:35
the hiding logic first we want to test our application and make sure that we can see the close button so one more
1:17:42
time click okay here's a close button now the final part when we click this
1:17:47
button we should notify the app component that the user clicked on this button at that point the app component
1:17:54
will set the visibility of the alert to false which will cause the app component and all its children to re-render
1:18:01
so to notify the parent or the consumer of this component that the user has clicked on the close button here we need
1:18:08
to add a new prop on lows so remember the convention we start with the word on and then we
1:18:15
specify the event in this case close this is going to be a function with no parameters that returns void
1:18:22
now we need to add that here and finally
1:18:27
when the user clicks on this button so unclick we simply call on close and
1:18:34
more accurately we are not calling this function we're not calling it like this we're just setting on click to unclose
1:18:40
so on close will be a function that is passed from the outside from the parent we pass that function to this prop when
1:18:47
the user clicks on the close button react will call that function for us okay now we have a completion error in
1:18:54
the app component because we haven't set the unclose prop
1:18:59
pass and error function and set alert visibility
1:19:05
to false as simple as that okay now
1:19:11
the final test click click lovely
1:19:17
congratulations you made it to the end of this tutorial I hope you found it helpful and learned a lot about react
1:19:22
but wait there is more this tutorial was just a small part of my complete react course the full course includes eight
1:19:29
hours of content and is jam-packed with the latest tools and best practices you'll get access to exercises summary
1:19:36
notes cheat sheets and a project I showed you at the beginning of this tutorial and if you're not completely
1:19:41
satisfied no problem the course comes with a 30-day money-back guarantee so there is no risk in giving it a try so
1:19:49
if you are serious about master react I encourage you to check out the full course using the link below this video
1:19:54
thanks for watching and happy coding [Music]