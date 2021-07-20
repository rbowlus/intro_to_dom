let User = require('./User').User;

// function Car(year, make, model) {
//     this.year = year;
//     this.make = make;
//     this.model = model;
// };

class Vehicle {
    constructor(doors=4, wheels=4) {
        this.doors = doors;
        this.wheels = wheels;
    }
}

var v1 = new Vehicle();
console.log(v1)

class Car extends Vehicle {
    constructor(year, make, model, miles=0) {
        super();
        this.year = year;
        this.make = make;
        this.model = model;
        this.miles = miles;
    }
    getYear() {
        return this.year()
    }

    // drive() {
    //     console.log('Vroom!');
    //     console.log(this.miles);
    //     this.miles += 20;
    //     console.log(this.miles);
    // }

};

var car1 = new Car(2019, 'Tesla', 'Model 3');
console.log(car1);
// car1.drive();

var u1 = new User('Lucas', 'Lang', 'lucasl@codingtemple.com')
console.log(u1)