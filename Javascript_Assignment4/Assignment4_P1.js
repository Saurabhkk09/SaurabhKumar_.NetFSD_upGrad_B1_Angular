let books = [
  { id: 1, title: "JavaScript Basics", price: 450, stock: 10 },
  { id: 2, title: "React Guide", price: 650, stock: 5 },
  { id: 3, title: "Node.js Mastery", price: 550, stock: 8 },
  { id: 4, title: "CSS Complete", price: 300, stock: 12 }
];

const titles = books.map(book => book.title);
console.log("Book Titles:", titles);

const totalValue = books.reduce((acc, book) => acc + (book.price * book.stock), 0);
console.log(`Total Inventory Value: ₹${totalValue}`);

const expensiveBooks = books.filter(book => book.price > 500);
console.log("Books > ₹500:", expensiveBooks);

const priceHike = books.map(book => ({
  ...book,
  price: Number((book.price * 1.05).toFixed(2))
}));

const sortedBooks = [...books].sort((a, b) => a.price - b.price);

const remainingBooks = books.filter(book => book.id !== 3);

const isOutOfStock = books.some(book => book.stock === 0);
console.log("Any book out of stock?", isOutOfStock);