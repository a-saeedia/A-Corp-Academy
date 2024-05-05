// Simple Store App in JavaScript

// Store items as an array of objects
const storeItems = [
  { id: 1, name: 'Apple', price: 0.99 },
  { id: 2, name: 'Bread', price: 2.50 },
  { id: 3, name: 'Milk', price: 1.50 }
];

// Shopping cart array to hold items added by the user
let shoppingCart = [];

// Function to add an item to the cart
function addToCart(itemId) {
  const item = storeItems.find(item => item.id === itemId);
  shoppingCart.push(item);
  console.log(`Added ${item.name} to the cart.`);
}

// Function to calculate the total price of the cart
function calculateTotal() {
  return shoppingCart.reduce((total, item) => total + item.price, 0);
}

// Function to display the cart contents and total price
function displayCart() {
  console.log('Cart Contents:');
  shoppingCart.forEach(item => console.log(`${item.name}: $${item.price}`));
  console.log(`Total: $${calculateTotal().toFixed(2)}`);
}

// Example usage:
addToCart(1); // Adds Apple to the cart
addToCart(3); // Adds Milk to the cart
displayCart(); // Displays cart contents and total price

