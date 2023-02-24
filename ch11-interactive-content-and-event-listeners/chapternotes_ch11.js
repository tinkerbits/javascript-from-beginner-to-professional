
// EVENT LISTENERS' LOCATION

    // IN HTML

        <div id="dostuff" onclick="magic()">Click Here</div>

    // IN JAVASCRIPT

        // EVENT ATTRIBUTE

            document.querySelector("div#dostuff").onclick = magic();

        // ADDEVENTLISTENER()

            document.querySelector("div#dostuff").addEventListener("click", magic)

            // USING ADDEVENTLISTENER WHILE PASSING ON VARIABLES

                // As you can see in the example above, by default addEventListener() takes a function without its () as second argument. You can therefore not easily pass on variables.
                // The javascript developers saw this common use case and decided to develop the most retarded syntax as solution.
                // Instead of just adding the variable between brackets, you have to create an "anonymous function" and execute your actual function inside that anonymous function. Then you can pass arguments to your actual function:
                // Or alternatively, you can also use an arrow function

                // Anonymous Function
                document.querySelector("div#dostuff").addEventListener("click", function(){ magic(arg1, arg2) })

                // Arrow Function
                document.querySelector("div#dostuff").addEventListener("click", (arg1) => magic(arg1))


// PRACTICE EXERCISE 11.1

    // Completed via files exercise_11_1.html and exercise_11_1.js

// PRACTICE EXERCISE 11.2

    // Completed via files exercise_11_2.html and exercise_11_2.js


// ONLOAD

    // Is triggered when a certain element is loaded.
    // Can be useful, e.g. if you want to select certain elements via querySelector but first need to be sure they're loaded.
    // Most common usage is to put this on the window element however, to know when the entire window is done loading (DOM & assets included)

    function magic(){
        console.log("done loading")
    };

    window.onload = magic();


// DOMCONTENTLOADED

    // Similar to onload but DOMContentLoaded triggers after the DOM is loaded and does not care if the the assets are loaded too.
    // There is no on-version of DOMContentLoaded; you can only add it via addEventListener

    document.addEventListener("DOMContentLoaded", (event) => magic(event))

// PRACTICE EXERCISE 11.3

    // Completed via files exercise_11_3.html and exercise_11_3.js

    // This exercise showed that the document object always completes loading before the window objects.


// MOUSE EVENT LISTENERS

    // OVERVIEW

        let someElement = document.querySelector("div#somediv");

        someElement.ondblclick()  // double click an element
        someElement.onmousedown() // hold mousebutton down on element
        someElement.onmouseup() // release mousebutton from element
        someElement.onmouseenter() // mouse moves onto an element
        someElement.onmouseleave() // mouse leaves an element and its children
        someElement.onmousemove() // mouse moves over an element
        someElement.onmouseout() // mouse leaves an individual element
        someElement.onmouseover() // mouse hovers over an element

// PRACTICE EXERCISE 11.4
    // Completed via file exercise_11_4.html


// EVENT.TARGET

    // You can see an event's properties by using console.dir on the event. E.g:

    square.onmousedown = function(){ changeColour("green", event.target); console.dir(event)}

    // One of these properties is event.target. This is the element that fired the event.

// PRACTICE EXERCISE 11.5
    // Completed via file exercise_11_5.html

// DOM EVENT FLOW

    // EVENT BUBBLING

        // See https://javascript.info/bubbling-and-capturing
        // When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

    // USECAPTURE
        // useCapture is the third argument in addEventListener(). I basically reverse it (so it will go from the outer elemenet to the inner element instead).
        // You can add "true" as the third argument in addEventListener() to turn useCapture on.

    // EVENT DELEGATION
        // This means creating a wrapper (e.g. a div) and adding the event listeners to the wrappers, to that everything inside the wrapper can also user it.


// PRACTICE EXERCISE 11.6
    // Tried to complete this via file exercise_11_6.html (though not super successfully).



// ONCHANGE

    // This event gets triggers when something changes about an element (e.g. an inputfield who's .value changes).

    let inputbox = document.querySelector("input");
    inputbox.addEventListener("change", someFunction);


// ONBLUR

    // In javascript an element is in focus when it is selected (e.g. an inputfield with the cursor in it) and then the cursor moves elsewhere.

    inputbox.addEventListener("blur", someFunction);

// PRACTICE EXERCISE 11.7
    // Completed via file exercise_11_7.html


// KEYBOARD EVENTS

    // OVERVIEW

        window.onkeypress
        window.onkeydown
        window.onkeyup
        

    // EVENT.KEY

        // You can find which particular key was pressed with event.key


// EXERCISE 11.8
    // Completed via file exercise_11_8.html


// DRAG AND DROP ELEMENTS

    // I completed this but then had a crash which wiped my files, and Timeshift did not have these files anymore.
    // In a nutshell; the book does not say much about how to do drag & drop but the principle is as follows:

        // 1) Make an element draggable by adding the draggable="true" attribute in html.
        // 2) You have to detect if the element entered the destination droparea.
        // 3) If the element entered the drop area and it gets dropped, the element should be appended as a childnode to the destination droparea.

        // You can best follow along with the example and the practice exercise 11.9 to fully understand this.


// EXERCISE 11.8
    // Completed via file exercise_11_9.html but the file was lost.


// FORM SUBMISSION

    // I completed this but then had a crash which wiped my files, and Timeshift did not have these files anymore.
    // In a nutshell:

        // ONSUBMIT: this is an event listener that gets triggered when you submit an input with type="submit".
        // ACTION: this is an html attribute that contains the redirect link after submitting the form (action="newurl")
        // WINDOW.LOCATION.SEARCH: this is a subproperty of the window element that contains the current URL's parameters.
        // NEW URLSEARCHPARAMS: this is a method that you can use on a urlparamenterstring (i.e. what window.location.search returns) to extract the parameters. If you store URLSearchParams' return into a variable such as let params, you can then query the parameters via params.get("name") for example.
        

// ANIMATING ELEMENTS

    // This requires position:absolute for an element to work; as it has to move relative to its parent element.

    // SETINTERVAL
        // This is a javascript function, written as setInterval(), which keeps being evaluated until clearInterval() is called.

// PRACTICE EXERCISE 11.11

    // Completed via file exercise_11_11.html
    // Done this partly as its really badly explained in the book.


// CHAPTERPROJECT 1:

    // Done, was some stupid box clicking exercise; see file chapterproject_1_ch11.html
        

// CHAPTERPROJECT 2:

    // Completed via file chapterproject_2_ch11.html

// CHAPTERPROJECT 3:

    // Completed via file chapterproject_3_ch11.html

    











