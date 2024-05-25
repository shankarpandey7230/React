React is an open source JavaScript library
crafted with precision by Facebook, that aims to simplify the intricate process of building interactive user interfaces. It was created by Jordan Walke one of Facebook's software engineers at Facebook inital release May 29, 2013.

React takes a different approach by letting to build what's known as SPA(single page application). A SPA loads only a single HTML document on first request. Then it updates the specific portion, content or body of the webpage that needs updating using JavaScript.

React relies on a virtual DOM, which is a copy of the actual DOM. Its virtual DOM is immediately reloaded to reflect this new change whenever there is a change in the data state.

<!-- Problems that it solve -->

1. fast Development time
2. clean and maintainable
3. Concern of seperation
4. code splitting
5. huge community
6. learn once use everywhere

<!-- Why REacts -->

.Declarative
.No direct DOM manipulation
.Component base development, build once and use again and again
.One direction data flow
.only UI, learn once build everywhere

<!--Node should be installed before react starts -->

What is JSX?
It is a syntax extension which is similar to template language but it has full power of JS.

Elements : React Elements are the building blocks of React Applications. It describes what we want to see on the screen. React elements are immutable.

NPM Ecosystem:t allows developers to discover, install, and manage third-party libraries and tools needed for their applications.

CLI tools:

1. npm - install any packages
2. npx - execution of packages
3. yarn

Components: Building Blocks of React Applications

can return only one element :
React Fragment:
Only one default export from component

#Props: are use by components to communicate with each other.Parent component can pass some information to its child components by giving them props. They are readable only.Unidirectional data flow
