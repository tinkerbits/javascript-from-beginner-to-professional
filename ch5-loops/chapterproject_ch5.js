// MATH MULTIPLICATION TABLE

    let multiplicationTable = [];

    rows:
    for(let i = 1; i <= 10; i++){
        
        tempArray = []
        
        cells:
        for(let j = 1; j <= 10; j++){
            tempArray.push(j*i);
        };

        multiplicationTable.push(tempArray);
    };

    console.table(multiplicationTable);
