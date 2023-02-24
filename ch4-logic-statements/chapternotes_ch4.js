// LOGIC STATEMENTS

    // IF AND IF ELSE
        let rain = false;
        if(rain){
            console.log("Don't forget your umbrella!")
        }else{
            console.log("Don't forget your sunglasses!")
        };

        // Whatever is between the () brackets gets evaluated to a boolean. If the boolean is equal to true, the "if" condition is executed. If the boolean is equal to false, the "else" condition is executed.
        // The "else" block is optional. If you wanted you can only write:
        if(rain){
            console.log("Don't forget your umbrella!")
        };
        // If there is no else block and the boolean returns a false, the if block is simply skipped and the programs skips to the following code.

        // PRACTICE EXERCISE 4.1
            isHungry = true;
            console.log(isHungry);

            if(isHungry === true){
                console.log("Don't forget to eat!")
            };

            if(isHungry !== true){
                console.log("Don't forget to eat!")
            }else{
                console.log("You're feeling satisfied!")
            };


    // ELSE IF STATEMENTS

        // PRACTICE EXERCISE 4.2
            let userAge = prompt("What is your age?");

            userAge = Number(userAge);
            
            let message = "";

            if(userAge >= 21){
                message = "You can enter the place and buy booze."
            }else if(userAge >= 19){
                message = "You can enter the place but you can't buy booze."
            }else{
                message = "You can't enter the place (and you can definitely not buy booze)."
            };

            console.log(message);

    // CONDITIONAL TERNARY OPERATORS
        
        // SYTNAX
            // operand1 ? operand2 : operand3
            // operand1 is a expression that evaluates to true or false. If true, operand 2 is executed. If false, operand3 is executed.
            // you can read this as "IF operand1 THEN operand2 ELSE operand3".

        // EXAMPLES:

            let age = prompt("What is your age again?");

            let access = age < 18 ? "denied" : "allowed"
            // if age is < 18, the value "denied" is stored in the access variable; else the value "allowed" is stored in the access variable.

            age < 18 ? alert("access denied") : alert("access allowed");

        // PRACTICE EXERCISE 4.3:
            let IDIsValid = true;
            IDIsValid === true ? console.log("Welcome To The Venue!") : console.log("Get Lost!")

    // SWITCH STATEMENTS

        // SYNTAX

            // The following switch statement identifies what time it is based on the current activity:

            activity = "Drive to work";
    
            switch(activity) {
                case "Get up":
                    console.log("It is 6h30.");
                    break;
                case "Breakfast":
                    console.log("It is 7h00.");
                    break;
                case "Drive to work":
                    console.log("It is 8h00.");
                    break;
                case "Lunch":
                    console.log("It is 12h00.");
                    break;
                case "Drive home":
                    console.log("It is 17h00.");
                    break;
                case "Dinner":
                    console.log("It is 18h30.");
                    break;
            }

            // If there is a match, it keeps executing until it finds a break (or until the switch statement ends).
        
        // DEFAULT CASE

            // This is basically like the else clause in an if-else statement.
            // The default case will work wherever you put it in the switch statement, but best practice is to put it at the end.

            switch(activity) {
                case "Get up":
                    console.log("It is 6h30.");
                    break;
                case "Breakfast":
                    console.log("It is 7h00.");
                    break;
                case "Drive to work":
                    console.log("It is 8h00.");
                    break;
                case "Lunch":
                    console.log("It is 12h00.");
                    break;
                case "Drive home":
                    console.log("It is 17h00.");
                    break;
                case "Dinner":
                    console.log("It is 18h30.");
                    break;
                default:
                    console.log("No idea what time it is now.");
                    break;
            };

        // PRACTICE EXERCISE 4.4
            let randomNum = Math.floor(Math.random()*5); // this generates a random number between 0 and 5 (so 6 possible outcomes in total)
            let userQuestion = prompt("What is your question?");

            switch(randomNum) {
                case 0:
                    alert("You will be lucky today.");
                    break;
                case 1:
                    alert("You will be unlucky today.");
                    break;
                case 2:
                    alert("You will die today.");
                    break;
                case 3:
                    alert("You will succeed today.");
                    break;
                case 4:
                    alert("You will make a new friend today.");
                    break;
                case 5:
                    alert("You will make a new enemy today.");
                    break;
            };

        // STACKING CASES
            
            // One handy thing you can do with switch statements is that you can stack their cases if they have the same outcome anyway. E.g. in the following example case 0, case 1 and case 2 all have the same outcome:

            switch(randomNum) {
                case 0:
                case 1:
                case 2:
                    alert("You will be lucky today.");
                    break;
                case 3:
                case 4:
                    alert("You will be unlucky today.");
                    break;
                case 5:
                    alert("You will die today.");
                    break;
            };

        // PRACTICE EXERCISE 4.5

            let prize = prompt("Choose a number between 0 and 10:");
            prize = Number(prize);
            
            let outputMessage = "My Selection: ";

            switch(prize) {
                case 0:
                case 1:
                case 2:
                    outputMessage = outputMessage + "  A Car  ";
                    break;
                case 3:
                case 4:
                case 5:
                    outputMessage = outputMessage + "  A Holiday To Hawai  ";
                    break;
                case 6:
                case 7:
                case 8:
                    outputMessage = outputMessage + "  A Date With Jessica Alba  ";
                    break;
                case 9:
                case 10:
                    outputMessage = outputMessage + "  A Million Euros  ";
                    break;
            }

            console.log(outputMessage);
    