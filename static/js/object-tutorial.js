var myObj ={
    "name" : "Rachel Bowlus",
    "age": 28,
    location: 'Chicago',
    dogs: ["Phoebe", "Rhoda", "Flynn"]
}

// Object literal notation
// console.log(myObj['name'])

// Object dot notation
// console.log(myObj.age)

// console.log(myObj.dogs)
// for (let i=0; i < myObj.dogs.length; i++) {
//     const dog = myObj.dogs[i];
//     console.log(dog);
// }

// Derek most used
// for (const o of myObj.dogs) {
//     console.log(o)
// }

// for (const key in myObj) {
//     if (Object.hasOwnProperty.call(myObj, key)) {
//         const element = myObj[key];
//         console.log(element)
//     }
// }

// myObj.dogs.forEach(function(dog, index) {
//    console.log(`${index +1}: ${dog}`) 
// });

// class Car {
//     constructor(year, make, model) {
//         this.year = year;
//         this.make = make;
//         this.model = model;

//         this.drive = function () {
//             console.log('Vroom!');
//         };
//     }
// }

// ^ same >

function Car(year, make, model) {
    this.year = year;
    this.make = make;
    this.model = model;

    // this.drive = () => console.log('Vroom!'); <- for one line code (JS doesn't depend on whitespace)
    this.drive = () => {
        console.log('Vroom!'); // Need ; because 2 different things you need to run
        console.log('Hello')
    }
}

var carOne = new Car(2015, 'Chevrolet', 'Corvette');
console.log(carOne['year']);
console.log(carOne.make);
console.log(carOne.model);

carOne.year = 2017;
carOne.model = 'Tahoe';
console.log(carOne.year);
console.log(carOne.make);
console.log(carOne.model);

carOne.drive()

// class Car:
//     def __init__(self, year, make, model):
//     self.year = year
//     self.make = make
//     self.model = model

// car1 = Car(2015, 'Chevrolet', 'Corvette')

let currentProp = 'year';
console.log(carOne[ currentProp ])