class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

const sum = MathUtils.add(10, 20);
const difference = MathUtils.subtract(30, 10);
const product = MathUtils.multiply(5, 6);

console.log(`Addition: ${sum}`);         
console.log(`Subtraction: ${difference}`);   
console.log(`Multiplication: ${product}`); 