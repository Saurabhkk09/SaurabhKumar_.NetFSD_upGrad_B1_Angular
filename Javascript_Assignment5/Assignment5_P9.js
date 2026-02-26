class Product {
  constructor({ name, price, category = "General" }) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
  getDetails = () => {
    return `Product: ${this.name} | Category: ${this.category} | Price: $${this.price}`;
  };

  getMetadata(extraInfo) {
    return {
      ...extraInfo,
      id: Math.floor(Math.random() * 1000),
      timestamp: new Date().toLocaleDateString(),
    };
  }
}
const shirt = new Product({ name: "Vintage Tee", price: 25 });

const laptop = new Product({ 
  name: "MacBook Pro", 
  price: 2400, 
  category: "Electronics" 
});

console.log(shirt.getDetails()); 

console.log(laptop.getDetails()); 

const meta = laptop.getMetadata({ stock: 15, location: "Warehouse A" });
console.log(meta);