// Strings
let firstname = prompt("What is your name?")
let doublequotes = "This is a string with double quotes";
let singlequotes = 'This is a string with single quotes';
let backticks = `This is a string with backticks, and it can show variables like: ${firstname}`;

console.log(doublequotes)
console.log(singlequotes)
console.log(backticks)

// Escape Characters
console.log("You can build double-quote strings using \".")
console.log('Wow, that\'s good to know!')
console.log("You can also use \n escape characters to create line breaks and do other fancy stuff.")

// Data Types
let string = "I am a string";
let number = 19;
let bigint = 1234567890123n;
let boolean = true;
let symbol = Symbol("unique");
let undefinedvalue = undefined;
let nullvalue = null;

// Identifying Data Types Using typeof()
console.log(typeof(bigint)); //Alternatively you can also use typeof with a space instead of brackets, as it is technically an operator.
console.log(typeof(nullvalue));


// Converting Data Types //
    // Automatic conversion //
    let firstnumber = 2;
    let secondnumber = "2";
    console.log(firstnumber * secondnumber); //Javascript will convert the string to a number if it can, instead of throwing an error.
    console.log(firstnumber + secondnumber); //But here Javascript will convert the number to a string as it tries to concatenate first.
    // Conclusion //
        // Don't give Javascript the chance to auto-convert as it is confusing and leads to errors. //////

    // Intentional Conversion Using String(), Number() and Boolean() //
    let numberToString = 6
    console.log(String(numberToString))
    console.log(typeof(String(numberToString)))

    let stringToNumber = "9"
    console.log(String(stringToNumber))

    let stringToBoolean = "any string will result in true"
    console.log(Boolean(stringToBoolean))

// ARITHMETIC OPERATORS
    // Addition (& Concatenation)
        let sumValue = 12 + 12;
        console.log(sumValue);
        let concatValue = "hello" + " " + "world";
        console.log(concatValue);
    // Subtraction
        let subtractValue = 10 - 3;
        console.log(subtractValue);
    // Multiplication
        // Javascript can not multiply a string (like you could do in Python like: 5 * "Hello").
        let multiplyValue = 5 * 10;
        console.log(multiplyValue);
    // Division
        let divideValue = 20 / 10;
        console.log(divideValue);
    // Exponentiation
        // This basically means multiplying a value by itself X number of times, where X is the exponent.
        // Dit zijn "machten" in het Nederlands.
        let exponentValue = 3**3;
        console.log(exponentValue);
    // Modulus
        // Calculates the remainder after dividing one number by another number whatever amount of times. Another way of phrasing this is "how many times can one number fit in the other numnber".
        // E.g. 10 % 3 = 1, or 15 % 4 = 3
        let modulusValue = 20 % 6;
        console.log(modulusValue);        
    // Unary Operators
        // Increment
        // "x++"   ===   "x = x + 1"       
        // Decrement
        // "x--"   ===   "x = x - 1"
        // You can also use "++x" and "--x". The difference is that if you do console.log(x++) first the logging happens and after that the incrementation. If however you do console.log(++x) the incrementation happens first and after that the logging takes place.
    // Precedence and Grouping
        // Multiplication and Division take precedence over Addition and Subtraction (just like in normal maths).
        // If there is equal precedence the order of operations is left to right.
        // You can group operations, just like in normal maths, using brackets ( and ).
    // Exercise 2.3
        let adjacentLength = prompt("Adjacent Length:")
        let oppositeLength = prompt("Opposite Length:")
        let exponentHypotenuse = adjacentLength**2 + oppositeLength**2
        console.log(exponentHypotenuse)

// ASSIGNMENT OPERATORS
    // =
        // This is the basic assignment operator.
    // +=
        // x += 5 is a shorthand for x = x + 5
    // **=
        // x **= 3 is a shorthand for x = x**3
    // /=
        // x /= 3 is a shorthand for x = x / 3
    // -=
        // x -= 5 is a shorthand for x = x - 5
    // Exercise 2.4
        let a = 3
        let b = 5
        var c = 7
        let aplusb = a + b
        let adividedbyc = a / c
        var c = c % b        
        console.log(aplusb)
        console.log(adividedbyc)
        console.log(c)
    // Honestly these things are not very important; they save you a few button presses but also reduce readability. So whatevs.
    
