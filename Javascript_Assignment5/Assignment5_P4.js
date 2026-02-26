class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    start() {
        console.log(`The ${this.brand} is starting its engine...`);
    }
}

class Car extends Vehicle {
    constructor(brand, speed, fuelType) {
        super(brand, speed); 
        this.fuelType = fuelType;
    }

    showDetails() {
        console.log(`--- Car Details ---`);
        console.log(`Brand: ${this.brand}`);
        console.log(`Top Speed: ${this.speed} km/h`);
        console.log(`Fuel Type: ${this.fuelType}`);
    }
}

const myCar = new Car("Toyota", 180, "Hybrid");

myCar.start(); 

myCar.showDetails();