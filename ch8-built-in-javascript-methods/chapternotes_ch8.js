// CHAINING METHODS / FUNCTIONS

    // As you probably know, you can chain methods and functions, such as:

    console.log(Math.round(Math.random()));

    // You can usually best write / understand these by starting to write / read them from the inside to the outside.


// GLOBAL METHODS

    // These are methods that don't require you to write the classname when invoking them.
    // The javascript developers chose the methods they thought most useful to turn them into global methods (leading to a slightly arbitrary selection).
    // E.g. isNaN, a global method that checks if something is "not a number" works just as well with or without writing the Number class first:

    console.log(Number.isNaN(7));
    console.log(isNaN(7));

    // MODIFYING STRINGS

        // ENCODING AND DECODING URIS 

            // These are really useful to patch up URIs (aka URLs) with invalid syntax (such as spaces).

            let uri = "https://www.vilanovella.com/archive/post/ 5 /";
            
            let encodedone = encodeURI(uri);
            let decodedone = decodeURI(encodedone);

            console.log(`Encoded: ${encodedone}`);
            console.log(`Decoded: ${decodedone}`);

        // ENCODING AND DECODING URI COMPONENTS

            // encodeURI() and decodeURI() will skip characters that are ok in urls, such as / or & or ? or :
            // Ocassionally you want to encode a string (perhaps to later use it as parameter in a url) and need special characters to get encoded too.

            let weirdURIComponent = '&this-string/is actually full_of : strange characters';
            
            let encodedComponentOne = encodeURIComponent(weirdURIComponent);
            let decodedComponentOne = decodeURIComponent(encodedComponentOne);

            console.log(encodedComponentOne);
            console.log(decodedComponentOne);

            // In the past there were also escape() and unescape() to encode and decode strings but these methods are now depreciated and should not be used.

        // PRACTICE EXERCISE 8.1

            let howsItGoing1 = "Hows%20it%20going%3F";
            let howsItGoing2 = "How's it going?"

            console.log(`howsItGoing1 decoded: ${decodeURIComponent(howsItGoing1)}`);
            console.log(`howsItGoing2 encoded: ${encodeURIComponent(howsItGoing2)}`);


        // STRING TO INTEGER WITH PARSEINT()

            let six_str = "6";
            let six_int = parseInt(six_str);
            console.log(`Type of six_int is ${typeof(six_int)}.`);

            // parseInt() is a global method; it actually belongs to the Number() class. So if you want you can also invoke it like Number.parseInt().
            // parseInt does not like to throw errors; it will just stop processing as soon as it finds a character that can't possibly be an integer.
            // E.g. string "7.6" will result in 7, because parseInt() stops when it finds the . in "7.6". And string "0b101" gets converted to 0 because parseInt() stops as the b in "0b101".
            // If parseInt() doesn't find any numbers at all it will just return a NaN.

        // STRING TO FLOAT WITH PARSEFLOAT()

            let sevenPointSix_str = "7.6";
            let sevenPointSix_float = parseFloat(sevenPointSix_str);
            console.log(`Type of sevenPointSix_float is ${typeof(sevenPointSix_float)}.`);

            // This works pretty much the same as parseInt() except that it will not stop when it meets a sinngle . in the string. It will however stop should it find a second . or any other non-floaty character.
            // When the string is "6.0" or "7.0" or so, parseFloat() will convert it to a 6 or 7, not to a 6.0 or a 7.0. It only adds decimals when needed.


        // EXECUTING JAVASCRIPT WITH EVAL()

            // You can execute javascript directly in your code with eval(). 
            // It's almost never appropriate to use eval though as it creates great security risks (code injection).
            // Because of the big risk, javascript developers also call this method evil() instead of eval().

    // WORKING WITH ARRAYS

        // FOREACH()

            // The forEach() method does something for each item in an array. A bit like the For Of method really.
            // forEach() takes a function as argument and will execute that function on each element.
            // The function can take the element as first argument and the element's index as second argument.

            let bestProtossPlayers = ["MaxPax", "Hero", "Zest", "MC"];

            function printStuff(element, index){
                console.log(`- ${element} sits at position ${index} in this array.`);
            };

            bestProtossPlayers.forEach(printStuff);

        // FILTER()

            // Runs a function on each element of a list, and stores each element for which the function returns true into a new list variable.

            function nameStartsWithM(element, index){
                return element.startsWith('M');
            }

            let bestProtossPlayersStartingWithM = bestProtossPlayers.filter(nameStartsWithM);
            
            console.log(bestProtossPlayersStartingWithM);

        // EVERY()

            // Checks if all elements of a list meet a certain condition.

            console.log(bestProtossPlayers.every(nameStartsWithM));

            // The example above will return false since not all the bestProtossPlayers have their name starting with M.

        // COPYWITHIN()

            // Replaces one part of an array with another part of that same array.

            let duplicateProtossPlayers = bestProtossPlayers.copyWithin(2, 0, 2);
            console.log(duplicateProtossPlayers);

            // The first argument is the starting position of elements to replace, the second argument is the starting position of elements to replace them with, and the third argument is the end position of elements to replace them with.

        // MAP()

            // map() works similar to forEach(); it runs a function on each element of a list. However map() returns a new list while forEach() modifies the elements in the original list (and does not return anything).

            let numberArray = [1, 2, 3, 4];
            let newNumberArray = numberArray.map(x => x*2);
            console.log(newNumberArray);

        // LASTINDEXOF()

            // You can find the last index of a certain element in a list with lastIndexOf()
            console.log(bestProtossPlayers.lastIndexOf('MaxPax'));
            console.log(bestProtossPlayers.indexOf('MaxdPax'));

            // lastIndexOf() will give you the index of the last element that matches the search value, while indexOf gives you the index of the first matching element.
            // If either of them can't find any matches they will return -1.


    // PRACTICE EXERCISE 8.2

        let startingArray = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];

        function indexCompare(element, index){
            startindex = startingArray.indexOf(element)
            return index === startindex
        }

        let uniqueValueArray = startingArray.filter(indexCompare);
        console.log(uniqueValueArray);

    //  PRACTICE EXERCISE 8.3

        let arrayOfNumbers = [7, 4, 2, 9, 1, 5];
        let doubleAllNumbers = function(array){
            let doubled = array.map(x => x*2)
            return doubled;
        };

        console.log(doubleAllNumbers(arrayOfNumbers));

