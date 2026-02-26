class Shape {
  calculateArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return 0.5 * this.base * this.height;
  }
}

const shapes = [
  new Circle(5),           // Radius: 5
  new Rectangle(10, 5),    // Width: 10, Height: 5
  new Triangle(10, 8),     // Base: 10, Height: 8
  new Circle(2.5)          // Radius: 2.5
];

console.log("--- Shape Area Results ---");

shapes.forEach((shape, index) => {
  const area = shape.calculateArea().toFixed(2);
  const type = shape.constructor.name; 
  
  console.log(`${index + 1}. [${type}] Area: ${area}`);
});