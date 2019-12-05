# Javascript
- You know most of JS, time to learn the browser stuff
- In the browser, JS is all of the action of a page
- The DOM, document object model, is a tree that contains every html element
- it is provided by the browser for interacting with the page
- the root of the tree goes in a variable called document
- we can search the tree using document.findElementById('id') with the value of an if attribute
- we can search the tree with document.findElementsByTagName('tag name') to search by html tag
- search by document.findElementsByClassName('classname') to search by class attribute
- search with document.querySelector('css selector') to search with any css selector
- all of these methods return a node object that contains all the attributes from the html tag
- on an element returned by one of the above, we can set its innerHTML or innerText property
- anything we put in innerHTML will be rendered as html if it is valid tag names
- this is dangerous and how you get HTML injection
- so only use innerText, this will set whatever you put in a text string between the begin and end tags
- if you want to make a new element document.createElement('tag-name')
- if you want to add it to the tree oldelement.appendChild(new element)
## Events
- events are things that, generally, the user does on a webpage
- we want to react to things, so we can be the action of the page
- events are things onClick, onChange, onMouseOver, onBlur
- we can take a node and addEventListener(eventname, function to run)
- best practice is to add eventListeners in your external file, not to have the JS functions be on attributes
- we can call event.preventDefault() in the event Listener callback function, to stop whatever the event noramlly does(useful for forms which refresh the page by default)
## Fetch
- for Friday
## Tutorial Links
- do all of JS HTML DOM, JS BROWSER BOM, and the JS examples we didnt already cover ( but you can get practice doing things we covered as well)
- https://www.w3schools.com/js/js_htmldom.asp