// WORKING WITH STRINGS

    // CONCAT()

        // Concatenates two strings.
        
        let string1 = "Hello ";
        let string2 = "World!";
        console.log(string1.concat(string2));

    // SPLIT()

        // This splits a string up into an array, using the separator of your choice.

        let greetStr = "Hello there, how are you?";
        let greetArr = greetStr.split(' ');
        console.log(greetArr);


    // JOIN()

        // Does the opposite of split(); this joins elements of an array together into a string.
        let sameButDifferentGreetStr = greetArr.join(' ');
        console.log(sameButDifferentGreetStr);

        // If you don't specify a separator it will add commas.
        // If you want no separator you can specify an empty quotes.

    // INDEXOF()

        // You may remember indexOf() as a method to find the index of a string in an array.
        // However indexOf() can also find the index of a substring in a string.

        let quote = "Enkel de zon gaat voor niets op.";
        let indexZon = quote.indexOf('zon');
        console.log(indexZon);

        // It returns -1 if it can not find the substring.

    // SEARCH()

        // Alternatively you can use search() to look for a substring inside a string:

        let searchResult = quote.search('zon');
        console.log(searchResult);

        // Search behaves in the same way as indexOf(); it will return the index of the substring or a -1 if the substring could not be found.

        // However, search() has one superpower which indexOf() lacks; it can take a regex as argument:

        let fourLetterWordRegex = /n\w{4}/;
        let regexSearchResult = quote.search(fourLetterWordRegex);
        console.log(regexSearchResult);

        // One last thing to note: search() is slower than indexOf() so if you only need to search a substring, it's better to use indexOf().

    // LASTINDEXOF()

        // Returns the index of the last occurance of a substring in a string.

        let zonZienZakken = "Ik heb de zon zien zakken in de zee. Ik heb de zee zien zonnen in de zak. Ik heb de zak zien zeeen in de zon.";
        let lastIndexOfZak = zonZienZakken.lastIndexOf('zak');
        console.log(lastIndexOfZak);

    // CHARAT()

        // Takes an index as argument and returns which character is at that index.
        
        let char85 = zonZienZakken.charAt(85);
        console.log(char85);


    // SLICE()

        // slice() - not to be confused with splice() - allows you to make substrings.

        let substring = zonZienZakken.slice(85, 88);
        console.log(substring);

    // REPLACE()

        // replace() looks for a substring in a string and replaces its first occurance with another substring.

        zonZienMutsen = zonZienZakken.replace('zakk', 'muts');
        console.log(zonZienMutsen);

        // By default replace() will only replace the first occurance of a substring in a string.
        // If instead you want to replace all occurances, use replaceAll()

    // REPLACEALL()

        // replaceAll() replaces all occurances of a substring in a string with another substring.

        solZienMutsen = zonZienMutsen.replaceAll('zon', 'sol');
        console.log(solZienMutsen);

    // TOUPPERCASE()

        // Changes a lowercase string to an uppercase one.

        console.log("hi there".toUpperCase());

        // To make just the first letter of the string upper case, you could use the charat() method we saw earlier to capitalize the first letter and then slice() to add the remaining string.

        let sayHi = "hi, how are you?"

        let sayHiCapitalized = sayHi.charAt(0).toUpperCase() + sayHi.slice(1)

        console.log(sayHiCapitalized);

    // TOLOWERCASE()

        // Changes an uppercase string to a lowercase one.

        console.log("YOOO WHATSUP".toLowerCase());

    // STARTSWITH()

        // Checks if a string string starts with your argument (evaluates to a true or false).

        console.log(sayHiCapitalized.startsWith('Hi'));

        // startsWith() is case sensitive. So the below will return false:

        console.log(sayHi.startsWith('Hi'));

    // ENDSWITH()

        // Checks if a string ends with a certain substring.

        console.log(sayHiCapitalized.endsWith('?'));


