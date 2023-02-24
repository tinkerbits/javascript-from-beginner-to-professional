// THE BOM

    // BOM = Browser Object Model
    // This is an element that exposes the browser to your javascript so that your javascript can communicate with the browser.

    // CONSOLE.DIR VS CONSOLE.LOG

        // console.log() prints out a String, even if something is of another typeof.
        // console.dir() recognizes an objects and will represent an object as such; as an (interactive) object with keys and values.

    // CONSOLE.DIR(WINDOW)

        // console.dir(window) will log all the key values of the BOM's window object

        console.dir(window)

        // Most of these values are nested and contain deeper key value pairs

        console.dir(window.history.length)
        console.dir(window.document.location.pathname)

    // PRACTICE EXERCISE 9.1

        console.dir(window)

    // WINDOW.HISTORY

        // The history object contains your browsing history (for this particular browser tab).
        // It has a length attribute that lists how many previous pages were visited in this browser tab.
        // And it has a go() function that you can use to go to the previous or next page.

        console.dir(window.history);
        window.history.go(-1);

        // History has been made a global method so if you want, you can call all this without using "window.":

        console.dir(history);

    // WINDOW.NAVIGATOR

        // Contains info about the Operating System and Browser that is being used.

        console.dir(window.navigator);
        console.dir(window.navigator.userAgentData.platform)

    // WINDOW.LOCATION

        // Contains the URL of the current webbpage.
        // You can modify this info to go to a different page.

    // PRACTICE EXERCISE 9.2

        console.dir(window.location.protocol);
        console.dir(window.location.href);

        // If you modify the value of this href, you force the browser to go to a different webpage.


// THE DOM

    // When a webpage is loaded, the browser created a Document Object Model of its html code. E.g. see https://www.w3schools.com/js/js_htmldom.asp for an example image.
    // The DOM structures the HTML document as a logical tree. This is possible thanks to the structured nature of HTML documents (with opening and closing tags denoting the start and end of distinct elements and sections).
    // The DOM gives javascript the power to interact with the webpage.

    // WINDOW.DOCUMENT

        // console.dir(window.document) renders the DOM into the console.
        // Its a global method so you can access it via console.dir(document) if so desired.

        console.dir(window.document)

// SELECTING PAGE ELEMENTS

    // QUERYSELECTOR()

        // Allows you to select a page element by tag name, class or ID.
        // Will only return the first match; not all matches. For all matches, see further: querySelectorAll().
        // Is a method of the DOM and so it can be used using (window.)document.querySelector()


        console.dir(window.document.querySelector("script"));
        let h1Element = window.document.querySelector("h1");
        console.dir(h1Element);


    // QUERYSELECTORALL()

        // Allows you to select all page elements that match via tag name, class or ID.
        // The following selects all elements with the class "output":

        let allOutputElements = window.document.querySelectorAll(".output");
        console.dir(allOutputElements);

    // PRACTICE EXERCISE 9.3
        // This was done entirely in the browser console using file exercise_9_3.html


    

        



        




    

