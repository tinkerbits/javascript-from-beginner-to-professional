// FUNCTIONS

    // You can recognize functions by the () at the end, e.g. array.push() or console.log().


    // INVOKING A FUNCTION

        // You invoke a function by simply writing its name, including the brackets:

        console.log("hello world");


    // WRITING FUNCTIONS

        // SYNTAX

            function sayHello(){
                let yourName = prompt("What is your name?");
                console.log("Hello", yourName, "!");
            };

            // To then invoke this function:

            sayHello();


    // VARIABLES IN FUNCTIONS AND FUNCTIONS IN VARIABLES

            // Variables can be part of functions:
            function sayHelloToJon(){
                let firstname = "Jon";
                console.log("Hi there", firstname);
            }

            sayHelloToJon();

            // Functions can also be stored in variables:
            let anotherGreeter = sayHelloToJon();
            anotherGreeter;
    
    // NAMING YOUR FUNCTIONS

        /* 1) CamelCase
           2) Descriptive (make sure the name conveys what the function does)
           3) Use a Verb (e.g. use "sayHello" instead of "hiThere") */


    // PRACTICE EXERCISE 6.1

        function addTwoNumbers(x, y){
            console.log(Number(x) + Number(y));
        }

        addTwoNumbers(2, 6)

    // PRACTICE EXERCISE 6.2

        descriptions = ["fat", "ugly", "stupid", "smelly", "annoying", "evil"];

        function getName(){
            let givenName = prompt("Give me a name:");
            let randomDescription = (descriptions[Math.floor(Math.random()*descriptions.length)]);
            alert(givenName + " is " + randomDescription);
        };

        getName();

    // PARAMETERS AND ARGUMENTS

        // Parameters are added between the brackets and separated by commas:

        function greetYou(firstname, lastname){
            alert("Hello there " + firstname + " " + lastname);
        };

        greetYou("Jon", "Burke");
        greetYou("Julia", "Murschel");

        // Parameters and arguments are pretty much the same thing; the name is parameter when we're talking about the definition arguments and argument when we're talking about the actual values. E.g.:
        // firstname and lastname are parameters
        // "Jon" and "Burke" are arguments


    // PRACTICE EXERCISE 6.3

        function calculateStuff(x, y, operation){
            switch(operation){
                case "add":
                    console.log(x + y);
                    break;
                case "subtract":
                    console.log(x - y);
                    break;
                case "multiply":
                    console.log(x * y);
                    break;
                case "divide":
                    console.log(x / y);
                    break;
            }
        }

        calculateStuff(2, 3, "add");
        calculateStuff(100, 25, "divide");


    // DEFAULT ARGUMENTS

        // You can add default values like so:

        function addTwoNumbers(x=2, y=3){
            console.log(x+y);
        }

        // In this case, if the function is called with no arguments it will used thed default arguments and log 5.
        // But if you do provide arguments you'll override the default arguments.
        // If you only provide one argument, it will override only the first default argument.

        addTwoNumbers();
        addTwoNumbers(7);
        addTwoNumbers(7, 6);


    // SPECIAL FUNCTIONS AND OPERATORS

        // ARROW FUNCTIONS

            // SYNTAX
                // (param1, param2) => {body of the function}
                let sumOfTwoNumbers = (x, y) => console.log(x+y);
                // Arrow functions must be stored in a variable to run them.
                // You invoke them with their variablename followed by brackets:
                sumOfTwoNumbers(8, 9);
                // As Arrow Functions are more concise to write, they are usually used to write functions that contains only a single statement (though you can add more statements if you want).


                // If there is only one argument, the brackets can be omitted:
                let insultMe = name => console.log(name + ", you're a twat.");

                insultMe("Jon");

                // If there are no arguments, you need to put empty brackets:
                let insultAnyone = () => console.log("No matter who you are, you're a twat.");

                insultAnyone();

                // You can combine arrow functions with other built-in functions. E.g. this for-each loop will iterate over the array and log each entry to the console:

                let historicFigures = ["Caesar", "Alexander The Great", "Cleopatra", "Napoleon"];

                historicFigures.forEach(e => console.log(e));

        // SPREAD OPERATOR

            // SYTNAX
            // ...arrayname

            // This spreads out the elements of an array into new elements of another array or into arguments of a function:

            // Into A New Array:
            let sc2Players = ["MaxPax", "Clem", "Serral", "Reynor"];

            let greatestSc2Players = ["Maru", "Dark", "Rogue", ...sc2Players, "TY", "SOS"];

            console.log(greatestSc2Players);

            // Into Functions Arguments:
            let someNumbers = [3, 6];

            function multiplyTwoNumbers(x, y) {
                console.log(x*y);
            };

            multiplyTwoNumbers(...someNumbers);


        // REST OPERATOR

            // SYNTAX
            // ...parametername

            // This allows you to allow 'unlimited' arguments into a function (similar to *args in python).
            // The rest operator generates a list, over which you can then iterate (e.g. witha  for-of loop) to get the additional arguments.

            function addALotOfNumbers(x, ...y){
                totalsum = x;
                for(let number of y){
                    totalsum = totalsum + number
                };
                console.log(totalsum);
            };

            addALotOfNumbers(3,4,5,6,7,8);

    // RETURNING FUNCTION VALUES

        // SYNTAX
        function addNumbers(x, y){
            return x + y;
        };

        // PRACTICE EXERCISE 6.4

        resultArray = [];

        function addSomeNumbers(x, y){
            return x + y
        };

        for(let i = 0; i < 10; i++){
            let response = addSomeNumbers(i*5, i*i);
            resultArray.push(response);
        };

        console.log(resultArray);

        // RETURNING WITH ARROW FUNCTIONS

            // If it's a oneliner you don't need to use return. E.g. the return value will be store in the 'result' variable in the example below:

                let addTheseNumbers = (x, y) => x + y;
                let result = addTheseNumbers(2, 3);

            // If its a multilines you have to use return:

                let addThoseNumbers = (x, y) => {
                    console.log("adding some numbers");
                    return x + y;
                };
                let result_ = addThoseNumbers(2, 3);

    // VARIABLE SCOPE IN FUNCTIONS

        // LOCAL VARIABLES: LET AND VAR AND CONST

            // Local variables are only in scope in the function where they are defined.
            // Both let and var are local variables, but let is block scoped (block = the part between {}-braces) while var is function scoped.
            //
            function outerFunc(){

                if(true){
                    let someValue = 10;
                };

                console.log("I have " + someValue + " siblings.");
            };

            //outerFunc();

            // This will result in a reference error because someValue's scope is limited to the if-statements' {} section. So the console.log out of that block does not have access to it.

            // Const also has block scope, just like let does.

        // GLOBAL VARIABLES: LET AND VAR AND CONST
            // These are accessible everywhere
            // They have lower priority than local variables when name-clashing. E.g. in the example below the console.log wil print 5, not 10:

            let friendCount = 10;

            if(true){
                let friendCount = 5;
                console.log(friendCount);
            };
            
            // To avoid confusion it is best to use the same name for different variables though.

        // SUMMARY: LET AND VAR AND CONST

            // let = temporary and block localscope
            // var = temporary and function localscope
            // const = permanent and block localscope

        // DECLARING VARIABLES WITHOUT A KEYWORD

            // You can declare a variable without using let, var or const. If you do, Javascript will assume it is a global variable, even if defined inside a function. E.g:

            if(true){
                favouriteSC2Player = "MaxPax";
                console.log("Logging from inside the function: " + favouriteSC2Player);
            };
            
            console.log("Logging from outside the function: " + favouriteSC2Player);

            // This will work just fine, because favouriteSC2Player is declared without keyword and therefore a global variable. It is therefore accessible outside of the block or function too.

    // IIFE ("IMMEDIATELY INVOKED FUNCTION EXPRESSION")

        // An IIFE is a function that is declared and immediately executed too.

        // SYNTAX
            // It is basically a function that is surrounded by brackets, and then followed by another pair of brackets.

            
            (function () {
                console.log("IIFE!");
            })();
            

            // You don't have to give a name to this.

        // ARROW IIFE

            // You can even create an IIFE of an arrow function:

            (() => {
                console.log("ARROW IIFE!");
            })();

    // PRACTICE EXERCISE 6.5

        let thousand = "1000";

        (function(){
            thousand = "1.000";
            console.log(thousand);
        })()

        let result__ = (function(){
            thousand = "1,000";
            return thousand
        })();

        console.log(result__);

        (function(x){
            thousand = x;
            console.log(thousand);
        })(2);

    // RECURSIVE FUNCTIONS

        // Recursive functions are functions that contain themselves. E.g.:
            function printNumber(startnum){
                console.log(startnum);
                printNumber(++startnum);
            };
            // printNumber(3); // COMMENTED OUT AS THIS KEEPS RUNNING INFINITELY
        // This will infinitely keep adding onto the starting number in the console (or until the browser runs out of memory / stack size.)
        // Whenever you use a recursive function you might instead use a loop. Loops are faster and allow you to use break / continue (which are not usable in functions).

        // PRACTICE EXERCISE 6.6

            function buildFactorial(number){

                if(number > 0){
                    console.log(number*(number-1));
                    buildFactorial(--number);
                }else if(number === 0){
                    console.log("DONE");
                }
            };
            buildFactorial(5);

    // NESTED FUNCTIONS

        // You can nest functions inside other functions:

        function gbpeurValuePredictor(rate){
            predictionString = `The current GBP/EUR rate is ${rate}, `
            function upOrDown(){
                zeroOrOne = Math.round(Math.random());
                console.log(zeroOrOne);
                if(zeroOrOne === 0){
                    console.log(predictionString + "which is worse than yesterday.");
                }else{
                    console.log(predictionString + "which is better than yesterday.");
                };
            };
            upOrDown();  
        };

        gbpeurValuePredictor(1.13);

        // Note that local variables from the outer function will be available in the inner functions, but local variables from the inner functions won't be available in the outer function.

        // PRACTICE EXERCISE 6.7

            function countDowner(startValue){
                console.log(startValue);
                if(startValue < 1){
                    return
                }else if(startValue => 1){
                    countDowner(--startValue);
                };
            };
            countDowner(10);

    // ANONYMOUS FUNCTIONS

        // By storing them in variables you can get away with not naming a function. Such functions are called "Anonymous Functions":

        // SYNTAX
             
            let functionVariable = function(){
                console.log("hello world");
            };

            // To then call this function, you use the variable name followed by (). E.g:

            functionVariable();

            // Storing functions as variables may seem useless but it gives us powerful options, such as passing functions as parameters (which we call "callbacks" in jacascript).


        // PRACTICE EXERCISE 6.8
            
            let printArgument = function(argument){
                console.log(argument);
            };
            
            printArgument("yooo whatsup");


            function printArgumentToo(argument){
                console.log(argument);
            };

            printArgumentToo("yeeep mate");
            