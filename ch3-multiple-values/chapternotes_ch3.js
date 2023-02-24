// Arrays //
    
    // Creating Arrays //
        newArray = ["white", "black", "yellow", "green", "blue"];

    // Accessing Array Elements //
        firstColour = newArray[0];

    // Updating Array Elements //
        newArray[0] = "Red";

    // Array Length Property //
        arrayLength = newArray.length;
        //// You can use the length of an array to find it's last item, like so: newArray(newArray.length - 1)

    // Practice Exercise 3.1 //
        shoppingList = ["Milk", "Bread", "Apples"];
        console.log(shoppingListLength = shoppingList.length);
        shoppingList[1] = "Bananas";
        console.log(shoppingList);

// ARRAY METHODS //

    // ADDING ELEMENTS AT THE BEGINNING WITH UNSHIFT()
        favouriteStarcraft2Players = ["Hero", "MC", "Clem", "Reynor", "Harstem", "Maru", "Dark", "Gumiho", "SOS"];
        favouriteStarcraft2Players.unshift("Gumiho", "Rogue", "Zest")

    // ADDING ELEMENTS AT THE END WITH PUSH()
        favouriteStarcraft2Players.push("Serral");
        // The push() method provides a return value: the new length of the array. You can store this like so: listLength = list.push("newItem").

    // ADDING ELEMENTS AT A CERTAIN INDEX WITH SPLICE()
        favouriteStarcraft2Players.splice(2, 0, "Maxpax", "Astrea");
        // First attribute is the the index to insert the new item at, then comes how many items we want to delete from that index onwards, and finally comes which items we want to insert.

    // CONCATENATING ARRAYS WITH CONCAT()
        bestCurrentF1Drivers = ["Hamilton", "Russel", "Norris", "Verstappen"];
        bestPastF1Drivers = ["Senna", "Schumacher", "Lauda", "Villeneuve"];
        currentAndPastF1Drivers = bestCurrentF1Drivers.concat(bestPastF1Drivers);
        // You can also use concat() to add individual item(s), e.g. bestCurrentF1Drivers.concat("Alonso", "Vettel"). This way it works as an alternative to push().

    // DELETING THE FIRST ELEMENT WITH SHIFT()
        bestCurrentF1Drivers.shift();

    // DELETING THE LAST ELEMENT WITH POP()
        bestCurrentF1Drivers.pop();

    // DELETING ELEMENTS AT A CERTAIN INDEX WITH SPLICE()
        bestCurrentF1Drivers.splice(2, 1);
        // If instead of deleting a value you'd like it replaced by an "undefined" value you can use: delete bestCurrentF1Drivers[2];
        
    // FINDING ELEMENTS BY VALUE WITH FIND()
        // find() requires a function as argument. This function is then executed on every element in the array until a match is found.
        let findValue = bestPastF1Drivers.find(function(i) {return i === "Schumacher"});
        console.log(findValue);

    // FINDING AN ELEMENT'S INDEX VIA ITS VALUE WITH INDEXOF()
        bestPastF1Drivers.indexOf("Lauda");
        // indexOf() will return the index and stops as soon as it found a match. If need be you can also add a starting position:
        bestPastF1Drivers.indexOf("Lauda", 2);
        // there is also a method to find the last occurence of a match: lastIndexOf():
        bestPastF1Drivers.lastIndexOf("Lauda");

    // SORTING WITH SORT()
        bestPastF1Drivers.sort();
        // sort() will by default sort numbers from small to large and strings alphabetically.

    // REVERSING WITH REVERSE()
        bestPastF1Drivers.reverse();
        // simply reverses the order of the items in an array.

    // PRACTICE EXERCISE 3.2
        shoppingList = [];
        console.log(shoppingList.push("Milk"));
        console.log(shoppingList.push("Bread"));
        console.log(shoppingList.push("Apples"));
        console.log(shoppingList);
        console.log(shoppingList.splice(1, 1, "Bananas", "Eggs"));
        console.log(shoppingList);
        console.log(shoppingList.pop());
        console.log(shoppingList.sort());
        console.log(shoppingList.indexOf("Milk"));
        shoppingList.splice(shoppingList.indexOf("Bananas"), 0, "Carrots", "Lettuce")
        console.log(shoppingList)

        newShoppingList = ["Juice", "Pop"]
        massiveList = shoppingList.concat(newShoppingList);
        superMassiveList = massiveList.concat(newShoppingList);
        console.log(superMassiveList.lastIndexOf("Pop"));
        console.log(superMassiveList);

    // MULTIDIMENSIONAL ARRAYS
        // This is just a fancy name for nested arrays a.k.a a list of lists.
        protosses = ["MC", "SOS", "MaxPax"];
        terrans = ["Maru", "Clem"];
        zergs = ["Reynor", "Serral"];
        greatStacraftPlayers = [protosses, terrans, zergs];
        console.log(greatStacraftPlayers);
        // Selecting an item from a nested array goes as follows:
        console.log(greatStacraftPlayers[0][2]);
    
// OBJECTS
    // This is Javascript's term for a dictionary.
    let dog = {
        dogName: "Bob",
        weight: 5.8,
        colour: "black",
        age: 3,
        poopsOnTheSofa: true
    };

    // ACCESSING OBJECT PROPERTIES
        console.log(dog["colour"]);
        // Alternatively you can also write dog.colour instead of dog["colour"]

    // UPDATING OBJECT PROPERTIES
        dog["age"] = 4;
        // Or alternatively dog.age = 4
        console.log(dog);

    // PRACTICE EXERCISE 3.4
        let myCar = {
            make: "Nissan",
            model: "Note",
            colour: "Blue",
            constructionYear: 2008,
            automaticGearbox: true,
            accidentCount: 2,
        };

        myCar["colour"] = "red";

        myCar["forSale"] = 4125;

        console.log(myCar["make"]);
        console.log(myCar["model"]);
        console.log(myCar["forSale"]);

    // NESTING OBJECTS
        // Just like with arrays, you can nest your objects:
        let company = {
            companyName: "NeedForGreed",
            activity: "exchange rate shorting",
            address: {
                street: "twatstreet",
                number: 88,
                postCode: "SE19EAY",
                city: "London",
                country: "United Kingdom"
            }
        };

        // To access nested properties, you have to use multiple bracket sets or dots:
            console.log(company["address"]["city"]);
            console.log(company.address.city);

    // NESTING ARRAYS IN OBJECTS
        // ARRAY IN OBJECT:
            company2 = {
                companyName: "Bankers4Wankers",
                companyActivities: ["banking", "wanking", "shanking"]
            }

            console.log(company2["companyActivities"][1]);
            console.log(company2.companyActivities[1]);

    // PRACTICEEXERCISE 3.5

        let people = {
            friends: []
        };

        let friend1 = {
            firstName: "Mark",
            lastName: "Quigley",
            nationality: "Scottish",
            ID: 23892 
        }

        let friend2 = {
            firstName: "Markus",
            lastName: "Pradhan",
            nationality: "British",
            ID: 89322
        }

        let friend3 = {
            firstName: "Alexis",
            lastName: "Pitonzo",
            nationality: "Swiss",
            ID: 657930
        }

        people["friends"].push(friend1);
        people["friends"].push(friend2);
        people["friends"].push(friend3);
        console.log(people);