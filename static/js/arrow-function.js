function Car(year, make, model) {
    this.year = year;
    this.make = make;
    this.model = model;

    // this.drive = () => console.log('Vroom!'); <- for one line code (JS doesn't depend on whitespace)

    // this.drive = () => {
    //     console.log('Vroom!'); // Need ';' because 2 different things you need to run
    //     console.log('Hello')
    // }

    this.drive = (m=this.model) => {
        console.log('Vroom!'); 
        console.log(`Hey, your ${m} is going too fast.`)
    }

// ==

    this.drive = (m) => {
        console.log('Vroom!');
        console.log(`Hey, your ${m} is going too fast.`)
    }

    this.drive = (m,l) => { // more than one argument needs parenthesis
        console.log(`Your ${l} said zoom!`);
        console.log(`Hey, your ${m} is going too fast.`)
    }
}

var carTwo = new Car(2021, 'Chevrolet', 'Tahoe');
// carTwo.drive()
carTwo.drive('Chevrolet', 'Tahoe')