// PRACTICE EXERCISE 8.4

    // CAMELCASER

    function camelCaser(stringarg){
        stringarg = stringarg.toLowerCase();
        let wordArr = stringarg.split(' ');
        let camelArr = [];
        for(let word of wordArr){
            
            let firstLetter = word.charAt(0);
            firstLetter = firstLetter.toUpperCase();
            let remainingLetters = word.slice(1);
            let newWord = firstLetter.concat(remainingLetters);
            camelArr.push(newWord);
        }
        console.log(camelArr.join(' '));        
    };

    camelCaser('you ARE doING so WEll, kEEp It UP my frieND!');

    // VOWEL TO NUMBER

    function vowelToNumberConverter(stringarg_){
        stringarg_ = stringarg_.toLowerCase();
        vowelArr = ['a', 'e', 'i', 'o', 'u'];

        for(let letter of stringarg_){
            let letterIndex = vowelArr.indexOf(letter);
            if(letterIndex > -1){
                stringarg_ = stringarg_.replaceAll(letter, String(letterIndex)); //this takes precedence over the more global stringarg_ argument declared in the beginning of the function. This way we can keep updating on the previously updated stringarg_ instead of having to start from the default stringarg_ everytime.
            };
        };

        console.log(stringarg_);
    }

    vowelToNumberConverter('I love JavaScript');
    vowelToNumberConverter('Ik heb de zon zien zakken in de zee');

// WORKING WITH NUMBERS

    // ISNAN()

        // Checks if something is NOT a number.
        // So it returns true if something is a number and false if something is not a number.

        console.log(isNaN(5));
        console.log(isNaN('hi'));

        // Because javascript "is soooo forgiving", it will see "5" as a number and not as a string. So isNaN() will return a false here:

        console.log(isNaN("5"));

    // ISFINITE

        // Checks if something is a finite number.

        console.log(isFinite(3));
        console.log(isFinite(3.333));
        console.log(isFinite('hi'));
        console.log(isFinite(10/0));

    // ISINTEGER

        // Checks if something is an integer.

        console.log(Number.isInteger(3));
        console.log(Number.isInteger(3.333));

        // isInteger is not a global method and so, as it is part of the Number() class we must declare it as a method of the Number() class.

    // TOFIXED()

        // Lets you control how many decimals are shown.

        let satan = 20/3;
        console.log(satan);
        let shortSatan = satan.toFixed(2);
        console.log(shortSatan);

    // TOPRECISION

        // Similar to toFixed(), this lets you set the total number of numbers (includes the ones before and after the decimals).

        let mediumSatan = satan.toPrecision(5);
        console.log(mediumSatan);

