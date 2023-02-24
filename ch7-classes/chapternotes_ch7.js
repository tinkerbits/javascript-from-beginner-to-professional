// CLASSES

    // SYNTAX

        class Person{
            constructor(firstname, lastname){
                this.firstname = firstname;
                this.lastname = lastname;
            };
        };

        let person1 = new Person("Jon", "Burke");
        
        console.log("Hi " + person1.firstname);

        // The "this" keyword is similar to the "self" keyword in Python

        // When istantiating the class, the "new" keyword makes javascript to go look for the constructor function in the class, which will then construct a new object.


    // DEFAULT VALUES

        class Dog{
            constructor(firstname="Good Boy", character="friendly"){
                this.firstname = firstname;
                this.characther = character;
            }
        }

        let doggo1 = new Dog();
        
        console.log(doggo1.firstname + " is a very " + doggo1.characther + " dog!");


        let doggo2 = new Dog("Bob", "naughty");

        console.log(doggo2.firstname + " is a very " + doggo2.characther + " dog!");


    // PRACTICE EXERCISE 7.1

        class Person_{
            constructor(firstname, lastname){
                this.firstname = firstname;
                this.lastname = lastname;
            };
            fullName(){
                return this.firstname + " " + this.lastname
            }
        };

        let friend1 = new Person_("Markus", "Pradhan");
        let friend2 = new Person_("Alexis", "Pitonzo");

        console.log("Hello " + friend1.firstname);
        console.log("Hello " + friend2.firstname);

    // METHODS

        // These are functions of the class. When part of the class, they're called methods instead of functions.
        // Methods don't require the function keyword

        class Car{
            constructor(make, model){
                this.make = make;
                this.model = model;
            };

            vroom(){
                console.log(`${this.make} ${this.model} goes vroom!`)
            };

            honk(honksound){
                console.log(`${this.make} ${this.model} goes ${honksound}!`)
            }
        }

        let myFirstCar = new Car("Nissan", "Note");

        myFirstCar.vroom();
        myFirstCar.honk("tuut tuut");


        // PRACTICE EXERCISE 7.2:

            let mec = friend2.fullName();
            console.log(mec);

    // PROPERTIES

        // As we've seen before, we can create properties on the constructor with the "this" keyword, such as this.firstname and this.make.

        // ENCAPSULATION

            // PRIVATE PROPERTIES

            // Often we don't want to provide direct access to a certain properties of a class. We might want to make the data inaccessible or validate it first.
            // For such situations you can make properties inaccessible using the # symbol:

            class Teacher{
                #firstname;
                #lastname;
                constructor(firstname, lastname){
                    this.#firstname = firstname;
                    this.#lastname = lastname;
                }
            }

            let alwaysOffSickMathTeacher = new Teacher("Mark","Van De Putte");
            
            console.log(alwaysOffSickMathTeacher.firstname);

            // Private fields must always be declared first (or the browser will throw a Syntax Error);
            // When trying to access private fields, the browser will return 'undefined' instead of the object's actual value.


            // VALIDATION

                // We can validate properties prior like so:

                class Laptop{
                    #make;
                    #model;
                    #operatingsystem;
                    constructor(make, model, operatingsystem){
                        this.#make = make;
                        this.#model = model;
                        if(operatingsystem === 'linux'){
                            this.#operatingsystem = operatingsystem;
                        } else {
                            this.#operatingsystem = "unfortunately not linux";
                        };
                    }
                }

                // Any laptop who doesn't have "linux" as operationsystem value will have their value replaced with "unfortunately not linux".
                // You could of course do all sorts of other validation, such as checking data type, checking someone is older than 18, etc..

            
            // GETTERS AND SETTERS

                // GET statements allow you to access private data on the object instance.
                // SET statements allow you to update private data on the object instance.

                class Town{

                    #name;
                    #country;
                    #population;
                    
                    constructor(name, country, population){
                        this.#name = name;
                        this.#country = country;
                        this.#population = population;
                    };

                    get population(){
                        return this.#population;
                    };

                    set population(newpopulationcount){
                        this.#population = newpopulationcount;
                    };
                }
            
            
                let homeTown = new Town("Vilanova i la Geltrú", "Spain", 66274);

                console.log(homeTown.name); // This will return 'undefined' as there is no GET statement for #name
                console.log(homeTown.country); // This will return 'undefined' as there is no GET statement for #country
                console.log(homeTown.population); // This will return 66274 as there is a GET statement for #population

                homeTown.population = 70000;

                console.log(homeTown.population); // This will now return 70000 as we've updated the population value with the SET statement.

                // Of course you can also add validation on GET and SET statements.

        // INHERITANCE

            // Inheritance is the concept that classes can have child classes that inherit their properties and methods and that can additionally add their own properties and methods.
            // An example would be to have a parent class of Animal with a "colour" and "age" property and an "eat" function, and then a child class of Monkey with extra properties of "species" and "diet" and a "growl" function.

            // SYNTAX
                // The "extends" keyword allows us to indicate a class is a child class of another class.
                // The "super" keyword calls the constructor in the parent class to make sure the properties are inherited.
                // The parent class' methods are automatically inherited.
                // Class methods always return something. If you don't specify anything, they'll return 'undefined'.
                // If the parent class contains GET or SET statements, those statements are also inherited by the child class.

                class Animal{
                    constructor(colour, age){
                        this.colour = colour;
                        this.age = age;
                    };
                    eat(food){
                        return `Eating a ${food}, yummie.`;
                    };
                };

                class Monkey extends Animal{
                    constructor(colour, age, species, diet){
                        super(colour, age);
                        this.species = species;
                        this.diet = diet;
                    };
                    growl(){
                        return "Grrrrrr!";
                    };
                }


                let monkey1 = new Monkey("brown", 11, "Chimpanzee", ["berries", "nuts", "cookies"]);

                console.log(monkey1);
                console.log(monkey1.eat("blueberry"));
                console.log(monkey1.growl());

        // PROTOTYPES

            // A prototype is the default object instance that is created without any arguments in the ().
            
            // SYTNAX

                // Every class has a default object aka prototype, and you can access it like so:

                    Monkey.prototype;

                // You can update the prototype, e.g. add extra methods to it, as such:

                    Monkey.prototype.poop = function(){
                        return "Taking a dump."
                    }

                    console.log(monkey1.poop());

                // Adding properties and methods to the prototype effectively updates the class, and therefore all instances of that class.
                // E.g. following the above example, monkey1, which was defined earlier, suddenly gained the ability to poop because that ability was added to the Monkey prototype.
                // It's better practice to just update the class (that keeps code orderly), but sometimes the prototype is useful as it can be updated conditionally or programatically.
                // Even built-in javascript classes have a protoype, but those you should certainly never update or you'll mess up how your javascript works.

            // EXERCISE 7.3

                class Bird extends Animal{
                    constructor(colour, age, wingspan, maxairspeed){
                        super(colour, age);
                        this.wingspan = wingspan;
                        this.maxairspeed = maxairspeed;
                    };

                    sing(song){
                        return song.repeat(3);
                    }
                };

                let bird1 = new Bird("green", 3, 27, 50);

                Bird.prototype.layEgg = function(){
                    return "Laying an egg."
                }

                console.log(bird1.sing("Tweet"));
                console.log(bird1.layEgg());


                    