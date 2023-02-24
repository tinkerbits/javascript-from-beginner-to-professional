// WORD SCRAMBLER

    function wordScrambler(){
        let chosenWord = prompt("Gimme a word:");
        let chosenWordArr = chosenWord.split('');
        let scrambledChosenWord = '';

        while(true){
            let chosenWordTarget = Math.floor(Math.random()*chosenWordArr.length);
            scrambledChosenWord = scrambledChosenWord + chosenWordArr[chosenWordTarget]
            chosenWordArr.splice(chosenWordTarget, 1);
            if(chosenWordArr.length === 0){
                break;
            }
        };

        console.log(scrambledChosenWord);


    };

    wordScrambler();

// COUNTDOWN TIMER

    myBirthday = '31 March 2023';

    function countDowner(targetDate){
        let myBirthdayDateObj = Date.parse(targetDate);
        let currentDt = Date.now();



        // Days
        let millisecondsperdday = 24*60*60*1000

        daysTillMyBirthday = (myBirthdayDateObj-currentDt) / millisecondsperdday;
        flooredDaysTillMyBirthday = Math.floor(daysTillMyBirthday);


        // Hours
        hoursTillMyBirthday = (daysTillMyBirthday%1)*24;
        flooredHoursTillMyBirthday = Math.floor(hoursTillMyBirthday);


        // Minutes
        minutesTillMyBirthday = (hoursTillMyBirthday%1)*60;
        flooredMinutesTillMyBirthday = Math.floor(minutesTillMyBirthday);

        // Seconds
        secondsTillMyBirthday = (minutesTillMyBirthday%1)*60;
        flooredSecondsTillMyBirthday = Math.floor(secondsTillMyBirthday);

        console.log(`${flooredDaysTillMyBirthday} Days, ${flooredHoursTillMyBirthday} Hours, ${flooredMinutesTillMyBirthday} Minutes and ${flooredSecondsTillMyBirthday} Seconds.`)




    }

    countDowner(myBirthday);