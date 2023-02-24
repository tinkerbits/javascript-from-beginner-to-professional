// EMPLOYEE TRACKING APP

    class employee{
        constructor(firstname, lastname, tenure){
            this.firstname = firstname;
            this.lastname = lastname;
            this.tenure = tenure;
        }
    };

    let employee1 = new employee("Marcel", "Van Steenbergen", 7);
    let employee2 = new employee("Jef", "Vandewalle", 17);

    let listOfEmployees = [employee1, employee2];

    employee.prototype.summary = function(){
        return `${this.firstname} ${this.lastname} has worked here for ${this.tenure} years.`
    }
    
    for(emp of listOfEmployees){
        console.log(emp.summary());
    };

    // MENU ITEMS PRICE CALCULATOR

    class Order{
        #product1price
        #product2price
        constructor(product1price, product1ammount, product2price, product2ammount){
            this.#product1price = product1price;
            this.product1ammount = product1ammount;
            this.#product2price = product2price;
            this.product2ammount = product2ammount;
        }
        get totalcost(){
            return (this.#product1price * this.product1ammount + this.#product2price * this.product2ammount);
        }
    }

    let order1 = new Order(300, 2, 50, 1);
    console.log(order1.totalcost);

    let order2 = new Order(100, 2, 50, 1);
    console.log(order2.totalcost);

    let order3 = new Order(200, 2, 50, 1);
    console.log(order3.totalcost);
