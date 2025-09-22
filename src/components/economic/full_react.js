/*
《 React Course - Beginner's Tutorial for React JavaScript Library[2022] 》
Bob zero is one of the most viewed react instructors in the world and now he's
0:05
back with a brand new complete react course that will teach you modern react
0:11
using patterns like functional components and hooks if you want to learned the react JavaScript library
0:18
this is the video hey free code campers welcome to my newest course on learning
0:24
react in this course you're going to solve over 140 different coding challenges and work on eight different
0:31
projects all of which have an Associated figma design file to guide your work and
0:37
you actually have two options for following along either by using your local machine I actually have a few
0:42
lessons that'll show you how to do that starting pretty early in this course or you can head over to sca.com where
0:48
there's an interactive version of this course so that you can solve the challenges directly in your browser it's
0:54
totally up to you what you want to do the link to the course on sca.com is provided below and actually this course
1:01
is part of a larger front-end career path which we have at scrimba which takes people from zero to hobble as a
1:08
front-end developer this course is module 11 in that career path and my more advanced react course immediately
1:15
follows this free react course as module 12 where I go even more in depth into
1:20
react react router using the context API and so much more if those topics sound
1:26
confusing to you don't worry at all you don't need to take them to understand this course now I always appreciate any
1:33
feedback you have for me about the course so you're welcome to reach out to me on Twitter at bobaroll or if you have
1:39
any questions about your specific code the best place for those is to either reach out to the free code Camp forums
1:46
or Discord server or you can check out scba's own Discord server which is becoming a more and more deeply
1:52
integrated part of the whole sca.com experience and with that good luck and
1:57
have a ton of fun learning react
2:02
hey there and welcome to the learn react module I'm super excited you're joining
2:07
me for this course because by the end you'll have built not one not two but at least eight projects using react there's
2:16
so many of them I don't even have time to go over each one of them in detail right now I could barely even fit them
2:21
on this slide so why are we doing so many projects well it's because I designed the curriculum for this course
2:28
to be project driven in each of the sections we will start with a goal project that we are working toward and
2:34
then we'll learn everything we need in order to build that project now in order for that approach to actually work I'm
2:41
going to be asking a lot from you so let's talk for just a bit on how you can get the most from this course just like
2:48
everything in life what you put into this course is what you will get out of it or as I like to say My Philosophy
2:55
about learning is that the easiest way to learn something is to do it the hard hard way in this course I'm going to be
3:02
asking you to do a lot of the work for much of it you'll have me there after
3:07
each challenge to walk you through a solution but for some of it you won't either way what I'm asking of you now is
3:13
to avoid the Trap of tutorial hell where you end up passively watching me do all
3:19
the work remember this is not school you're presumably here because you actually want to finish the course with
3:26
the ability to write react code by yourself school has taught a lot of us
3:31
that the goal of learning is to get a good grade in fact I heard something really interesting that said that
3:37
education is the only thing that humans try to get less out of than what they paid for so don't let that be you in
3:44
this course if you really give it everything you've got meaning you do all the challenges and projects you're
3:50
involved with the community and you are an active participant in your own learning I can promise that you'll
3:56
probably finish off in a better spot than many students get getting their degree in computer science and I really
4:02
don't say that lightly along those lines remember that space learning and repetition are your best friends binging
4:09
the course from beginning to end even if you are doing all the assignments is kind of like trying to run an ultra
4:15
marathon without training your brain actually needs rest so take breaks Often
4:20
by taking this course the goal isn't just to get to the end it's to get to the end with some honest goodness react
4:27
skills then after you come back to this course on maybe the next day don't be afraid to rewatch some of the past
4:34
lessons and even redo some of the past challenges because repetition really is your best friend whenever you're trying
4:40
to learn something new so what should you already know coming into this course before jumping into react you should
4:46
have a solid grasp of the fundamentals of web development namely HTML CSS
4:51
JavaScript and preferably a pretty solid understanding of the new syntax that was introduced back in ecmascript 6 es6 and
4:59
above if you're feeling at all rusty on any of these topics you can click the logo for each one of these which will
5:05
send you to another free course here on scrimba where you can brush up on those skills my name is Bob zero I'm going to
5:11
be your instructor throughout this whole course my username pretty much everywhere online is Bob's Zoll but
5:16
these days I'm really most active on Twitter you can click the Twitter icon to go to my profile if you want to
5:21
follow me that would be great and so without any further delay let's Jump Right In and start learning react
5:30
in the first section of this course we're going to be learning everything we need in order to build a basic static
5:37
page using react and I know what you might be thinking but I already know how to make static web pages I know you're
5:44
probably super excited to really dive in and learn Dynamic web applications with
5:49
react and we are going to get there in this course but in order to start off this section is all about learning the
5:55
basic syntax and you could say the vocabulary of react because I found that
6:00
the best approach to learning react is to first start learning how to think in
6:06
react the reason for this is because react really does kind of change the game in terms of how you build
6:13
applications later in this section we are going to start learning the differences between declarative and
6:19
imperative programming and you're going to find that react approaches web development in a completely different
6:24
way so the point is we're first going to be dialing in our brains to start thinking in terms of using reacts to
6:31
build websites by first building some static web pages not unlike the ones
6:36
that you normally would just use HTML and CSS for so this might not seem terribly exciting right now but I think
6:43
you'll soon see that writing composable reusable components in react can actually be a bit addicting and pretty
6:49
fun so I know that you'll find a lot of benefit in starting off with the milk before we get to the meat or of course
6:56
we have a vegetarian option as well the content in the section will be driven forward by the goal of creating our
7:02
first static web page in react and that's the page you see here in the screenshot that has a list of fun facts
7:08
about react now the screenshot is actually also a link to the figma file for the design of this page so if you
7:15
click the screenshot it will open up in figma you'll have to make sure that you log into your figma account if you don't
7:22
have one yet it's free to create and clicking the screenshot will lead you to a sort of shared file that everyone will
7:28
have access to in that shared file you'll see something near the top that looks kind of like this where it's got
7:34
react facts and then this little drop- down arrow your best bet is going to be to click that drop- down arrow go over
7:40
to duplicate to your drafts and click that duplicating this design to your own
7:45
drafts is going to make it possible for you not only to edit the design if you want to change it a little bit but also
7:51
to help you avoid any distraction you might see on the design page of anybody else's cursors or maybe some comments
7:57
that they may have left so so I'll go back to this design here make sure to click on it now so at least the URL gets
8:04
saved up in your tabs in your browser and lastly we're going to look at the different topics that we'll be covering
8:09
in this section so what are we going to learn about well first we're going to learn why we even care about react in
8:15
the first place I think knowing why react is so exciting and so popular will
8:20
help make your Learning Journey of react a much simpler one because you'll be so excited about what you'll be able to
8:27
create In The End by using react we'll also be talking about a proprietary
8:32
react syntax called jsx and we'll get to see how that sort of changed the game
8:37
for react and made writing react a much more familiar experience then we'll dive
8:42
into creating custom components and you'll learn all about what that means and how to actually do that yourself in
8:48
react and of course in order to build our project we're going to need to know how to apply CSS styling again the goal
8:56
is for us to be able to build this simple static page in react I'm really excited for us to get started so without
9:02
any further Ado let's jump right into the deep end and start writing our first react
9:09
code before we just jump right into Theory and why we care about react and how all the little pieces of react work
9:16
I want to get your hands on the keyboard typing some react code as soon as possible mostly just to show you that
9:21
react is not a scary library to be working with so let's see how we can set up react now I like to think of there as
9:28
being an easy way way to set up react in your project and a correct way of setting react up in your project for our
9:34
sake in learning we're going to start with the easy way which will also make it so that you can actually just do this
9:40
in your local environment hopefully you're following along here on sco.com but if you're curious and you're
9:45
interested you can always do this on your local environment as well now you can see I have a very basic HTML page
9:51
setup I have nothing in my JavaScript at all my CSS is minimal and we're going to
9:56
walk through this together now I have some slides here and you can actually click on this screenshot and that will
10:01
send you to this exact page in the react documentation it tells you how you can include react into your project and we
10:08
can actually pull in these libraries that we need straight from a CDN in other words we can just copy these two
10:14
script tags here and start writing react code there's a little more to it but what I'm going to do is click here and
10:20
that's going to open me up to the react page I'm just going to copy the two script tags that you can see and over in
10:26
my index HTML I'm going to put it in head here fix the indentation and I've pulled
10:34
in the react library and another Library called react Dom theoretically this is
10:39
all I need in order to start writing some react code now I'm going to take it
10:44
one step further and that's because just pulling in react and react Dom is going to be pretty extremely limiting in terms
10:50
of using the power of react unless we also pull in something called Babble I'm not going to jump in too deep into why
10:57
we need to pull in Babble for now all I'm going to do is click on this screenshot here which will take me again
11:03
to a page where I can copy the script tag that you see and I will paste that in underneath
11:11
this script tag and if we look really closely below here it says you can use any jsx we'll cover what jsx is later in
11:18
any script tag by adding type equals text SL Babble so I'm going to do that here in my script tag down here type
11:25
equals text SL Babble and that's all the setup we really need by pulling in the
11:33
react-dom library in this script tag I now have access to a global variable
11:39
called react Dom I'm going to use that to render something to the screen once
11:44
again I'm going to be covering everything that we're talking about here it's totally okay if this is moving pretty quickly react. render allows me
11:51
to render something that looks very much like HTML now this might be blowing your
11:56
mind a little bit because this probably looks a little strange writing some HTML inside of my JavaScript we're going to
12:03
see how this is kind of one of the beautiful things that react has added so that we can write really declarative
12:09
code now let's put something inside this H1 that's meaningful we had hello react over here maybe I'll say hello everyone
12:17
okay in my index. HTML I'm going to get rid of this H1 so we're not confusing
12:22
this H1 with what I'm seeing over here now react. render the first thing is what do I want to render to the screen
12:29
the second thing is where do I want to render it well let's go to our HTML and I'm going to create a div here just a
12:36
completely empty div and I'm going to give it an ID so that I can select it we'll call it root because this is going
12:41
to be like the root of our entire application I like to think of this div as a container for the entire website
12:48
that we're going to build in react and now that I have a place where I can put my H1 here I'm going to select it with a
12:56
regular Dom API document. element by ID root and surprise we've written some
13:02
react code I'm going to hit save we'll see that it tells me hello everyone in a
13:08
single line of code I was able to use react to insert something that looks very much like an H1 obviously this is a
13:14
little different because we're still inside JavaScript and I was able to put it right inside of this real Dom element
13:20
in our index.html now I have an entire lesson that's dedicated to understanding exactly what's going on here but in an
13:27
effort to get your hands on the code get a quick win for you to see that you can write react and it's not too scary I'm
13:34
going to give you a few seconds of Silence where you can pause the screencast and study this line of code
13:39
and then I'll be erasing it and letting you type it again from scratch in fact let me write that down as a little
13:45
challenge here okay pause the screencast here spend just a minute memorizing this line
13:50
of code do that
13:57
now and then I will add a little comment with the next part okay your time to shine rewrite the
14:04
line of code as best you can from memory you don't have to put hello everyone or hello react or whatever you even don't
14:11
have to use an H1 like I did you can put whatever HTML you want in there so pause the screencast now and work on
14:23
that because I pulled in that reacts Dom library in my CDN I have a glob variable
14:29
called react Dom and it has a render method which allows us to render
14:35
something to the screen or kind of in other words Place something on the screen and I don't know let's let's do a paragraph this time just to switch it up
14:41
a tiny bit say hi my name is Bob okay so that's the element that I want to place
14:49
inside of this div again this div is a container for the actual elements that I
14:55
plan on putting on the screen and the second parameter that I need to include with react. render is you could think of
15:02
it as a Dom node that I have to go select with document. get element by ID
15:08
or because I can also get Dom nodes with something like query selector that would work just as well in this case I'd have
15:15
to put hashmark root because that's how query selector works it's the ID of root
15:20
just so this isn't confusing we'll just keep it as get element by ID for now but just so you know either one should work
15:25
just fine so the first parameter is what do I want to place on on the screen and the second one is where should I be
15:31
placing this I imagine under the hood what render is doing is it's taking this D element that we are grabbing with get
15:38
element by ID and it's running something similar to append or append child to it
15:44
and what is it appending it's appending this paragraph we're going to see that it's a little more complicated than that
15:50
but that's a good way to kind of build a mental model for yourself as to how this is actually working so I haven't
15:56
refreshed the page yet which is why this still says hello everyone I'm going to hit save which will refresh my browser
16:01
and there we go hi my name is Bob this time it's a paragraph instead of a header element and that's awesome we
16:07
have written react in a single line of code you might have noticed that our console is popping up with this error
16:13
you're using the in browser Babble Transformer be sure to pre-compile your scripts for production a bunch of jargon
16:19
here that may not totally make sense to you and that's fine that's a symptom of us setting up react the easy way instead
16:24
of the correct way soon down the road we'll be kind of Shifting our setup here here and that warning will go away and
16:31
awesome okay because this is scrimba you can always delete this if maybe you weren't able to memorize that you can
16:36
try deleting it rewriting it again from scratch practice with it I'm going to ask you to do that a million times
16:42
throughout this course because the only way to learn react is to write react as much as you can now I have found it
16:48
really helpful for my own learning to understand why the heck I even care about react in the first place so in the
16:54
next couple screencasts we're going to be talking about some of those really awesome benefits that come with using
16:59
react as our library for building web applications but as always if you want to spend more time with this go ahead
17:05
and do that pause click into the editor start typing what you want to type practice it and when you're ready I will
17:11
see you in the next lesson surprise if you know my teaching
17:17
style I wanted to include a practice in here essentially you're just going to be rewriting that same line of code that we
17:23
just wrote in the last lesson however this time we'll extend it just a little bit I want you to see if you can figure
17:29
out how to render an unordered list with two or more list items inside last time
17:35
we just rendered a paragraph you can see it's still kind of left over here if I refresh that that'll disappear I've left
17:41
the entire setup here for you we're still pulling in the script tags for react react Dom and babble so
17:47
essentially your main focus is just to rewrite that same oneliner of code but see if you can figure out how to add a
17:53
couple more elements inside like having an unordered list with some nested list items pause here and try to work on that
18:05
challenge okay pulling in the react Dom library that gives us access to a render
18:11
method before we did a simple paragraph like this and put some code inside however I can put this as an unordered
18:19
list and then just actually stick some list items inside of here so it's going
18:24
to look a little confusing at first I'll clean it up in just a minute we have list item we'll just say thing one and
18:32
I'll do another list item here thing two okay now I'm going to
18:40
move this onto its own line here this whole HTML thing right there and the
18:45
second parameter I need to separate with a comma is where to put this so I'm going to use document. getet element by
18:52
ID root and Let's cross our fingers see how this goes cool okay hopefully that
18:57
was some good practice now let's keep moving forward and learn a little bit more about why we care about
19:05
react one more thing that was highly requested from the first time I recorded this react course was how can I set this
19:12
up on my local environment everything that I'm doing will be done on sca.com so that you can interact with the same
19:19
code that you see me writing however it's also a good experience to run it locally on your own computer and get a
19:25
feel for what it would be like to actually develop react on your own computer again our setup here is more of
19:31
the easy way than the right way but for now what you can do is you can click the little gear icon in the lower right of
19:37
your scrimba editor which will pop up a little menu here and there's an option that says download as zip that will
19:44
download a zip file containing the files that we're working on here you can uncompress that like you normally would
19:50
any zip file and open that up in any editor that you'd like for example Visual Studio code on your own machine
19:57
now in order for that to run I'm going to show you what that looks like on Visual Studio code inside a visual
20:03
studio code which is what you see in this screenshot there's a menu icon for some extensions and you'll need to
20:10
search for an extension called live server it's created by ritwick day and
20:15
you'll need this installed to your vs code in order to run the code that we have written in react so you'll click
20:22
the little install button that's going to put an icon down at the very bottom menu bar in visual Studio code that says
20:29
go live and all you need to do is click that go live button which will open a
20:35
web page on a local server I think it's maybe Port 5,000 that it runs and that should launch your own react project on
20:42
your local machine as soon as you see me move toward a different setup for react that includes webpack and downloaded
20:48
dependencies from npm and so forth this is no longer going to work in quite the same way but for now for those that are
20:55
curious I thought I might just explain how you can get this set up on your own machine okay that's enough delaying
21:01
let's keep moving forward with the course let's spend a little bit of time
21:07
understanding why we even care to learn react one of the main reasons that people will talk about is how react
21:13
allows us to write composable code so what exactly do I mean by composable
21:18
well an analogy that I came up with has to do with sculpting if you think of the Statue of David for example this statue
21:26
was created originally from a single Giant block of marble That Was Then sculpted down to the sculpture that we
21:32
know today so in the end what results is one giant single piece that makes up
21:37
this piece of art now what if instead of starting with one giant piece we instead
21:42
used a bunch of small pieces to put together something that is greater these are Lego bricks that obviously are small
21:49
each in their own right that were put together to create something large in this example they all kind of work
21:55
together to accomplish a goal so to speak the goal of looking like the statue of David now this example is not
22:02
perfect because the original Statue of David obviously is more beautiful than this repca made of Lego bricks but
22:08
hopefully the concept makes sense let's look at an example in actual web development what I have here is copy and
22:14
pasted from the bootstrap website if you're not familiar with bootstrap that's really not important right now
22:20
but it's enough to know that these 30 or 40 lines of code copy and pasted from the bootstrap website represent a
22:26
navigation bar that is pre-styled now in the old days of web development a single page on a website was usually a single
22:33
HTML page so if this is just the navbar a lot of times those web pages would end
22:39
up being thousands and thousands of lines of HTML code essentially making it
22:44
one giant sculpture well with modern Frameworks like react we can take code like this and we can put it into our own
22:51
custom components and we can put those components together to make something that is larger but in our case our code
22:58
becomes a lot more maintainable and a lot more flexible you can see I've given these kind of silly names to show you
23:05
that these are not regular HTML elements I can combine elements together that are real HTML elements like you see here
23:13
into my own custom component called for example my awesome navbar or my awesome footer we're not quite ready to dive
23:19
into the syntax of react quite yet but I'm going to give you a taste of it and a chance to play with it before we move
23:25
on so let's see this in practice over here you can see I have my react. render
23:31
and I'm rendering a custom component called navbar and if I scroll up you'll get a chance to see how I created that
23:38
navbar as a quick aside one thing you might notice is that I'm using class name everywhere instead of class that's
23:44
not a mistake that's just how you have to assign classes in react we're going to cover that later but for now I'd like
23:51
to give you a challenge that's going to require you to deduce what I've done here and try to replicate it for
23:57
yourself so let me put that here okay your challenge is to see the
24:03
navbar component that I have created and see if you can deduce how to create your own component called main content it can
24:11
return something really simple like a single H1 element and afterwards I want you to render it below the Navar you'll
24:17
have to figure out how to render it below the Navar now I've changed this a little bit for reasons that we'll talk
24:24
about soon but this line here 51 this is where you're going to figure out how to render your own custom component main
24:30
content so first build your custom component looking at my example above to try and figure out how to do that and
24:37
secondly render that component down here in react. render pause the screencast and work on this
24:49
challenge well following the example above we see that I created this component by creating a function and the
24:56
name of the function is the name of my component so I will open up that function and return the content that I
25:03
want to show up on my page above I created a set of parentheses because I
25:09
have many elements that I'm trying to return I'll just do that just to keep things consistent for
25:15
now we'll create our H1 that says I'm learning react and secondly I can take
25:22
my main content and I can render it by making it look kind of like an HTML element in this case it's a self-closing
25:29
one so I have main content as a single tag here and if I hit save we'll see
25:35
that my H1 actually showed up on my page and that's the concept of composability it goes quite a bit deeper than this
25:42
we're going to see how we can make our components much more composable and reusable but for now let's move on to
25:48
another reason why people really love react and we'll cover that in the next
25:54
lesson another major reason people love react is because it's something that we
25:59
call declarative so let's talk about declarative to understand declarative it's helpful to know that it's opposite
26:06
is something called imperative when a program is declarative we can simply tell it what should be done more
26:12
specifically it's like the computer saying just tell me what to do and I'll worry about all the nitty-gritty details
26:18
on how to get it done its opposite imperative is when we need to tell the program how it should be done like the
26:25
computer saying I need you to describe to me every step along the way how to do something and then I'll do it up until
26:33
now if you've mostly been just using vanilla JavaScript any time you needed to create elements on the page you've
26:39
been doing it in an imperative way in fact let's go look at what that has been like I've commented out my react. render
26:46
and I'm going to put a challenge here for you okay your challenge is to recreate this above line of code where
26:52
we are rendering something to the screen using vanilla JavaScript by creating and
26:57
aend in an H1 to our div with the ID of root we have our div ID of root you'll
27:04
need to select it and then append a new element and I give you the step-by-step
27:09
instructions right here one little caveat is I don't want you using inner HTML because that kind of breaks the
27:15
analogy down a little bit generally speaking this is actually just a good way to practice the vanilla JavaScript
27:21
that you have been learning so far so it's always good to give it some practice I'll give you a couple lines
27:26
here pause the screencast and work on this
27:36
challenge okay let's work on this so I'm going to create an H1 and I'll use
27:42
document.createelement and I'll make an H1 and then if I'm giving it some text content I need to use the text content
27:50
property of this Dom node and set it equal to I don't know maybe this is an
27:57
imperative give way to program then I need to give it a class name so I'll use
28:03
the class name property here and set it equal to I think we said header and
28:08
finally I need to append it to my div with the ID of root so first I need to say document get element by ID root and
28:16
then use the append property or method to append my H1 to the Dom so when I hit
28:23
save it should show up this is an imperative way to program perfect now this example a little bit on the nose
28:29
because if you were really just putting something static that had nothing to do with user interaction you probably would
28:35
just go to your HTML page and stick it right inside the div here right but with react we're building our entire page in
28:42
JavaScript and so doing something imperatively this way where I have to tell it step by step how to create the
28:50
element and then to add some text content and then add a class name and then append it to the Dom that's going
28:56
to get old pretty fast especially even with something mildly more complicated than a single H1 like a very simple web
29:04
page like this as soon as we have more than one element suddenly our four lines
29:09
of code will become probably dozens or maybe even hundreds of lines of JavaScript code just to create and
29:15
append all of these elements in the correct order and in the correct way and so that brings us back to the idea of
29:22
writing our code declaratively and react allows us to do that in a really simple way as we see back up top when we
29:29
comment this out and uncomment this we essentially get to write our JavaScript as if it were HTML we are relying on
29:36
react to figure out how to turn what we have declaratively written as an H1 into
29:43
the JavaScript code that's needed to append it to the Dom in fact if I were being strict and wanted to make this
29:49
more equivalent in order to add a class name I can just add a class name as if this were an HTML element again this is
29:57
class name instead of class for a good reason which we'll talk about but that's a pretty minor difference to be able to
30:02
do all of these lines of code in one single section right here and that
30:07
difference is going to compound as we get into more and more complicated uis like we see here so at this point I
30:14
could probably continue talking about different reasons that we're choosing to use react and that it will be really beneficial for you to learn react as you
30:21
see on my little list here it's a very high Robel skill and it's actively maintained by really skilled people at
30:27
Facebook however at this point I think we're overdue to just jump into the syntax get your hands on the keyboard
30:33
and start learning and practicing react so when you're ready let's keep moving
30:39
forward okay let's finally address this elephant in the room what we're looking at here why we have what looks like HTML
30:46
stuffed right inside our JavaScript well fairly early on in the days of react the
30:52
react team created a syntax that's called jsx jsx stands for JavaScript XML
30:59
but that's not terribly important for you to memorize what's most important is to think of it as sort of a flavor of
31:06
JavaScript that looks a lot like HTML and with the introduction of jsx into
31:12
react it really made it so that react was very declarative instead of
31:17
imperative we can see up above what it took for us to create an H1 give it some
31:22
text content and give it a class name in regular vanilla JavaScript but with jsx
31:28
the benefit is that we can just write what we're already used to writing with HTML now there's a couple of small
31:34
differences for example instead of using class I need to use class name so I
31:39
might say class name equals header for example and there's a few other of these but for the most part with jsx we can
31:46
just write the HTML that we're used to writing at first it might be a little bit confusing to write your HTML inside
31:54
of your JavaScript but I promise as you start doing react it's really going to start making sense you're going to learn
32:00
to love jsx now one thing that was really helpful for me to understand as I was learning was to see the difference
32:06
between what jsx is and what our regular Dom elements are so I'm going to do a
32:12
few things I'm going to uncomment these lines of code here and I'm also going to take this piece of
32:19
jsx and set it to a variable we'll call it element then I can fix my react.
32:26
render by just putting element down here and this will work exactly the same but this allows us to console log it so
32:33
let's console log element and I'll hit save so that this code will run I'll open the console and we'll see the
32:39
differences here first of all on line 4 we are conso logging the Dom element that we created with
32:45
document.createelement and that's what shows up in our console as what looks
32:51
like an HTML element here so that's this line right here however when we console log
32:59
our element that we created with jsx what actually got returned to us was
33:04
this and let me copy this out and we can see that this is just a
33:10
regular JavaScript object let me clean it up just a little bit to make it even more clear so in the end what we get
33:18
from jsx or rather what react is creating with jsx is actually just plain
33:25
old JavaScript objects and those objects describe the Dom element that we want
33:31
react to put onto the page for us and if we look closely we can see some
33:36
interesting information here first of all we see that it has very similar
33:42
properties like we have class name where we're setting that to header and down here we have props or short for
33:49
properties and we have class name we also have something called children and we can see that's actually the text that
33:55
we put inside of our H1 that's about all I care to touch on with the object
34:01
nature of react elements but I thought it would be helpful to kind of kick us off understanding that jsx is kind of
34:09
like a function that when it's run returns us objects that react can
34:15
interpret and use to create actual elements that get put on the screen for
34:20
us I'm going to comment this out so we can talk about one more thing clean up this a little
34:26
bit and I'll go ahead and put this directly back in line to my react.
34:32
render move these onto their own lines the last thing that I wanted to touch on
34:37
was that with jsx we need to make sure that we are only returning a single
34:42
parent element in other words I can't take this 1 H1 and place say a paragraph
34:49
directly next to it because in this case we're rendering or attempting to render
34:54
two sibling elements that sit side by side in fact if I try to run this you can see
35:00
react complains and I guess in this case it says unknown error sometimes it will say that you have to wrap the elements
35:06
that you're trying to render in some kind of parent element now this doesn't mean that I can't put two elements on my
35:12
page at any given time it just means that I need to wrap them in something like a div for example so if I say a div
35:22
that has an H1 and a paragraph inside now I am rendering just one parent
35:28
element and it doesn't really matter how many children elements are included as long as I have one parent element that
35:35
I'm rendering so I can hit save we'll see that this is working just fine now remember how I was able to save
35:42
my H1 as a variable well I can actually save a whole collection of jsx for
35:48
example this div with the H1 and the paragraph As a variable so let's say
35:55
const page equals and then I can and paste in my elements here now to me this
36:00
looks a little bit crazy so normally what I like to do is move my elements my
36:05
jsx onto their own lines as if this were HTML but in that case I need to go ahead
36:11
and wrap everything in parentheses now take a second and think
36:16
how is it that I can then fix what I have down here we can see we have a syntax error how can I fix this so that
36:22
when I refresh the page this is still working pause here and see if you can figure out how to make this work
36:35
again well all of my jsx is being saved under the variable of page so I should
36:41
just be able to put page here and hit refresh and sure enough that's working just fine hopefully some of you were
36:47
kind of curious to see what this looks like as a JavaScript object if we console log page we can see that
36:54
essentially we got what we had last time but this time it's a a little more involved specifically in the children
37:01
property of our div we see that there's other react elements in there I'm not
37:06
going to dive too deep into that feel free to copy and paste what you see in the console maybe clean it up a little
37:12
bit and analyze it but the point is I can save a whole bunch of jsx into a
37:18
single variable and then use that variable kind of like any other variable and the key is that's because what I'm
37:25
getting back when I write my jsx is just a JavaScript object okay I'm going to
37:30
clean this page up a little bit and I'm going to comment out our page because I'm going to give you a
37:38
challenge okay I left our example of const page up here just for reference
37:43
but I did delete our code that we had at the bottom which actually enabled us to
37:48
put something on the screen and that's because I want you to practice it again so your challenge is to create a navigation bar using jsx I've given you
37:56
some instructions here on what the content should actually be and as I mentioned at the very end don't worry about styling yet we're going to cover
38:02
styling soon but for now what you're going to have is just going to look like plain HTML that's unstyled so pause the
38:09
screencast here and see if you can complete this
38:18
challenge okay before I worry about the react. render bit I'm going to create a
38:24
new variable we'll call it pay actually let's call it now bar and I'm going to use my parentheses so that I can start
38:31
my element on the next line and like I mentioned we want to use the semantic
38:37
nav element and inside of there I'm going to have an
38:42
H1 let's call it Bob's beastro maybe this is a restaurant okay and then we
38:49
have an unordered list and hopefully while you were playing with this you came to realize that it doesn't matter
38:55
how nested I get just like an HT Emil I can Nest this as deep as I want we'll
39:00
create three list items and it said
39:06
pricing about and contact and I don't know maybe if this is a restaurant I'll say menu
39:13
instead of pricing okay I've got my jsx for my navbar set up and then the last
39:18
bit which was just meant to be something repetitive that allows you to get some
39:23
muscle memory for this is to use react. render and the first parameter is what
39:28
do I want to render and that's my navbar jsx and the second thing is where do I
39:34
want to render it I'm going to do that by selecting with get element by ID my
39:39
div with the ID of root that is over in my index.html right
39:44
there okay I should hit save and sure enough it's pretty ugly obviously we
39:50
want to style this we're going to get to that soon I hope that challenge went well for you if you struggled please
39:56
don't keep pushing forward go back rewatch this lesson see if you can do this again from scratch or maybe just
40:02
try typing it 10 or 15 times if you need to also if you get totally stuck don't forget that this is a community you can
40:09
reach out on Discord ask your question and you are more than likely to get a really friendly helpful response back
40:16
when you're feeling pretty good about this let's keep moving forward okay at this point it's probably
40:23
time for us to switch away from the easy way of getting getting react set up in our project to the more correct way now
40:31
inside of scrimba that means something different than it means inside of your own local environment scrimba has kind
40:37
of some magic that's happening under the hood that's helping react just kind of work in our project so I'm going to show
40:44
you a couple steps for how I do this in scrimba you won't really have to worry too much about that because even when
40:51
you're creating your own new scrim in scrimba it'll just ask you what type of scrim you want and you'll just tell that
40:57
it's a react scrim and it'll set everything up for you so what I need to do is in my index.html I'm actually
41:04
going to remove all of my unpackage Doom CDN here so I can get rid of these three
41:11
lines and I don't need this type text Babble anymore because I'm not pulling
41:16
in Babble and instead over here on the left I'm going to add the dependencies
41:22
that I need and I need react and I need react Das Dom if you're a little bit
41:29
more familiar with developing in JavaScript you might recognize that these dependencies are similar to having
41:35
a package.json where you install these packages through npm if pretty much
41:40
everything I just said doesn't make sense don't worry about it at all I am going to talk about different options for local setup later if you absolutely
41:48
need to follow along in your local environment instead of here on sca.com you can continue to use the CDN way that
41:56
we were just using like this but otherwise I just recommend doing things here inside of scrimba our main focus is
42:02
not going to be how to set up react but rather how to write react so I will take
42:09
those back out and now that I have taken those CDN out it means that I no longer
42:14
have Global variables added to my window like react Dom so if I try to save this
42:21
we're going to see I have an unexpected token angle bracket and that's because
42:26
well it doesn't know what react is at all what I need to do now is actually import react from react this might not
42:36
seem like it's doing anything because I'm actually not referencing react anywhere here I've got react Dom but
42:42
that's something different however react is where the jsx syntax is defined and
42:47
so I need to import react in order for this to work at all now the astute among you might be familiar with the fact that
42:54
with react version 17 I technically don't need to import react however currently at the time of this recording
43:01
scrimba is not yet set up to support the fact that react version 17 and above no
43:07
longer requires you to import react in order for jsx to work so anyway throughout the duration of this course I
43:13
will be using import react from react and that's because well I need to in this environment currently let's hit
43:19
save again and see what we run into next and this says cannot use import statement outside of a module and oh you
43:26
know what I think I think that has to do with another sort of magic piece that is happening under the hood with scrimba so
43:32
I'm going to add this dot pack that's not something you'll need to do in the real world so this should be yep react
43:39
Dom is not defined that's the error I expected to see and that's because whenever we're using react Dom I will
43:45
also need to import react Dom from
43:50
react-dom and now fingers crossed I should get something that works again
43:55
okay there we go we're back on the screen screen and everything is set up a little more similar to how you normally
44:01
would see a react project set up don't be overly concerned with all of these implementation details however this is
44:07
how I'm going to be setting up my projects from here on and at this point we actually have enough knowledge for us
44:14
to start working on this section's project which is a static HTML page in
44:19
react however before we jump into that I want to exercise your brain with a little thought experiment and we are
44:24
going to do that in the next screencast I'd like to do a quick thought
44:30
experiment with you and that is to figure out why we're using react dom. render instead of just using the Dom
44:38
append method that you've probably used before in JavaScript I've written the first line for you and that's to import
44:44
react from react that will just allow you to write some jsx your challenge as
44:50
you can see in this little four-step process here is to create just a really simple sample page in jsx has to be
44:57
greater than or equal to four elements just to get your fingers working a little bit and I want you to save that
45:03
jsx to a variable remember that that variable needs to be one parent element
45:09
with some children elements nested inside of it in other words we can't just have two sibling elements saved in
45:15
a variable in jsx then I want you to select the div with the ID of root using
45:21
whatever selector you want to use and then use append to append your jsx if
45:27
you need to do a quick Google search for how to use do aen that's totally fine and then before you run your code I want
45:33
you to see if you can guess what's going to show up in the browser before you run the code and then run your code and see
45:39
if you can explain what does show up in the browser pause here and play around with this a
45:50
bit okay well let's create our jsx we'll say const page equals and I'll open my
45:56
parentheses so I can write my jsx on its own line and we'll start with a div just to
46:04
surround everything and I don't know let's say I'm making a page about why I love react
46:12
we'll say this is my awesome website in react and then maybe an H3 that
46:19
says here are the reasons I love react and we'll use an ordered list
46:30
it's not terribly important what you actually put in here I'll just use some of the reasons that I've been talking
46:36
about it's composable it's
46:41
declarative it's a very hble skill to have let's see I need to get rid of
46:48
this and it's very actively maintained by
46:54
some very skilled people again the jsx you chose to put in here
46:59
is not terribly important so we'll use document. getet element by ID root and
47:05
then use the Dom nodes append method to
47:10
append our page and we'll see what shows up here now of course I know what's going to show up so I'm just going to
47:16
run the code and we see that we get object object this object object is sort
47:21
of a string representation of a regular JavaScript object something I can do to
47:27
actually make that object appear is to stringify it using Json so I can actually say
47:33
json. stringify and we will stringify that object so that it puts Json on the page
47:40
I'll hit save and look at that we get a JavaScript object now step four see if
47:46
you can explain why this actually shows up in the browser well kind of the whole purpose of this thought experiment was
47:53
to remind you that jsx returns plain Javas script objects at this point in
47:58
time it has nothing to do with the Dom it's not recognized by the browser as
48:05
anything important dealing with the Dom it's only when we try to render it using
48:10
react. render that react can take these JavaScript objects and actually turn
48:15
them into real Dom elements that the browser can interpret as things like
48:20
first level headers or ordered lists so let's go ahead for the sake of practice
48:25
and fix this I'm going to update our challenge
48:31
here okay simply put your challenge is to fix our code and don't forget we're not using those cdns in our HTML anymore
48:39
which is what used to give us a global variable called react Dom so you'll have to see if you can remember how we get
48:45
access to react Dom pause the screencast here and try to fix our
48:55
code in in order to use react Dom I will need to import it and we'll import it
49:01
from the react Dom package then instead of selecting my div with the IDE of root
49:08
actually I'm going to need that anyway so I will leave that code there I'll say react dom.
49:15
render the thing I want to render is my page so we'll put page and the where I
49:21
want to render it is inside of that div with the ID of root I'm going to comment
49:27
this out so it doesn't break it we'll hit save and there we go awesome so simply put react Dom's job or the react.
49:35
render method's job is to take react elements and interpret them in a way
49:42
that turns them into real Dom elements that the browser can understand okay
49:47
with that understanding it's only a small jump to work on our section project which is to build a static page
49:53
in react we're going to start the first steps of that in the next
49:59
screencast okay we're finally at our first challenge I'm really excited to start working on this I've included a
50:05
Google slide of what you're aiming for with this challenge notice there's really no styling being applied here at
50:12
all it's just bare HTML so if we go look at the challenge essentially you are
50:17
starting completely from scratch and your job is to build the HTML for our
50:22
section project as you see it here we'll be adding just a little bit of styling to it later after we learn how to do
50:28
that and I've included a couple hints here for Simplicity I've imported the
50:34
react logo file directly into our file explorer here which means that you can
50:39
reference it in your image element that you create with Source equals and then
50:45
using a/ reacto PNG I also have a hint here about
50:50
how to set the width attribute just remember that jsx is almost identical to HTML and in fact for what you're working
50:58
on here you really shouldn't see any difference between the jsx that you'll write and what you would normally write
51:04
in HTML don't forget that we are no longer using our cdns so you'll have to
51:10
remember how to bring in react react Dom and so forth that's all the hints I'm
51:15
going to give you so pause the screencast here and work on this
51:24
challenge well first things first let's import react from react and import react
51:32
Dom from react-dom we can't really do anything until we've done that then I'm going to
51:39
save a variable called page and as a heads up this isn't actually going to be
51:44
a very common way for us to deal with jsx we're going to see very soon how we can do this in a more conventional way
51:51
for the sake of learning though I think this is a good way for us to start just to do a bit of a sanity check I'm going
51:56
to just throw an H1 in here it says testing and then do my last
52:04
step which is react. render and we want to render our
52:09
page and we want to put it at the div with the IDE of root let's see if that's
52:16
working okay cool we have testing showing up that means that everything else is set up correctly okay so let's
52:22
start building our page here I'm going to surround everything in a div just
52:27
because I can only have one element here rather one parent element here instead of any sibling elements and the first
52:35
thing I'll put in is an image and just like in HTML I can provide an image
52:40
source and like I mentioned up in the hints I'm going to have react D
52:48
logo.png the do slash just means look in the same folder for a file called react
52:54
logo.png now if I refresh this I'm going to get a pretty large image here so just
53:00
like in HTML I can set the width to be something specific like 40 pixels and
53:07
that looks a little more manageable a little less crazy not taking up my whole screen next I've got something that
53:13
looks kind of like an H1 that says fun facts about react so we will add that in
53:21
there and awesome now because my H1 is a block element it has is Flo below my
53:28
image even though my image is technically an inline element and that's kind of to be expected or rather that's
53:34
what we're aiming for and then it looks like the last thing is an unordered list with these five list items so I'll go
53:42
ahead and add that unordered list do some list items I'm going to
53:49
hold shift option down to copy these lines and then just start typing in some
53:55
of these facts
54:02
okay and yeah these are some pretty interesting facts about react I'll hit save and awesome it looks like we
54:08
essentially got to where we wanted to get to with our goal here I'll go ahead and clean up some of my comments up here
54:15
from The Challenge and great work hopefully you were able to follow along with that now like I mentioned saving
54:22
all of our jsx to a single variable like this actually isn't n really that common nor is it convenient at all so what
54:30
we're going to start covering is a much more common way and that is by creating custom components before we jump into
54:36
that I want to give you a quick quiz over the topics that we've talked about so far and we will do that in the next
54:45
screencast before jumping right into the next topic I thought it would be smart to have a quick little pop quiz on some
54:53
of the topics that we've covered up to this point because this is scrimba you can just click into this quiz. MD file
54:59
and answer the questions here so pause the screencast and work on this
55:10
quiz why do we need to import react from react in our files well it's because the
55:15
jsx syntax is defined in react and if we were to remove react we would see that
55:22
it's telling us react is not defined even though we're not using react act in our code the jsx here sort of Demands
55:30
that react be a part of our code base so I will go type that over here react is
55:37
what defines jsx so in order to use jsx we need to import react if I were to
55:43
console log the page in our index JS file what would show up hopefully you actually attempted to answer this
55:49
question before just going ahead and console logging it before I hit save I know that page is a bunch of jsx
55:56
which in reality just returns some JavaScript objects so when I console log page I should just see a JavaScript
56:03
object here and sure enough there it is if you look closely at that object you'll see a children property and that
56:09
children property has more react elements nested inside well that's because we have our react element here
56:16
with children that are more react elements so over here we can
56:23
say a JavaScript object these are react
56:29
elements that describe what react should eventually
56:36
add to the real Dom for us okay number three what is wrong with this code
56:41
hopefully you noticed that our jsx here is two sibling elements and remembered
56:48
that we actually need all of our jsx to be nested under a
56:53
single parent element as a quick sneak peek in the future you may learn that
56:59
you can use something that looks like an empty tag like this in order to wrap
57:04
your jsx in something that doesn't actually create another parent element these are called fragments but that's
57:12
more a little piece of trivia we're not going to concern ourselves too much with that in this course next is number four what does it
57:19
mean for something to be declarative instead of imperative the way we described it before was to say that
57:25
declar ative programming meant I could tell the program what to accomplish and it would know how to accomplish the
57:32
specific step-by-step details whereas imperative meant I still needed to tell the computer step by step how to do
57:39
everything an example I like to think of this is to imagine myself asking a friend to make a peanut butter and jelly
57:46
sandwich for me if I were doing that declaratively I could simply say could you make me a peanut butter and jelly
57:52
sandwich and I would assume that they knew how to take care of the individual steps to do so if I were being
57:58
imperative on the other hand I would have to tell them to grab a slice of bread with their fingers and place that
58:04
slice of bread gently on a plate then to grab a knife from the drawer and to put
58:10
the knife into a jar of peanut butter and so forth there certainly are times when something imperative is warranted
58:16
however generally speaking writing code declaratively is a much better developer experience and honestly usually leads to
58:24
fewer bugs in the end so declarative means I can tell the
58:30
computer what to do and expect it to handle the
58:37
details imperative means I need to tell
58:42
it how to do each step and lastly what does
58:47
it mean for something to be composable well that just means that I can create small pieces that I put together to make
58:55
a greater in terms of web development it means I can take pieces of my UI my user
59:01
interface and put them into their own components and then piece those components together to build my page so
59:08
what does it mean for something to be composable means that we have small pieces that we can put
59:17
together to make something larger and I'll even say
59:23
greater than the individual pieces this is a pretty broad definition of
59:28
composable because the idea and concept of composability extends throughout all of computer programming not just web
59:35
development and especially not just react but I think we've gotten the point across I'm really excited to keep moving
59:41
forward we are now going to jump into sort of the Baseline level of react and
59:46
start learning how to create our own components and it's just going to get more and more exciting from there so
59:52
strap yourselves in and let's keep moving forward
59:57
when we talked about composability being one of the major benefits of react we talked about the possibility in react to
1:00:04
create our own custom components what we currently have going on is we're saving
1:00:09
our jsx elements here our react elements in a variable and then rendering that
1:00:15
variable directly with react. render and although this has been working for us so
1:00:20
far it doesn't allow us a lot of flexibility when it comes to creating our own components in react and even
1:00:26
further it's also pretty obvious we wouldn't want to take all of our markup and stuff it directly into react. render
1:00:33
even though I think technically this might work just fine actually I'm curious let's give this a shot I'll
1:00:39
comment this out okay so everything is technically still working but we run into the same issue as we used to in
1:00:47
kind of the old days of creating HTML code where if we're trying to stuff everything into one place not only do
1:00:53
the elements not become reusable but it becomes really difficult to maintain as a developer so creating our variable up
1:01:00
here got us one step closer but it's still not quite good enough instead what we are going to start learning about is
1:01:06
creating our own custom components now I give you a taste of this early on in the course but we're going to actually learn
1:01:12
it the real way now in programming the concept of a function is one that allows us to write some code that we can then
1:01:19
execute over and over and over again just by calling that function and react
1:01:24
adopts the same concept of having a function that allows us to create user
1:01:30
interface or create elements over and over and over again if we wanted to knowing how functions work it's really
1:01:36
tempting to say okay well I'm going to create a function and let's give it a temporary name for just a second and we
1:01:43
might say well I have a function and I want it to return my UI my elements here
1:01:49
any time that function gets called so I might try something like this let me
1:01:55
give rid of page here and then instead of page we might say well let's call our
1:02:01
temporary name function and that is going to return the react elements that we asked it to and therefore we have a
1:02:08
function that we can reuse well let's see what happens look at that it actually worked and what we have here is
1:02:16
basically 90% of the way into creating our own custom components a function
1:02:22
like this that returns react elements is considered in react a component however
1:02:27
there's a couple of conventions that we need to follow for everything to work correctly all the time the first one is
1:02:32
we need to use Pascal case instead of camel case for our component names all
1:02:37
that means is I need to capitalize the first letter of my component and secondly instead of calling this
1:02:44
function with parentheses like we might be used to we actually need to wrap it in angle brackets similar to an HTML
1:02:51
element and I still need to change this to a capital letter there and that's the only changes we need to make from a
1:02:58
regular JavaScript function that you have probably written hundreds of by now and a react component that uses the same
1:03:05
concept of functions to create reusable user interface pieces you'll see if I hit save everything is still working as
1:03:12
we would expect okay maybe you can feel it it's time for a practice I'm actually going
1:03:17
to erase everything because you are going to write everything again from scratch first I'll write out the
1:03:23
challenge for you okay I've erased our code and saved it so that our page went
1:03:28
away this challenge is going to be given to you in two parts the first part is to create an ordered list that enumerates
1:03:34
the reasons why you're excited to be learning react don't spend too much time trying to come up with a huge list just
1:03:41
put a few things in an order list and then I want you to render your list to the page this is going to require you to
1:03:47
remember all of the steps that we've learned so far on the basics of setting up a react app so pause the screencast
1:03:53
and work on part one of this challenge
1:04:00
to get started we need to import react from react I need to spell react
1:04:06
correctly there and we'll import react Dom from react-dom we'll go ahead and use react
1:04:13
Dom to render let's start with just some inline jsx here we'll say it's working
1:04:22
and I need to select my root ele element as the place to put this H1 hit
1:04:30
save as a sanity check and we know it's working awesome now the meat we are going to create our own custom page
1:04:37
component by using a function called page using a capital letter to begin and
1:04:43
this function is simply going to return some UI or in other words some jsx that
1:04:48
we can put in the page just as another little sanity check I'm just going to remove the H1 here and put inside my
1:04:56
page component and then render my page component as we've learned and I refresh
1:05:03
and everything is still working and just to make sure I'll just make a change I'll say it's still working okay so now
1:05:10
the next part we are going to turn this into an unordered no an ordered
1:05:16
list and we'll just put a few list items in here and let's see these are reasons
1:05:23
that we're excited to be learning react maybe for one it's a popular
1:05:29
Library so I'll be able to fit in with the cool
1:05:36
kids this probably has a a pretty loose definition for what the cool kids are but that's
1:05:42
okay okay we'll put a second item here and just so you can see everything
1:05:49
I'm going to move this onto its own line there we'll say I'm more likely to get a
1:05:55
job as a developer if I know react and hopefully you have some other
1:06:01
good reasons I'm going to leave it at that for now just for the sake of learning I'll go ahead and refresh and
1:06:06
there we go we've got our two pretty ugly unstyled elements that we have on the page but it seems to be working okay
1:06:13
nice work on part one of the challenge in part two of The Challenge which will be in the next screencast we're going to
1:06:18
add a little bit more to our simple page here however before moving on if any part of this was still confusing for you
1:06:24
I really encourage you to go back try to rewatch some of these videos you could even start from the beginning maybe
1:06:30
you'll have some additional context that will help in your understanding and as always reach out to the scrimba
1:06:36
community on Discord if you have any questions people are always happy to answer but don't just plow forward if
1:06:42
you're still feeling confused do some research re-watch some of the videos make sure you're doing all of the
1:06:48
challenges and then when you're ready let's go forward and we'll work on part
1:06:54
two the next part of our challenge is to add some more elements to our page here
1:06:59
first I want you to add a header element with a nested nav element inside and
1:07:04
then inside the nav you'll have a nested image element with the source that I've mentioned here and some other notes that
1:07:11
you should read through I also want you to add an H1 element that will go below the header element but above the ordered
1:07:18
list and at the very bottom underneath the ordered list I want you to add a footer element with some text that I
1:07:25
have here here make sure to read through the whole challenge there so you get a better idea of what you need to be
1:07:30
working on and as always pause the screencast here and work on this
1:07:38
challenge one of the biggest tricks in this challenge is to make sure that you don't just try to add a header hopefully
1:07:45
that didn't cause too many headaches for anyone but the biggest problem with this is that again I'm trying to create two
1:07:52
sibling jsx elements here one with the header and one with the ordered list
1:07:58
inside of a component I just can't do that I have to have one parent component so I could either use those fragment
1:08:05
tags that I briefly mentioned earlier like this or a lot of times you'll see
1:08:10
people just wrap it in a div like this now that I've done that everything
1:08:17
is working again the way I'd expect inside of my header I'm going to include
1:08:23
a nav element nav is just basically an HTML 5 semantic
1:08:29
element that is basically the same thing as a div except it's better for screen readers and assistive Technologies
1:08:36
inside of my nav I'm going to have an image element and that one needs to have
1:08:42
a source that I included up here so I'll just copy this and make sure I get that quotation mark
1:08:48
there get rid of that extra space and let's just save this and see how things
1:08:53
are looking okay and my react logo is huge so I'm going to give it a width of 40 pixels like I've done
1:09:02
before okay that's more manageable next we need to add an H1 with some text
1:09:08
describing the page like reasons why I'm excited to learn react we'll just copy that let's see that'll go underneath the
1:09:15
header and we'll put an H1 there and I'll just paste that text in right there
1:09:22
refresh it and okay that's starting to look good then at the very bottom so this is above this ending div because I
1:09:30
still need it to be a part of my page component but below my ordered list I'm going to add a footer
1:09:35
element and inside the footer we need to have this text
1:09:41
here but we'll customize it to be relevant for me so currently it's
1:09:47
2021 this has got semantic problems because I have those elements there and
1:09:53
I'm going to call this zero development cuz Z is my last name all rights reserved real official this is not going
1:09:59
to be stolen by anyone for sure now that I have this footer here and let's go ahead and refresh this sometimes people
1:10:07
will put this inside of a small tag I'm kind of just curious to see what that looks like I need to end this correctly
1:10:14
and yeah I guess that looks a little better we'll leave it like that okay nice work now some of you may have been
1:10:19
wondering well why am I just building everything as this monolithic page component I thought the whole whole
1:10:25
reason that we were creating our own custom components is because then I can compose them together instead of just
1:10:32
shoving everything into this one component and you would be right so in the next lesson we are going to learn
1:10:38
how to compose these elements together learning the concept of parent and child components and so forth before we do
1:10:45
that though I want to make sure that you've been awake and that you're following along we're going to have a quick quiz so that is coming up
1:10:54
next okay hey it's quiz time again read through the questions in the quiz
1:10:59
actually click into the editor type down your answers and if you find yourself not knowing the answer to one of these
1:11:05
don't just kind of plow ahead but instead actually do some research see if you can figure out on your own with
1:11:11
Google and whatever other resources you have available to you what the answer to the quiz question is before just moving
1:11:17
on so pause now answer the questions to the quiz and then we'll go through them together
1:11:28
all right number one what is a react component well basically put a react component is simply a function that
1:11:36
returns react elements well what exactly are react elements react elements are
1:11:42
the objects that get created when we return jsx so although this looks very
1:11:47
much like HTML remember this is jsx which is a special syntax of react and
1:11:53
under the hood it's returning a regular Java JavaScript object those objects are eventually turned into real Dom elements
1:11:59
that people can see on the screen so sometimes you'll hear people refer to this as UI or user interface and that
1:12:06
just means that it's what the user can actually see on the screen and just like any other JavaScript function a
1:12:13
component can be reused over and over here I'm creating a page component but I
1:12:18
can run my page function so to speak or in other words create an instance of my
1:12:23
page component by just rendering page again okay let's go to number two what
1:12:28
is wrong with the following code it's a really small difference but it's an important one any components that you
1:12:35
create need to begin with a capital letter this is called Pascal case where
1:12:40
it's essentially camel case but where the first letter is also capitalized basically anytime you might want to have
1:12:47
I guess you could say different words in your component name like my component all you do is capitalize the first
1:12:54
letter of the next word this would of course be instead of putting some kind of space in between they're like in a
1:13:00
regular sentence and then finally what's wrong with the code in number three
1:13:05
hopefully this one wasn't too difficult to find but if you look way down here instead of calling our function like you
1:13:12
might normally be used to by adding parentheses at the end with function components in react you instead surround
1:13:18
these with the angle brackets as if it were a regular HTML tag and in react
1:13:24
this is the correct way to I guess you could say call your component or create
1:13:29
an instance of your component okay short and sweet nice job on that quiz hopefully you are able to follow along
1:13:36
next we're going to move forward and see how we can do a better job of composing our components
1:13:44
together as we've mentioned it's not ideal to be taking our entire markup and
1:13:49
stuffing it into one component like we're doing here so let's learn through practice the concept of creating a
1:13:55
parent and child component we're going to start this off by having you do a mini challenge so let me type out that
1:14:01
challenge here okay your little mini challenge is to take the header element from our page and to put it into its own
1:14:09
component that's called header technically speaking I'm not necessarily asking you to then render the header
1:14:15
inside the page but if you want a little extra credit challenge you can render that header component that you just made
1:14:20
inside of the page here pause now and work on this mini challenge
1:14:29
okay just like it says we are going to create a separate header component here
1:14:34
and we're doing this outside of page because they're different components and basically I can just cut out this whole
1:14:41
header section and return it from my header
1:14:46
component and that's really all the mini challenge was asking you to do now if you didn't try to do the little extra
1:14:53
credit I gave you and render the header inside here I want you to think for a second what might that look
1:14:59
like well just like we are creating our page component down here or rather we're
1:15:04
creating an instance of our page component down here I can create an instance of my header component by just
1:15:11
typing it out like this as if it were an HTML element amongst my other code and
1:15:17
here we see the concept of composability in practice I've set aside some of my UI
1:15:23
to be managed by a single header component and then anytime I want to
1:15:28
essentially insert these elements into my page I can create an instance of my
1:15:34
header component just like this now in a web page that's this small it's really
1:15:40
not that necessary to do this but I'm sure you can imagine if this were a much larger application especially one that
1:15:47
had pieces that had a lot of user interaction and so forth it becomes really really beneficial to move these
1:15:54
things in to their own separate components okay so that leads us to the next part of this challenge which I will
1:16:00
type out now essentially I want you to do the same thing but now with the footer as
1:16:07
its own component and the rest of the content as its own component pause now and work on this
1:16:18
challenge okay just like before we'll create a new
1:16:23
footer function component here and it's going to
1:16:29
return the footer content I'll just cut that out of there put it right here and down here in
1:16:37
its place we will render the footer component okay and then we'll do the
1:16:42
same thing for the main content
1:16:48
component I'll take everything here including the H1 and the there's a little trick here
1:16:56
because if you tried to just paste that in you'll notice that this is two sibling Elements which again we can't
1:17:02
just render side by side we need a parent element to surround them so I
1:17:09
will put this div down there indent there and we will render an instance of
1:17:16
our main content component now I should be able to refresh the page and essentially have the exact same thing of
1:17:24
course now that I've wrapped this in a div very technically speaking these elements are now Children of the div and
1:17:31
the div exists right here on this level for my purposes now this div is not
1:17:36
harming anything it's not changing my styling or anything so I'm not terribly worried about it so hopefully you can
1:17:44
understand now the idea or the naming of parent child components we have a parent
1:17:49
component which is our page component and just by virtue of it rendering other components components these other
1:17:56
components become by name children components and just like HTML this can
1:18:02
go deeper and deeper down the rabbit hole I could have main content rendering another component that we have also made
1:18:10
and then relative to main content that other component would be a child component and Main content would be the
1:18:16
parent component this really is no different than in our HTML how you can have different levels of parent child
1:18:22
and even grandchild or what whatever you want to call it nice work on this challenge you can see that we are now
1:18:28
composing our page together of other components now we're pretty overdue in learning the ability to add some styling
1:18:35
to our page so that's what we're going to work on next we're going to start off this
1:18:41
lesson with a sort of mini challenge our goal is to add a navigation bar to our
1:18:47
little site here and navigation items like this are usually handled with something like an unordered list with
1:18:53
list items so that's your challenge underneath our image here your challenge is to add an unordered list with three
1:18:59
list items for pricing about and contact in the end this will essentially be like
1:19:04
adding some HTML to your page so this should be pretty quick pause the screencast and work on this
1:19:16
challenge simply enough we can add an unordered list with our three list items
1:19:25
for pricing about and contact let's sayit save and
1:19:33
see where we are okay pretty ugly but we're going to style this now fortunately styling something in react
1:19:38
is as simple as adding classes just like you would in regular HTML the only difference you need to know about is
1:19:44
that instead of using class equals we're going to use class name equals and
1:19:50
that's because under the hood if you remember react is taking these jsx elements and turning them into native
1:19:56
Dom elements and just like when we were creating things in vanilla JavaScript we would say something like const unordered
1:20:03
list equals document.createelement with unordered list as the type and then we would say
1:20:10
ul. class name equals something if we wanted to set the class name so in the
1:20:16
end that's why we're using class name instead of class in react and so I will set the class name here to maybe nav D
1:20:24
items hit save and then in our style.css I can add nav items and maybe first let's take
1:20:32
the list style off so we'll say list style of none and sure enough our bullets go away and that brings us to
1:20:38
the next part of this challenge using flexbox I want you to line up the nav
1:20:44
items horizontally so that they sit next to each other like this and then also using flexbox I want you to line up the
1:20:50
unordered list with your newly horizontal list items to be in line with our logo so that everything is nice and
1:20:57
aligned just like we have in this image in doing so I want you only to use CSS classes I don't want you to select any
1:21:04
bare elements like the whole nav or anything like that mostly just so we can get some practice typing out class name
1:21:11
pause the screencast and work on this part of the
1:21:19
challenge well let's piggy back off our nav items class which we already have I should just be able to change the
1:21:26
display to flex and sure enough that gives me all of my items in a row now
1:21:32
let's put our list item in line with our logo image here and then we'll worry about some spacing between these items
1:21:39
back in my code I'm going to probably give my nav a class name of nav of
1:21:46
course I could have just selected the whole nav element but like I mentioned we're here to practice class names so
1:21:52
I'll make a class name of nav and we'll select our nav let me hit refresh over
1:21:57
here so that the Styles will apply immediately and I'll give this a display of flex awesome our elements are in a
1:22:04
line now because my nav only has two elements the image as the first element
1:22:09
and the unordered list as the second element I guess I should say to direct children I can just use justify content
1:22:17
space between to push that pricing about and contact items to the far right it
1:22:23
also looks like our logo got a bit stretched that just kind of happens in Flex containers so I'll say align item
1:22:30
Center and that should fix my aspect ratios of the image and then I'll go ahead and add a little bit of space
1:22:36
between my list items there I know I mentioned using classes but in the case of list items I usually prefer to select
1:22:44
the unordered list by its class and then just select all the list items that way I don't have to go in and add a class
1:22:51
name to every single one of my list items let's just give those a padding of maybe 10 pixels okay that's looking
1:22:57
pretty good now my image is looking a little bit small to me I want to make it bigger but oh yeah we added this width
1:23:03
attribute but now that we know how to style with classes let's have sort of an impromptu third part of this
1:23:10
challenge okay your task is to change the image styling to happen in the CSS
1:23:15
instead of right here in line and of course for practice let's add a new class to the image just so you can style
1:23:21
it that way pause the screencast and work on this part of the
1:23:31
challenge simply enough we can take our width out which is going to make our image pretty huge if I refresh but we'll
1:23:38
give it a class name let's call it nav D logo and then we will select our nav
1:23:45
logo and let's give it our width of 40 pixels again have to hit refresh over
1:23:50
here okay we're back where we were actually this logo is looking a little small let me try 60 pixels yeah I think
1:23:56
I like that size better at this point I think it's a perfect opportunity for you to continue practicing styling this page
1:24:03
obviously this page is really small in its scope and so before we just push forward I would like you to spend at
1:24:09
least a few minutes styling up this page making it look a little bit nicer add your own flare to it in fact I actually
1:24:16
did that and put maybe 5 minutes of styling into it which obviously shows it's not going to win any Design Awards
1:24:22
but I did change the font to use a Google font I added this little box Shadow under our nav bar I moved the
1:24:29
footer down to the actual footer section of our page the bottom of our page and added some really basic styles to it so
1:24:35
this is a great opportunity not only for you to flex your CSS skills and get your hands on the keyboard and do some
1:24:41
practice but also to interact with the scrimba community especially on Discord
1:24:46
once you've styled something up that looks well pretty much anything's going to look better than this once you have some kind of style added take a
1:24:53
screenshot and share it into Discord as you make changes to your code here in scrimba it will create a note that you
1:24:58
can save and you can even share that on Twitter you can share the link to that in Discord whatever it takes for you to
1:25:04
get involved with the scrima community once you've had a chance to apply some of your own creativity to this little
1:25:11
page the next thing we're going to do is clean up our code here where right now we have everything kind of stuffed into
1:25:17
our index.js file and we're going to learn how we can move these components into their own folders and clean up our
1:25:22
code a bit there are practically innumerable ways
1:25:28
to organize your projects and so I'm hoping to in this screencast just teach you some of the principles and as we go
1:25:35
through the course you may see different methods that I use and of course as you look at other people's code you'll see
1:25:41
the ways that they use as well for organizing their code now what we have here is a very small site for react
1:25:48
there's hardly anything here I barely have 50 lines of code to make this page
1:25:53
however anything substantial that you have will end up being hundreds more likely thousands or even tens of
1:25:59
thousands of lines of code in total so it's really important to have an organization system that makes sense to
1:26:05
you to your group and something that you agree upon in the beginning and stick to
1:26:10
as you continue to develop so I'm going to show you with separating one of these components into its own file and then
1:26:17
I'm going to give you a challenge to do the same for the others so what I'll do is work on the header and we're going to
1:26:23
move header into its own file so I'm going to create a new file in my
1:26:28
Explorer up here called header JS a convention that I personally like to
1:26:33
stick to is that any file I create that will essentially house a react component
1:26:39
will start with a capital letter the same as the component's name itself now
1:26:44
I'm going to copy or actually cut this entire component out and over in header
1:26:50
JS I'm going to paste it now there's a couple things I need need to change here I want you to pause the screencast and
1:26:57
see if you can think of two things that I need to change in this file in order for me to then be able to import it into
1:27:04
this file so that it's working the way that it was before so take a good look at this pause
1:27:10
the screencast see if you can figure that
1:27:16
out well remember in order for the program to make any sense of jsx I
1:27:21
always need to import react from react even though we're not
1:27:28
explicitly using Capital re e a c anywhere here in my code for jsx to work
1:27:34
I will need to import react from react again this is something that has recently changed if you're working in an
1:27:40
environment that is actively using the updated react 17 then you may not have to do this the other thing is currently
1:27:48
this component is completely stuck inside of this file I'm not sending it outside of this file anywhere and so I
1:27:54
need to export it and oftentimes if this is the only component that I'll have I
1:28:00
choose to export default the component so I'll say export default header alternatively I could save myself a
1:28:07
little bit of lines of code here and just put export default function header right up at the top and then I don't
1:28:13
have to create a separate line down here that does it separately personally I kind of oscillate between these two so
1:28:20
you can just choose whichever one you think you prefer the most and stick with that convention if you're feeling a
1:28:26
little bit Rusty on export import export default and so forth you may want to
1:28:32
spend some time researching Import and Export in es6 because we will be using it quite a bit in this react course now
1:28:40
that I have exported my header component it means that over in my index JS I can
1:28:46
import it and I'll say import header from and then I have to use do/ Capital
1:28:52
H header and I could say JS but that's the default extension for imports so I
1:28:58
don't need to specify JS in this case do slash is a way to indicate that I'm
1:29:05
talking about a file in my own project here not a package that's in my
1:29:10
dependencies like react and react Dom and I have to make sure that I spell
1:29:15
this the exact same as my file name not necessarily the name of the component I
1:29:21
could have chosen to call this head like that and I still would have to say
1:29:27
import header from slhe header or in this case I could say import whatever
1:29:32
because I'm doing an export default if that's confusing don't worry too much about it I prefer to keep the names all
1:29:39
the same so that I don't run into any confusion there okay I'll put an extra
1:29:45
line here what's nice about this is now my code is sort of sequestered into the
1:29:51
header JS file which means that if I want to change the header I can
1:29:56
logically come to my header JS file to make changes to my header and I don't need to change how
1:30:03
it's rendered down here because when I import it I'm importing everything that I have in my header JS file just like it
1:30:10
was when it was declared here in the index.js file okay let's get some practice let me type out your challenge
1:30:17
simple enough just move the footer component and the main content component into their own files and then of course
1:30:25
do what you need to do to make it so that our site doesn't break down pause the screencast and work on this
1:30:34
challenge okay let's do this I'm just going to cut my footer Out Create a new
1:30:41
file called Capital FF foo.js paste my code
1:30:47
in and we'll import react from react so that our jsx works and then I'll export
1:30:54
default my footer function my footer component and make sure that I import it
1:31:02
here say import footer from footer and just by importing it now my footer should just be working the same way as
1:31:09
it was hit refresh and everything is working awesome we'll do the same thing
1:31:14
for main content and I can clean up some of these extra lines create a new
1:31:20
component or file called Main content.js
1:31:25
paste it in export default import react from
1:31:34
react and of course we haven't yet imported it so we will import
1:31:40
it content hit save and we're back up and
1:31:46
running can remove this Challenge and all of a sudden we're down to 17 lines of code we're importing these components
1:31:53
from other files and that way we have a much better organization on our app here
1:31:59
again like I said there's a million different ways to organize your code it's also not uncommon for people to
1:32:04
even take this component that's sort of organizing our other components and put it in its own file a lot of times
1:32:11
instead of calling it page they'll call it app that's actually the convention I tend to use so maybe I'll go ahead and
1:32:17
just change this to app while I'm at it but because of the limited size of this project I'm not terribly concerned about
1:32:23
moving this component into its own file and then also importing all of those other components into that separ file it
1:32:30
just feels like maybe over engineering it for such a small project okay awesome
1:32:35
work hopefully this has been helpful we're going to be using organization like this throughout the rest of this course so again if you're feeling
1:32:42
confused about how we're exporting things or importing them then you may want to spend some time researching
1:32:48
export and Import in es6 just to become a little more familiar with it or another great way to to do that would be
1:32:54
to just play with this code see if you can delete these lines delete the export default line and just try to recreate it
1:33:01
see if you can get it to work again when you feel comfortable with everything we've covered so far let's keep moving
1:33:08
forward earlier in the course we saw sort of the quick and easy way to get a local version of react up and running
1:33:15
using some CDN links and an in browser Babble transpiler to get everything working you see since react uses a
1:33:23
syntax that isn't normally understood by the browser there needs to be some kind of tool to translate this weird looking
1:33:30
JavaScript like jsx into something that the browser can actually make sense of
1:33:36
like regular old JavaScript however that in browser Babble transpiler that we
1:33:41
were using is not really a good long-term solution which is why we saw that warning that says well basically
1:33:47
you should do this in a different way if you're going to be pushing it up to production so instead what you normally
1:33:53
need to is set up a whole bundler system using something like webpack I've linked to the webpack homepage if you want to
1:34:00
go visit it there and you would teach your webpack configuration how to use Babel the transpiler or compiler so that
1:34:07
essentially it would take your react code and trans pilot or compil it down to something that is readable by
1:34:14
browsers with regular JavaScript just to be totally clear Babble and webpack are
1:34:20
not specific to react but in order for react to to work on most web browsers
1:34:25
you would normally have to use Babel and webpack to translate it into something that a browser would make sense of and
1:34:32
the truth is unless you've already dealt with webpack a bunch before it's honestly a bit of a high bar for
1:34:38
beginners to clear when they're just learning web development so to help significantly reduce that overhead in
1:34:44
getting started with react the react team created a package called create react app which does all of the heavy
1:34:51
lifting for you and it even hides a bunch of that implementation detail of webpack from you in the code so in the
1:34:58
end it really just makes setting up a new react app on your local machine really simple so let's take a look at
1:35:05
the process of using Create react app to create a new react app on your local machine before you can jump into create
1:35:12
react tap you have to make sure that you have nodejs and npm installed on your machine to see if you have these
1:35:18
installed you can open up your terminal and type node space- V that it's a flag
1:35:24
to check the version of node if it spits out any number that means that you do have node installed and if you do have
1:35:31
node installed then you also more than likely have npm installed as well but for good measure you might as well run
1:35:36
npm space- V and again if it displays a version number that means you do have npm installed now the next few slides
1:35:44
are going to give a very high level overview of how to install node in npm so if you already have node and npm you
1:35:50
can sort of tune out the next couple minutes or skip ahead and honestly there's a lot of help
1:35:55
already out there on how to install node.js I would just recommend going to YouTube and searching install node.js
1:36:01
but specifically install nodejs with something called NVM so I would recommend using NVM which
1:36:09
is the node version manager it purpose is just to make switching and installing different node versions extraordinarily
1:36:16
easy but it does mean that you have to install another package if you're on a Mac or Linux machine you can use NVM
1:36:24
I've included a link to their GitHub repository here or if you're on Windows you can click here to go to a package
1:36:30
called NVM D windows but again I would just default to following some kind of install node.js with NVM tutorial that
1:36:38
you find on YouTube okay so now you have NVM installed the next step is to open
1:36:43
your terminal again and this time type NVM space install space-- LTS now this
1:36:51
command is specific to the NVM for the Mac or Linux I think it might be slightly different for NVM D windows I
1:36:58
think that might just be NVM install LTS with no dash dash but you'll have to
1:37:03
check the documentation and follow the instructions in that YouTube video to be sure then once that finishes installing
1:37:09
we come full circle and you should be able to double check your node version and your npm version the same way we saw
1:37:14
before and again by the time you're watching this it very well may not be these versions it might be a newer
1:37:20
version than this now with node and npm installed we're ready to actually use create react app on the create react app
1:37:27
website you can see this getting started section the main thing we care about are these commands down here just to make
1:37:33
things even more confusing there's another thing called npx we won't really get into what npx is but for now it's
1:37:40
enough to know that you can just type this top command npx create react app space and then the name of whatever you
1:37:46
want the folder that holds your app to be after typing that first line you can hit return and you'll see an output in
1:37:53
your terminal that's more or less similar to this you can see at the very bottom it says we suggest that you begin
1:37:59
by changing into your directory that you just created if you didn't choose my- app as your folder name then obviously
1:38:05
choose whatever your folder name is and once you're in that directory you can run npm start so you can see on my
1:38:12
machine I did that I went CD into my app and then I ran npm start sometimes this
1:38:17
command can take a little bit of time to get everything up and running but once you do you should see something that looks like this in your terminal if you
1:38:24
remember back when I showed you how to run react locally just using those cdns
1:38:29
and the vs code extension called live server well now we're essentially replacing that you won't need to click
1:38:34
anything in your vs code using live server but instead you're running your development environment through the terminal in fact after you run this
1:38:41
command and it says compiled successfully it will probably open a browser window for you and direct you to
1:38:47
Local Host colon 3000 automatically and when that opens you'll probably see the default create react apps screen which
1:38:53
looks something like this so where exactly does this screen come from with the react logo well this is a
1:39:00
boilerplate version of the create react app code that is automatically built in this new react app that has been spun up
1:39:06
for you if you really just want to start from scratch what I recommend doing is just taking all of the files in the
1:39:12
source folder you can see I've highlighted them all here in my vs code and just deleting them and then you can
1:39:18
just start from scratch the same way we have been so far by creating an index.js file and writing the code that we're
1:39:24
used to writing one thing to note here is that you don't need to create your own index.html that is being handled
1:39:31
inside of this public folder and of course I recommend poking around the code just to better understand exactly
1:39:36
what's going on but you'll see that inside that public folder there's an index.html file that has a div with the
1:39:43
ID of root in it so inside the new index.js file that you create you can already select that element by the ID of
1:39:50
root when you're using react. render and it's a bit small in this screenshot but you can see that it's rendering an H1
1:39:57
that just says hello create react app and in the browser that popped up automatically on Local Host 3000 it
1:40:03
updated automatically for me now usually any changes that you make to your code when you hit save it will automatically
1:40:10
refresh your browser every now and then I found that that becomes a little disconnected and you just have to go to
1:40:15
your browser and hit refresh but either way it should update your browser to reflect what you have written in the
1:40:20
code and that's it you're all set now now as we continue to go through this course here on scrimba I still highly
1:40:26
recommend that you do the challenges I give you right here inside of the scrimba environment one of the huge
1:40:32
benefits of scrimba is that the environment is already interactive and it's already set up for you and so the
1:40:38
barrier to getting your hands on the keyboard typing the code practicing react is very low so although you now
1:40:44
know how to set up a local environment please don't feel like you need to do that every time you're going to do one
1:40:50
of the challenges that I give you because honestly in this course we're not practicing how to set up react apps
1:40:56
we're practicing how to write react and build cool applications with react but
1:41:01
now you have the knowledge you need if you feel like jumping away from what we're doing in the course and just
1:41:06
practicing your own thing and being creative being curious and building whatever you want to build without
1:41:12
necessarily having to deal with the scrimba environment and then of course when the time comes to deploy your
1:41:17
projects to a real website well you're going to have to have something local on your machine that you can push up to get
1:41:23
Hub and to whatever host you're pushing it to okay sorry that was such a long aside let's jump right back into the
1:41:28
course and continue to learn I am coming to you from the future
1:41:34
because you can see in the background we have our react FAA static site almost completely built out but there's an
1:41:41
issue for anyone who is going to be using Create react app to follow along with some of the projects that we will
1:41:47
work on and namely those issues are when we need to load CSS Styles and when we
1:41:52
need to Lo load images in create react app in scrimba this will just kind of work out of the box but if you're using
1:41:59
Create react app to follow along you might notice that well your site's going to look something like this not only are
1:42:05
the Styles missing but also our image link is broken fortunately these are relatively easy fixes you can go to the
1:42:12
react docs to check out this adding images fonts and files it also has a link to dealing with CSS in there as
1:42:19
well you can actually click on the screenshot to go straight there but I'm going to show you what this looks like in VSS code so if you are using Create
1:42:25
react app it's generally recommended that you put your Styles inside of your Source folder there's much more in-depth
1:42:31
ways to also organize your styles on a per component basis but for now we're just going to assume you have one Global
1:42:38
style.css that's going to live again inside the source directory and the webpack instance that's running create
1:42:44
react app behind the scenes is using something called style loader that allows you to just import these Styles
1:42:50
directly into your index Js this might seem a little weird to just be importing a string that represents a CSS file but
1:42:58
webpack is set up behind the scenes to make this work fine the main issue is that when you build your project it's
1:43:04
going to build in a way that doesn't have a ton of different files and folders inside your Source directory
1:43:11
instead webpack is going to bundle everything up into essentially into one giant Javascript file and that
1:43:18
Javascript file is going to live near index.html and essentially in the end you you'll have an index.html an
1:43:25
index.css and an index.js files that's nothing that you have to do manually
1:43:30
it's just going to happen behind the scenes for you I think that will make more sense when we look at fixing our
1:43:36
image issues but right now by simply importing our style.css we get our react
1:43:41
FAA site back to an almost perfect condition you can still see that our logo icon in the upper left is broken so
1:43:48
loading images we do something relatively similar in the code behind me here you'll see that we have a navbar
1:43:56
component and in that we are able to set the source directly equal to a string that has a path to the image that we
1:44:03
need to exist in the navbar however because this path is relative to where
1:44:08
the navbar JS file currently lives this is going to break when things get bundled up into that one giant index.js
1:44:16
file like I mentioned so anytime you have an image that you want to include on your site you will likely want to put
1:44:22
your image inside the source directory and then instead of hardcoding the path directly into our image source we're
1:44:29
first going to import our image from that path that's relative to where the
1:44:35
navbar JS file lives and we import it with some kind of name we can call it whatever we want I've chosen react logo
1:44:41
in this case and then once we've done that we simply replace our source with react logo that way when create react
1:44:48
app is bundling up this project it essentially has a reference to where that image file exists relative to the
1:44:56
current file and it can create a better absolute path when everything gets bundled up so that there isn't a broken
1:45:02
link between your component and the image that you're trying to use and once we do that we have our logo back and
1:45:08
running and everything else about this page is looking good now there is another way to solve this problem and that is to put your Styles and your
1:45:15
images inside of the public folder instead of inside of the source folder
1:45:20
however this is sort of gently advised against if you go to the documentation there's a whole page dedicated to using
1:45:26
the public folder but if you read carefully it says there's a lot of benefits to not using the public folder
1:45:32
but if you really need to you can and here's how you can click the screenshot here to go read more about that if you'd
1:45:38
like okay hopefully that answers some of your questions if you've been trying to follow along with create react app on
1:45:43
your local machine if not and you're just working here in scrimba you essentially don't need to know any of this until it comes time to start using
1:45:50
Create react app on your own machine but I way it's good information to know because eventually you won't be just
1:45:56
working here in the scrimba environment with that said let's go back in time and we'll jump right into this
1:46:04
project one thing that I really like to do when I'm starting a new project especially if I have the design right in
1:46:10
front of me like we do here is to make a sort of mental outline of the elements on the page and how I'm going to lay
1:46:17
this project out all that really helps me do is to make a sort of mental model of how I'm going to create everything on
1:46:24
the page this can be especially helpful when you're thinking about layout and how you're going to place certain
1:46:30
elements in the right spot on the page especially when you start thinking in terms of using flexbox or grid to do
1:46:37
that kind of layout so as a first sort of mini challenge what I want you to do is pause the screencast and look at this
1:46:44
page try to determine what kind of elements you would use what kinds of CSS layouts you might use fortunately this
1:46:51
project has a fairly simple layout out but I still think that it's something that will be helpful for you to practice
1:46:56
so pause the screencast and try to imagine what elements you would use and how you would lay them out for this
1:47:08
project there's certainly more than one way to lay out any given page but the way that I see this is having two
1:47:14
primary sections the top section which is sort of a nav bar and the bottom section which is sort of the main
1:47:20
content inside that nav bar we have a little react logo the react fax logo
1:47:26
text up here and then a little blurb about what project this is in this course already I can start to see that
1:47:32
I'm probably going to choose to lay this out with flex box because that's a really easy way to make sure everything's in a nice neat line and
1:47:39
with flexbox all I need to do to push this text all the way to the right is to give an auto margin to my react fax text
1:47:46
here or rather a margin right of Auto so that it pushes this react course project one text all the way to to the right
1:47:53
side of my navigation bar then down below it looks like I just have an H1 and an unordered list with some list
1:47:59
items so with this kind of mental outline I can start putting together what the actual elements will look like
1:48:05
on the page I usually end up creating some kind of container div so we'll call it a div with the class of container and
1:48:11
this will just surround my whole page and then we have our main two sections that Navar which we saw at the top and
1:48:18
the main section inside the nav bar we had a couple elements like the image and then maybe let's call the react fax text
1:48:24
an H3 and this react course project one and H4 and then in the main section
1:48:30
there was our H1 and an unordered list with some list items inside now in terms
1:48:35
of react this can be a really helpful exercise because I can start to see that I will probably have two main components
1:48:43
first a custom nav component which will house my nav element with its children
1:48:48
elements and second a main custom component which will house my h one and my unordered list with the list items in
1:48:55
terms of those nested items like the image and H3 those are going to be simple enough that they won't need their
1:49:01
own custom react component and then I would take my custom nav component and my custom main component and probably
1:49:08
collect them together in one more custom component which I usually end up calling app and that will be what renders my div
1:49:15
with the class of container and then that app component since it contains all the elements on my project will then be
1:49:22
rendered with react. render so I hope this has been a helpful exercise for you
1:49:27
at least to see the way that I usually like to break down my projects if it's a layout that's fairly basic like this I
1:49:33
usually will just kind of think about it ahead of time without actually writing it down or putting a bunch of dotted
1:49:39
squares around the elements or anything like that but once you've practiced this enough times a simple layout like this
1:49:44
might take you a total of maybe 10 seconds to think through but in the end could end up saving you a lot of time so
1:49:51
now it's time for us to get your your hands on the keyboard we're going to have a series of challenges which will
1:49:56
help you be the one that actually builds out this project hey there I'm jumping in at this
1:50:04
point to let you know that I've created a very quick figma tutorial throughout this course and many others here on
1:50:11
scrimba we're going to be providing you with a figma design file and I do think you'll find figma fairly intuitive but I
1:50:17
thought it would be a good idea to just record a quick tutorial to help you along the first thing you'll have to do
1:50:22
is go over to figma
1:50:39
docomo I believe if you provide an email and password it will have you go verify your email so it'll send you an email to
1:50:46
verify once you've done that and you come back it will have you choose which kind of plan you want figma has a really
1:50:52
gener generous free tier so I would just start for free you'll click that button down there when it asks you to tell you
1:50:59
about your team you can at this point honestly just say skip this step and then when it says what would you like to
1:51:04
do first I just think it's easiest to say I'll explore by myself and when you do that it's going to drop you into the
1:51:10
figma interface now from that point on I've actually recorded a whole tutorial using the figma program that is now over
1:51:18
on the scrimba YouTube channel so at this point you're going to continue on to YouTube by clicking on the screenshot
1:51:23
here which will take you to the video that I recorded and hopefully that quick introduction to figma will really help
1:51:29
make things easier for you as you use figma as a part of your scrimba coursework so click on the screenshot
1:51:35
you see here head over to YouTube when you've watched that video and you're done you can close that window come back here to scrimba and continue on in this
1:51:45
course let's start by getting some of the project setup out of the way I've written some step-by-step instructions
1:51:51
here in the challenge it is going to be a little bit more involved because we're creating everything completely from
1:51:56
scratch or almost completely from scratch so your challenge is to create a components folder and this components
1:52:03
folder is going to have two files in it the navbar JS file and the main JS file
1:52:08
for now they should just render an H1 that says something like navbar goes here and Main section here then I want
1:52:14
you to create an app component which will be outside of the components folder and have the app component render the
1:52:20
Navar and main components that you just created then inside of this file the index.js you will import the app
1:52:27
component and then use react. render to render that the last step is to go and get the enter Google font specifically
1:52:34
with the weights of 400 600 and 700 once you've selected those font weights you
1:52:39
should see a series of Link tags that you can use to put inside of our index.html make sure to put them above
1:52:47
style.css so that we can reference them in style.css and if you haven't used
1:52:52
gole gole fonts before this one might take a little bit of extra research outside of scrimba here to learn more
1:52:57
about but I know that you can do it fortunately Google fonts makes it relatively easy just know that you can
1:53:02
ignore the at import or any npm options it talks about for installing this font
1:53:08
remember we're not dealing with any kind of styling right now so by the end of this challenge you'll just have a basic white page that just shows Navar here
1:53:15
and Main section here or something like that so pause now and work on this challenge
1:53:27
okay let's just go one step at a time we'll first create a new folder called components and inside components we can
1:53:34
create a new file for main JS and navbar JS as always we will import react from
1:53:43
react and we will export default our navbar function or Navar component and
1:53:50
for now this is just going to return an H1 that let's have it say navbar
1:53:57
component then our main JS is going to be almost identical we'll just copy this
1:54:02
paste it in and instead of Navar component we'll say main component and
1:54:07
we'll call this element the main element okay I'll hit save this is just going to bring up my preview window but that's
1:54:13
still empty so I need to create a new file called appjs and inside of appjs again we'll
1:54:21
import react from RE react we'll also import our navbar component from do/
1:54:28
components slnv bar and we'll do the same thing for main so I'll just duplicate that line and change Navar to
1:54:35
main then this app component we will export directly here with export default
1:54:41
function app and we will just have this return well we want our navbar to be in
1:54:48
here so we'll say Navar and we want our main component it to be in here but I
1:54:53
want you to think for a second what's wrong with the way that I've done this we can see there's a syntax error so what's wrong with the way that I've set
1:54:59
this
1:55:04
up inside of components we can only return a single element that element can
1:55:10
have children elements but right now we're trying to have two sort of side by side components so what we need to do is
1:55:17
wrap those in some kind of container like a div so I'll move this div around
1:55:22
and indent those if you remember from the last screencast we talked about how
1:55:27
this would probably just be set up as a container so we'll give it a class name of container we're not going to deal
1:55:34
with any styling now but I might as well add that class name since I know I'm going to need it okay let's go check out
1:55:40
our Challenge and see where we are so far so I created a components folder I created the navbar and main components
1:55:46
already I created my app component which is rendering the navbar and main components so here we are let's import
1:55:54
and render the app component here I will import app from
1:55:59
slapp oh and I am going to be using some jsx syntax so I also need to import
1:56:05
react from react and in our index JS I will also be using react Dom so I need
1:56:11
to import react Dom from react Dom and then I'll use react dom. render to
1:56:17
render my app component which I just imported and we're going to put it inside of the element with the ID of
1:56:24
root so we'll use document. getet element by ID root and let's hit save and see if we get our elements showing
1:56:31
up on the page awesome navbar component main component just like we expected
1:56:36
okay so that completes this part of the challenge and then the last thing was to go to Google fonts to get the inter font
1:56:42
Hopefully this wasn't too terribly tricky going to Google fonts will give you a couple link elements so I'm just going into my
1:56:49
index.html and above my style.css I will just paste in those link elements you
1:56:54
can see that we have this preconnect to Google fonts this one to gstatic but then this one is for our actual fonts
1:57:01
here you can see the font family is enter and it shows our weights of 400 600 and 700 there again I'm putting this
1:57:08
above my style.css so that inside of my style.css I can reference the font
1:57:13
family of inter and my browser will have already read these other link tags to know exactly what the inter font is okay
1:57:21
let's go back here and we have finished everything from this challenge I'll just do a little bit of cleanup now we did
1:57:28
just cover a lot of ground however every step that we did here was something that you should have already been able to do
1:57:34
maybe with exception to the Google fonts if you've never dealt with Google fonts before so if you did find yourself
1:57:39
struggling to get some of this basic setup done that might be a good signal to you that it's time to go back and
1:57:45
restudy and especially ractice some of the past challenges that we've done instead of just kind of plowing ahead in
1:57:51
this course the reason for that is because I'm essentially going to assume that you understood how this works from
1:57:57
here on and the last thing that I would want for you as your learning react is to just continue on without actually
1:58:03
having learned some of these basic setup principles okay let's jump into maybe something a little more fun and that is
1:58:09
adding some actual styling and elements to our project but before we move on I wanted to give you one more opportunity
1:58:15
to access the figma design file we talked about this much earlier in this section but since it's been in a while I
1:58:22
figured this would be a good reminder if you click on the screenshot here it will take you to the figma file where you can
1:58:27
get access to the design elements for this like the colors the spacing the fonts and everything like that when you
1:58:34
click on this link it will take you to a shared version of this however if you'd like you can avoid seeing everyone
1:58:40
else's cursors and selections by clicking on the little arrow at the top and choosing to duplicate this to your
1:58:47
drafts that'll make it so that you aren't seeing everyone else's cursors and selections but also so that you can
1:58:52
make changes to it if you'd like okay let's do it let's Jump Right In and start working on the navbar portion of
1:58:58
our project okay this is the fun part we're
1:59:04
actually going to make our navigation bar look the way that it looks in the design a couple pieces of advice I
1:59:10
highly recommend you reference the figma file that contains all of the fonts colors spacing and everything instead of
1:59:17
just looking at this quick reference that I've put here but this is meant to be just a quick reference for you if you need it another thing is I have added a
1:59:25
couple of Base styles to our styles.css I ran into some problems trying to record this without putting my box
1:59:31
sizing and just because it helps a lot I'm going to remove the margin on the body especially to make our navigation
1:59:38
bar go all the way to the edges also notice that I have included the react icon small image here inside of the
1:59:46
images folder you can see that's part of the design up here in the upper left so
1:59:52
without further Ado pause the screencast and make the navigation bar look as close to our design as you
2:00:01
can all right let's do this instead of rendering an H1 I'm going to open this up and render a nav element because this
2:00:09
is a navigation bar and inside of there we know we have an
2:00:16
image we'll give it its source while we're here I have to use do slash images
2:00:22
because I'm inside of the components folder when I'm here in the nav bar and it's react icons
2:00:30
small.png let's just refresh and see if that's working okay cool and let's call
2:00:36
this maybe an H3 I guess and maybe this an H4 it really doesn't matter because
2:00:42
well you could just give it a class name and call it a paragraph but I'll just call it an H3 and
2:00:49
H4 this one says react fact and this one says react course- project
2:00:57
one okay refresh that and we've got our elements on the screen now we talked
2:01:02
about earlier how the Navar will probably be a flexbox container so I think because I'm only
2:01:10
going to have one nav element on my screen I'm just going to style the element
2:01:15
nav if you want you could always give it a class name as well I'm going to put display Flex we'll say align items in
2:01:23
the center from the design we can find that the background color is this color
2:01:31
here it also looks like it has about 30 pixels of padding on the top and bottom
2:01:36
and 25 pixels of padding on the left and right and we can also see from the design that it has a height of about 90
2:01:44
pixels okay so it doesn't look like our top and bottom margin is applying and I
2:01:50
suspect that's either because image is a little bit too large or I think maybe
2:01:55
more likely because our H3 and H4 here have some top and bottom margin by
2:02:01
default so I think I might just select the H3 directly inside of the nav let's
2:02:09
say margin is zero and then let's see if that also works for the
2:02:16
H4 okay it might be that the image is just a little too large let's take a look at image and it looks like from the
2:02:23
design it's got a height of about 30 pixels okay so maybe our padding is
2:02:29
doing fine and it was just that the image was a little bit large while we're here dealing with the image I'm going to