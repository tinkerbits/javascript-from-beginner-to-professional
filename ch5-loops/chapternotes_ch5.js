// LOOPS

    // WHILE LOOPS

        // Keeps looping as long as the condition evaluates to true.
        
        // EXAMPLE 1:

            let i = 0;
            while(i < 10){
                console.log(i);
                i++;
            };

        // EXAMPLE 2: Fibonnaci Sequence

            let firstnumber = 0;
            let secondnumber = 1;

            let fibonacciArray = [firstnumber, secondnumber];

            let r = 0;
            
            while(r < 10){
                let fibonacciArrayLength = fibonacciArray.length;
                let newAddition = fibonacciArray[fibonacciArrayLength - 1] + fibonacciArray[fibonacciArrayLength - 2];
                fibonacciArray.push(newAddition);
                console.log(fibonacciArray);
                r++;
            };
        
        // PRACTICE EXERCISE 5.1
            let maxNumberValue = 10;
            let allRightYouCuntGimmeAFockingNumberAlready = Number(prompt("Number:"));
            let solution = Math.floor(Math.random()*10)+1;
            console.log(solution);

            while(true){
                if(allRightYouCuntGimmeAFockingNumberAlready === solution){
                    alert("You finally guessed it.")
                    break;
                }else{
                    allRightYouCuntGimmeAFockingNumberAlready = Number(prompt("Wrong, try another number:"));
                }
            };

    // DO WHILE LOOPS

        // Do while loops first run a bit of code (the "do" part) and then later check if a condition is true to determine if they should do it again.
        // They are pretty much the reverse of a normal loop which first checks a condition and then runs some code if the codition evaluated to true.

        // SYTNAX:

            do{
                var userInput = Number(prompt("Choose a number between 0 and 10:")); // The do and the while section are separate scopes, so you can't use let to declare a variable here.
            }while(userInput < 0 || userInput > 10);
        
        // PRACTICE EXERCISE 5.2:

            let counter = 0;
            let step = 3;

            do{
                counter = counter + step;
                console.log(counter);
            }while(counter <= 100);

    // FOR LOOPS
        
        // SYTNAX:
            
            /* The for() takes 3 arguments separated by a semi-colon:
                 1) variables to use in the for loop
                 2) a condition (that evaluates to true or false)
                 3) a statement to execute after the code was executed

               The actual code-block is executed after the condition check (step 2) */

            for(let i = 0; i < 10; i++){
                console.log(i);
            }


        // EXAMPLE 1:
            // Add the numbers 0 to 99 to an array:
            let arr = [];
            for(let i = 0; i < 100; i++){
                arr.push(i);
            }
            // Note: it's very common to see i++ as the third step in a for-loop in Javascript.

        // EXAMPLE 2:
            // Add only the even numbers to an array:
            // Add the numbers 0 to 99 to an array:
            let evenArr = [];
            for(let i = 0; i < 100; i = i + 2){
                arr.push(i);
            }

        // PRACTICE EXERCISE 5.3:

            let myWork = [];
            for(let i = 0; i < 10; i++){

                let workObj;
                
                if(i%2 === 0){
                    workObj = {name:"Lesson " + (i+1), status:true}
                }else{
                    workObj = {name:"Lesson " + (i+1), status:false}
                };

                myWork.push(workObj);
            };
            console.log(myWork);
            

    // NESTED LOOPS

        // This example nests two for-loops to create an array or arrays. You can also nest while-loops or while- and for-loops.

        let arrayOfArrays = [];

        for(let i = 0; i < 3; i++){
            arrayOfArrays.push([]);
            for(let j = 0; j < 7; j++){
                arrayOfArrays[i].push(j);
            };
        };

        console.log(arrayOfArrays);

        /* Nested arrays can be seen as rows and columns, e.g.:
           [
            [0,1,2,3,4,5,6],
            [0,1,2,3,4,5,6],
            [0,1,2,3,4,5,6]                        
           ]
           
           You can therefore use nested arrays to create tabular data.
           And you can display tabular data in the console with console.table(): */

        console.table(arrayOfArrays);
    
        // PRACTICE EXERCISE 5.4:

            let myTable = [];

            let rowCount = 5;
            let columnCount = 8;

            let counter_ = 0;

            for(let i = 0; i < rowCount; i++){
                let tempTable = [];
                for(let j = 0; j < columnCount; j++){
                    tempTable.push(j);
                }
                myTable.push(tempTable);
            };

            console.table(myTable);

    // LOOPS AND ARRAYS

        let friends = ["Alexis", "Mark", "Anthony", "William", "Markus"];

        for(let i = 0; i < friends.length; i++){
            console.log(friends[i]);
        };

        // By using the length of the array we can use a for-loop to iterate over its contents.

        // PRACTICE EXERCISE 5.5:

            let grid = [];

            let cellCount = 64;

            for(let i = 0; i < (cellCount); i++){
                if(i%8===0){
                    grid.push([]);
                    grid[grid.length-1].push(i);
                }else{
                    grid[grid.length-1].push(i);
                }
            };

            console.table(grid);

    // FOR OF LOOP
        
        // The for-of loop is focused specifically on iterating over arrays.

        // SYNTAX:
            
            let friendNames = ["Alexis", "Mark", "Markus", "Anthony", "William", "Omer"];
            
            for(let friendName of friendNames){
                console.log(friendName);
            };

        // PRACTICE EXERCISE 5.6:
            
            let someArray = [];
            for(let i = 0; i < 10; i++){
                someArray.push(i);
            };
            console.log(someArray);

            for(let i = 0; i < someArray.length; i++){
                console.log(i);
            };
            
            for(let number of someArray){
                console.log(number);
            };

    // LOOPS AND OBJECTS

        // FOR IN LOOP

            // This loop is similar to the for-of loop

            let car = {model: "Nissan", make:"Note", year:2008, colour:"Blue"};

            for(let key in car){
                console.log(key);
                console.log(car[key]);
            }

            // This will then print out the keys followed by the values.
            // Basically a for-in loop prints the keys whereas a for-of loop prints the values.
            // E.g. if you used a for-in loop on an array, it would print out the indices (as those are the keys in an array).

            // EXERCISE 5.7

                let cat = {name:"Alfred", colour: "Black", age:7};

                for(let key in cat){
                    console.log(key);
                    console.log(cat[key]);
                }

                let catProperties = ["Alfred", "Black", 7];

                for(let prop of catProperties){
                    console.log(prop);
                }
        
        // LOOPING OVER AN OBJECT BY CONVERTING IT TO AN ARRAY
            
            // You can either convert only the keys, only the values, or the entire key-value pairs to an array.

            let car_ = {model: "Nissan", make:"Note", year:2008, colour:"Blue"};

            // array of keys:
            let carKeys = Object.keys(car_);

            for(let key of carKeys){
                console.log(key);
            };

            // array of values
            let carValues = Object.values(car_);

            for(let value of carValues){
                console.log(value);
            };

            // array of key-value pairs (in array-form)
            let carKVPairs = Object.entries(car_);
            console.log(carKVPairs);

            for(let [key, value] of carKVPairs){
                console.log(key + " = " + value);
            };

    // BREAK AND CONTINUE

        // break stops the loop completely and moves on to the code after the loop.
        // continue stops the current iteration of the loop and moves to back to the beginning of the loop for a new run.

        // BREAK

            for(let i = 0; i < 10; i++){
                console.log(i);
                
                if(i === 4){
                    break;
                };
            };

            // This will stop logging to the console as soon as it reached 4.
            // Breaking is a good way to speed up your code when you're trying to find a value in an array or object with a for or while loop. As soon as you found the value you want, break and save some time.


        // CONTINUE

            for(let i = 0; i < 10; i++){
                
                if(i === 4){
                    continue;
                };

                console.log(i);
            };

            // This will skip a console.log() if i is equal to 4.

        // PRACTICE EXERCISE 5.8:

            // continue:
            let output = "";

            let numberToSkip = 3;

            for(let i = 1; i <= 10; i++){
                if(i === numberToSkip){
                    continue;
                };
                output = output + i;
            };

            console.log(output);

            // break:
            let output_ = "";

            let numberToSkip_ = 3;

            for(let i = 1; i <= 10; i++){
                if(i === numberToSkip_){
                    break;
                };
                output_ = output_ + i;
            };

            console.log(output_);
    
    // BREAK, CONTINUE AND NESTED LOOPS

        // In a nested loop, break and continue only work on the inner loop that they are part of. The effect does not continue onto the outer loops.

    // BREAK, CONTINUE AND LABELED BLOCKS

        // You can give a label (i.e. a name) to each loop. E.g. the following break is placed in the inner loop (drivers) but breaks out of the outer loop (f1teams) by using its label:
    
        f1teams:
            for(let f1team of f1steams){
                drivers:
                for(driver of f1steam){
                    if (driver.startsWith("K")){
                        console.log("Found a driver starting with K: ", driver);
                        break f1teams;
                    }
                }
            };

        // Because the outer loop is broken, the inner loops logically also won't run anymore.
        // You can choose any name you want for the label except for Javascript's own reserved words (e.g. "for", "else", ...).