// WORKING WITH MATHEMATICS

    // MATH.MAX()

        // Math.max() gives you the highest number out of a list of numbers. E.g. the following will log 34:

        console.log(Math.max(2, 5, 9, 34, 22, 12));


    // MATH.MIN()

        // Math.min() gives you the lowest number out of a list of numbers. E.g. the following will log 2:

        console.log(Math.min(2, 5, 9, 34, 22, 12));


    // MATH.SQRT()

        // This has nothing to do with squirting and instead gives you the square root of a number.

        console.log(Math.sqrt(64));
        console.log(Math.sqrt(36));

    // MATH.POW()

        // This lets you raise a number to the power of x.

        console.log(Math.pow(8, 2));
        console.log(Math.pow(5, 3));

    // MATH.ROUND()

        // Math.round() rounds numbers according to the math rules (so .4 or less is rounded down and .5 or more is rounded up) to give you an integer.

        console.log(Math.round(3.6));
        console.log(Math.round(2.2));

    // MATH.FLOOR()

        // Math.floor() rounds down to give you an integer.
        console.log(Math.floor(3.6));
        console.log(Math.floor(2.2));


    // MATH.CEIL()

        // Math.ceil() rounds up to give you an integer.
        console.log(Math.ceil(3.6));
        console.log(Math.ceil(2.2));
        console.log(Math.ceil(-6.5)); // This is a bit tricky with negative numebrs. Math.ceil(-6.5) will log -6, not -7, since ceil() rounds up and -6 is higher.

    // MATH.TRUNC()

        // Gives you the number without any of its decimals
        console.log(Math.trunc(3.6));
        console.log(Math.trunc(2.2));
        // In effect, for positive numbers this will always give the same result as Math.floor()
        // But for negative numbers, floor() will round to a lower negative number than trunc() will. Instead, with negative numbers, trunc() will always give the same outcome as ceil().
        console.log(Math.floor(-6.5)); //logs -7
        console.log(Math.trunc(-6.5)); //logs -6

    // MATH.EXP()

        // Not sure how this works; if you put in 2 this will log 7.38something to the console for whatever reason. Oh well, which I had had a decent math teacher in high school.

        console.log(Math.exp(2));

// PRACTICE EXERCISE 8.6

    // 1
    console.log(Math.PI);

    // 2
    console.log(Math.ceil(5.7));
    console.log(Math.floor(5.7));
    console.log(Math.round(5.7));
    
    // 3
    console.log(Math.round(Math.random()*100000));

    // 4
    console.log(Math.floor(Math.random()*10));

    // 5
    console.log(Math.floor(Math.random()*10)+1);

    // 6
    console.log(Math.floor(Math.random()*100)+1);

    // 7
    console.log(Math.round(Math.random()*(15-5)+5)); // This will only generate numbers between 15 and 5. So use this kind of notation to set a range for your random number.


// WORKING WITH DATES


    // NEW DATE()

        // Despite being called date, this will log the current datetime to the console.
        console.log(new Date());

        // You can also specify which date you want
        console.log(new Date(2023,5,5)); // This will log 2023 Jun 05, but because we start counting months at 0 the second digit (the month) is a 5 instead of a 6.

    // NOW()

        // This retuns the datetime in unix epoch format. Basically this is the number of milliseconds that has passed since January 1 1970 midnight.
        console.log(Date.now());

    // GETDAY() / GETDATE() / GETMONTH() / GETFULLYEAR() / GETSECONDS() / GETMILLISECONDS() / GETTIME()

        // You can limit new Date()'s output with these methods:

        let dt = new Date();
        console.log(dt);
        console.log(dt.getFullYear());
        console.log(dt.getTime());

        // getTime() basically does the same as now, except that getTime() works on a dateobject while now() is a method of the Date class.

    // SETDATE() / SETMONTH() / SETFULLYEAR() / SETSECONDS() / SETMILLISECONDS() / SETTIME()

        // You can update / modify dateobjects with these setmethods.
        // They don't return an updated value; they overwrite the original dateobject.

        dt.setFullYear(2027);
        console.log(dt);

        // One thing to note: there is no setDay() method. To change the day, you have to use setDate() instead:

        dt.setDate(3);
        console.log(dt);

        // And one more thing to note: since setTime() denotes the minutes since the Unix Epoch, setting it changes everything about the dateobject: it's year, month, day, hours, etc..
        dt.setTime(6231232232);
        console.log(dt);


    // PARSE()

        // Takes a string representation of a date as argument and returns a number in milliseconds since the Unix Epoch.

        let myBirthday = Date.parse("June 5, 2023");
        console.log(myBirthday);

        // It is quite tolerant in terms of which format the datestring should be. E.g. this works fine too:
        let alsoMyBirthday = Date.parse("06/05/2023"); //using MM/DD/YYYY format
        console.log(alsoMyBirthday);

    // TODATESTRING()

        // This does the opposite; it converts a datetimeobject to a string.

        console.log(dt.toDateString());

//PRACTICE EXERCISE 8.7

    let someDate = new Date()
    someDate.setFullYear(Math.floor(Math.random()*2023));
    console.log(someDate);

    let monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    let someDateDay = someDate.getDate();
    let someDateYear = someDate.getFullYear();
    let someDateMonth = someDate.getMonth();

    let someDateFull = `${someDateDay} ${monthNames[someDateMonth]} ${someDateYear}`;

    console.log(someDateFull)

