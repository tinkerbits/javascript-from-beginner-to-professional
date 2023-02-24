// RECURSIVE FUNCTION
    function countToTen(startNumber){
        console.log(startNumber);
        if(startNumber < 10){
            countToTen(++startNumber);
        }else{
            return;
        }
    };

    countToTen(4);

// SET TIMEOUT ORDER

    let numberOne = () => console.log("one");
    let numberTwo = () => console.log("two");
    let numberThree = () => {
        console.log("three");
        numberOne();
        numberTwo();
    };
    let numberFour = () => console.log("four");
    setTimeout(numberOne);
    setTimeout(numberThree);

