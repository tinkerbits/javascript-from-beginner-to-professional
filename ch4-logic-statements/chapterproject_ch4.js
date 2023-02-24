
// EVALUATING A NUMBER GAME

    let myRandomNumber = Math.floor(Math.random()*5);
    let userNumber = Number(prompt("Guess a number between 0 and 5:"));

    if(userNumber < myRandomNumber){
        alert("You guessed too low!")
    }
    else if(userNumber === myRandomNumber){
        alert("Congratulations, you guessed correctly!")
    }
    else{
        alert("You guessed too high!")
    };


// FRIEND CHECKER GAME

    let contactName = prompt("What is your name?");

    switch(contactName){
        case "Antie":
        case "Mark":
        case "Markus":
        case "Omer":
        case "Seanie":
        case "Alexis":
            alert("You're an awesome friend!");
            break;
        case "Richard":
        case "Yann":
        case "Jean-Michel":
            alert("You're an ok friend!");
            break;
        case "Stephen":
            alert("You're a massive twat!");
            break;
    };

// ROCK PAPER SCISSOR GAME

    let choicesList = ["rock", "paper", "scissors"];
    let humanRandomNumber = Math.floor(Math.random()*3);
    let computerRandomNumber = Math.floor(Math.random()*3);
    let humanChoice = choicesList[humanRandomNumber];
    let computerChoice = choicesList[computerRandomNumber];

    if(humanChoice === "rock" && computerChoice == "scissors"){
        alert("Human wins!")
    }else if(computerChoice === "rock" && humanChoice == "scissors"){
        alert("Computer wins!")
    }else if(humanRandomNumber > computerRandomNumber){
        alert("Human wins!")
    }else if(computerRandomNumber > humanRandomNumber){
        alert("Computer wins!")
    }else{
        alert("It's a tie!")
    };

    console.log("Human chose " + humanChoice + ".");
    console.log("Computer chose " + computerChoice + ".");