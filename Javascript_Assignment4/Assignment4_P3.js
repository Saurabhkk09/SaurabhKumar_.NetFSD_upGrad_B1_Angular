let cart = [
  { id: 1, product: "Laptop", price: 60000, qty: 1 },
  { id: 2, product: "Headphones", price: 2000, qty: 2 },
  { id: 3, product: "Mouse", price: 800, qty: 1 }
];

const totalValue = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

const updatedCart = cart.map(item => 
  item.id === 2 ? { ...item, qty: item.qty + 1 } : item
);

const filteredCart = cart.filter(item => item.id !== 3);

const discountedCart = cart.map(item => {
  if (item.price > 10000) {
    return { ...item, price: item.price * 0.9 };
  }
  return item;
});

const sortedCart = [...cart].sort((a, b) => (b.price * b.qty) - (a.price * a.qty));

const hasPremiumItem = cart.some(item => item.price > 50000);

const allInStock = cart.every(item => item.qty > 0);