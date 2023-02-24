
//BASIC DOM TRAVERSING

    // CHILDREN

        // Returns an HTMLCollection of all the childnodes of the current HTML node.
        // An HTMLCollection is a collection of document elements. HTMLCollection items can be accessed by their name, id, or index number.

        // You need this to get to the actual content of the body tag. E.g. this will not work (i.e. it will return undefined):
            console.dir(document.body.h1);

        // However, using the children property you can access the body's content by calling the next element (e.g. <div id="forest"></div>) by its ID.
            console.dir(document.body.children.forest);

        // You can not use the tagname. So this will also not work:
            console.dir(document.body.children.div);

        // Every new node level you descend into, you have to use the children property again. So for example, to find the treasure:

            console.dir(document.body.children.forest.children.tree2.children.shrubbery.children.treasure);

    // CHILDNODES

        // Returns a NodeList (i.e. similar to an array) of all the HTML, Text and Comment childnotes of the current HTML nodes.
        // A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes). NodeList items can only be accessed by their index number.
        // Is therefore similar to CHILDREN but more complete and slightly more difficult to work with.

            console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].childNodes);

        // You can combine children and childnotes attributes of course:

            console.dir(document.body.children.forest.childNodes[3].children.shrubbery.childNodes);


    // PARENTELEMENT

        // While CHILDREN and CHILDNODES allow you to descend into the DOM, PARENTELEMENT allows you to ascend in it.
        // E.g. the following will return body, as we're first descenting (via CHILDREN) and then ascending again (via PARENTELEMENT):

            console.dir(document.body.children.forest.parentElement);

    // PREVIOUSELEMENTSIBLING

        // We can also traverse the DOM sideways; previousElementSibling will select the previous sibling.
        // E.g. the following will give us tree1:

            console.dir(document.body.children.forest.children.tree2.previousElementSibling);

        // previousElementSibling will only select HTML elements. If you also want to be able to select any type of sibling, you can use previousSibling.

    // NEXTELEMENTSIBLING

        // nextElementSibling will select the next sibling.
        // E.g. the following will give us tree2:

        console.dir(document.body.children.forest.children.tree1.nextElementSibling);

        // nextElementSibling will only select HTML elements. If you also want to be able to select any type of sibling, you can use nextSibling.

    // PRACTICE EXERCISE 10.1
        // This was done in the browser using exercise_10_1.html



// SELECTING ELEMENTS

    // You can just select elements by omitting the console.dir().
    // E.g.:

    let forestEl = document.body.children.forest


    // INNERTEXT

        // This this retrieves the text between the opening and closing tags of an HTML element.
        // You can use to update this inner text:

            //forestEl.innerText = "This is a big forest";

        // This will overwrite all existing inner contents (text or html) of the element.

    // INNERHTML

        // This retrieves the html between the opening and closing tags of an HTML element (including the text, as that counds as HTML too);

            console.dir(forestEl.innerHTML);

        // You can of course also use this to update / overwrite the innerHTML.

