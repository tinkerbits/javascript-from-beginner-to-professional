// Manipulating An Array

const theList = ["Laurence", "Svekis", true, 35, null, undefined, {test: "one", score: 55}, ["one", "two"]]

theList[0] = "FIRST";
theList.splice(2, 9999999, "MIDDLE", "hello World");
theList.push("LAST")
console.log(theList)

// Product Catalog

let storeItems = [];

let item1 = {
    name: "Stacraft II",
    model: "Battlechest Edition",
    cost: 69.00,
    quantity: 24 
};

let item2 = {
    name: "Age Of Empires 2",
    model: "HD Edition",
    cost: 23.99,
    quantity: 21 
};

let item3 = {
    name: "Hades",
    model: "Hell Edition",
    cost: 66.6,
    quantity: 66 
};

storeItems.unshift(item1, item2, item3);

console.log(storeItems[2]["quantity"]);