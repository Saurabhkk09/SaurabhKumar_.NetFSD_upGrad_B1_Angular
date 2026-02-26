class Animal {
  makeSound() {
    console.log("The animal makes a generic sound.");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow~");
  }
}

class Cow extends Animal {
  makeSound() {
    console.log("Mooo!");
  }
}

let animals = [new Dog(), new Cat(), new Cow()];

animals.forEach(a => a.makeSound());