// ACCESSING ELEMENTS IN THE DOM

    // GETELEMENTBYID()

        // You can access a single element by its ID with the getElementsByID() method.

            document.getElementById("two");

        // If multiple elements have the same ID (which should not happen as IDs should be unique), this method only returns the first matching element.

    // GETELEMENTSBYTAGNAME()
    
        // This returns an HTMLCollection array of elements of the matching tag name.

            document.getElementsByTagName("div");

    // ITEM()

        // This returns a single item using the item's index as parameter:

            document.getElementsByTagName("div").item(1);

    // NAMEDITEM()

        // This returns a single item using the item's ID as parameter:

            document.getElementsByTagName("div").namedItem("one");

    // PRACTICE EXERCISE 10.3

        // This was done in the browser using exercise_10_3.html

    // GETELEMENTSBYCLASSNAME()

        // Returns an HTMLCollection with all the elements that match in class name.

        document.getElementsByClassName("js-loggable");

    // PRACTICE EXERCISE 10.4

        // This was done in the browser using exercise_10_4.html    


    // QUERYSELECTOR()

        // This takes a CSS selector as argument.
        // This is very powerful and allows you to select elements in the same way you would select them in a CSS document.
        // E.g. the following will return the first paragraph with classname 'muted':

        document.querySelector("p.muted");

        // querySelector() will only return the first match. If you want to have all matches returned, use querySelectorAll().

    // QUERYSELECTORALL()

        // Returns all elements that match the provided CSS selector.
        // E.g. this will return all paragraphs with classname 'muted':

        document.querySelectorAll("p.muted");

    // PRACTICE EXERCISE 10.5

        // This was done in the browser using exercise_10_5.html

    // PRACTICE EXERCISE 10.6

        // This was done in the browser using exercise_10_6.html

    // ONCLICK

        // Onclick does something when the element is clicked.
        // E.g.
            <div id="one" onclick="alert('Stop Clicking Here!')">
                Do not click here!
            </div>
            </body>

        // Or with a function:
            <body>
                <script>
                    function stop(){
                        alert('Stop Clicking Here!')
                    }
                </script>
                <div id="one" onclick="stop()">
                    Do not click here!
                </div>
            </body>

        // Finally, apart from using onclick in your HTML (as shown in the examples above), you can instead also use it in your Javascript
        function stopAgain(){
            alert('I told you to stop clicking here!');
        }
        document.getElementById("one").onclick("") = stopAgain();


    // THIS

        // The this keyword, when used in the context of DOM manipulation, refers to the element on the DOM.
        // E.g. the following will alert the element itself:
            <div id="two" onclick="alert(this)">
                What is this element?
            </div>
            </body>


        // The alert will show: <div id="two" onclick="alert(this)">What is this element?</div>
        // Or you could even do alert(this.parentElement) and it would log the parent body element.
        // this is very helpful as you can pass the element on as an argument in an onclick function (e.g. onclick="stop(this)" and then work with the element in your function.)
        // this is commonly used in submit buttons to read the and modify the data that was submitted.


    // PRACTICE EXERCISE 10.7
        // This was done in the browser using exercise_10_7.html and exercise_10_7.js

    
    // STYLE

            <body>
            <script>
                function hideStuff(id){
                    let ptohide = document.querySelector(`#${id}`);
                    if(ptohide.style.display === "none"){
                        ptohide.style.display = "block"
                    }else{
                        ptohide.style.display = "none"
                    };
                }
            </script>
            <button onclick="hideStuff('invis')">Disappear</button>
            <p id="invis">This text will be hidden.</p>
            </body>

    // CLASSLIST

        // ADD()

            // We can easily add a class to an element:

            let mushdiv = document.querySelector("div#mushroom");
            mushdiv.classList.add("fungus");

        // REMOVE()

            // To remove a class:

            mushdiv.classList.remove("fungus");

        // TOGGLE()
            
            // Toggling means removing a class if it exists, but adding it if it doesn't exist.

            mushdiv.classList.toggle("fungus");

    // SETATTRIBUTE()

        // In addition to modifying styles and classes, we can actually update any attribute on an element with setAttribute();
            
        mushdiv.setAttribute("style", "background-color: blue; border: 1px");

        // If you want, you can also update the style and class attributes with setAttribute (instead of using .style or .classList).


    // PRACTICE EXERCISE 10.8

        // This was done using exercise_10_8.html


// EVENT LISTENERS ON ELEMENTS

    // Events are things that happen on the website; a user action, a change in the DOM, ...

    // EVENT LISTENERS IN HTML

        // This is done using the "on" attributes, e.g. onclick, onload, etc.
        
        <div id="alerter" onclick="sendAlert()"></div>

        // The disadvantage of adding event listeners in the HTML directly is that a single element can only have a single listener attribute. You cannot add onclick= and onmouseover= on the same element for example.
        
    // EVENT LISTENERS IN JAVASCRIPT

        // ADDEVENTLISTENER()

            function changeBGColor(){
                document.querySelector("body").style.backgroundColor = "#141414"
            };

            let alerterDiv = document.querySelector("div#alerter");

            alerterDiv.addEventListener("click", changeBGColor);

            // Note that we use the same naming for the listeners as in HTML, but without the "on" prefix. So onclick becomes click and onload becomes load.

        // .ONLOAD

            // Alternatively we can also the builtin eventlistening attribute like so:

            window.onload = function(){
                // Do something cool
            };

            // This builtin attribute is constantly listening to see if its being triggered; bit like a Reddit feminist.


            
    // PRACTICE EXERCISE 10.9
        // This was done using exercise_10_9.html

// CREATING NEW ELEMENTS
    
    let newEl = document.createElement("p");
    newEl.innerText = "I'm new!";
    document.body.appendChild(newEl);

    // This will add this new paragraph as a new child to the body element.
    // You can also choose to add it as a child to a different element of course.

    // PRACTICE EXERCISE 10.10
    
        
    


        
        



            





        









